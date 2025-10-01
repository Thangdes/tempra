import React from 'react';
import { TESTIMONIALS_DATA } from '@/config/landing-data.config';

export const SecondTestimonialSection: React.FC = () => {
  const testimonial = TESTIMONIALS_DATA.grafana;

  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={testimonial.illustration}
              alt={`${testimonial.company} Testimonial Illustration`}
              className="rounded-2xl shadow-lg max-w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="lg:w-1/2">
            <blockquote className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-tight">
              {testimonial.quote}
            </blockquote>
            <div className="text-gray-600">
              <div className="font-semibold">{testimonial.author}</div>
              <div className="text-lg">{testimonial.title}, {testimonial.company}</div>
            </div>
            <img
              src={testimonial.companyLogo}
              alt={`${testimonial.company} Logo`}
              className="mt-6 w-32"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};