import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { COLORS } from '../lib/constants';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Recupera la pagina corrente

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Funzione per capire se il link è attivo
  const isActive = (path: string) => location.pathname === path;

  // Stile base per i link nel menu mobile
  const mobileLinkStyle = (path: string): React.CSSProperties => ({
    fontSize: '32px',
    fontWeight: '800',
    color: COLORS.dark,
    textDecoration: 'none',
    position: 'relative',
    transition: 'all 0.3s ease',
    opacity: isActive(path) ? 1 : 0.6, // Più opaco se non è attivo
  });

  // Stile per la sottolineatura "figa"
  const underlineStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '-5px',
    left: '0',
    width: '100%',
    height: '4px',
    backgroundColor: COLORS.primary,
    borderRadius: '2px',
    transform: 'scaleX(1)',
    transition: 'transform 0.3s ease',
  };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, width: '100%',
        height: scrolled ? '70px' : '90px',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #e2e8f0',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 5%', transition: 'all 0.3s ease', zIndex: 10000,
      }}>
        <Link to="/" onClick={() => setIsOpen(false)} style={{ fontSize: '24px', fontWeight: '900', color: COLORS.primary, textDecoration: 'none', letterSpacing: '-1px' }}>
          DO.MA<span style={{ color: COLORS.dark }}>.</span>
        </Link>

        {/* Hamburger Icon */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: 'none', border: 'none', cursor: 'pointer', zIndex: 10001,
            color: COLORS.dark, display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '10px' // Area di clic più grande
          }}
        >
          {isOpen ? <X size={35} /> : <Menu size={35} />}
        </button>
      </nav>

      {/* OVERLAY MENU - FULLSCREEN MA PIÙ "LEGGERO" */}
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
        backgroundColor: 'rgba(255, 255, 255, 0.98)', // Bianco quasi opaco
        backdropFilter: 'blur(20px)',
        display: isOpen ? 'flex' : 'none',
        flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        zIndex: 9999,
        transition: 'opacity 0.4s ease',
        opacity: isOpen ? 1 : 0
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', textAlign: 'center' }}>
          {[
            { n: 'HOME', p: '/' }, 
            { n: 'CHI SIAMO', p: '/chi-siamo' }, 
            { n: 'SERVIZI', p: '/servizi' }, 
            { n: 'CONTATTI', p: '/contatti' }
          ].map((l) => (
            <Link 
              key={l.n} 
              to={l.p} 
              onClick={() => setIsOpen(false)} 
              style={mobileLinkStyle(l.p)}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1'; // Hover state
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = isActive(l.p) ? '1' : '0.6'; // Hover out state
              }}
            >
              {l.n}
              {/* Mostra la sottolineatura solo se la pagina è attiva */}
              {isActive(l.p) && <div style={underlineStyle} />}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
