import React, { useEffect, useState } from 'react';
import type { FAQItem } from './types/faq';
import { DRIVE_CMS } from './config/driveConfig';
import { fetchDriveCsv } from './utils/DriveUtils';
import { ChevronDown } from 'lucide-react';

export const Faqs: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Fallback di esempio visibile immediatamente per debug/preview
  const defaultFaqs: FAQItem[] = [
    { q: 'Come funziona la formazione?', a: 'Offriamo corsi in aula e online, con percorsi personalizzati.' },
    { q: 'Quali servizi offrite?', a: 'Consulenza, audit, piani di prevenzione e supporto medico.' },
  ];

  useEffect(() => {
    // Usiamo la funzione utils passando l'URL e la logica di mappatura
    fetchDriveCsv<FAQItem>(
      DRIVE_CMS.SHEETS.HOME.FAQ,
      (cells) => ({
        q: cells[0], // Colonna A -> domanda
        a: cells[1], // Colonna B -> risposta
        domanda: cells[0],
        risposta: cells[1]
      })
    ).then(data => {
      if (data && data.length > 0) setFaqs(data);
      // altrimenti manteniamo il fallback
    });
  }, []);

  const items = faqs.length > 0 ? faqs : defaultFaqs;

  return (
    <div className="space-y-6 p-8">
      {items.map((f, i) => {
        const isOpen = activeIndex === i;
        return (
          <div key={i} className="bg-slate-50 p-0 rounded-lg border-l-4 border-[#1e3a8a] overflow-hidden">
            <div
              onClick={() => setActiveIndex(isOpen ? null : i)}
              style={{ padding: '20px 18px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <h4 style={{ fontWeight: 800, color: '#1e3a8a', margin: 0 }}>{f.q ?? f.domanda ?? f.question}</h4>
              <ChevronDown size={20} style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s ease', color: isOpen ? '#1e3a8a' : '#94a3b8' }} />
            </div>

            <div style={{ maxHeight: isOpen ? '400px' : '0', overflow: 'hidden', transition: 'all 0.35s ease', padding: isOpen ? '12px 18px 20px' : '0 18px' }}>
              <div style={{ height: '1px', backgroundColor: '#f1f5f9', marginBottom: '12px' }} />
              <p style={{ margin: 0, color: '#475569', lineHeight: 1.6 }}>{f.a ?? f.risposta ?? f.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};