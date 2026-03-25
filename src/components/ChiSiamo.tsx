import { Target, Users, Heart, ShieldCheck, Award } from 'lucide-react';
import { COLORS } from '../lib/constants';

export const ChiSiamo = () => {
  return (
    <div style={{ padding: '160px 20px 80px', maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* 1. SEZIONE INTRODUTTIVA */}
      <div style={{ textAlign: 'center', marginBottom: '100px', maxWidth: '800px', margin: '0 auto 100px auto' }}>
        <h2 style={{ fontSize: '14px', textTransform: 'uppercase', color: COLORS.primary, fontWeight: '900', letterSpacing: '2px', marginBottom: '15px' }}>
          La Nostra Identità
        </h2>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: '900', lineHeight: '1.1', marginBottom: '30px' }}>
          Affidabilità.<br /><span style={{ color: COLORS.primary }}>Innovazione. Valore.</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#64748b', lineHeight: '1.8' }}>
          DO.MA. nasce dalla sinergia tra esperti del settore Sicurezza, Ingegneria e Formazione. Il nostro obiettivo è quello di fornire un ecosistema di servizi integrati, pensati per accompagnare le aziende verso l'eccellenza, riducendo i rischi e massimizzando le performance operative.
        </p>
      </div>

      {/* 2. VISION & MISSION */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', marginBottom: '120px' }}>
        
        {/* Card Vision */}
        <div style={{ backgroundColor: COLORS.light, padding: '50px', borderRadius: '40px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
          <div style={{ backgroundColor: "white", padding: '15px', borderRadius: '20px', display: 'inline-flex', width: 'fit-content', marginBottom: '30px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
            <Target size={35} color={COLORS.primary} />
          </div>
          <h3 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '20px' }}>La nostra <span style={{ color: COLORS.primary }}>Vision</span></h3>
          <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
            Diventare il punto di riferimento in Italia per la Consulenza Strategica e l'Ingegneria del Rischio. Vogliamo creare un futuro in cui le aziende prosperano grazie a una cultura della sicurezza solida e una formazione continua di altissimo livello.
          </p>
        </div>

        {/* Card Mission */}
        <div style={{ backgroundColor: COLORS.dark, color: 'white', padding: '50px', borderRadius: '40px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '20px', display: 'inline-flex', width: 'fit-content', marginBottom: '30px', backdropFilter: 'blur(10px)' }}>
            <Users size={35} color="white" />
          </div>
          <h3 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '20px' }}>La nostra <span style={{ color: '#94a3b8' }}>Mission</span></h3>
          <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: '1.7', margin: 0 }}>
            Trasformare la conformità normativa da un "obbligo" a un reale <b>Vantaggio Competitivo</b>. Accompagniamo i nostri clienti con soluzioni su misura, pragmatismo e una visione olistica del rischio aziendale.
          </p>
        </div>
      </div>

      {/* 3. PARAGRAFO STRUTTURATO: PERCHÉ SCEGLIERCI */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '60px',
        marginBottom: '120px'
      }}>
        {/* Intro Perché Sceglierci */}
        <div style={{ borderLeft: `8px solid ${COLORS.primary}`, paddingLeft: '30px', maxWidth: '900px' }}>
          <h3 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '20px' }}>Perché le aziende ci scelgono</h3>
          <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: '1.8', margin: 0 }}>
            In un mercato complesso e in continua evoluzione, DO.MA. si distingue per il suo approccio <i>Tailor-Made</i>. Non offriamo pacchetti standardizzati, ma studiamo le specificità di ogni realtà aziendale per costruire soluzioni che garantiscano <b>Sicurezza Reale</b>, <b>Efficienza Operativa</b> e <b>Tutela Legale</b>.
          </p>
        </div>

        {/* Griglia Valori e Metodologia */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
          {[
            { 
              icon: <ShieldCheck size={40} />, 
              title: "Approccio Preventivo", 
              text: "Non aspettiamo l'emergenza. Analizziamo i rischi, li quantifichiamo e progettiamo sistemi per neutralizzarli alla radice."
            },
            { 
              icon: <Award size={40} />, 
              title: "Eccellenza Professionale", 
              text: "Il nostro team è composto da Ingegneri, Medici del Lavoro e Consulenti Senior con decenni di esperienza pratica sul campo."
            },
            { 
              icon: <Heart size={40} />, 
              title: "Partnership Umana", 
              text: "Crediamo fermamente nel valore dei rapporti interpersonali. Il tuo successo e la tua tranquillità sono la nostra priorità."
            }
          ].map((val, idx) => (
            <div key={idx} style={{ 
              padding: '30px', 
              border: '1px solid #e2e8f0', 
              borderRadius: '12px',
              backgroundColor: COLORS.white,
              boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
            }}>
              <div style={{ color: COLORS.primary, marginBottom: '20px' }}>{val.icon}</div>
              <h4 style={{ fontSize: '1.4rem', fontWeight: '900', marginBottom: '15px' }}>{val.title}</h4>
              <p style={{ color: '#64748b', lineHeight: '1.6', margin: 0 }}>{val.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SEZIONE ESPERIENZA - STATS E VISION */}
        <div style={{ 
        padding: '100px 40px', 
        borderRadius: '12px', 
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
