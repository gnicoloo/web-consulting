import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Clock, UserCheck, Briefcase, Shield, GraduationCap, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Faqs } from '../../Faqs';
import { COLORS, IMAGES } from '../../lib/constants';
import { fetchWithSmartCache, getDriveImageId } from '../../utils/DriveUtils';
import { DRIVE_CMS } from '../../config/driveConfig';

export const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [imageList, setImageList] = useState(IMAGES);

  // Stati Numeri
  const [hours, setHours] = useState(0);
  const [resources, setResources] = useState(0);
  const [placed, setPlaced] = useState(0);
  const [targets, setTargets] = useState({ hours: 0, resources: 0, placed: 0 });
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const statsRef = useRef<HTMLDivElement>(null);

  // --- LOGICA NUMERI DA GOOGLE SHEETS ---
  useEffect(() => {
    fetchWithSmartCache(
      DRIVE_CMS.SHEETS.HOME.STATISTICHE,
      'cache_statistiche_home',
      (cells: string[]): { label: string; valore: number } => ({
        label: cells[0],
        valore: parseInt(cells[1]?.replace(/\./g, '') || "0")
      })
    ).then((data: { label: string; valore: number }[]) => {
      const cleanStats = data.filter((s: { label: string }) => s.label && !s.label.includes(":") && s.label !== "Statistiche");
      if (cleanStats.length >= 3) {
        setTargets({
          hours: cleanStats[0].valore,
          resources: cleanStats[1].valore,
          placed: cleanStats[2].valore
        });
        setIsDataLoaded(true);
      }
    });
  }, []);

  // --- LOGICA ANIMAZIONE NUMERI ---
  useEffect(() => {
    if (!hasStarted || !isDataLoaded) return;
    const duration = 2000;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      setHours(Math.floor(targets.hours * progress));
      setResources(Math.floor(targets.resources * progress));
      setPlaced(Math.floor(targets.placed * progress));
      if (frame === totalFrames) {
        setHours(targets.hours); setResources(targets.resources); setPlaced(targets.placed);
        clearInterval(timer);
      }
    }, frameDuration);
    return () => clearInterval(timer);
  }, [hasStarted, isDataLoaded, targets]);

  // --- LOGICA AVVIO ANIMAZIONE NUMERI (IntersectionObserver) ---
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) setHasStarted(true);
      },
      { threshold: 0.1 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  // --- LOGICA CAROSELLO ---
  // Build image list from DRIVE_CMS (IDs) if available
  useEffect(() => {
    try {
      const ids = DRIVE_CMS?.IMAGES?.HOME;
      if (ids && ids.length > 0) {
        const imgs = ids.map((id: string, idx: number) => ({
          url: id.startsWith('http') ? id : getDriveImageId(id),
          title: IMAGES[idx]?.title ?? IMAGES[0].title,
          desc: IMAGES[idx]?.desc ?? IMAGES[0].desc
        }));
        setImageList(imgs);
      }
    } catch (e) {
      // non fatal - manteniamo fallback locale
    }
  }, []);

  // Defensive display index to avoid out-of-bounds when imageList updates
  const displayIndex = imageList.length ? Math.min(currentIndex, imageList.length - 1) : 0;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (imageList.length === 0 ? 0 : (prev === imageList.length - 1 ? 0 : prev + 1)));
    }, 5000);
    return () => clearInterval(timer);
  }, [imageList]);

  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: COLORS.white }}>
      
    {/* 1. HERO SECTION - RESET TOTALE E FORZATURA LARGHEZZA */}
    <section style={{ 
      position: 'relative', 
      width: '100vw', // Forza la larghezza dell'intera finestra
      height: '100vh', 
      left: '50%', // Trucco per centrare un elemento full-width in un contenitore stretto
      right: '50%',
      marginLeft: '-50vw',
      marginRight: '-50vw',
      overflow: 'hidden',
      backgroundColor: '#000',
      zIndex: 1 // Assicura che non vada sotto altri elementi
    }}>
      
      {/* TRACK IMMAGINI */}
      {imageList.map((img, idx) => (
        <div key={idx} style={{
          position: 'absolute',
          inset: 0,
          opacity: displayIndex === idx ? 1 : 0,
          zIndex: displayIndex === idx ? 2 : 1,
          transition: 'opacity 1.2s ease-in-out',
        }}>
          <img 
            src={img.url} 
            alt="" 
            loading="lazy" // Lazy loading per ridurre richieste simultanee
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              target.onerror = null; // evita loop
              target.src = IMAGES[idx]?.url || '/images/image.png';
            }}
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover', 
              objectPosition: 'center', // Centra l'immagine nell'area visibile
              filter: 'brightness(0.4)',
              transform: displayIndex === idx ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 8s ease-out'
            }} 
          />
        </div>
      ))}

      {/* CONTENUTO TESTUALE - ORA REALMENTE CENTRATO */}
      <div style={{ 
        position: 'absolute', 
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        zIndex: 10, 
        color: 'white', 
        textAlign: 'center',
        padding: '0 20px',
        boxSizing: 'border-box'
      }}>
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 8vw, 6rem)', 
          fontWeight: '950', 
          lineHeight: '0.9', 
          letterSpacing: '-3px', 
          textTransform: 'uppercase', 
          marginBottom: '20px',
          textShadow: '0 10px 30px rgba(0,0,0,0.5)'
        }}>
          {/* {IMAGES[currentIndex].title.split(' ')[0]} <br /> */}
          <span style={{ 
            display: 'block', 
            color: '#FFFFFF' // <--- CAMBIA QUESTO COLORE (es. Arancione, Rosso, ecc.)
          }}>
            {IMAGES[currentIndex].title.split(' ')[0]}
          </span>

          {/* RESTO DEL TITOLO */}
          <span style={{ color: COLORS.white, display: 'block' }}>
            {imageList[displayIndex]?.title?.split(' ').slice(1).join(' ') ?? ''}
          </span>
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.4rem)', maxWidth: '700px', opacity: 0.9, marginBottom: '40px' }}>
          {imageList[displayIndex]?.desc ?? ''}
        </p>
        <Link 
          to="/servizi#sezione-servizi" // Indirizzo della pagina + ID della sezione
          style={{ 
            textDecoration: 'none', // Rimuove la sottolineatura del link
            display: 'inline-block' 
          }}
        >
          <button 
            style={{ 
              padding: '18px 50px', 
              backgroundColor: COLORS.primary, 
              color: 'white', 
              border: 'none', 
              borderRadius: '100px', 
              fontSize: '1.1rem', 
              fontWeight: '900', 
              cursor: 'pointer',
              boxShadow: '0 15px 30px rgba(0,0,0,0.3)',
              transition: '0.3s'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            ESPLORA I SERVIZI
          </button>
        </Link>
      </div>

      {/* NAVIGAZIONE - PULITA E RESPONSIVE */}
      <button 
        className="nav-btn prev-btn"
        onClick={() => setCurrentIndex(prev => imageList.length === 0 ? 0 : (prev === 0 ? imageList.length - 1 : prev - 1))}
      >
        <ChevronLeft size={35} />
      </button>

      <button 
        className="nav-btn next-btn"
        onClick={() => setCurrentIndex(prev => imageList.length === 0 ? 0 : (prev === imageList.length - 1 ? 0 : prev + 1))}
      >
        <ChevronRight size={35} />
      </button>
    </section>

      {/* 2. AREA CONTENUTI (MAX-WIDTH 1200px) */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '120px 20px' }}>
        
        {/* Numeri */}
        <section ref={statsRef} style={{ marginBottom: '140px' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '14px', textTransform: 'uppercase', color: COLORS.primary, fontWeight: '900', letterSpacing: '3px', marginBottom: '10px' }}>I nostri traguardi</h2>
            <h3 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '900' }}>L'eccellenza in <span style={{color: COLORS.primary}}>numeri.</span></h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            {[
              { label: "Ore Formazione", val: hours.toLocaleString(), icon: <Clock size={35} /> },
              { label: "Risorse Formate", val: resources, icon: <UserCheck size={35} /> },
              { label: "Risorse Collocate", val: placed, icon: <Briefcase size={35} /> }
            ].map((s, i) => (
              <div key={i} style={{ padding: '60px 30px', backgroundColor: COLORS.white, borderRadius: '40px', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.04)', border: '1px solid #f1f5f9' }}>
                <div style={{ color: COLORS.primary, marginBottom: '25px', display: 'flex', justifyContent: 'center' }}>{s.icon}</div>
                <div style={{ fontSize: '4.5rem', fontWeight: '900', color: COLORS.dark, lineHeight: 1 }}>{s.val}</div>
                <p style={{ fontSize: '1.1rem', color: '#64748b', fontWeight: '700', marginTop: '15px', textTransform: 'uppercase' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Servizi */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px', marginBottom: '140px' }}>
          {[
            { t: "Consulenza Strategica", i: <Shield size={38} />, d: "Analisi profonda e soluzioni su misura per la sicurezza aziendale.", f: ["DVR & Piani Emergenza", "Audit ISO", "Sicurezza 81/08"] },
            { t: "Academy Professionale", i: <GraduationCap size={38} />, d: "Corsi certificati che trasformano il sapere in valore.", f: ["E-learning", "Corsi in Aula", "Workshop Tecnici"] },
            { t: "Medicina & Supporto", i: <Activity size={38} />, d: "Monitoraggio costante e assistenza legale integrata.", f: ["Medicina del Lavoro", "Tutela Legale", "Check-up Normativi"] }
          ].map((ser, i) => (
            <div key={i} style={{ backgroundColor: COLORS.light, padding: '55px', borderRadius: '50px', border: '1px solid #e2e8f0' }}>
              <div style={{ color: COLORS.primary, marginBottom: '30px' }}>{ser.i}</div>
              <h4 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '20px' }}>{ser.t}</h4>
              <p style={{ color: '#64748b', lineHeight: '1.7', marginBottom: '35px', fontSize: '1.1rem' }}>{ser.d}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {ser.f.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '700', color: COLORS.dark }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: COLORS.primary }} /> {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <section>
          <h3 style={{ fontSize: '2.8rem', fontWeight: '900', textAlign: 'center', marginBottom: '60px' }}>Domande <span style={{color: COLORS.primary}}>Frequenti</span></h3>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <Faqs />
          </div>
        </section>
      </main>

      <style>{`
        /* 1. ANIMAZIONI E RESET BASE */
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
          40% { transform: translateY(-15px) translateX(-50%); }
          60% { transform: translateY(-7px) translateX(-50%); }
        }
        body { margin: 0; padding: 0; overflow-x: hidden; width: 100%; }

        /* 2. STILE FRECCE CAROSELLO (PC) */
        .nav-btn {
          position: absolute; 
          top: 50%; 
          transform: translateY(-50%);
          z-index: 100; 
          background: rgba(255,255,255,0.1); 
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 50%; 
          width: 60px; 
          height: 60px; 
          color: white; 
          cursor: pointer;
          display: flex; 
          align-items: center; 
          justify-content: center; 
          backdrop-filter: blur(10px);
          transition: 0.3s;
        }
        .prev-btn { left: 40px; }
        .next-btn { right: 40px; }

        /* 3. FIX RESPONSIVE (MOBILE) */
        @media (max-width: 768px) {
          .nav-btn {
            top: auto; 
            bottom: 30px; 
            transform: none;
            width: 50px; 
            height: 50px;
          }
          .prev-btn { left: 15%; } /* Leggermente più esterne per non coprire il centro */
          .next-btn { right: 15%; }
          
          h1 { 
            font-size: 2.2rem !important; /* Titolo più piccolo per non appiccicarsi */
            padding: 0 15px; 
            letter-spacing: -1px !important;
          }
          
          p { 
            padding: 0 25px; 
            font-size: 0.95rem !important; 
            margin-bottom: 30px !important;
          }

          /* Sistema i box dei numeri appiccicati */
          section main {
            padding: 60px 15px !important;
          }
          
          div[style*="gridTemplateColumns"] {
            gap: 20px !important; /* Riduce lo spazio tra i box su mobile */
          }
        }
      `}</style>
    </div>
  );
};


