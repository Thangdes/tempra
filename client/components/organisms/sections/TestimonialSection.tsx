import React from 'react';
import { TESTIMONIALS_DATA } from '@/config/landing-data.config';

export const TestimonialSection: React.FC = () => {
  const testimonial = TESTIMONIALS_DATA.grafana;

  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <div className="text-gray-600 font-semibold mb-2">
              {testimonial.author}, {testimonial.company} {testimonial.title}
            </div>
            <blockquote className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-tight">
              "{testimonial.quote}"
            </blockquote>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={testimonial.image}
              alt={`${testimonial.author}, ${testimonial.company} ${testimonial.title}`}
              className="rounded-2xl shadow-lg max-w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};