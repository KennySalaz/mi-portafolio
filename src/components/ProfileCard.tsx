'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiLocationMarker, HiCheckCircle } from 'react-icons/hi';
import { IoMdDownload } from 'react-icons/io';
import { useLanguage } from '@/context/LanguageContext';
import { useConfig } from '@/context/ConfigContext';
import { getIcon } from '@/config/iconMap';
import styles from '@/styles/ProfileCard.module.css';

const ProfileCard: React.FC = () => {
  const { t } = useLanguage();
  const config = useConfig();
  const { profile } = config;

  const info = [
    { label: 'Email', value: profile.email, icon: HiMail, link: `mailto:${profile.email}` },
    { label: t('profile.location'), value: profile.location, icon: HiLocationMarker },
    { label: 'Disponibilidad', value: profile.availability, icon: HiCheckCircle },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
      },
    }),
  };

  return (
    <motion.aside
      className={styles.card}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.avatarContainer}>
        <motion.div
          className={styles.avatar}
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {profile.initials}
        </motion.div>

        {/* Status Badge */}
        <motion.div
          className={styles.statusBadge}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
        >
          <span className={styles.statusDot} />
          <span>{t('profile.status')}</span>
        </motion.div>

        <h1 className={styles.name}>{profile.name}</h1>
        <p className={styles.title}>{t('profile.role')}</p>

        <div className={styles.badges}>
          {profile.badges.map((badge, i) => (
            <motion.span
              key={badge}
              className={styles.badge}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.05 }}
            >
              {badge}
            </motion.span>
          ))}
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.contactInfo}>
        {info.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              className={styles.contactItem}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <div className={styles.icon}>
                <Icon size={20} />
              </div>
              <div className={styles.contactContent}>
                <p className={styles.contactLabel}>{item.label}</p>
                {item.link ? (
                  <a href={item.link} className={styles.contactValue}>
                    {item.value}
                  </a>
                ) : (
                  <p className={styles.contactValue}>{item.value}</p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.a
        href={profile.cvUrl || `mailto:${profile.email}`}
        className={styles.downloadBtn}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <IoMdDownload size={20} />
        <span>{t('profile.download')}</span>
      </motion.a>

      <div className={styles.socialLinks}>
        {profile.socialLinks.map((social, i) => {
          const Icon = getIcon(social.platform);
          if (!Icon) return null;
          return (
            <motion.a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              title={social.label}
            >
              <Icon size={20} />
            </motion.a>
          );
        })}
      </div>
    </motion.aside>
  );
};

export default ProfileCard;
