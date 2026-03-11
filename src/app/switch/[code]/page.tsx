'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { HiXCircle } from 'react-icons/hi';
import { resolveConfigFromCode, useConfigSwitcher } from '@/context/ConfigContext';

export default function SwitchProfilePage() {
  const params = useParams();
  const router = useRouter();
  const { switchConfig } = useConfigSwitcher();
  const [status, setStatus] = useState<'loading' | 'error'>('loading');

  useEffect(() => {
    const code = params?.code as string;
    const resolved = resolveConfigFromCode(code);

    if (resolved) {
      switchConfig(resolved);
      router.push('/');
    } else {
      setStatus('error');
      const timer = setTimeout(() => {
        router.push('/');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [params, switchConfig, router]);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg-primary)',
    }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--border-color)',
          borderRadius: '20px',
          padding: '48px 56px',
          textAlign: 'center',
          boxShadow: 'var(--shadow-lg)',
          maxWidth: '400px',
          width: '90%',
        }}
      >
        {status === 'loading' && (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
              style={{
                width: 48, height: 48, borderRadius: '50%',
                border: '3px solid var(--border-color)',
                borderTop: '3px solid var(--accent-color)',
                margin: '0 auto 24px',
              }}
            />
            <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Verificando...</p>
          </>
        )}

        {status === 'error' && (
          <>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <HiXCircle size={56} style={{ color: '#ef4444', margin: '0 auto 16px', display: 'block' }} />
            </motion.div>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 8px', fontSize: '22px', fontWeight: 700 }}>
              Código inválido
            </h2>
            <p style={{ color: 'var(--text-secondary)', margin: '0 0 16px', fontSize: '15px' }}>
              El enlace que usaste no es válido o ha expirado.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '13px', margin: 0 }}>
              Redirigiendo al inicio...
            </p>
          </>
        )}
      </motion.div>
    </div>
  );
}
