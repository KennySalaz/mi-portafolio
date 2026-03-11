'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useConfigSwitcher } from '@/context/ConfigContext';

const configLabels: Record<string, string> = {
    kenny: 'Kenny — Dev',
    nemesis: 'Nemesis — Marketing',
};

export default function ConfigSwitcher() {
    const { configKey, allConfigKeys, switchConfig } = useConfigSwitcher();
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '8px',
        }}>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            background: 'var(--card-bg, #fff)',
                            border: '1px solid var(--border-color, #e2e8f0)',
                            borderRadius: '16px',
                            padding: '8px',
                            boxShadow: 'var(--shadow-lg, 0 8px 16px rgba(0,0,0,0.1))',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '4px',
                            minWidth: '200px',
                        }}
                    >
                        <div style={{
                            padding: '8px 12px',
                            fontSize: '11px',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            color: 'var(--text-secondary)',
                        }}>
                            Cambiar Portafolio
                        </div>
                        {allConfigKeys.map((key) => (
                            <motion.button
                                key={key}
                                onClick={() => {
                                    switchConfig(key);
                                    setIsOpen(false);
                                }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    padding: '10px 14px',
                                    borderRadius: '12px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    fontFamily: 'inherit',
                                    transition: 'background 0.2s',
                                    background: configKey === key
                                        ? 'var(--accent-color, #6366f1)'
                                        : 'transparent',
                                    color: configKey === key
                                        ? '#fff'
                                        : 'var(--text-primary)',
                                }}
                            >
                                <span style={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    background: configKey === key
                                        ? '#fff'
                                        : 'var(--accent-color, #6366f1)',
                                    flexShrink: 0,
                                }} />
                                {configLabels[key] || key}
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    border: 'none',
                    cursor: 'pointer',
                    background: 'var(--accent-color, #6366f1)',
                    color: '#fff',
                    fontSize: '22px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
                    transition: 'background 0.3s',
                }}
                title="Cambiar portafolio"
            >
                ⇄
            </motion.button>
        </div>
    );
}
