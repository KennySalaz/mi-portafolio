'use client';

import { useEffect } from 'react';
import { useConfig } from '@/context/ConfigContext';
import kennyConfig from '@/config/portfolio.config.json';
import nemesisConfig from '@/config/nemesis.config.json';

const titleMap: Record<string, string> = {
  kenny: kennyConfig.meta.title,
  nemesis: nemesisConfig.meta.title,
};

export default function DynamicTitle() {
  const config = useConfig();

  useEffect(() => {
    const profile = localStorage.getItem('portfolioProfile') ?? 'kenny';
    const title = titleMap[profile] ?? config?.meta?.title;
    if (title) {
      document.title = title;
    }
  }, [config?.meta?.title]);

  return null;
}
