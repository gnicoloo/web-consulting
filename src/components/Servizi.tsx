import React from 'react';
import { GraduationCap, Zap, Target, Check, Quote } from 'lucide-react';
import { COLORS } from '../lib/constants';

export const Servizi = () => 
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
                  
                  <div style={{ fontWeight: '800', color: COLORS.light, marginBottom: '10px' }}>
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
                  
                  <div style={{ fontWeight: '800', color: COLORS.light, marginBottom: '10px' }}>
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
