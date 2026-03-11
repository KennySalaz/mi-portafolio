'use client';

import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { resolveConfigFromCode, useConfigSwitcher } from '@/context/ConfigContext';

export default function SwitchProfilePage() {
  const params = useParams();
  const router = useRouter();
  const { switchConfig } = useConfigSwitcher();

  useEffect(() => {
    const code = params?.code as string;
    const resolved = resolveConfigFromCode(code);

    if (resolved) {
      switchConfig(resolved);
      router.push('/');
    } else {
      router.push('/404');
    }
  }, [params, switchConfig, router]);

  return null;
}
