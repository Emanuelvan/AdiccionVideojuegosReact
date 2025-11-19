import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Mail, Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>

                {/* --- COLUMNA 1: Marca y Misión --- */}
                <div style={styles.column}>
                    <h3 style={styles.logoText}>Pompodetente</h3>
                    <p style={styles.missionText}>
                        Ayudando a recuperar el equilibrio digital. Creemos en un uso de la tecnología consciente, saludable y libre de culpa.
                    </p>
                    <div style={styles.socials}>
                        {/* Iconos decorativos o reales */}
                        <a href="https://github.com/Emanuelvan" style={styles.socialIcon}><Github size={20} /></a>
                        <a href="#" style={styles.socialIcon}><Mail size={20} /></a>
                    </div>
                </div>

                {/* --- COLUMNA 2: Enlaces Rápidos --- */}
                <div style={styles.column}>
                    <h4 style={styles.columnTitle}>Navegación</h4>
                    <ul style={styles.linkList}>
                        <li><Link to="/" style={styles.link}>Inicio</Link></li>
                        <li><Link to="/test" style={styles.link}>Autoevaluación</Link></li>
                        <li><Link to="/aprende" style={styles.link}>Artículos</Link></li>
                        <li><Link to="/herramientas" style={styles.link}>Kit de Emergencia</Link></li>
                        <li><Link to="/ayuda" style={styles.link}>Buscar Ayuda Pro</Link></li>
                    </ul>
                </div>

                {/* --- COLUMNA 3: Legal y Aviso --- */}
                <div style={styles.column}>
                    <h4 style={styles.columnTitle}>Importante</h4>
                    <div style={styles.disclaimerBox}>
                        <Shield size={20} style={{ marginBottom: '0.5rem', color: '#9CA3AF' }} />
                        <p style={styles.disclaimerText}>
                            Esta aplicación es una herramienta informativa y de autogestión.
                            <strong> No sustituye el consejo, diagnóstico o tratamiento médico profesional.</strong>
                        </p>
                        <p style={styles.disclaimerText}>
                            Si estás en crisis, por favor acude al servicio de urgencias de tu localidad.
                        </p>
                    </div>
                </div>

            </div>

            {/* --- BARRA INFERIOR --- */}
            <div style={styles.bottomBar}>
                <p style={styles.copyright}>
                    © {new Date().getFullYear()} Paula García y Emanuel Vanegas. Hecho con <Heart size={14} color="#EF4444" fill="#EF4444" style={{ display: 'inline', verticalAlign: 'middle' }} /> en React.
                </p>
            </div>
        </footer>
    );
};

/* --- ESTILOS CSS-IN-JS --- */
const styles = {
    footer: {
        backgroundColor: '#1F2937', // Gris oscuro (casi negro)
        color: '#F3F4F6',
        paddingTop: '4rem',
        marginTop: 'auto', // Esto empuja el footer al fondo si usas flexbox en el padre
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '3rem',
        paddingBottom: '3rem',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    logoText: {
        fontSize: '1.5rem',
        fontWeight: '800',
        marginBottom: '1rem',
        color: '#fff',
    },
    missionText: {
        color: '#9CA3AF', // Gris medio
        lineHeight: '1.6',
        fontSize: '0.95rem',
        marginBottom: '1.5rem',
    },
    socials: {
        display: 'flex',
        gap: '1rem',
    },
    socialIcon: {
        color: '#D1D5DB',
        transition: 'color 0.2s',
        cursor: 'pointer',
    },
    columnTitle: {
        fontSize: '1.1rem',
        fontWeight: '700',
        marginBottom: '1.5rem',
        color: '#fff',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
    },
    linkList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem',
    },
    link: {
        color: '#D1D5DB',
        textDecoration: 'none',
        fontSize: '0.95rem',
        transition: 'color 0.2s',
    },
    disclaimerBox: {
        backgroundColor: 'rgba(255, 255, 255, 0.05)', // Fondo muy sutil
        padding: '1rem',
        borderRadius: '8px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
    },
    disclaimerText: {
        fontSize: '0.8rem',
        color: '#9CA3AF',
        lineHeight: '1.5',
        marginBottom: '0.5rem',
    },
    bottomBar: {
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '1.5rem',
        textAlign: 'center',
        backgroundColor: '#111827', // Un tono más oscuro aún
    },
    copyright: {
        fontSize: '0.85rem',
        color: '#6B7280',
        margin: 0,
    },
};

export default Footer;