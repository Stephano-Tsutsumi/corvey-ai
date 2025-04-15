'use client';

import { useTheme } from '@/context/ThemeContext';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
        theme === 'dark' 
          ? 'bg-gray-800 hover:bg-gray-700 text-yellow-300' 
          : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
      } ${className}`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </button>
  );
} 