import { useEffect, useState } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

  useEffect(() => {
    const html = document.documentElement;

    if (theme === 'dark') {
      html.classList.add('dark');
      html.classList.remove('light');
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#000000');
    } else {
      html.classList.remove('dark');
      html.classList.add('light');
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#0070f3');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
};
