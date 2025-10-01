import React from 'react';
import Link from 'next/link';
import { DEPARTMENTS_DATA } from '@/config/landing-data.config';

export const DepartmentsSection: React.FC = () => {
  return (
    <section className="w-full py-20 px-4 bg-white" aria-labelledby="departments-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="departments-heading" className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get templates &amp; recommendations for your specialty
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access hundreds of templates and personalized focus time targets for your every role type.
          </p>
        </div>

        <div className="hidden lg:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {DEPARTMENTS_DATA.map((dept) => (
            <Link
              key={dept.id}
              href={dept.href}
              className={`${dept.colorClass} rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:scale-105`}
              aria-label={`${dept.title}: ${dept.description}`}
            >
              <img
                src={dept.icon}
                alt={`${dept.title} icon`}
                className="w-16 h-16 mx-auto mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-bold mb-2">{dept.title}</h3>
              <p className="text-lg opacity-90">{dept.description}</p>
            </Link>
          ))}
        </div>
        <div className="lg:hidden grid grid-cols-2 gap-4">
          {DEPARTMENTS_DATA.map((dept) => (
            <Link
              key={dept.id}
              href={dept.href}
              className={`${dept.colorClass} rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300`}
              aria-label={`${dept.title}: ${dept.description}`}
            >
              <img
                src={dept.icon}
                alt={`${dept.title} icon`}
                className="w-12 h-12 mx-auto mb-3"
                loading="lazy"
              />
              <h3 className="text-lg font-bold mb-1">{dept.title}</h3>
              <p className="text-sm opacity-90">{dept.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};