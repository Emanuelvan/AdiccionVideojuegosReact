import React, { useState, useEffect } from 'react';
import { Wind, Watch, List, X, Play, Square, RefreshCw } from 'lucide-react';

const Resources = () => {
    const [activeTool, setActiveTool] = useState(null);

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.title}>Tu Kit de Emergencia</h1>
                <p style={styles.subtitle}>
                    Herramientas prácticas para gestionar la ansiedad y recuperar el control ahora mismo.
                </p>
            </header>
            {!activeTool && (
                <div style={styles.grid}>
                    <ToolCard
                        title="Respiración Guiada"
                        desc="Técnica 4-4-4-4 para calmar tu sistema nervioso en segundos."
                        icon={<Wind size={40} color="#3B82F6" />}
                        onClick={() => setActiveTool('breathing')}
                        color="#EFF6FF"
                    />
                    <ToolCard
                        title="Surfear el Impulso"
                        desc="Espera 10 minutos. La urgencia de jugar sube como una ola y luego baja."
                        icon={<Watch size={40} color="#10B981" />}
                        onClick={() => setActiveTool('timer')}
                        color="#ECFDF5"
                    />
                    <ToolCard
                        title="¿Qué hago ahora?"
                        desc="Ideas aleatorias para desconectar tu cerebro sin usar pantallas."
                        icon={<List size={40} color="#8B5CF6" />}
                        onClick={() => setActiveTool('ideas')}
                        color="#F5F3FF"
                    />
                </div>
            )}
            <div style={styles.toolContainer}>
                {activeTool === 'breathing' && <BreathingTool onClose={() => setActiveTool(null)} />}
                {activeTool === 'timer' && <UrgeTimerTool onClose={() => setActiveTool(null)} />}
                {activeTool === 'ideas' && <IdeasTool onClose={() => setActiveTool(null)} />}
            </div>
        </div>
    );
};

// 1. TARJETA DE MENÚ
const ToolCard = ({ title, desc, icon, onClick, color }) => (
    <div onClick={onClick} style={{ ...styles.card, backgroundColor: color }}>
        <div style={styles.cardIcon}>{icon}</div>
        <h3 style={styles.cardTitle}>{title}</h3>
        <p style={styles.cardDesc}>{desc}</p>
    </div>
);

// 2. HERRAMIENTA DE RESPIRACIÓN 
const BreathingTool = ({ onClose }) => {
    const [phase, setPhase] = useState('Inhala');
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const cycle = async () => {
            while (true) {
                setPhase('Inhala (4s)'); setScale(1.5); await wait(4000);
                setPhase('Sostén (4s)'); await wait(4000);
                setPhase('Exhala (4s)'); setScale(1); await wait(4000);
                setPhase('Sostén (4s)'); await wait(4000);
            }
        };
        cycle();
        return () => { };
    }, []);

    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    return (
        <div style={styles.toolBox}>
            <button onClick={onClose} style={styles.closeBtn}><X /></button>
            <h2>Respiración Cuadrada</h2><div style={styles.breathingCircleWrapper}>
                <div style={{
                    ...styles.breathingCircle,
                    transform: `scale(${scale})`,
                    transition: 'transform 4s ease-in-out'
                }}></div>
                <span style={styles.breathingText}>{phase}</span>
            </div>
            <p style={{ textAlign: 'center', marginTop: '20px' }}>Sigue el ritmo del círculo.</p>
        </div>
    );
};

// 3. HERRAMIENTA DE TEMPORIZADOR
const UrgeTimerTool = ({ onClose }) => {
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutos
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive && timeLeft > 0) {
            interval = setInterval(() => setTimeLeft(t => t - 1), 1000);
        } else if (timeLeft === 0) {
            setIsActive(false);
        }
        return () => clearInterval(interval);
    }, [isActive, timeLeft]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <div style={styles.toolBox}>
            <button onClick={onClose} style={styles.closeBtn}><X /></button>
            <h2>Surfea el Impulso</h2>
            <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
                La mayoría de los antojos intensos duran menos de 10 minutos. Si puedes esperar este tiempo, la necesidad bajará.
            </p>
            <div style={styles.timerDisplay}>{formatTime(timeLeft)}</div>

            <div style={styles.buttonGroup}>
                <button onClick={() => setIsActive(!isActive)} style={styles.primaryBtn}>
                    {isActive ? <span style={styles.btnContent}><Square size={18} /> Pausar</span> : <span style={styles.btnContent}><Play size={18} /> Iniciar</span>}
                </button>
                <button onClick={() => setTimeLeft(600)} style={styles.secondaryBtn}>
                    Reiniciar
                </button>
            </div>
        </div>
    );
};

