'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiHome, HiExclamationCircle } from 'react-icons/hi';

export default function NotFoundPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg-primary)',
      padding: '24px',
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

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'var(--accent-color)',
              color: '#fff',
              padding: '12px 28px',
              borderRadius: '12px',
              fontWeight: 600,
              fontSize: '15px',
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
          >
            <HiHome size={18} />
            Volver al inicio
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
