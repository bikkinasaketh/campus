// src/components/HeroSection2.jsx

import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const HeroSection2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "C:/Users/H/Desktop/CampusFix/Frontend/public/hs11.png",
      title: 'Professional Electrical Management',
      description: 'Expert technicians ensuring campus safety 24/7',
    },
    {
      image: 'https://images.unsplash.com/photo-1621905786358-86d1b764b85c?q=80&w=2832&auto=format&fit=crop',
      title: 'Real-time Issue Tracking',
      description: 'Monitor repair progress with our live tracking system',
    },
    {
      image: 'https://images.unsplash.com/photo-1621905252507-b08e330a38b5?q=80&w=2938&auto=format&fit=crop',
      title: 'Scheduled Maintenance',
      description: 'Preventative care to keep your campus running smoothly',
    },
    {
      image: 'https://images.unsplash.com/photo-1605809715103-62584177d8a6?q=80&w=2942&auto=format&fit=crop',
      title: 'Emergency Response Team',
      description: 'Quick and reliable support for critical issues',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative py-12 md:py-20 lg:py-24 font-sans mx-4 sm:mx-8 md:mx-16 lg:mx-24">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">
          Our <span className="text-blue-600">Campus Services</span>
        </h2>
        <p className="mt-2 text-gray-600">
          Professional electrical maintenance ensuring safe and efficient campus operations
        </p>
      </div>

      <div className="relative mt-8 md:mt-12 lg:mt-16 max-w-4xl mx-auto rounded-xl shadow-xl overflow-hidden">
        {/* Carousel Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="flex-none w-full relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-96 object-cover"
              />
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

              {/* Text Content */}
              <div className="absolute bottom-6 left-6 text-white text-left p-4">
                <h3 className="text-2xl font-bold">{slide.title}</h3>
                <p className="mt-1">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/50 rounded-full text-gray-800 hover:bg-white transition-colors"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/50 rounded-full text-gray-800 hover:bg-white transition-colors"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 rounded-full ${index === currentSlide ? 'bg-blue-600' : 'bg-gray-400'}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;