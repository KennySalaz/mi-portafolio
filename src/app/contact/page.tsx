'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HiPaperAirplane } from 'react-icons/hi';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Gracias por tu mensaje. Te contactaré pronto!');
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

      <motion.form
        className={contactStyles.form}
        variants={itemVariants}
        onSubmit={handleSubmit}
      >
        <h2 className={contactStyles.formTitle}>{t('contact.or')}</h2>

        <div className={contactStyles.formGroup}>
          <label htmlFor="name" className={contactStyles.label}>
            {t('contact.name')}
          </label>
          <input
            type="text"
            id="name"
            className={contactStyles.input}
            placeholder={t('contact.name')}
            required
          />
        </div>

        <div className={contactStyles.formGroup}>
          <label htmlFor="email" className={contactStyles.label}>
            {t('contact.email')}
          </label>
          <input
            type="email"
            id="email"
            className={contactStyles.input}
            placeholder={t('contact.email')}
            required
          />
        </div>

        <div className={contactStyles.formGroup}>
          <label htmlFor="message" className={contactStyles.label}>
            {t('contact.message')}
          </label>
          <textarea
            id="message"
            className={contactStyles.textarea}
            placeholder={t('contact.message')}
            required
          />
        </div>

        <motion.button
          type="submit"
          className={contactStyles.submitButton}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <HiPaperAirplane size={20} />
          <span>{t('contact.send')}</span>
        </motion.button>
      </motion.form>
    </motion.div>
  );
}
