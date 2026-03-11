'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiMoon, HiSun } from 'react-icons/hi';
import { useTheme } from '@/context/ThemeContext';
import styles from '@/styles/ThemeToggle.module.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={styles.toggle} style={{ opacity: 0 }}>
        <HiMoon size={20} />
      </div>
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className={styles.toggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'light' ? <HiMoon size={20} /> : <HiSun size={20} />}
      </motion.div>
    </motion.button>
  );
}
