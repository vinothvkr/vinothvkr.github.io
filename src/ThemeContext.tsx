'use client';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { UseThemeProps } from './types';

const cookieName: string = '__theme__';
const defaultContext: UseThemeProps = { changeTheme: () => {} };
const ThemeContext = createContext<UseThemeProps | undefined>(undefined);
const themes = ['light', 'dark'];
export const useTheme = () => useContext(ThemeContext) ?? defaultContext;

export function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const theme = getThemePreference();
    if (theme) {
      setTheme(theme);
      setThemePreference(theme);
    }
  }, []);

  const changeTheme = useCallback((theme: 'light' | 'dark') => {
    if (themes.some(x => x === theme)) {
      setTheme(theme);
      setThemePreference(theme);
    }
  }, []);

  if (!mounted) {
    return <>Loading...</>;
  }

  return <ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>;
}

const getThemePreference = () => {
  const theme = localStorage.getItem(cookieName);
  if (theme === 'light') return 'light';
  if (theme === 'dark') return 'dark';
};

const setThemePreference = (theme: 'light' | 'dark') => {
  localStorage.setItem(cookieName, theme);
  document.documentElement.setAttribute('data-theme', theme);
  // document.documentElement.style.setProperty('color-scheme', theme);
};
