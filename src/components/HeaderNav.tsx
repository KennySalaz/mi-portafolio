'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '@/context/LanguageContext';
import { useConfig } from '@/context/ConfigContext';
import { getIcon } from '@/config/iconMap';
import styles from '@/styles/HeaderNav.module.css';

const HeaderNav: React.FC = () => {
  const pathname = usePathname();
  const { t } = useLanguage();
  const config = useConfig();

  const navItems = config.navigation.pages.map((page) => ({
    id: page.id,
    label: t(page.labelKey),
    icon: getIcon(page.icon),
  }));

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        <div className={styles.logo}>{config.profile.name}</div>

        <nav className={styles.nav}>
          {navItems.map((item) => {
            const isActive = pathname === item.id;
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                href={item.id}
                className={`${styles.navButton} ${isActive ? styles.active : ''}`}
              >
                {Icon && <Icon size={18} />}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className={styles.actions}>
          <LanguageToggle />
          <ThemeToggle />
          <select
            value={pathname}
            onChange={(e) => (window.location.href = e.target.value)}
            className={styles.mobileSelect}
          >
            {navItems.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </motion.header>
  );
};

export default HeaderNav;
