'use client';

import { useEffect } from 'react';
import { useConfig } from '@/context/ConfigContext';

export default function DynamicTitle() {
  const config = useConfig();

  useEffect(() => {
    if (config?.meta?.title) {
      document.title = config.meta.title;
    }
  }, [config?.meta?.title]);

  return null;
}