// 4. IDEAS
const IdeasTool = ({ onClose }) => {
    const activities = [
        "Sal a caminar 5 minutos sin el celular.",
        "Bebe un vaso grande de agua fría.",
        "Organiza un cajón de tu habitación.",
        "Dibuja algo, aunque sea garabatos.",
        "Haz 10 flexiones o estiramientos.",
        "Llama a un amigo (voz, no texto).",
        "Prepara un snack saludable.",
        "Lee 5 páginas de un libro físico."
    ];

    const [currentIdea, setCurrentIdea] = useState(activities[0]);

    const shuffle = () => {
        const random = Math.floor(Math.random() * activities.length);
        setCurrentIdea(activities[random]);
    };

    return (
        <div style={styles.toolBox}>
            <button onClick={onClose} style={styles.closeBtn}><X /></button>
            <h2>¿Qué hacer en vez de jugar?</h2>
            <div style={styles.ideaCard}>
                <h3>{currentIdea}</h3>
            </div>
            <button onClick={shuffle} style={styles.primaryBtn}>
                <span style={styles.btnContent}><RefreshCw size={18} /> Nueva Idea</span>
            </button>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '1000px',
        margin: '0 auto',
        fontFamily: "'Inter', sans-serif",
        padding: '1rem',
    },
    header: {
        textAlign: 'center',
        marginBottom: '3rem',
    },
    title: {
        fontSize: '2.5rem',
        color: '#1F2937',
        marginBottom: '0.5rem',
    },
    subtitle: {
        fontSize: '1.1rem',
        color: '#6B7280',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
    },
    card: {
        padding: '2rem',
        borderRadius: '16px',
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
        border: '1px solid transparent',
    },
    cardIcon: {
        marginBottom: '1rem',
    },
    cardTitle: {
        fontSize: '1.25rem',
        marginBottom: '0.5rem',
        color: '#1F2937',
    },
    cardDesc: {
        color: '#4B5563',
        lineHeight: '1.5',
    },

    toolContainer: {
        marginTop: '2rem',
        animation: 'fadeIn 0.3s ease',
    },
    toolBox: {
        backgroundColor: 'white',
        padding: '3rem 2rem',
        borderRadius: '20px',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        maxWidth: '600px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    closeBtn: {
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: '#9CA3AF',
    },

    breathingCircleWrapper: {
        position: 'relative',
        width: '200px',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '2rem 0',
    },
    breathingCircle: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#DBEAFE',
        borderRadius: '50%',
        opacity: 0.6,
    },
    breathingText: {
        position: 'relative',
        zIndex: 10,
        fontSize: '1.5rem',
        fontWeight: '700',
        color: '#1E40AF',
    },

    timerDisplay: {
        fontSize: '4rem',
        fontFamily: 'monospace',
        fontWeight: '700',
        color: '#374151',
        margin: '2rem 0',
    },

    buttonGroup: {
        display: 'flex',
        gap: '1rem',
    },
    primaryBtn: {
        backgroundColor: '#4F46E5',
        color: 'white',
        padding: '0.8rem 2rem',
        borderRadius: '12px',
        border: 'none',
        fontSize: '1rem',
        cursor: 'pointer',
        fontWeight: '600',
    },
    secondaryBtn: {
        backgroundColor: 'white',
        color: '#374151',
        padding: '0.8rem 2rem',
        borderRadius: '12px',
        border: '1px solid #D1D5DB',
        fontSize: '1rem',
        cursor: 'pointer',
        fontWeight: '600',
    },
    btnContent: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
    },

    ideaCard: {
        backgroundColor: '#F3F4F6',
        padding: '2rem',
        borderRadius: '12px',
        margin: '2rem 0',
        width: '100%',
        textAlign: 'center',
        fontSize: '1.2rem',
        fontWeight: '500',
        color: '#374151',
    }
};

export default Resources;