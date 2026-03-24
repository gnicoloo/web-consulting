import React from 'react';
import { MessageCircle, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { COLORS } from '../lib/constants';

export const Contatti = () => {
  const subjectEmail = encodeURIComponent("Richiesta Informazioni - DO.MA. Consulting");
  const bodyEmail = encodeURIComponent("Buongiorno,\n\nvorrei ricevere maggiori informazioni in merito ai vostri servizi di consulenza e formazione.\n\nCordiali saluti.");
  const whatsappMsg = encodeURIComponent("Buongiorno DO.MA. Consulting, vi contatto dal sito web per avere informazioni sui vostri servizi di Risk Engineering.");

  const cardStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    padding: '35px',
    backgroundColor: COLORS.white,
    borderRadius: '30px',
    border: '1px solid #e2e8f0',
    textDecoration: 'none',
    color: COLORS.dark,
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '12px',
    fontWeight: '800',
    color: COLORS.primary,
    letterSpacing: '1px',
    textTransform: 'uppercase'
  };

  return (
    <div style={{ padding: '160px 20px 80px', maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* GRIGLIA SUPERIORE: LOGO/TESTI + CONTATTI RAPIDI */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: '60px', 
        alignItems: 'center', // Allinea verticalmente logo e bottoni
        marginBottom: '80px' 
      }}>
        
        {/* COLONNA SINISTRA: LOGO + TESTI */}
        <div>
          {/* <div style={{ marginBottom: '40px' }}>
             <img 
               src="/images/logo.png" 
               alt="Logo DO.MA." 
               style={{ height: '120px', width: 'auto', display: 'block' }} 
             />
          </div> */}

          <h2 style={{ fontSize: '24px', textTransform: 'uppercase', color: COLORS.primary, fontWeight: '900', letterSpacing: '2px', marginBottom: '15px' }}>
            Contatti
          </h2>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: '900', lineHeight: '1.1', marginBottom: '30px' }}>
            Al vostro fianco per ogni <span style={{color: COLORS.primary}}>esigenza.</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#64748b', lineHeight: '1.8', margin: 0 }}>
            Per scoprire come possiamo supportare la tua azienda a crescere e svilupparsi.
            <br /> {/* <-- Questo è il modo corretto di andare a capo */}
            Contattaci per una consulenza gratuita o per qualsiasi domanda sui nostri servizi.
          </p>
        </div>

        {/* COLONNA DESTRA: GRID DI CONTATTO */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
          <a 
            href={`https://wa.me/393295862121?text=${whatsappMsg}`} 
            target="_blank" 
            rel="noreferrer"
            style={{ ...cardStyle, borderLeft: `6px solid ${COLORS.whatsapp}` }}
          >
            <span style={{ ...labelStyle, color: COLORS.whatsapp }}>Chat Prioritaria</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <MessageCircle size={32} color={COLORS.whatsapp} />
              <span style={{ fontSize: '1.4rem', fontWeight: '800' }}>WhatsApp Business</span>
            </div>
          </a>

          <a 
            href={`mailto:doma@doma-consulenzaeformazione.com?subject=${subjectEmail}&body=${bodyEmail}`} 
            style={{ ...cardStyle, borderLeft: `6px solid ${COLORS.primary}` }}
          >
            <span style={labelStyle}>Canale Istituzionale</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <Mail size={32} color={COLORS.primary} />
              <span style={{ fontSize: '14px', fontWeight: '800' }}>doma@doma-consulenzaeformazione.com</span>
            </div>
          </a>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <a href="tel:+393408014419" style={{ ...cardStyle, padding: '25px', alignItems: 'center', textAlign: 'center' }}>
              <Phone size={24} color={COLORS.dark} style={{ marginBottom: '5px' }} />
              <span style={{ fontWeight: '800', fontSize: '1.1rem' }}>Matteo Quidacciolu</span>
              <span style={{ fontSize: '0.9rem', color: '#64748b' }}>+39 3408014419</span>
            </a>
            <a href="tel:+393295862121" style={{ ...cardStyle, padding: '25px', alignItems: 'center', textAlign: 'center' }}>
              <Phone size={24} color={COLORS.dark} style={{ marginBottom: '5px' }} />
              <span style={{ fontWeight: '800', fontSize: '1.1rem' }}>Domenico Nuzzi</span>
              <span style={{ fontSize: '0.9rem', color: '#64748b' }}>+39 3295862121</span>
            </a>
          </div>
        </div>
      </div>
      {/* SEZIONE MAPPA "FIGA" */}
      <section style={{ marginTop: '80px', position: 'relative' }}>
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '40px' 
        }}>
          <h2 style={{ fontSize: '14px', textTransform: 'uppercase', color: COLORS.primary, fontWeight: '900', letterSpacing: '2px' }}>Vieni a trovarci</h2>
          <h3 style={{ fontSize: '2.5rem', fontWeight: '900', marginTop: '10px' }}>La nostra <span style={{color: COLORS.primary}}>Sede Operativa</span></h3>
        </div>

        <div style={{ 
          position: 'relative',
          width: '100%',
          height: '450px',
          borderRadius: '50px', // Stesso raggio delle tue card
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
          border: '1px solid #e2e8f0'
        }}>
          {/* MAPPA IFRAME CON FILTRO DESIGN */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.782782485559!2d14.2495!3d40.852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDUxJzA3LjIiTiAxNMKwMTQnNTguMiJF!5e0!3m2!1sit!2sit!4v1631234567890!5m2!1sit!2sit" 
            width="100%" 
            height="100%" 
            title="Google Maps"
            style={{ 
              border: 0, 
              filter: 'grayscale(0.5) contrast(1.1) brightness(0.9)', // Effetto desaturato professionale
            }} 
            loading="lazy"
          ></iframe>

          {/* WIDGET OVERLAY (Informazioni Sulla Mappa) */}
          <div style={{ 
            position: 'absolute', 
            bottom: '30px', 
            left: '30px', 
            backgroundColor: 'rgba(255, 255, 255, 0.85)', 
            backdropFilter: 'blur(10px)', // Effetto vetro sfocato
            padding: '25px', 
            borderRadius: '30px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            maxWidth: '300px',
            border: '1px solid rgba(255,255,255,0.5)',
            zIndex: 2
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <div style={{ backgroundColor: COLORS.primary, padding: '8px', borderRadius: '10px', color: 'white' }}>
                <MapPin size={20} />
              </div>
              <span style={{ fontWeight: '800', fontSize: '1.1rem' }}>DO.MA. HQ</span>
            </div>
            <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: '1.5', margin: 0 }}>
              Via delle Industrie 45, 80100 Napoli (NA)
            </p>
            <a 
              href="https://goo.gl/maps/tuolink" 
              target="_blank" 
              rel="noreferrer"
              style={{ 
                display: 'inline-block', 
                marginTop: '15px', 
                color: COLORS.primary, 
                fontWeight: '700', 
                fontSize: '0.9rem',
                textDecoration: 'none',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              Apri in Google Maps <ArrowRight size={16} />
            </a>
          </div>
        </div>
    </section>
      {/* SEZIONE SEDE CENTRATA IN BASSO */}
      <div style={{ 
        textAlign: 'center', 
        padding: '50px 20px', 
        backgroundColor: COLORS.light, 
        borderRadius: '40px', 
        border: '1px solid #e2e8f0',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <div style={{ color: COLORS.primary, marginBottom: '15px' }}>
          <MapPin size={32} style={{ margin: '0 auto' }} />
        </div>
        <h4 style={{ fontWeight: '900', fontSize: '20px', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Sede Operativa
        </h4>
        <p style={{ color: COLORS.dark, fontSize: '1.2rem', lineHeight: '1.6', fontWeight: '500', margin: 0 }}>
          Via delle Belle Fighe 45, 50125 (FI)
        </p>
        <div style={{ marginTop: '20px', fontSize: '0.9rem', opacity: 0.6, fontWeight: '600' }}>
          P.IVA: *********** | PEC: doma@doma-consulenzaeformazione.com
        </div>
      </div>

    </div>
  );
};
