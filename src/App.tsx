import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import { 
  Heart,  Award, Shield, GraduationCap, Activity, 
  ChevronLeft, ChevronRight, Menu, X, ArrowRight, Phone, Mail,
  MessageCircle, Target, Users, Zap, Quote, Check, Clock, UserCheck,
   Briefcase, MapPin, ShieldCheck 
} from 'lucide-react';
import { Faqs } from './Faqs';
import { getDriveImageId } from './utils/DriveUtils';
import { DRIVE_CMS } from './config/driveConfig';


// --- 1. CONFIGURAZIONE COLORI E DATI ---
const COLORS = {
  primary: '#0f172a',
  dark: '#0f172a',
  light: '#f8fafc',
  white: '#ffffff',
  whatsapp: '#25D366'
};

const IMAGES = [
  { 
    url: "/images/image1.png", // Il percorso parte da 'public'
    title: "Sicurezza sul Lavoro",
    desc: "Valutazione rischi e ingegneria della prevenzione."
  },
  { 
    url: "/images/image2.png", 
    title: "Ingegneria del Rischio",
    desc: "Analisi tecnica avanzata per la continuità operativa."
  },
  { 
    url: "/images/image.png", 
    title: "Formazione Tecnica",
    desc: "Corsi certificati e sviluppo competenze 4.0."
  }
];



