"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FEATURES, INTEGRATIONS } from "@/config/app.config";
import { LineChart, Line, BarChart, Bar, ResponsiveContainer } from "recharts";
import Marquee from "react-fast-marquee";

const timeSavedData = [
  { value: 8.2 },
  { value: 9.5 },
  { value: 10.1 },
  { value: 11.3 },
  { value: 12.5 },
];

const meetingsData = [
  { value: 38 },
  { value: 42 },
  { value: 45 },
  { value: 47 },
];

export const HeroSection = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-950/50 dark:text-emerald-300">
            <svg className="h-4 w-4 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>AI-Powered • Used by 10,000+ professionals</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 text-center text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white"
        >
          {FEATURES.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-10 max-w-2xl text-center text-lg leading-relaxed text-slate-600 sm:text-xl dark:text-slate-400"
        >
          {FEATURES.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-[#4ECCA3] px-8 text-base font-semibold text-slate-900 shadow-sm transition-all hover:bg-[#3dd490] focus:outline-none focus:ring-2 focus:ring-[#4ECCA3] focus:ring-offset-2 active:scale-[0.98] sm:w-auto dark:bg-[#4ECCA3] dark:hover:bg-[#3dd490] dark:focus:ring-offset-slate-900">
            {FEATURES.hero.cta.primary}
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-slate-200 bg-white px-8 text-base font-semibold text-slate-900 transition-all hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-[0.98] sm:w-auto dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 dark:focus:ring-offset-slate-900">
            {FEATURES.hero.cta.secondary}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600 dark:text-slate-400"
        >
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>14-day free trial</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Cancel anytime</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-6xl"
      >
        <div className="absolute -inset-x-20 -inset-y-10 -z-10 bg-[#4ECCA3]/10 blur-3xl dark:bg-[#4ECCA3]/20" />
        
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-slate-950/50">
          <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-900/50">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-slate-300 dark:bg-slate-700" />
              <div className="h-3 w-3 rounded-full bg-slate-300 dark:bg-slate-700" />
              <div className="h-3 w-3 rounded-full bg-slate-300 dark:bg-slate-700" />
            </div>
            <div className="ml-4 flex-1 rounded-md bg-white px-3 py-1.5 text-xs text-slate-400 dark:bg-slate-800 dark:text-slate-500">
              app.tempra.ai/dashboard
            </div>
          </div>
          
          <div className="relative aspect-[16/10] bg-slate-100 dark:bg-slate-950">
            <Image
              src="https://cdn.dribbble.com/userupload/9926004/file/original-f57c1c7ecad5712b6cb18eaeb17e574b.png?resize=1024x768&vertical=center"
              alt="Tempra calendar dashboard showing AI-powered scheduling interface"
              className="h-full w-full object-cover"
              width={2000}
              height={1250}
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -left-40 top-1/4 hidden w-64 rounded-xl border border-slate-200 bg-white p-5 shadow-xl lg:block dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="mb-3 flex items-start justify-between">
            <div>
              <div className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">Time Saved</div>
              <div className="mt-1 text-3xl font-bold text-slate-900 dark:text-white">12.5<span className="text-lg text-slate-600 dark:text-slate-400">hrs</span></div>
              <div className="mt-1 flex items-center gap-1 text-xs font-semibold text-green-600 dark:text-green-400">
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span>23% this week</span>
              </div>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-950">
              <svg className="h-5 w-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="h-12">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={timeSavedData}>
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  dot={false}
                  animationDuration={1000}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -right-40 top-1/2 hidden w-64 rounded-xl border border-slate-200 bg-white p-5 shadow-xl lg:block dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="mb-3 flex items-start justify-between">
            <div>
              <div className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">Meetings</div>
              <div className="mt-1 text-3xl font-bold text-slate-900 dark:text-white">47</div>
              <div className="mt-1 text-xs font-medium text-[#4ECCA3] dark:text-[#4ECCA3]">Scheduled this month</div>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-950">
              <svg className="h-5 w-5 text-[#4ECCA3] dark:text-[#4ECCA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <div className="h-12">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={meetingsData}>
                <Bar 
                  dataKey="value" 
                  fill="#4ECCA3" 
                  radius={[4, 4, 0, 0]}
                  animationDuration={1000}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        className="mt-24"
      >
        <div className="text-center mb-12">
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Over 40,000 organizations make time for what matters with Tempra
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <style jsx>{`
            .marquee-container::-webkit-scrollbar {
              display: none;
            }
            .marquee-container {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
          <Marquee
            gradient={true}
            gradientColor="rgb(248 250 252)"
            gradientWidth={120}
            speed={25}
            pauseOnHover={true}
            className="py-12 overflow-hidden marquee-container"
          >
            {Object.values(INTEGRATIONS).map((integration, index) => (
              <div
                key={`${integration.name}-${index}`}
                className="mx-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <Image 
                  src={integration.icon} 
                  alt={integration.name}
                  width={80}
                  height={80}
                  className="h-20 w-20 object-contain"
                />
              </div>
            ))}
            
            {/* Duplicate the integrations to ensure smooth infinite scroll */}
            {Object.values(INTEGRATIONS).map((integration, index) => (
              <div
                key={`${integration.name}-duplicate-${index}`}
                className="mx-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <Image 
                  src={integration.icon} 
                  alt={integration.name}
                  width={80}
                  height={80}
                  className="h-20 w-20 object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </motion.div>
    </section>
  );
};