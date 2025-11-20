import { Link } from 'react-router-dom';
import { Brain, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

const Home = () => {
    return (
        <div style={styles.container}>
            <section style={styles.hero}>
                <div style={styles.heroContent}>
                    <span style={styles.badge}>Espacio Seguro y Anónimo 😈</span>
                    <h1 style={styles.title}>
                        El juego es parte de la vida,<br />
                        <span style={styles.highlight}>pero no es toda tu vida.</span>
                    </h1>
                    <p style={styles.subtitle}>
                        Entiende tus hábitos de juego, recupera tu tiempo y encuentra el equilibrio digital que necesitas. Sin juicios, solo herramientas.
                    </p>

                    <div style={styles.ctaGroup}>
                        <Link to="/test" style={styles.primaryButton}>
                            Hacer Autoevaluación <ArrowRight size={20} />
                        </Link>
                        <Link to="/aprende" style={styles.secondaryButton}>
                            Leer más sobre adicción
                        </Link>
                    </div>
                </div>
            </section>
            <section style={styles.features}>
                <div style={styles.featureCard}>
                    <div style={styles.iconWrapper}><Brain size={32} color="#4f46e5" /></div>
                    <h3>Comprende tu Mente</h3>
                    <p>Descubre cómo funciona la dopamina y por qué los juegos pueden volverse tan absorbentes.</p>
                </div>

                <div style={styles.featureCard}>
                    <div style={styles.iconWrapper}><ShieldCheck size={32} color="#059669" /></div>
                    <h3>Autoevaluación Privada</h3>
                    <p>Realiza un test basado en criterios clínicos para conocer tu nivel de riesgo actual.</p>
                </div>

                <div style={styles.featureCard}>
                    <div style={styles.iconWrapper}><Sparkles size={32} color="#d946ef" /></div>
                    <h3>Herramientas Reales</h3>
                    <p>Técnicas de desconexión, gestión del tiempo y ejercicios para reducir la ansiedad.</p>
                </div>
            </section>
            <section style={styles.quoteSection}>
                <blockquote style={styles.quote}>
                    "No se trata de dejar de jugar para siempre, sino de que tú tengas el control del mando, no el juego sobre ti."
                </blockquote>
            </section>

        </div>
    );
};

const styles = {
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        fontFamily: "'Inter', sans-serif",
        color: '#1f2937',
    },
    hero: {
        padding: '4rem 1rem',
        textAlign: 'center',
        backgroundColor: '#f8fafc',
        borderRadius: '20px',
        marginBottom: '3rem',
    },
    heroContent: {
        maxWidth: '800px',
        margin: '0 auto',
    },
    badge: {
        display: 'inline-block',
        padding: '0.5rem 1rem',
        backgroundColor: '#e0e7ff',
        color: '#4338ca',
        borderRadius: '50px',
        fontSize: '0.875rem',
        fontWeight: '600',
        marginBottom: '1.5rem',
    },
    title: {
        fontSize: '3rem',
        fontWeight: '800',
        lineHeight: '1.2',
        marginBottom: '1.5rem',
        color: '#111827',
    },
    highlight: {
        color: '#4f46e5',
    },
    subtitle: {
        fontSize: '1.25rem',
        color: '#4b5563',
        marginBottom: '2.5rem',
        lineHeight: '1.6',
    },
    ctaGroup: {
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        flexWrap: 'wrap',
    },
    primaryButton: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        backgroundColor: '#4f46e5',
        color: 'white',
        padding: '0.875rem 2rem',
        borderRadius: '12px',
        textDecoration: 'none',
        fontWeight: '600',
        transition: 'transform 0.2s',
        boxShadow: '0 4px 6px -1px rgba(79, 70, 229, 0.2)',
    },
    secondaryButton: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        color: '#1f2937',
        padding: '0.875rem 2rem',
        borderRadius: '12px',
        textDecoration: 'none',
        fontWeight: '600',
        border: '1px solid #e5e7eb',
    },
    features: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        padding: '0 1rem',
        marginBottom: '4rem',
    },
    featureCard: {
        padding: '2rem',
        backgroundColor: 'white',
        borderRadius: '16px',
        border: '1px solid #f3f4f6',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
        textAlign: 'left',
    },
    iconWrapper: {
        marginBottom: '1rem',
        display: 'inline-flex',
        padding: '12px',
        borderRadius: '12px',
        backgroundColor: '#f9fafb',
    },
    quoteSection: {
        textAlign: 'center',
        padding: '4rem 2rem',
        backgroundColor: '#fff',
        borderTop: '1px solid #f3f4f6',
    },
    quote: {
        fontSize: '1.5rem',
        fontStyle: 'italic',
        color: '#4b5563',
        maxWidth: '800px',
        margin: '0 auto',
    },
};

export default Home;