const Navbar = () => {

// --- 2. COMPONENTE NAVBAR (Responsive) ---
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

        <button 
          onClick={() => setIsOpen(!isOpen)}
          style={{
            backgroundColor: isOpen ? COLORS.dark : COLORS.primary,
            color: 'white', border: 'none', borderRadius: '12px',
            width: '45px', height: '45px', display: 'flex',
            alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
            zIndex: 10001 // Sopra il menu mobile
          }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div style={{
          position: 'fixed', inset: 0, backgroundColor: COLORS.white,
          zIndex: 9999, display: 'flex', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center', gap: '40px'
        }}>
          {[
            { name: "Home", path: "/" },
            { name: "Servizi", path: "/servizi" },
            { name: "Contatti", path: "/contatti" },
            { name: "Chi Siamo", path: "/chi-siamo" }
          ].map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              onClick={() => setIsOpen(false)} 
              style={mobileLinkStyle(link.path)}
            >
              {link.name}
              {/* Mostra la sottolineatura solo se il link è attivo */}
              {isActive(link.path) && <div style={underlineStyle} />}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

// --- 3. COMPONENTE CHI SIAMO ---
const ChiSiamo = () => {
  return (
    <div style={{ padding: '160px 20px 100px', maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* HEADER - PIÙ IMPATTANTE */}
      <div style={{ marginBottom: '100px', textAlign: 'left' }}>
        <h2 style={{ fontSize: '24px', textTransform: 'uppercase', color: COLORS.primary, fontWeight: '900', letterSpacing: '3px', marginBottom: '20px' }}>
          La Nostra Identità
        </h2>
        <h1 style={{ fontSize: 'clamp(2.8rem, 7vw, 4.5rem)', fontWeight: '900', lineHeight: '1', marginBottom: '35px', letterSpacing: '-2px' }}>
          Oltre la consulenza,<br /> 
          un <span style={{ color: COLORS.primary }}>impegno umano.</span>
        </h1>
        <p style={{ fontSize: '1.3rem', color: '#64748b', maxWidth: '750px', lineHeight: '1.6' }}>
          DO.MA. nasce dall'unione di due visioni complementari: l'efficienza millimetrica e il valore inestimabile del capitale umano.
        </p>
      </div>

      {/* SEZIONE FONDATORI - LAYOUT ALTERNATO O A GRID */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '50px', marginBottom: '100px' }}>
        
        {/* DOMENICO - IL CUORE (Focus: Benessere e Crescita) */}
        <div style={{ position: 'relative', padding: '50px', borderRadius: '40px', backgroundColor: COLORS.light, border: '1px solid #e2e8f0', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.05 }}>
             <Heart size={250} color={COLORS.primary} />
          </div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ backgroundColor: COLORS.primary, width: '50px', height: '50px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px', color: 'white' }}>
              <Users size={28} />
            </div>
            <h3 style={{ fontSize: '32px', fontWeight: '900', marginBottom: '15px' }}>Domenico <span style={{ color: COLORS.primary }}>Nuzzi</span></h3>
            <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: '1.8' }}>
              Motore dell'area <b>Umana e Formativa</b>. Converte la conformità in benessere organizzativo, partendo da un principio cardine: solo un'azienda felice è davvero sicura. Progetta percorsi dove la norma diventa <b>motivazione</b>.
            </p>
            <div style={{ borderLeft: `4px solid ${COLORS.primary}`, paddingLeft: '20px', fontStyle: 'italic', fontSize: '1.1rem' }}>
              "Trasformiamo il dovere della norma nel potere della crescita."
            </div>
          </div>
        </div>

        {/* MATTEO - IL METODO (Focus: Rigore e Strategia) */}
        <div style={{ position: 'relative', padding: '50px', borderRadius: '40px', backgroundColor: COLORS.dark, color: 'white', overflow: 'hidden' }}>
           <div style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.1 }}>
             <Target size={250} color="white" />
          </div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ backgroundColor: COLORS.primary, width: '50px', height: '50px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
              <ShieldCheck size={28} />
            </div>
            <h3 style={{ fontSize: '32px', fontWeight: '900', marginBottom: '15px' }}>Matteo <span style={{ color: COLORS.white }}>Quidacciolu</span></h3>
            <p style={{ fontSize: '1.2rem', opacity: 0.9, lineHeight: '1.8', marginBottom: '30px' }}>
              L'architetto del <b>Metodo e del Rischio</b>. Con un approccio analitico e la celebre <b>Regola delle 5P</b>, garantisce che ogni processo sia blindato. La sua filosofia è semplice: l'eccellenza non è un atto, ma un'abitudine figlia della pianificazione.
            </p>
            <div style={{ borderLeft: `4px solid ${COLORS.white}`, paddingLeft: '20px', fontStyle: 'italic', fontSize: '1.1rem' }}>
              "Pianificare Prima Previene Pessime Prestazioni"
            </div>
          </div>
        </div>
      </div>

      {/* SEZIONE ESPERIENZA - STATS E VISION */}
        <div style={{ 
        padding: '100px 40px', 
        borderRadius: '60px', 
        // Gradiente dal blu scuro a un blu più "elettrico" (quello di DO.MA.)
        background: `linear-gradient(135deg, ${COLORS.dark} 0%, #1e293b 100%)`, 
        textAlign: 'center',
        boxShadow: '0 30px 60px rgba(0,0,0,0.12)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorazione astratta sullo sfondo (opzionale per dare movimento) */}
        <div style={{ 
          position: 'absolute', top: '-10%', right: '-10%', 
          width: '300px', height: '300px', borderRadius: '50%', 
          background: COLORS.primary, filter: 'blur(100px)', opacity: 0.15 
        }}></div>

        <Award size={60} color={COLORS.primary} style={{ marginBottom: '25px', position: 'relative' }} />
        
        <h2 style={{ 
          fontSize: '3rem', 
          fontWeight: '900', 
          marginBottom: '20px', 
          letterSpacing: '-1px',
          color: 'white' // Testo bianco sullo sfondo scuro
        }}>
          Vent'anni di Soluzioni
        </h2>
        
        <p style={{ 
          fontSize: '1.4rem', 
          color: '#cbd5e1', // Grigio chiaro per leggibilità
          maxWidth: '800px', 
          margin: '0 auto', 
          lineHeight: '1.6',
          position: 'relative'
        }}>
          La nostra non è solo esperienza, è un <b>percorso vincente</b> costruito accanto a centinaia di realtà che hanno scelto la tranquillità come strategia di business.
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '50px', flexWrap: 'wrap', position: 'relative' }}>
          <div style={{ fontWeight: '800', color: 'white', fontSize: '1.1rem', backgroundColor: 'rgba(255,255,255,0.1)', padding: '10px 25px', borderRadius: '50px' }}>🛡️ Sicurezza</div>
          <div style={{ fontWeight: '800', color: 'white', fontSize: '1.1rem', backgroundColor: 'rgba(255,255,255,0.1)', padding: '10px 25px', borderRadius: '50px' }}>📈 Risultato</div>
          <div style={{ fontWeight: '800', color: 'white', fontSize: '1.1rem', backgroundColor: 'rgba(255,255,255,0.1)', padding: '10px 25px', borderRadius: '50px' }}>🤝 Etica</div>
        </div>
      </div>

    </div>
  );
};




