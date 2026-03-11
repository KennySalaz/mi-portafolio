'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HiAcademicCap, HiBriefcase, HiCodeBracket } from 'react-icons/hi2';
import { useLanguage } from '@/context/LanguageContext';
import { useConfig } from '@/context/ConfigContext';
import styles from '@/styles/PageLayout.module.css';
import resumeStyles from '@/styles/Resume.module.css';

export default function AboutPage() {
  const { t } = useLanguage();
  const config = useConfig();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <h1 className={styles.pageTitle}>{t('about.title')}</h1>
        <div className={styles.titleUnderline} />
      </motion.div>

      <div className={resumeStyles.section}>
        <motion.div variants={itemVariants}>
          <div className={resumeStyles.sectionHeader}>
            <HiAcademicCap className={resumeStyles.sectionIcon} size={28} />
            <h2 className={resumeStyles.sectionTitle}>{t('about.education')}</h2>
          </div>
          <div className={resumeStyles.grid}>
            {config.about.education.map((item, i) => (
              <motion.div
                key={i}
                className={resumeStyles.card}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <p className={resumeStyles.cardPeriod}>{item.period}</p>
                <h3 className={resumeStyles.cardTitle}>{item.title}</h3>
                <p className={resumeStyles.cardSubtitle}>{item.institution}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className={resumeStyles.sectionHeader}>
            <HiBriefcase className={resumeStyles.sectionIcon} size={28} />
            <h2 className={resumeStyles.sectionTitle}>{t('about.experience')}</h2>
          </div>
          <div className={resumeStyles.grid}>
            {config.about.experience.map((item, i) => (
              <motion.div
                key={i}
                className={resumeStyles.card}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <p className={resumeStyles.cardPeriod}>{item.period}</p>
                <h3 className={resumeStyles.cardTitle}>{item.title}</h3>
                <p className={resumeStyles.cardSubtitle}>{item.company}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className={resumeStyles.sectionHeader}>
            <HiCodeBracket className={resumeStyles.sectionIcon} size={28} />
            <h2 className={resumeStyles.sectionTitle}>{t('about.skills')}</h2>
          </div>
          <div className={resumeStyles.skillsContainer}>
            {Object.entries(config.about.skills).map(([category, items], i) => (
              <motion.div
                key={category}
                className={resumeStyles.skillCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
              >
                <h3 className={resumeStyles.categoryTitle}>{category}</h3>
                <div className={resumeStyles.skillTags}>
                  {items.map((skill: string, j: number) => (
                    <motion.span
                      key={skill}
                      className={resumeStyles.skillTag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.1 + j * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
