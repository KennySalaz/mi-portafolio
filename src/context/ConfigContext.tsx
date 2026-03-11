'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import kennyConfig from '@/config/portfolio.config.json';
import nemesisConfig from '@/config/nemesis.config.json';
import { PortfolioConfig } from '@/config/types';

const configs: Record<string, PortfolioConfig> = {
    kenny: kennyConfig as PortfolioConfig,
    nemesis: nemesisConfig as PortfolioConfig,
};

// Mapeo de códigos secretos → perfil
const SECRET_CODES: Record<string, string> = {
    'k3nny-d3v-2026': 'kenny',
    'n3m3s1s-pr0-2026': 'nemesis',
};

export function resolveConfigFromCode(code: string): string | null {
    return SECRET_CODES[code] ?? null;
}

const configKeys = Object.keys(configs);

interface ConfigContextType {
    config: PortfolioConfig;
    configKey: string;
    allConfigKeys: string[];
    switchConfig: (key: string) => void;
}

const ConfigContext = createContext<ConfigContextType>({
    config: configs.kenny,
    configKey: 'kenny',
    allConfigKeys: configKeys,
    switchConfig: () => { },
});

export function ConfigProvider({ children }: { children: React.ReactNode }) {
    const [configKey, setConfigKey] = useState('kenny');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('portfolioProfile');
        if (saved && configs[saved]) {
            setConfigKey(saved);
        }
        setMounted(true);
    }, []);

    const switchConfig = useCallback((key: string) => {
        if (configs[key]) {
            setConfigKey(key);
            localStorage.setItem('portfolioProfile', key);
        }
    }, []);

    const value = {
        config: configs[configKey],
        configKey,
        allConfigKeys: configKeys,
        switchConfig,
    };

    if (!mounted) return null;

    return (
        <ConfigContext.Provider value={value}>
            {children}
        </ConfigContext.Provider>
    );
}

export function useConfig(): PortfolioConfig {
    return useContext(ConfigContext).config;
}

export function useConfigSwitcher() {
    const { configKey, allConfigKeys, switchConfig } = useContext(ConfigContext);
    return { configKey, allConfigKeys, switchConfig };
}
