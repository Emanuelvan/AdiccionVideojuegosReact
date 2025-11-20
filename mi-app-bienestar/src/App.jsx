import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

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

const appStyles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  mainContent: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  }
};

export default App;