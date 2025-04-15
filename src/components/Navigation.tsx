'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

const Navigation = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if user had a preference saved in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <svg className="h-10 w-10 text-indigo-600 dark:text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 3.5V2M5.5 5.5H4M5.5 14.5H4M14.5 5.5H16M9 16V17.5M12.5 14.5H14.5M12.5 5.5H14M5.5 9H4.5M14.5 9H16M9 5.5V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M7 10.5V13.5M12 7.5V10.5M9.5 8.5V11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <rect x="5" y="5" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span className="ml-3 text-2xl font-bold text-gray-900 dark:text-white">Corvey</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link href="#features" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                Features
              </Link>
              <Link href="#how-it-works" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                How It Works
              </Link>
              <Link href="#testimonials" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                Testimonials
              </Link>
            </div>
            <div className="flex items-center ml-6 space-x-3">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
              <Button variant="outline" className="text-indigo-600 dark:text-indigo-400 border-indigo-600 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30">
                Log in
              </Button>
              <Button 
                className="bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-500 dark:hover:bg-indigo-600"
              >
                Sign up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
