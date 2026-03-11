'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { useConfig } from './ConfigContext';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const config = useConfig();
  const defaultTheme = (config.theme.defaultTheme as Theme) || 'dark';
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const applyThemeColors = useCallback((currentTheme: Theme) => {
    const colors = config.theme.colors[currentTheme];
    if (colors) {
      const root = document.documentElement;
      Object.entries(colors).forEach(([key, value]) => {
        root.style.setProperty(key, value);
      });
    }
  }, [config]);

  // React to config changes (when switching portfolios)
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    applyThemeColors(theme);
  }, [config, theme, applyThemeColors]);

  // Initial load: read saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    applyThemeColors(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
