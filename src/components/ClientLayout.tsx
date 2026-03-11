'use client';

import React from 'react';
import HeaderNav from '@/components/HeaderNav';
import ProfileCard from '@/components/ProfileCard';
import AuthGuard from '@/components/AuthGuard';
import DynamicTitle from '@/components/DynamicTitle';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';
import { ConfigProvider } from '@/context/ConfigContext';
import styles from '@/styles/PageLayout.module.css';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
      <ConfigProvider>
      <LanguageProvider>
        <ThemeProvider>
          <DynamicTitle />
          <AuthGuard>
            <HeaderNav />
            <div className={styles.container}>
              <div className={styles.grid}>
                <div className={styles.sidebar}>
                  <ProfileCard />
                </div>
                <main className={styles.content}>{children}</main>
              </div>
            </div>
          </AuthGuard>
        </ThemeProvider>
      </LanguageProvider>
    </ConfigProvider>
  );
}
