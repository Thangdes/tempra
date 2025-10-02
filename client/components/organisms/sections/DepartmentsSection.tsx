'use client';

import React from 'react';
import Link from 'next/link';
import { DEPARTMENTS_DATA } from '@/config/landing-data.config';
import { ArrowRight } from 'lucide-react';

export const DepartmentsSection: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 bg-gray-50" aria-labelledby="departments-heading">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 id="departments-heading" className="text-3xl font-semibold text-gray-900 mb-3">
            Templates for every team
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Personalized productivity templates and focus time targets for your role
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {DEPARTMENTS_DATA.map((dept) => (
            <Link
              key={dept.id}
              href={dept.href}
              className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-sm transition-all"
              aria-label={`${dept.title}: ${dept.description}`}
            >
              <div className="w-24 h-24 mb-5 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                <img
                  src={dept.icon}
                  alt=""
                  className="w-20 h-20"
                  loading="lazy"
                />
              </div>
              <h3 className="text-base font-medium text-gray-900 mb-1">{dept.title}</h3>
              <div className="flex items-center gap-1 text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                <span>Learn more</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};