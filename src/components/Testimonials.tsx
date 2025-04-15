'use client';

import Image from 'next/image';
import { Star, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const Testimonial = ({ name, role, content, rating }: TestimonialProps) => {
  return (
    <Card className="bg-gray-50 dark:bg-gray-800">
      <CardContent className="p-6">
        <div className="flex items-center">
          <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <User className="h-7 w-7 text-gray-500 dark:text-gray-400" />
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white">{name}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
          </div>
        </div>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          {content}
        </p>
        <div className="mt-4 flex">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'}`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah J.",
      role: "Computer Science Student",
      content: "Corvey has completely changed how I study. Being able to search across all my class materials in one place and get instant answers has saved me hours of time each week.",
      rating: 5
    },
    {
      name: "David W.",
      role: "Biology Professor",
      content: "Creating an AI version of myself to help students outside of office hours has been revolutionary. My students get help when they need it, and I can focus on research.",
      rating: 5
    },
    {
      name: "Miguel T.",
      role: "Engineering Student",
      content: "The collaborative features are amazing. Sharing AI prompts with classmates has created a supportive learning community that helps everyone succeed.",
      rating: 4
    },
    {
      name: "Priya L.",
      role: "Math Teacher",
      content: "I was skeptical about AI in education, but Corvey has proven to be an invaluable teaching assistant. It helps my students understand complex concepts at their own pace.",
      rating: 5
    },
    {
      name: "Jason K.",
      role: "History Major",
      content: "The search functionality is incredible. I can find references and connections between lecture notes and reading materials that I would never have noticed on my own.",
      rating: 4
    },
    {
      name: "Emma R.",
      role: "Campus IT Director",
      content: "From an institutional perspective, the security and privacy features meet all our requirements. Integration with our existing LMS was seamless.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase">Testimonials</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight">Students and teachers love Corvey</p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-300">Hear from our early users about how Corvey is transforming their educational experience.</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;