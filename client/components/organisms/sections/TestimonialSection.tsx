import React from 'react';
import Image from 'next/image';
import { TESTIMONIALS_DATA } from '@/config/landing-data.config';

export const TestimonialSection: React.FC = () => {
  // Return null if no testimonials available
  if (!TESTIMONIALS_DATA.grafana) {
    return null;
  }

  const testimonial = TESTIMONIALS_DATA.grafana;

  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8 border border-emerald-100">
          <div className="lg:w-1/2">
            <div className="text-gray-600 font-semibold mb-2">
              {testimonial.author}, {testimonial.company} {testimonial.title}
            </div>
            <blockquote className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-tight">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src={testimonial.image}
              alt={`${testimonial.author}, ${testimonial.company} ${testimonial.title}`}
              width={600}
              height={400}
              className="rounded-2xl shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};