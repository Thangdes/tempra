import React from 'react';
import { STATS_DATA, TRUSTED_COMPANIES } from '@/config/landing-data.config';

export const FocusStatsSection: React.FC = () => {
  return (
    <section
      className="w-full py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50"
      aria-labelledby="focus-stats-heading"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-xl text-gray-600 mb-6 text-center max-w-2xl mx-auto">
          Deleting meetings doesn't work – you need to prioritize focus time.
        </p>
        <h2 id="focus-stats-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Reclaim creates <span className="text-blue-600">395 hours</span> of focus time per user every year
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS_DATA.focus.map((stat) => (
            <div key={stat.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <span className="text-4xl font-bold text-blue-600 block mb-2" aria-label={`${stat.value} ${stat.label}`}>
                {stat.value}
              </span>
              <div className="text-gray-700 text-lg font-medium whitespace-pre-line">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm mb-4">TRUSTED BY THOUSANDS OF FAST-MOVING TEAMS</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60" role="list" aria-label="Trusted companies">
            {TRUSTED_COMPANIES.map((company) => (
              <div key={company} className="text-gray-400 font-semibold" role="listitem">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};