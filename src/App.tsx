import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { ChiSiamo } from './components/ChiSiamo';
import { Servizi } from './components/Servizi';
import { Contatti } from './components/Contatti';
import { COLORS } from './lib/constants';

export default function App() {
  return (
    <Router basename="/web-consulting/">
      <div style={{ fontFamily: 'Inter, system-ui, sans-serif', color: COLORS.dark, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          {/* <div style={{ padding: '20px', backgroundColor: '#ff0000', color: 'white', textAlign: 'center', fontSize: '20px' }}>
            🔴 TEST: Se vedi questo, il componente sta caricando
          </div> */}
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