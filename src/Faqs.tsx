import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { DRIVE_CMS } from './config/driveConfig';
import { fetchWithSmartCache } from './utils/DriveUtils';
import type { FAQItem } from './types/faq';

export const Faqs = () => {
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    fetchWithSmartCache(
      DRIVE_CMS.SHEETS.HOME.FAQ,
      'cache_faq_home',
      (cells) => ({
        q: cells[0]?.trim() || '',
        a: cells[1]?.trim() || '',
      })
    ).then((data: any[]) => {
      const cleanData = data.filter(d => d.q && d.a && !d.q.includes(':DOMANDA') && !d.q.includes('DOMANDA') && d.q !== '');
      setFaqs(cleanData);
    }).catch((err) => {
      console.error('Errore nel caricamento delle FAQ:', err);
    });
  }, []);

  return (
    <div style={{ width: '100%' }}>
      {faqs.map((f, i) => (
        <div
          key={i}
          style={{
            marginBottom: '16px',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            overflow: 'hidden',
          }}
        >
          <button
            onClick={() => setActiveIndex(activeIndex === i ? null : i)}
            style={{
              width: '100%',
              padding: '20px',
              backgroundColor: activeIndex === i ? '#f1f5f9' : '#fff',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontWeight: '700',
              fontSize: '1rem',
              textAlign: 'left',
            }}
          >
            {f.q}
            <ChevronDown
              size={20}
              style={{
                transform: activeIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s',
              }}
            />
          </button>
          {activeIndex === i && (
            <div
              style={{
                padding: '20px',
                backgroundColor: '#f8fafc',
                borderTop: '1px solid #e2e8f0',
                color: '#475569',
                lineHeight: '1.6',
              }}
            >
              {f.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};