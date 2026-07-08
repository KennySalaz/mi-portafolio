'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useConfig } from '@/context/ConfigContext';
import { getIcon } from '@/config/iconMap';
import styles from '@/styles/PageLayout.module.css';
import contactStyles from '@/styles/Contact.module.css';

export default function ContactPage() {
  const { t } = useLanguage();
  const config = useConfig();

  const contactMethods = config.contact.methods.map((method) => ({
    icon: getIcon(method.icon),
    label: method.label.includes('.') ? t(method.label) : method.label,
    value: method.value,
    link: method.link,
  }));

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
      className={contactStyles.contactContainer}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <h1 className={styles.pageTitle}>{t('contact.title')}</h1>
        <div className={styles.titleUnderline} />
      </motion.div>

      <motion.div className={contactStyles.intro} variants={itemVariants}>
        <p className={contactStyles.introText}>
          {t('contact.intro')}
        </p>
      </motion.div>

      <div className={contactStyles.contactMethods}>
        {contactMethods.map((method, i) => {
          const Icon = method.icon;
          return (
            <motion.div
              key={i}
              className={contactStyles.contactCard}
              variants={itemVariants}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className={contactStyles.contactIcon}>
                {Icon && <Icon size={32} />}
              </div>
              <p className={contactStyles.contactLabel}>{method.label}</p>
              {method.link ? (
                <a
                  href={method.link}
                  className={`${contactStyles.contactValue} ${contactStyles.contactLink}`}
                >
                  {method.value}
                </a>
              ) : (
                <p className={contactStyles.contactValue}>{method.value}</p>
              )}
            </motion.div>
          );
        })}
      </div>

    </motion.div>
  );
}
