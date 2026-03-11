'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import kennyConfig from '@/config/portfolio.config.json';
import nemesisConfig from '@/config/nemesis.config.json';
import { PortfolioConfig } from '@/config/types';

const configs: Record<string, PortfolioConfig> = {
    kenny: kennyConfig as PortfolioConfig,
    nemesis: nemesisConfig as PortfolioConfig,
};

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

    const switchConfig = useCallback((key: string) => {
        if (configs[key]) {
            setConfigKey(key);
        }
    }, []);

    const value = {
        config: configs[configKey],
        configKey,
        allConfigKeys: configKeys,
        switchConfig,
    };

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
