'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HiStar } from 'react-icons/hi';
import { useLanguage } from '@/context/LanguageContext';
import { useConfig } from '@/context/ConfigContext';
import styles from '@/styles/Testimonials.module.css';

export default function Testimonials() {
  const { t } = useLanguage();
  const config = useConfig();

  const testimonials = config.testimonials.map((item) => ({
    name: t(item.name),
    role: t(item.role),
    avatar: item.avatar,
    text: t(item.textKey),
    rating: item.rating,
  }));

  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.title}>{t('home.testimonials.title')}</h2>
        <p className={styles.subtitle}>
          {t('home.testimonials.title')}
        </p>
      </motion.div>

      <div className={styles.grid}>
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className={styles.rating}>
              {[...Array(testimonial.rating)].map((_, j) => (
                <HiStar key={j} className={styles.star} size={18} />
              ))}
            </div>
            <p className={styles.text}>{testimonial.text}</p>
            <div className={styles.author}>
              <div className={styles.avatar}>{testimonial.avatar}</div>
              <div>
                <div className={styles.authorName}>{testimonial.name}</div>
                <div className={styles.authorRole}>{testimonial.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
