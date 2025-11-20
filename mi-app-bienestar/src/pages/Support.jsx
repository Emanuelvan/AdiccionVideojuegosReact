import React from 'react';
import { PhoneCall, Globe, Users, HeartHandshake, ArrowRight, ShieldAlert } from 'lucide-react';

const Support = () => {
    return (
        <div style={styles.container}>

            {/* --- HEADER --- */}
            <header style={styles.header}>
                <div style={styles.iconHeader}>
                    <HeartHandshake size={48} color="#4F46E5" />
                </div>
                <h1 style={styles.title}>No tienes que hacerlo solo</h1>
                <p style={styles.subtitle}>
                    Pedir ayuda es un signo de fortaleza, no de debilidad. Aquí encontrarás recursos profesionales y comunidades que te entienden.
                </p>
            </header>

            {/* --- SECCIÓN DE CRISIS (Destacada) --- */}
            <section style={styles.crisisSection}>
                <div style={styles.crisisCard}>
                    <div style={styles.crisisIcon}>
                        <ShieldAlert size={32} color="#EF4444" />
                    </div>
                    <div style={styles.crisisContent}>
                        <h2 style={styles.crisisTitle}>¿Necesitas ayuda inmediata?</h2>
                        <p style={styles.crisisText}>
                            Si sientes que estás en peligro, tienes pensamientos oscuros o ansiedad incontrolable, por favor contacta a una línea de emergencia ahora mismo.
                        </p>
                        <div style={styles.phoneGrid}>
                            <div style={styles.phoneItem}>
                                <span style={styles.phoneLabel}>Emergencias Generales</span>
                                <a href="tel:123" style={styles.phoneNumber}>123</a>
                            </div>
                            <div style={styles.phoneItem}>
                                <span style={styles.phoneLabel}>Línea de Prevención (24/7)</span>
                                <a href="tel:106" style={styles.phoneNumber}>106</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- DIRECTORIO DE RECURSOS --- */}
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>Recursos Especializados</h2>
                <div style={styles.grid}>

                    {/* Tarjeta 1: Psicólogos */}
                    <div style={styles.card}>
                        <div style={styles.cardHeader}>
                            <Users size={28} color="#2563EB" />
                            <h3>Terapia Profesional</h3>
                        </div>
                        <p style={styles.cardText}>
                            Busca psicólogos clínicos especializados en adicciones conductuales y terapia cognitivo-conductual (TCC).
                        </p>
                        <a href="https://www.psychologytoday.com/" target="_blank" rel="noreferrer" style={styles.cardButton}>
                            Buscar en Directorio <ArrowRight size={16} />
                        </a>
                    </div>

                    {/* Tarjeta 2: Grupos de Apoyo */}
                    <div style={styles.card}>
                        <div style={styles.cardHeader}>
                            <Globe size={28} color="#059669" />
                            <h3>Jugadores Anónimos</h3>
                        </div>
                        <p style={styles.cardText}>
                            Comunidades basadas en el modelo de 12 pasos. Compartir tu historia con gente que te entiende es curativo.
                        </p>
                        <a href="https://jugadoresanonimos.org/" target="_blank" rel="noreferrer" style={styles.cardButton}>
                            Ver Reuniones Online <ArrowRight size={16} />
                        </a>
                    </div>

                    {/* Tarjeta 3: Para Familiares */}
                    <div style={styles.card}>
                        <div style={styles.cardHeader}>
                            <HeartHandshake size={28} color="#D946EF" />
                            <h3>Para Familiares</h3>
                        </div>
                        <p style={styles.cardText}>
                            Si eres padre o pareja de alguien que juega compulsivamente, tú también necesitas herramientas y apoyo.
                        </p>
                        <a href="#" style={styles.cardButton}>
                            Guía para Padres <ArrowRight size={16} />
                        </a>
                    </div>

                </div>
            </section>

            {/* --- CONSEJOS PARA ACOMPAÑAR --- */}
            <section style={styles.adviceSection}>
                <h2 style={styles.sectionTitle}>Cómo ayudar a un amigo</h2>
                <div style={styles.adviceList}>
                    <div style={styles.adviceItem}>
                        <span style={styles.number}>1</span>
                        <strong>Evita el juicio:</strong> No uses frases como "¿Por qué no dejas eso ya?". Usa "¿He notado que estás más aislado, todo bien?".
                    </div>
                    <div style={styles.adviceItem}>
                        <span style={styles.number}>2</span>
                        <strong>Propón alternativas:</strong> Invítalo a actividades que no involucren pantallas (fútbol, caminar, comer), pero no lo fuerces.
                    </div>
                    <div style={styles.adviceItem}>
                        <span style={styles.number}>3</span>
                        <strong>Pon límites:</strong> Si su adicción te afecta a ti (dinero prestado, tiempo compartido), sé claro sobre tus propios límites.
                    </div>
                </div>
            </section>

        </div>
    );
};

