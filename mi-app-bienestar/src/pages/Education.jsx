import React, { useState } from 'react';
import { BookOpen, Clock, X, Brain, Zap, Activity, AlertCircle } from 'lucide-react';

/* --- 1. DATOS DE LOS ARTÍCULOS (Simulando una Base de Datos) --- */
const articlesData = [
    {
        id: 1,
        title: "El Bucle de la Dopamina",
        category: "Neurociencia",
        readTime: "3 min",
        icon: <Brain size={32} color="#6366F1" />,
        color: "#EEF2FF",
        content: (
            <>
                <p>¿Por qué es tan difícil dejar de jugar incluso cuando ya no te estás divirtiendo? La respuesta está en tu cerebro.</p>
                <h3>El sistema de recompensa</h3>
                <p>Los videojuegos están diseñados específicamente para activar el núcleo accumbens, el centro de placer del cerebro. Cada nivel superado, cada 'kill' o cada cofre abierto libera un pico de <strong>dopamina</strong>.</p>
                <h3>La tolerancia</h3>
                <p>Con el tiempo, tu cerebro se acostumbra a estos niveles altos de estimulación (homeostasis). Las actividades normales como leer, pasear o hablar con amigos empiezan a parecer "aburridas" porque no liberan tanta dopamina como el juego.</p>
                <div style={{ background: '#F3F4F6', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
                    <strong>Dato clave:</strong> Recuperar la sensibilidad a la dopamina normal toma entre 14 y 90 días de abstinencia o reducción drástica (Dopamine Detox).
                </div>
            </>
        )
    },
    {
        id: 2,
        title: "La Falacia del Costo Hundido",
        category: "Psicología",
        readTime: "4 min",
        icon: <Zap size={32} color="#F59E0B" />,
        color: "#FFFBEB",
        content: (
            <>
                <p>Muchos jugadores siguen jugando juegos que odian porque sienten que han invertido demasiado tiempo o dinero en ellos.</p>
                <h3>"Ya invertí demasiado para dejarlo"</h3>
                <p>Este es un sesgo cognitivo. Piensas: <em>"He gastado 500 horas y $200 dólares en skins en esta cuenta, si la dejo, pierdo eso"</em>.</p>
                <p>La realidad es que ese tiempo y dinero <strong>ya se perdieron</strong>. Seguir jugando solo te hace perder tu recurso más valioso actual: tu tiempo futuro.</p>
            </>
        )
    },
    {
        id: 3,
        title: "Síntomas Físicos del 'Gamer'",
        category: "Salud",
        readTime: "2 min",
        icon: <Activity size={32} color="#10B981" />,
        color: "#ECFDF5",
        content: (
            <>
                <p>El cuerpo lleva la cuenta. Jugar durante sesiones maratónicas tiene consecuencias físicas reales.</p>
                <ul>
                    <li><strong>Fatiga visual digital:</strong> Ojos secos, visión borrosa.</li>
                    <li><strong>Síndrome del túnel carpiano:</strong> Dolor en muñecas y dedos.</li>
                    <li><strong>Alteración del sueño:</strong> La luz azul suprime la melatonina, haciendo imposible el descanso reparador.</li>
                    <li><strong>Sedentarismo:</strong> Pérdida de masa muscular y problemas cardiovasculares a largo plazo.</li>
                </ul>
            </>
        )
    },
    {
        id: 4,
        title: "¿Hobby o Adicción?",
        category: "Diagnóstico",
        readTime: "5 min",
        icon: <AlertCircle size={32} color="#EF4444" />,
        color: "#FEF2F2",
        content: (
            <>
                <p>Jugar videojuegos no es malo per se. El problema no es la actividad, es la relación con ella.</p>
                <h3>Las 3 C de la adicción</h3>
                <ol>
                    <li><strong>Control:</strong> ¿Puedes parar cuando te lo propones?</li>
                    <li><strong>Consecuencias:</strong> ¿Sigues jugando a pesar de tener problemas en el trabajo, estudios o pareja?</li>
                    <li><strong>Craving (Deseo):</strong> ¿Sientes una preocupación mental constante por cuándo volverás a jugar?</li>
                </ol>
            </>
        )
    }
];

/* --- 2. COMPONENTE PRINCIPAL --- */
const Education = () => {
    const [selectedArticle, setSelectedArticle] = useState(null);

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.pageTitle}>Entiende el Juego</h1>
                <p style={styles.pageSubtitle}>
                    Artículos breves basados en ciencia para comprender qué pasa en tu cerebro.
                </p>
            </header>

            {/* Grid de Tarjetas */}
            <div style={styles.grid}>
                {articlesData.map((article) => (
                    <div
                        key={article.id}
                        style={styles.card}
                        onClick={() => setSelectedArticle(article)}
                    >
                        <div style={{ ...styles.iconBox, backgroundColor: article.color }}>
                            {article.icon}
                        </div>
                        <div style={styles.cardContent}>
                            <span style={styles.categoryTag}>{article.category}</span>
                            <h3 style={styles.cardTitle}>{article.title}</h3>
                            <div style={styles.metaData}>
                                <Clock size={14} /> {article.readTime} lectura
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal de Lectura */}
            {selectedArticle && (
                <div style={styles.modalOverlay} onClick={() => setSelectedArticle(null)}>
                    <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>

                        <button style={styles.closeButton} onClick={() => setSelectedArticle(null)}>
                            <X size={24} />
                        </button>

                        <div style={styles.modalHeader}>
                            <span style={styles.modalCategory}>{selectedArticle.category}</span>
                            <h2 style={styles.modalTitle}>{selectedArticle.title}</h2>
                            <div style={styles.modalMeta}>
                                <Clock size={16} /> Tiempo de lectura: {selectedArticle.readTime}
                            </div>
                        </div>

                        <div style={styles.articleBody}>
                            {selectedArticle.content}
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

/* --- 3. ESTILOS --- */
const styles = {
    container: {
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '1rem',
        fontFamily: "'Inter', sans-serif",
    },
    header: {
        marginBottom: '3rem',
        textAlign: 'center',
    },
    pageTitle: {
        fontSize: '2.5rem',
        color: '#111827',
        marginBottom: '0.5rem',
    },
    pageSubtitle: {
        color: '#6B7280',
        fontSize: '1.1rem',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '2rem',
    },
    // Tarjeta
    card: {
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '1.5rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
        border: '1px solid #F3F4F6',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    iconBox: {
        padding: '12px',
        borderRadius: '12px',
        marginBottom: '1rem',
    },
    cardContent: {
        width: '100%',
    },
    categoryTag: {
        textTransform: 'uppercase',
        fontSize: '0.75rem',
        fontWeight: '700',
        color: '#9CA3AF',
        letterSpacing: '0.05em',
        marginBottom: '0.5rem',
        display: 'block',
    },
    cardTitle: {
        fontSize: '1.25rem',
        fontWeight: '700',
        color: '#1F2937',
        marginBottom: '1rem',
        lineHeight: '1.4',
    },
    metaData: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '0.875rem',
        color: '#6B7280',
    },
    // Modal (Overlay)
    modalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro semitransparente
        backdropFilter: 'blur(4px)', // Efecto borroso
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        padding: '1rem',
    },
    modalContent: {
        backgroundColor: 'white',
        width: '100%',
        maxWidth: '700px',
        maxHeight: '85vh',
        overflowY: 'auto',
        borderRadius: '20px',
        padding: '3rem',
        position: 'relative',
        animation: 'slideUp 0.3s ease-out',
    },
    closeButton: {
        position: 'absolute',
        top: '1.5rem',
        right: '1.5rem',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: '#9CA3AF',
        padding: '0.5rem',
        borderRadius: '50%',
    },
    modalHeader: {
        marginBottom: '2rem',
        borderBottom: '1px solid #E5E7EB',
        paddingBottom: '1.5rem',
    },
    modalCategory: {
        color: '#4F46E5',
        fontWeight: '700',
        textTransform: 'uppercase',
        fontSize: '0.875rem',
        letterSpacing: '0.05em',
    },
    modalTitle: {
        fontSize: '2.25rem',
        fontWeight: '800',
        color: '#111827',
        margin: '0.5rem 0',
        lineHeight: '1.2',
    },
    modalMeta: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        color: '#6B7280',
        fontSize: '0.9rem',
    },
    articleBody: {
        fontSize: '1.125rem',
        lineHeight: '1.8',
        color: '#374151',
    }
};

export default Education;