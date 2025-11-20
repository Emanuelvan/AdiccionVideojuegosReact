import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, PauseCircle } from 'lucide-react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Función para cerrar el menú al hacer clic en un enlace (UX móvil)
    const closeMenu = () => setIsMobileMenuOpen(false);

    // Estilos dinámicos para enlaces activos
    const navLinkStyles = ({ isActive }) => ({
        textDecoration: 'none',
        fontWeight: isActive ? '700' : '500',
        color: isActive ? '#4F46E5' : '#4B5563', // Azul intenso si activo, gris si no
        transition: 'color 0.2s',
        display: 'block',
        padding: '0.5rem 0',
        fontSize: '1rem',
    });

    return (
        <nav style={styles.nav}>
            <div style={styles.container}>

                {/* --- LOGO --- */}
                <Link to="/" style={styles.logo} onClick={closeMenu}>
                    <PauseCircle size={45} color="#086cdfff" />
                    <span style={styles.logoText}>Pompodetente</span>
                </Link>

                {/* --- BOTÓN MENÚ MÓVIL (Hamburger) --- */}
                <button
                    style={styles.mobileMenuBtn}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* --- ENLACES DE ESCRITORIO --- */}
                <div style={styles.desktopLinks}>
                    <NavLink to="/" style={navLinkStyles}>Inicio</NavLink>
                    <NavLink to="/test" style={navLinkStyles}>Test</NavLink>
                    <NavLink to="/aprende" style={navLinkStyles}>Aprende</NavLink>
                    <NavLink to="/herramientas" style={navLinkStyles}>Herramientas</NavLink>
                    {/* Botón destacado para Ayuda */}
                    <NavLink to="/ayuda" style={styles.ctaButton}>
                        Ayuda
                    </NavLink>
                </div>
            </div>

            {/* --- MENÚ MÓVIL (Desplegable) --- */}
            {isMobileMenuOpen && (
                <div style={styles.mobileMenu}>
                    <NavLink to="/" style={navLinkStyles} onClick={closeMenu}>Inicio</NavLink>
                    <NavLink to="/test" style={navLinkStyles} onClick={closeMenu}>Test</NavLink>
                    <NavLink to="/aprende" style={navLinkStyles} onClick={closeMenu}>Aprende</NavLink>
                    <NavLink to="/herramientas" style={navLinkStyles} onClick={closeMenu}>Herramientas</NavLink>
                    <div style={{ borderTop: '1px solid #eee', margin: '0.5rem 0' }}></div>
                    <NavLink to="/ayuda" style={({ isActive }) => ({
                        ...navLinkStyles({ isActive }),
                        color: '#EF4444', // Rojo para destacar ayuda en móvil
                        fontWeight: '700'
                    })} onClick={closeMenu}>
                        Buscar Ayuda
                    </NavLink>
                </div>
            )}
        </nav>
    );
};

/* --- ESTILOS CSS-IN-JS --- */
const styles = {
    nav: {
        position: 'sticky',
        top: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.95)', // Ligeramente transparente
        backdropFilter: 'blur(8px)', // Efecto "frosted glass"
        borderBottom: '1px solid #F3F4F6',
        zIndex: 1000,
        height: '70px',
        display: 'flex',
        alignItems: 'center',
    },
    container: {
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        padding: '0 1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: "'Inter', sans-serif",
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        textDecoration: 'none',
        color: '#1F2937',
    },
    logoText: {
        fontSize: '1.25rem',
        fontWeight: '800',
        letterSpacing: '-0.02em',
    },
    desktopLinks: {
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        '@media (maxWidth: 768px)': { // Nota: Media queries no funcionan bien en estilos inline puros sin librerías
            display: 'none',
        }
    },

    mobileMenuBtn: {
        display: 'none',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '0.5rem',
    },
    mobileMenu: {
        position: 'absolute',
        top: '70px',
        left: 0,
        width: '100%',
        backgroundColor: 'white',
        padding: '1.5rem',
        borderBottom: '1px solid #F3F4F6',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    ctaButton: {
        backgroundColor: '#EEF2FF',
        color: '#4F46E5',
        padding: '0.5rem 1.25rem',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: '600',
        transition: 'background 0.2s',
    }
};

export default Navbar;