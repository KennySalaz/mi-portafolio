'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import styles from '@/styles/LanguageToggle.module.css';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={styles.toggle} style={{ opacity: 0 }}>
        ES
      </div>
    );
  }

  return (
    <motion.button
      onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
      className={styles.toggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle language"
    >
      <span className={language === 'es' ? styles.active : ''}>ES</span>
      <span className={styles.separator}>/</span>
      <span className={language === 'en' ? styles.active : ''}>EN</span>
    </motion.button>
  );
}
