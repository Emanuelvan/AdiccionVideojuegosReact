import React from 'react';
import { Info, AlertTriangle, Heart } from 'lucide-react';

const InfoCard = ({ type, title, content }) => {
    const getStyle = () => {
        switch (type) {
            case 'warning':
                return { bg: '#fff5f5', border: '#feb2b2', icon: <AlertTriangle color="#c53030" /> };
            case 'tip':
                return { bg: '#f0fff4', border: '#9ae6b4', icon: <Heart color="#2f855a" /> };
            default:
                return { bg: '#ebf8ff', border: '#90cdf4', icon: <Info color="#2b6cb0" /> };
        }
    };

    const style = getStyle();

    return (
        <div style={{
            backgroundColor: style.bg,
            borderLeft: `4px solid ${style.border}`,
            padding: '1.5rem',
            borderRadius: '8px',
            marginBottom: '1rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                {style.icon}
                <h3 style={{ margin: '0 0 0 10px', fontSize: '1.1rem', fontWeight: '600' }}>
                    {title}
                </h3>
            </div>
            <p style={{ margin: 0, color: '#4a5568', lineHeight: '1.6' }}>
                {content}
            </p>
        </div>
    );
};

export default InfoCard;