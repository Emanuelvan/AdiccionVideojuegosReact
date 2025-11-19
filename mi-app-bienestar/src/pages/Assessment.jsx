import React, { useState } from 'react';
import { questions } from '../data/quizData';
import { CheckCircle, AlertTriangle, AlertOctagon, RefreshCcw, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Assessment = () => {
    // Estados para manejar la lógica
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    // Función al hacer clic en una opción
    const handleAnswerOptionClick = (points) => {
        const nextScore = score + points;
        setScore(nextScore);

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowResult(true);
        }
    };

    // Función para reiniciar el test
    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
    };

    // Lógica para determinar el mensaje final según el puntaje
    const getResultContent = () => {
        // El puntaje máximo posible es 15 (5 preguntas x 3 puntos)
        if (score <= 4) {
            return {
                title: "Uso Saludable",
                desc: "Parece que tienes una relación equilibrada con los videojuegos. ¡Sigue así!",
                color: "#10B981", // Verde
                bg: "#ECFDF5",
                icon: <CheckCircle size={48} color="#10B981" />
            };
        } else if (score <= 9) {
            return {
                title: "Riesgo Moderado",
                desc: "Hay algunas señales de alerta. Podrías estar usando el juego como vía de escape. Intenta establecer límites de tiempo.",
                color: "#F59E0B", // Amarillo/Naranja
                bg: "#FFFBEB",
                icon: <AlertTriangle size={48} color="#F59E0B" />
            };
        } else {
            return {
                title: "Riesgo Alto",
                desc: "Tus respuestas indican que el juego está afectando significativamente tu vida. Te recomendamos hablar con un profesional.",
                color: "#EF4444", // Rojo
                bg: "#FEF2F2",
                icon: <AlertOctagon size={48} color="#EF4444" />
            };
        }
    };

    return (
        <div style={styles.container}>
            {showResult ? (
                /* --- VISTA DE RESULTADOS --- */
                <div style={styles.resultCard}>
                    <div style={{ ...styles.iconWrapper, backgroundColor: getResultContent().bg }}>
                        {getResultContent().icon}
                    </div>
                    <h2 style={{ ...styles.resultTitle, color: getResultContent().color }}>
                        {getResultContent().title}
                    </h2>
                    <p style={styles.resultDesc}>{getResultContent().desc}</p>

                    <div style={styles.scoreDisplay}>
                        Puntaje: {score} / 15
                    </div>

                    <div style={styles.resultActions}>
                        <button onClick={resetQuiz} style={styles.secondaryButton}>
                            <RefreshCcw size={18} /> Repetir Test
                        </button>
                        <Link to="/ayuda" style={styles.primaryButton}>
                            Ver Recursos de Ayuda <ArrowRight size={18} />
                        </Link>
                    </div>

                    <p style={styles.disclaimer}>
                        * Este test es solo una herramienta orientativa y no sustituye un diagnóstico profesional.
                    </p>
                </div>
            ) : (
                /* --- VISTA DE PREGUNTAS --- */
                <div style={styles.quizCard}>
                    <div style={styles.header}>
                        <span style={styles.questionCount}>
                            Pregunta {currentQuestion + 1} de {questions.length}
                        </span>
                        {/* Barra de progreso simple */}
                        <div style={styles.progressBarBg}>
                            <div
                                style={{
                                    ...styles.progressBarFill,
                                    width: `${((currentQuestion + 1) / questions.length) * 100}%`
                                }}
                            />
                        </div>
                    </div>

                    <h2 style={styles.questionText}>{questions[currentQuestion].text}</h2>

                    <div style={styles.optionsGrid}>
                        {questions[currentQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswerOptionClick(option.points)}
                                style={styles.optionButton}
                            >
                                {option.text}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

// --- Estilos ---
const styles = {
    container: {
        maxWidth: '600px',
        margin: '2rem auto',
        fontFamily: "'Inter', sans-serif",
    },
    quizCard: {
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '16px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    },
    header: {
        marginBottom: '2rem',
    },
    questionCount: {
        fontSize: '0.9rem',
        color: '#6B7280',
        fontWeight: '600',
        display: 'block',
        marginBottom: '0.5rem',
    },
    progressBarBg: {
        width: '100%',
        height: '8px',
        backgroundColor: '#E5E7EB',
        borderRadius: '4px',
        overflow: 'hidden',
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: '#4F46E5',
        transition: 'width 0.3s ease',
    },
    questionText: {
        fontSize: '1.5rem',
        fontWeight: '700',
        color: '#1F2937',
        marginBottom: '2rem',
        lineHeight: '1.4',
    },
    optionsGrid: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    optionButton: {
        padding: '1rem 1.5rem',
        fontSize: '1.1rem',
        textAlign: 'left',
        backgroundColor: '#F9FAFB',
        border: '2px solid #E5E7EB',
        borderRadius: '12px',
        cursor: 'pointer',
        transition: 'all 0.2s',
        color: '#374151',
    },
    // Estilos de Resultados
    resultCard: {
        backgroundColor: 'white',
        padding: '3rem 2rem',
        borderRadius: '16px',
        textAlign: 'center',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    },
    iconWrapper: {
        display: 'inline-flex',
        padding: '1.5rem',
        borderRadius: '50%',
        marginBottom: '1.5rem',
    },
    resultTitle: {
        fontSize: '2rem',
        fontWeight: '800',
        marginBottom: '1rem',
    },
    resultDesc: {
        fontSize: '1.1rem',
        color: '#4B5563',
        marginBottom: '2rem',
        lineHeight: '1.6',
    },
    scoreDisplay: {
        display: 'inline-block',
        padding: '0.5rem 1.5rem',
        backgroundColor: '#F3F4F6',
        borderRadius: '20px',
        fontWeight: '700',
        color: '#374151',
        marginBottom: '2rem',
    },
    resultActions: {
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        marginBottom: '2rem',
        flexWrap: 'wrap',
    },
    primaryButton: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        backgroundColor: '#4F46E5',
        color: 'white',
        padding: '0.8rem 1.5rem',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: '600',
    },
    secondaryButton: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        backgroundColor: 'white',
        color: '#374151',
        border: '1px solid #D1D5DB',
        padding: '0.8rem 1.5rem',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: '600',
    },
    disclaimer: {
        fontSize: '0.8rem',
        color: '#9CA3AF',
        fontStyle: 'italic',
    },
};

export default Assessment;