import React, { useEffect, useState } from 'react';
import type { FAQItem } from './types/faq';
import { DRIVE_CMS } from './config/driveConfig';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchWithSmartCache } from './utils/DriveUtils';

export const Faqs: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Fallback di esempio visibile immediatamente per debug/preview
  const defaultFaqs: FAQItem[] = [
    { q: 'Come funziona la formazione?', a: 'Offriamo corsi in aula e online, con percorsi personalizzati.' },
    { q: 'Quali servizi offrite?', a: 'Consulenza, audit, piani di prevenzione e supporto medico.' },
  ];

  useEffect(() => {
    fetchWithSmartCache<FAQItem>(
      DRIVE_CMS.SHEETS.HOME.FAQ,
      'cache_faq_home',
      (cells) => ({
        q: cells[0],
        a: cells[1],
      })
    ).then((data: FAQItem[]) => {
      const filteredData = data.filter((d: FAQItem) => d.q && !d.q.includes(':DOMANDA') && !d.q.includes('DOMANDA') && d.q !== '');
      setFaqs(filteredData);
    }).catch(() => {
      console.error('Errore nel caricamento delle FAQ');
    });
  }, []);

  const items = faqs.length > 0 ? faqs : defaultFaqs;

  return (
    <div className="space-y-6 p-8">
      {items.map((f, i) => {
        const isOpen = activeIndex === i;
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            key={i} 
            className="bg-slate-50 p-0 rounded-lg border-l-4 border-[#1e3a8a] overflow-hidden"
          >
            <div
              onClick={() => setActiveIndex(isOpen ? null : i)}
              style={{ padding: '20px 18px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <h4 style={{ fontWeight: 800, color: '#1e3a8a', margin: 0 }}>{f.q ?? f.domanda ?? f.question}</h4>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={20} style={{ color: isOpen ? '#1e3a8a' : '#94a3b8' }} />
              </motion.div>
            </div>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ padding: '0 18px 20px' }}>
                    <div style={{ height: '1px', backgroundColor: '#e2e8f0', marginBottom: '12px' }} />
                    <p style={{ margin: 0, color: '#475569', lineHeight: 1.6 }}>{f.a ?? f.risposta ?? f.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};