/* --- ESTILOS CSS-IN-JS --- */
const styles = {
    container: {
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '2rem 1rem',
        fontFamily: "'Inter', sans-serif",
    },
    header: {
        textAlign: 'center',
        marginBottom: '4rem',
        maxWidth: '700px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    iconHeader: {
        display: 'inline-flex',
        padding: '1.5rem',
        backgroundColor: '#EEF2FF',
        borderRadius: '50%',
        marginBottom: '1.5rem',
    },
    title: {
        fontSize: '2.5rem',
        color: '#111827',
        marginBottom: '1rem',
        fontWeight: '800',
    },
    subtitle: {
        fontSize: '1.2rem',
        color: '#6B7280',
        lineHeight: '1.6',
    },
    /* Estilos de Crisis */
    crisisSection: {
        marginBottom: '4rem',
    },
    crisisCard: {
        backgroundColor: '#FEF2F2', // Fondo rojo muy claro
        border: '1px solid #FECACA',
        borderRadius: '16px',
        padding: '2rem',
        display: 'flex',
        gap: '2rem',
        alignItems: 'flex-start',
        flexWrap: 'wrap', // Para móviles
    },
    crisisIcon: {
        backgroundColor: '#FEE2E2',
        padding: '1rem',
        borderRadius: '12px',
    },
    crisisContent: {
        flex: 1,
    },
    crisisTitle: {
        color: '#991B1B', // Rojo oscuro
        fontSize: '1.5rem',
        marginTop: 0,
        marginBottom: '0.5rem',
    },
    crisisText: {
        color: '#7F1D1D',
        marginBottom: '1.5rem',
        lineHeight: '1.5',
    },
    phoneGrid: {
        display: 'flex',
        gap: '2rem',
        flexWrap: 'wrap',
    },
    phoneItem: {
        display: 'flex',
        flexDirection: 'column',
    },
    phoneLabel: {
        fontSize: '0.875rem',
        textTransform: 'uppercase',
        fontWeight: '700',
        color: '#EF4444',
        marginBottom: '0.25rem',
    },
    phoneNumber: {
        fontSize: '1.5rem',
        fontWeight: '800',
        color: '#111827',
        textDecoration: 'none',
    },
    /* Estilos de Grid de Recursos */
    section: {
        marginBottom: '4rem',
    },
    sectionTitle: {
        fontSize: '2rem',
        marginBottom: '2rem',
        color: '#1F2937',
        textAlign: 'center',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
    },
    card: {
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '16px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
        border: '1px solid #F3F4F6',
        display: 'flex',
        flexDirection: 'column',
    },
    cardHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1rem',
        color: '#1F2937',
    },
    cardText: {
        color: '#4B5563',
        lineHeight: '1.6',
        marginBottom: '2rem',
        flex: 1, // Empuja el botón hacia abajo
    },
    cardButton: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        backgroundColor: '#F3F4F6',
        color: '#1F2937',
        padding: '0.8rem',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: '600',
        transition: 'all 0.2s',
    },
    /* Estilos Consejos */
    adviceSection: {
        backgroundColor: '#F9FAFB',
        padding: '3rem',
        borderRadius: '20px',
    },
    adviceList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
    },
    adviceItem: {
        display: 'flex',
        color: '#1F2937',
        alignItems: 'flex-start',
    },
    number: {
        backgroundColor: '#4F46E5',
        color: 'white',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        flexShrink: 0, // Evita que se aplaste
    },
};

export default Support;