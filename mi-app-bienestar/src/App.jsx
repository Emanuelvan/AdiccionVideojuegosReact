// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer'; // <--- Importar

// Pages
import Home from './pages/Home';
import Assessment from './pages/Assessment';
import Resources from './pages/Resources';
import Education from './pages/Education';
import Support from './pages/Support';

function App() {
  return (
    <Router>
      <div style={appStyles.wrapper}>
        <Navbar />

        <main style={appStyles.mainContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Assessment />} />
            <Route path="/aprende" element={<Education />} />
            <Route path="/herramientas" element={<Resources />} />
            <Route path="/ayuda" element={<Support />} />
          </Routes>
        </main>

        <Footer /> {/* <--- Siempre al final */}
      </div>
    </Router>
  );
}

// Estilos para asegurar el "Sticky Footer"
const appStyles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', // Ocupa toda la altura de la pantalla
  },
  mainContent: {
    flex: 1, // Empuja el footer hacia abajo si hay espacio libre
    backgroundColor: '#F9FAFB', // Color de fondo general suave
  }
};

export default App;