// --- 4. COMPONENTE SERVIZI ---
const Servizi = () => 
{
  const cardStyle: React.CSSProperties = {
    backgroundColor: COLORS.light, padding: '35px', borderRadius: '32px', border: '1px solid #e2e8f0',
    display: 'flex', flexDirection: 'column', gap: '15px'
  };

  return (
    <div style={{ padding: '160px 20px 80px', maxWidth: '1100px', margin: '0 auto' }}>
      <header style={{ textAlign: 'left', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '14px', textTransform: 'uppercase', color: COLORS.primary, fontWeight: '900', letterSpacing: '2px' }}>Servizi Offerti</h2>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: '900', lineHeight: '1.1', marginTop: '10px' }}>
          Consulenza e Formazione <br /><span style={{ color: COLORS.primary }}>Personalizzata.</span>
        </h1>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '80px' }}>
        {[
          { t: "Formazione Professionale", d: "Competenze trasversali e crescita del personale.", i: <GraduationCap color={COLORS.primary}/> },
          { t: "Motivazione & Performance", d: "Miglioramento delle prestazioni e aumento competitività.", i: <Zap color={COLORS.primary}/> },
          { t: "Efficienza Operativa", d: "Riduzione dei costi e ottimizzazione dei processi aziendali.", i: <Target color={COLORS.primary}/> }
        ].map((s, idx) => (
          <div key={idx} style={cardStyle}>
            <div style={{ backgroundColor: 'white', width: '60px', height: '60px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>{s.i}</div>
            <h3 style={{ fontSize: '22px', fontWeight: '800' }}>{s.t}</h3>
            <p style={{ color: '#64748b', lineHeight: '1.6' }}>{s.d}</p>
          </div>
        ))}
      </div>

      <div style={{ backgroundColor: COLORS.dark, borderRadius: '40px', padding: '60px 40px', color: 'white', marginBottom: '80px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '30px' , color: 'white'}}>Problem Solving e Supporto</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          {["Analisi approfondita processi", "Costruzione soluzioni su misura", "Monitoraggio risultati", "Servizio di tutoring"].map((text, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><Check size={20} color={COLORS.primary} /> {text}</div>
          ))}
        </div>
      </div>

      <div style={{ 
                  textAlign: 'center', 
                  padding: '60px 40px', 
                  border: '2px dashed #e2e8f0', 
                  borderRadius: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center', // Centra il testo
                  position: 'relative'
                }}>
                  {/* Prima Quote - Allineata a sinistra */}
                  <Quote 
                    size={40} 
                    color={COLORS.primary} 
                    style={{ 
                      alignSelf: 'flex-start', // La spinge a sinistra
                      marginBottom: '-10px', 
                      opacity: 0.3 
                    }} 
                  />

                  {/* Testo Centrale */}
                  <p style={{ 
                    fontSize: '14px',
                    fontWeight: '600',
                    fontStyle: 'italic',
                    marginBottom: '20px',
                    lineHeight: '1.4',
                    maxWidth: '800px'
                  }}>
                    "Ho frequentato un corso per responsabili di punto vendita della Grande Distribuzione, non nego le mie perplessità iniziali, sia per il numero elevato di ore di formazione che per l'argomento. Il corso invece si è rivelato una piacevole scoperta. Ben strutturato abbraccia in modo trasversale tutto il settore della GDO: dalla gestione del punto vendita al controllo qualità, dalla gestione del personale al Marketing. I docenti, in particolare i due principali, Domenico e Matteo, si sono rilevati non solo competenti ma con un grande bagaglio di esperienza personale che non hanno esitato a condividere, esponendo fatti concreti e realistici. Le lezioni non sono mai state noiose o passive, sono stata continuamente spronata al ragionamento e al problem solving. Che dire, quello che pensavo potesse essere la solita formazione monotona e noiosa si è rivelato uno stimolante appuntamento quotidiano. "
                  </p>
                  
                  <div style={{ fontWeight: '800', color: COLORS.primary, marginBottom: '10px' }}>
                    — Simona 
                    <span style={{ color: '#64748b', fontWeight: '500', marginLeft: '5px' }}>
                      (Allieva corso di Responsabile di Magazzino nella Grande Distribuzione)
                    </span>
                  </div>

                  {/* Seconda Quote - Allineata a destra */}
                  <Quote 
                    size={40} 
                    color={COLORS.primary} 
                    style={{ 
                      alignSelf: 'flex-end', // La spinge a destra
                      marginTop: '-10px',
                      opacity: 0.3, 
                      transform: 'rotate(180deg)' 
                    }} 
                  />
                </div>
                <div style={{ 
                  textAlign: 'center', 
                  padding: '60px 40px', 
                  border: '2px dashed #e2e8f0', 
                  borderRadius: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center', // Centra il testo
                  position: 'relative'
                }}>
                  {/* Prima Quote - Allineata a sinistra */}
                  <Quote 
                    size={40} 
                    color={COLORS.primary} 
                    style={{ 
                      alignSelf: 'flex-start', // La spinge a sinistra
                      marginBottom: '-10px', 
                      opacity: 0.3 
                    }} 
                  />

                  {/* Testo Centrale */}
                  <p style={{ 
                    fontSize: '18px', 
                    fontWeight: '600', 
                    fontStyle: 'italic', 
                    marginBottom: '20px',
                    lineHeight: '1.4',
                    maxWidth: '800px'
                  }}>
                    "Ho frequentato un corso di 8 mesi per responsabile di magazzino nella grande distribuzione, Domenico e Matteo con capacità di relazione e umanità sono riusciti a farmi conseguire un attestato molto utile in un mondo che non si ferma mai di evolversi, grazie a loro sono riuscita a colmare molte lacune gestionali e sono riusciti a fare emergere competenze che pensavo di non avere."
                  </p>
                  
                  <div style={{ fontWeight: '800', color: COLORS.primary, marginBottom: '10px' }}>
                    — Emilia 
                    <span style={{ color: '#64748b', fontWeight: '500', marginLeft: '5px' }}>
                      (Allieva corso di Responsabile di Magazzino nella Grande Distribuzione)
                    </span>
                  </div>

                  {/* Seconda Quote - Allineata a destra */}
                  <Quote 
                    size={40} 
                    color={COLORS.primary} 
                    style={{ 
                      alignSelf: 'flex-end', // La spinge a destra
                      marginTop: '-10px',
                      opacity: 0.3, 
                      transform: 'rotate(180deg)' 
                    }} 
                  />
                </div>
    </div>
  );
};



