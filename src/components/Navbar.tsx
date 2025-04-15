'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <svg className="h-8 w-8 text-indigo-600 dark:text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 3.5V2M5.5 5.5H4M5.5 14.5H4M14.5 5.5H16M9 16V17.5M12.5 14.5H14.5M12.5 5.5H14M5.5 9H4.5M14.5 9H16M9 5.5V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M7 10.5V13.5M12 7.5V10.5M9.5 8.5V11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <rect x="5" y="5" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">Corvey</span>
            </Link>

            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/features" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Features
              </Link>
              <Link href="/pricing" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Pricing
              </Link>
              <Link href="/testimonials" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Testimonials
              </Link>
              <Link href="/blog" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Blog
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <ThemeToggle className="ml-4" />

            <div className="flex items-center sm:hidden ml-4">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>

            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <Link
                href="/login"
                className="ml-8 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="ml-4 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="pt-2 pb-3 space-y-1">
            <Link href="/features" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-700">
              Features
            </Link>
            <Link href="/pricing" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-700">
              Pricing
            </Link>
            <Link href="/testimonials" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-700">
              Testimonials
            </Link>
            <Link href="/blog" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-700">
              Blog
            </Link>
            <div className="mt-4 flex space-x-4 px-3">
              <Link
                href="/login"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 