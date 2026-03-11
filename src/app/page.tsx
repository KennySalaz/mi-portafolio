'use client';

import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import Link from 'next/link';
import { HiBriefcase, HiMail } from 'react-icons/hi';
import Testimonials from '@/components/Testimonials';
import { useLanguage } from '@/context/LanguageContext';
import { useConfig } from '@/context/ConfigContext';
import styles from '@/styles/Hero.module.css';

// Componente para animar números
const AnimatedCounter = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = React.useState('0');

  React.useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest).toString());
      },
    });

    return controls.stop;
  }, [count, value]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
};

export default function HomePage() {
  const { t } = useLanguage();
  const config = useConfig();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const stats = config.home.stats.map((stat) => ({
    number: stat.number,
    suffix: stat.suffix,
    label: t(stat.labelKey),
  }));

  return (
    <motion.div
      className={styles.hero}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p className={styles.greeting} variants={itemVariants}>
        {t('home.greeting')}
      </motion.p>

      <motion.h1 className={styles.title} variants={itemVariants}>
        <span className={styles.highlight}>{config.profile.name}</span>
        <br />
        {t('home.title')}
      </motion.h1>

      <motion.p className={styles.subtitle} variants={itemVariants}>
        {t('home.description')}
      </motion.p>

      <motion.div className={styles.chips} variants={itemVariants}>
        {config.home.techChips.map((tech, i) => (
          <motion.span
            key={tech}
            className={styles.chip}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + i * 0.05 }}
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>

      <motion.div className={styles.cta} variants={itemVariants}>
        <Link href="/work" className={styles.ctaButton}>
          <HiBriefcase size={20} />
          <span>{t('home.cta')}</span>
        </Link>
        <Link href="/contact" className={`${styles.ctaButton} ${styles.ctaSecondary}`}>
          <HiMail size={20} />
          <span>{t('nav.contact')}</span>
        </Link>
      </motion.div>

      <motion.div className={styles.stats} variants={itemVariants}>
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className={styles.stat}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 0.1 }}
          >
            <div className={styles.statNumber}>
              <AnimatedCounter value={stat.number} suffix={stat.suffix} />
            </div>
            <div className={styles.statLabel}>{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      <Testimonials />
    </motion.div>
  );
}