// --- 5. COMPONENTE CONTATTI ---
const Contatti = () => {
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
            style={{ 
              border: 0, 
              filter: 'grayscale(0.5) contrast(1.1) brightness(0.9)', // Effetto desaturato professionale
            }} 
            allowFullScreen={false} 
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

// --- 6. COMPONENTE HOME ---



const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [hasStarted, setHasStarted] = useState(false);
  // Lista immagini: usa fallback IMAGES poi sovrascrive con DRIVE_CMS se presente
  const [imageList, setImageList] = useState(IMAGES);
  
  // Stati Numeri
  const [hours, setHours] = useState(0);
  const [resources, setResources] = useState(0);
  const [placed, setPlaced] = useState(0);
  
  const statsRef = useRef<HTMLDivElement>(null);
  const targets = { hours: 1482, resources: 121, placed: 76 };

  // --- LOGICA ANIMAZIONE NUMERI ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) setHasStarted(true);
      }, { threshold: 0.1 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
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

      {/* NAVIGAZIONE - ORA BLOCCATA AI BORDI DELLA FINESTRA */}
      <button 
        onClick={() => setCurrentIndex(prev => imageList.length === 0 ? 0 : (prev === 0 ? imageList.length - 1 : prev - 1))}
        style={{ 
          position: 'absolute', left: '40px', top: '50%', transform: 'translateY(-50%)',
          zIndex: 100, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '50%', width: '60px', height: '60px', color: 'white', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(10px)'
        }}
      >
        <ChevronLeft size={35} />
      </button>

      <button 
        onClick={() => setCurrentIndex(prev => imageList.length === 0 ? 0 : (prev === imageList.length - 1 ? 0 : prev + 1))}
        style={{ 
          position: 'absolute', right: '40px', top: '50%', transform: 'translateY(-50%)',
          zIndex: 100, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '50%', width: '60px', height: '60px', color: 'white', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(10px)'
        }}
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
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
          40% { transform: translateY(-15px) translateX(-50%); }
          60% { transform: translateY(-7px) translateX(-50%); }
        }
        body { margin: 0; padding: 0; overflow-x: hidden; }
      `}</style>
    </div>
  );
};


// --- 7. MAIN APP ---
export default function App() {
  return (
    <Router>
      <div style={{ fontFamily: 'Inter, system-ui, sans-serif', color: COLORS.dark, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servizi" element={<Servizi />} />
            <Route path="/contatti" element={<Contatti />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
          </Routes>
        </div>
        <footer style={{ padding: '40px 20px', textAlign: 'center', borderTop: '1px solid #eee', color: '#94a3b8', fontSize: '14px' }}>
          © 2025 - 2026 Do.Ma. Consulenza & Formazione | Tutti i diritti riservati
        </footer>
      </div>
    </Router>
  );
}