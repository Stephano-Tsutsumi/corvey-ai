'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

const AIRTABLE_FORM_URL = 'https://airtable.com/appxgh06clCE26z1H/shrySLs15u1uBwOQT';

const Hero = () => {
  return (
    <section className="relative pt-16 pb-40 overflow-hidden dark:bg-gray-900">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 dark:bg-gray-800 z-[-1]" 
           style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-16">
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:mt-5 sm:text-5xl lg:mt-6 xl:text-6xl">
                <span className="block">Transform Education</span>
                <span className="block text-indigo-600 dark:text-indigo-400">with Corvey</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Connect to all your Canvas data or favorite notes app. Find, create, and automate anything. Experience a new way of learning with AI-powered search and virtual teaching assistants.
              </p>
              <div className="mt-8 sm:mt-12">
                <div className="sm:max-w-xl sm:mx-auto lg:mx-0">
                  <div className="sm:flex justify-center lg:justify-start">
                    <a 
                      href={AIRTABLE_FORM_URL} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full sm:w-auto"
                    >
                      <Button 
                        className="w-full py-3 px-6 rounded-md shadow text-white font-medium text-center flex items-center justify-center transition-transform hover:scale-105" 
                        style={{ background: 'linear-gradient(to right, #4F46E5, #7C3AED)' }}
                      >
                        Join Waitlist
                      </Button>
                    </a>
                  </div>
                </div>
                <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                  Be among the first to experience Corvey. No spam, we promise.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:relative flex justify-center items-center">
            <div className="mx-auto max-w-md sm:max-w-xl md:max-w-2xl px-4 sm:px-6 lg:max-w-none lg:px-0 w-full">
              <div className="w-full lg:relative lg:h-full flex justify-center items-center">
                <Image 
                  src="/corvey-dash-v4.png" 
                  alt="Corvey AI Dashboard" 
                  width={1100} 
                  height={900} 
                  className="rounded-xl shadow-2xl object-contain mx-auto max-w-full dark:shadow-indigo-500/40 hover:scale-105 transition-transform duration-300" 
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;