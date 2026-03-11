'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useConfig } from '@/context/ConfigContext';
import { getIcon } from '@/config/iconMap';
import styles from '@/styles/PageLayout.module.css';
import techStyles from '@/styles/TechStack.module.css';

export default function TechStackPage() {
  const { t } = useLanguage();
  const config = useConfig();

  const categories = config.techStack.categories.map((cat) => ({
    title: t(cat.titleKey),
    skills: cat.skills.map((skill) => ({
      name: skill.name,
      icon: getIcon(skill.icon),
      level: skill.level,
      color: skill.color,
    })),
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={categoryVariants}>
        <h1 className={styles.pageTitle}>{t('stack.title')}</h1>
        <div className={styles.titleUnderline} />
        <p className={techStyles.intro}>
          {t('stack.intro')}
        </p>
      </motion.div>

      <div className={techStyles.categories}>
        {categories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            className={techStyles.category}
            variants={categoryVariants}
          >
            <h2 className={techStyles.categoryTitle}>{category.title}</h2>
            <div className={techStyles.skills}>
              {category.skills.map((skill, skillIndex) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skillIndex}
                    className={techStyles.skillCard}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    <div className={techStyles.skillHeader}>
                      <div
                        className={techStyles.iconWrapper}
                        style={{ backgroundColor: `${skill.color}20` }}
                      >
                        {Icon && (
                          <Icon
                            size={32}
                            color={skill.color}
                          />
                        )}
                      </div>
                      <div className={techStyles.skillInfo}>
                        <h3 className={techStyles.skillName}>{skill.name}</h3>
                        <span className={techStyles.skillLevel}>{skill.level}%</span>
                      </div>
                    </div>

                    <div className={techStyles.progressBar}>
                      <motion.div
                        className={techStyles.progressFill}
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: catIndex * 0.15 + skillIndex * 0.1 }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className={techStyles.footer}
        variants={categoryVariants}
      >
        <p>
          {t('stack.footer')}
        </p>
      </motion.div>
    </motion.div>
  );
}
