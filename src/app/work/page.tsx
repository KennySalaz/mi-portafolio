'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useConfig } from '@/context/ConfigContext';
import { getIcon } from '@/config/iconMap';
import styles from '@/styles/PageLayout.module.css';
import workStyles from '@/styles/Work.module.css';

export default function WorkPage() {
  const { t } = useLanguage();
  const config = useConfig();

  const projects = config.work.projects.map((project) => {
    const achievementsRaw = project.achievementsKey && t(project.achievementsKey) !== project.achievementsKey 
      ? t(project.achievementsKey) 
      : "";
    
    return {
      title: t(project.titleKey),
      category: project.category,
      description: t(project.descKey),
      achievements: achievementsRaw ? achievementsRaw.split('|') : [],
      tags: project.tags,
      icon: getIcon(project.icon),
      url: project.url,
    };
  });

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
      <motion.div variants={itemVariants} className={workStyles.headerSection}>
        <h1 className={styles.pageTitle}>{t('work.title')}</h1>
        <div className={styles.titleUnderline} />
        <p className={workStyles.headerDescription}>{t('work.description')}</p>
      </motion.div>

      <div className={workStyles.projectsGrid}>
        {projects.map((project, i) => {
          const Icon = project.icon;
          return (
            <motion.div
              key={i}
              className={workStyles.projectCard}
              variants={itemVariants}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className={workStyles.projectContent}>
                <div className={workStyles.projectHeader}>
                  <div className={workStyles.projectIcon}>
                    {Icon && <Icon size={24} />}
                  </div>
                  <span className={workStyles.projectCategory}>{project.category}</span>
                </div>
                <h3 className={workStyles.projectTitle}>{project.title}</h3>
                <p className={workStyles.projectDescription}>{project.description}</p>
                
                {project.achievements && project.achievements.length > 0 && (
                  <ul className={workStyles.projectAchievements}>
                    {project.achievements.map((ach, idx) => (
                      <li key={idx}>
                        <span className={workStyles.achievementDot} />
                        {ach}
                      </li>
                    ))}
                  </ul>
                )}
                
                <div className={workStyles.projectTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={workStyles.projectTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
