'use client';

import React from 'react';
import Link from 'next/link';
import { EXTERNAL_LINKS } from '@/config/app.config';
import {
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { ArrowRight } from 'lucide-react';

// Sample productivity data
const weeklyData = [
  { day: 'Mon', hours: 6.5, tasks: 12 },
  { day: 'Tue', hours: 7.2, tasks: 15 },
  { day: 'Wed', hours: 5.8, tasks: 10 },
  { day: 'Thu', hours: 8.1, tasks: 18 },
  { day: 'Fri', hours: 7.5, tasks: 14 },
];

const stats = [
  { label: 'Focus time', value: '7.2h', subtext: 'daily avg' },
  { label: 'Tasks done', value: '69', subtext: 'this week' },
  { label: 'Efficiency', value: '94%', subtext: '+5% vs last' },
];

export const ProductivitySection: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-3">
            Benchmark & optimize your productivity
          </h2>
          <p className="text-gray-600 max-w-xl">
            Track your patterns, visualize progress, and work smarter with data-driven insights
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mb-10">
          {stats.map((stat, i) => (
            <div key={i} className="border-l-2 border-gray-200 pl-4">
              <div className="text-xs uppercase text-gray-500 tracking-wide mb-1">{stat.label}</div>
              <div className="text-3xl font-semibold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.subtext}</div>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          {/* Bar Chart */}
          <div className="border border-gray-200 rounded-lg p-6 bg-gray-50/50">
            <h3 className="text-sm font-medium text-gray-900 mb-4">Weekly overview</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                <XAxis dataKey="day" stroke="#9ca3af" tick={{ fontSize: 12 }} />
                <YAxis stroke="#9ca3af" tick={{ fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '6px',
                    fontSize: '12px',
                  }}
                />
                <Bar dataKey="hours" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Area Chart */}
          <div className="border border-gray-200 rounded-lg p-6 bg-gray-50/50">
            <h3 className="text-sm font-medium text-gray-900 mb-4">Focus time trend</h3>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={weeklyData}>
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                <XAxis dataKey="day" stroke="#9ca3af" tick={{ fontSize: 12 }} />
                <YAxis stroke="#9ca3af" tick={{ fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '6px',
                    fontSize: '12px',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="hours"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between p-6 bg-gray-900 rounded-lg">
          <div>
            <div className="text-white font-medium mb-1">Start tracking your productivity</div>
            <div className="text-gray-400 text-sm">Join 10,000+ professionals optimizing their time</div>
          </div>
          <Link
            href={EXTERNAL_LINKS.signup}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 font-medium rounded-md hover:bg-gray-100 transition-colors text-sm"
          >
            Get started
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};