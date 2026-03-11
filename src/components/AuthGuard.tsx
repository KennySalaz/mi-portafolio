'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { HiHome, HiExclamationCircle } from 'react-icons/hi';
import { useAuthorized } from '@/context/ConfigContext';

function BlockedScreen() {
  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg-primary)',
      padding: '24px',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 9999,
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--border-color)',
          borderRadius: '24px',
          padding: '56px 64px',
          textAlign: 'center',
          boxShadow: 'var(--shadow-lg)',
          maxWidth: '460px',
          width: '100%',
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 180, delay: 0.1 }}
        >
          <HiExclamationCircle
            size={64}
            style={{ color: 'var(--accent-color)', margin: '0 auto 24px', display: 'block' }}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            fontSize: '72px',
            fontWeight: 800,
            color: 'var(--accent-color)',
            margin: '0 0 8px',
            lineHeight: 1,
          }}
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            fontSize: '20px',
            fontWeight: 600,
            color: 'var(--text-primary)',
            margin: '0 0 12px',
          }}
        >
          Página no encontrada
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{
            fontSize: '15px',
            color: 'var(--text-secondary)',
            margin: '0 0 32px',
            lineHeight: 1.6,
          }}
        >
          La ruta que intentas acceder no existe o no es válida.
        </motion.p>
      </motion.div>
    </div>
  );
}

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const authorized = useAuthorized();
  const pathname = usePathname();

  const isPublicPath =
    pathname.startsWith('/switch/') || pathname === '/404';

  if (!authorized && !isPublicPath) {
    return <BlockedScreen />;
  }

  return <>{children}</>;
}
