'use client';

import { 
  Zap, 
  Search, 
  Users, 
  Layout, 
  UsersRound, 
  Shield 
} from 'lucide-react';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string 
}) => (
  <div className="pt-6">
    <div className="flow-root bg-gray-50 dark:bg-gray-800 rounded-lg px-6 pb-8 transition-all duration-300 hover:transform hover:-translate-y-1 h-full flex flex-col">
      <div className="-mt-6 flex-grow">
        <div>
          <span className="inline-flex items-center justify-center p-3 bg-indigo-500 dark:bg-indigo-600 rounded-md shadow-lg">
            <Icon className="h-6 w-6 text-white" />
          </span>
        </div>
        <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">{title}</h3>
        <p className="mt-5 text-base text-gray-500 dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "LMS Integration",
      description: "Connect seamlessly with Canvas, Blackboard, Moodle and other popular learning management systems to access all your course materials."
    },
    {
      icon: Search,
      title: "AI-Powered Search",
      description: "Find exactly what you need across all class documents, links, and resources. Ask questions and get answers directly from your class material/lectures."
    },
    {
      icon: Users,
      title: "Teacher AI Clones",
      description: "Upload class videos to capture your teacher's communication style and create an AI version to help with homework questions outside the classroom."
    },
    {
      icon: Layout,
      title: "Workflow Automation",
      description: "Automate repetitive tasks like assignment submissions, deadline tracking, and study schedules to focus more on learning and now with Duolingo style learning streaks."
    },
    {
      icon: UsersRound,
      title: "Student Collaboration",
      description: "Share useful prompts and study guides with classmates, creating a collaborative learning environment that benefits everyone."
    },
    {
      icon: Shield,
      title: "Privacy-Focused",
      description: "Your data stays secure with our privacy-first approach. We only use your content to personalize your learning experience."
    }
  ];

  return (
    <section id="features" className="py-16 bg-white dark:bg-gray-900 overflow-hidden mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase">Features</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight">Everything you need to enhance learning</p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-300">Corvey brings together powerful tools to transform how students learn and how teachers teach.</p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
