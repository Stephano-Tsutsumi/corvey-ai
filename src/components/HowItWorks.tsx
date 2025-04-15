'use client';

import Image from 'next/image';
import { Key, Database, Video, Mic, Search, Calendar, BookOpen, BarChart, Sparkles, Layout, Palette, Zap } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase">How It Works</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight">Simple steps to enhanced learning</p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-300">Corvey is designed to be intuitive and easy to use, integrating seamlessly with your existing education tools.</p>
        </div>

        {/* First section */}
        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="relative lg:pr-6">
            <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-3xl">Connect your learning platforms</h3>
            <p className="mt-3 text-lg text-gray-500 dark:text-gray-300">Corvey connects to your existing learning management systems like Canvas, integrating with all your class materials and data.</p>

            <dl className="mt-10 space-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <Key className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">Secure authentication</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                  Authorize Corvey to access your LMS with our secure OAuth integration that respects your privacy.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <Database className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">Data synchronization</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                  Your assignments, readings, videos, and discussions are automatically indexed and kept up to date.
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0 lg:pl-6">
            <div className="relative mx-auto rounded-lg shadow-lg overflow-hidden w-full lg:w-auto" style={{ backgroundColor: "#FFF8E1" }}>
              <Image 
                src="/Corvey-auth.png" 
                alt="LMS Integration with Canvas and Blackboard" 
                width={600} 
                height={450} 
                className="object-contain w-full h-auto max-h-[450px]" 
                priority
              />
            </div>
          </div>
        </div>

        {/* Second section */}
        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="lg:col-start-2 lg:pl-6">
              <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-3xl">Create your AI teaching assistant</h3>
              <p className="mt-3 text-lg text-gray-500 dark:text-gray-300">
                Upload videos of your professors to capture their teaching style and create personalized AI tutors.
              </p>

              <dl className="mt-10 space-y-10">
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <Video className="h-6 w-6" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">Video processing</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                    Our advanced AI analyzes teaching patterns, explanations, and communication styles from lecture videos.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <Mic className="h-6 w-6" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">Personalized responses</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                    Get homework help in your teacher's familiar communication style, making complex concepts easier to understand.
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1 lg:pr-6">
              <div className="relative mx-auto rounded-lg shadow-lg overflow-hidden w-full lg:w-auto" style={{ backgroundColor: "#F5F5EB" }}>
                <Image 
                  src="/teacher-2.png" 
                  alt="AI Teacher Assistant explaining concepts at a chalkboard" 
                  width={624} 
                  height={450} 
                  className="object-cover w-full h-full" 
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Third section */}
        <div className="relative mt-12 sm:mt-16 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="relative lg:pr-6">
            <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-3xl">Boost your productivity and grades</h3>
            <p className="mt-3 text-lg text-gray-500 dark:text-gray-300">
              Corvey supercharges your study habits with intelligent tools designed specifically for students.
            </p>

            <dl className="mt-10 space-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <Search className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">Intelligent search</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                  Discover connections between all your learning materials that you'd never find manually. Our semantic search finds relationships between lecture notes, readings, and discussions, helping you understand topics more deeply.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">Smart scheduling</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                  Turn assignment chaos into organized success with our intelligent timeline. Click any assignment to see detailed outlines, attach your notes, and automatically generate study materials like flash cards to ace your exams.
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0 lg:pl-6">
            <div className="relative mx-auto rounded-lg shadow-lg overflow-hidden w-full lg:w-auto" style={{ backgroundColor: "#E6F7FF" }}>
              <div className="grid grid-cols-2 gap-4 p-6">
                <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-4">
                  <div className="flex items-center mb-3">
                    <BookOpen className="h-5 w-5 text-indigo-500 mr-2" />
                    <span className="font-medium text-gray-900 dark:text-white">Smart Search</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Find connections across all your course materials instantly</p>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-4">
                  <div className="flex items-center mb-3">
                    <BarChart className="h-5 w-5 text-indigo-500 mr-2" />
                    <span className="font-medium text-gray-900 dark:text-white">Study Analytics</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Track your progress with detailed insights</p>
                </div>
                <div className="col-span-2 bg-white dark:bg-gray-700 rounded-lg shadow p-4 mt-2">
                  <div className="flex items-center mb-3">
                    <Calendar className="h-5 w-5 text-indigo-500 mr-2" />
                    <span className="font-medium text-gray-900 dark:text-white">Dynamic Schedule</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Your assignments, readings, and study materials organized in one intuitive timeline</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fourth section */}
        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="lg:col-start-2 lg:pl-6">
              <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-3xl">Beautifully simple by design</h3>
              <p className="mt-3 text-lg text-gray-500 dark:text-gray-300">
                No complicated menus or confusing options. Just a clean, visual interface that makes learning enjoyable, not overwhelming.
              </p>

              <dl className="mt-10 space-y-10">
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">Visual learning maps</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                    See your course content as an interconnected web that shows relationships between topics. Visually navigate through subjects in a way that naturally builds understanding.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <Zap className="h-6 w-6" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">Designed for focus</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                    Unlike other complex tools, Corvey is built for students. Beautiful visuals keep you motivated, while the simple interface eliminates distractions and frustration.
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1 lg:pr-6">
              <div className="relative mx-auto rounded-lg shadow-lg overflow-hidden w-full lg:w-auto" style={{ backgroundColor: "#F0EBFF" }}>
                <div className="relative p-6">
                  {/* Visual node map representation */}
                  <div className="w-full h-[350px] relative flex items-center justify-center">
                    <div className="absolute w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 shadow-lg">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    
                    {/* Connecting lines */}
                    <div className="absolute w-full h-full">
                      {/* Node 1 */}
                      <div className="absolute w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center top-[30%] left-[25%] shadow-md z-10">
                        <Layout className="h-5 w-5 text-white" />
                      </div>
                      <div className="absolute h-[2px] bg-purple-400 w-[20%] top-[32%] left-[32%] z-0" />
                      
                      {/* Node 2 */}
                      <div className="absolute w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center top-[25%] right-[30%] shadow-md z-10">
                        <Search className="h-5 w-5 text-white" />
                      </div>
                      <div className="absolute h-[2px] bg-blue-400 w-[15%] top-[28%] right-[37%] transform rotate-[25deg] z-0" />
                      
                      {/* Node 3 */}
                      <div className="absolute w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center bottom-[30%] left-[30%] shadow-md z-10">
                        <Video className="h-5 w-5 text-white" />
                      </div>
                      <div className="absolute h-[2px] bg-pink-400 w-[18%] bottom-[33%] left-[37%] transform -rotate-[25deg] z-0" />
                      
                      {/* Node 4 */}
                      <div className="absolute w-10 h-10 bg-green-500 rounded-full flex items-center justify-center bottom-[25%] right-[25%] shadow-md z-10">
                        <Calendar className="h-5 w-5 text-white" />
                      </div>
                      <div className="absolute h-[2px] bg-green-400 w-[20%] bottom-[27%] right-[32%] z-0" />
                      
                      {/* Secondary nodes */}
                      <div className="absolute w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center top-[15%] left-[15%] shadow-md z-5">
                        <Palette className="h-4 w-4 text-white" />
                      </div>
                      <div className="absolute h-[2px] bg-purple-300 w-[10%] top-[18%] left-[22%] transform rotate-[45deg] z-0" />
                      
                      <div className="absolute w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center top-[15%] right-[15%] shadow-md z-5">
                        <Database className="h-4 w-4 text-white" />
                      </div>
                      <div className="absolute h-[2px] bg-blue-300 w-[12%] top-[18%] right-[22%] transform -rotate-[45deg] z-0" />
                      
                      <div className="absolute w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center bottom-[15%] left-[15%] shadow-md z-5">
                        <Mic className="h-4 w-4 text-white" />
                      </div>
                      <div className="absolute h-[2px] bg-pink-300 w-[12%] bottom-[18%] left-[22%] transform -rotate-[45deg] z-0" />
                      
                      <div className="absolute w-8 h-8 bg-green-400 rounded-full flex items-center justify-center bottom-[15%] right-[15%] shadow-md z-5">
                        <BarChart className="h-4 w-4 text-white" />
                      </div>
                      <div className="absolute h-[2px] bg-green-300 w-[10%] bottom-[18%] right-[22%] transform rotate-[45deg] z-0" />
                    </div>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Visual learning that keeps you engaged and motivated</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;