'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <svg className="h-8 w-8 text-indigo-600 dark:text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 3.5V2M5.5 5.5H4M5.5 14.5H4M14.5 5.5H16M9 16V17.5M12.5 14.5H14.5M12.5 5.5H14M5.5 9H4.5M14.5 9H16M9 5.5V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M7 10.5V13.5M12 7.5V10.5M9.5 8.5V11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <rect x="5" y="5" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span className="ml-2 text-xl font-bold">Corvey</span>
              </div>
              <ThemeToggle className="xl:hidden" />
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-base">
              Transforming education through AI-powered learning experiences. Empowering students and educators with intelligent tools for better outcomes.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase">Platform</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/features" className="text-base text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="text-base text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/testimonials" className="text-base text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white">
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="text-base text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase">Resources</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/blog" className="text-base text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/tutorials" className="text-base text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white">
                      Tutorials
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides" className="text-base text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white">
                      Guides
                    </Link>
                  </li>
                  <li>
                    <Link href="/documentation" className="text-base text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white">
                      Documentation
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/about" className="text-base text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/team" className="text-base text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white">
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-base text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-base text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase">Legal</h3>
                  <ThemeToggle className="hidden xl:block" />
                </div>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/privacy" className="text-base text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-base text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link href="/accessibility" className="text-base text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white">
                      Accessibility
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-base text-gray-500 dark:text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} Corvey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;