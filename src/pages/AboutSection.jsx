// src/components/AboutSection.jsx

import React from 'react';

const AboutSection = () => {
  const stats = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.3c-2.4-.7-4.8 0-6.7 1.4-.6.4-1.2.9-1.8 1.4a2.9 2.9 0 00-1 2.3v3.2c0 .9.4 1.7 1 2.3l1.8 1.4c1.9 1.4 4.3 2.1 6.7 1.4 2.4-.7 4.8 0 6.7-1.4.6-.4 1.2-.9 1.8-1.4a2.9 2.9 0 001-2.3v-3.2c0-.9-.4-1.7-1-2.3l-1.8-1.4c-1.9-1.4-4.3-2.1-6.7-1.4z" />
        </svg>
      ),
      value: '2,500+',
      label: 'Complaints Resolved',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      value: '1,200+',
      label: 'Active Users',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      value: '< 2 hrs',
      label: 'Average Response Time',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      value: '95%',
      label: 'Satisfaction Rate',
    },
  ];

  return (
    <div className=" to-white py-16 px-4 sm:py-20 md:py-24 lg:py-28 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Our Mission & Why Choose CampusFix Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16 sm:mb-20 md:mb-24">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-600">
              At CampusFix, our mission is to simplify and streamline electrical maintenance for educational institutions. We are committed to connecting students, staff, and faculty with expert electricians to ensure a safe, efficient, and well-maintained campus environment.
            </p>
            <p className="mt-4 text-base md:text-lg text-gray-600">
              We provide a transparent platform for reporting issues, tracking progress in real-time, and centralizing all communication to ensure that every electrical problem is addressed promptly and professionally.
            </p>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900">
              Why Choose CampusFix?
            </h3>
            <ul className="mt-4 space-y-3 text-base md:text-lg text-gray-700">
              <li className="flex items-center space-x-3">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                <span>Fast & easy complaint submission</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                <span>Real-time tracking of repair status</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                <span>Improved campus safety and security</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                <span>Centralized communication for all users</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Feature Cards Section */}
        <div className="mt-16 sm:mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-blue-100">
                <svg className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6 6 2.69 6 6zm0 2c-1.1 0-2 .9-2 2v2h4v-2c0-1.1-.9-2-2-2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Expert Technicians</h3>
            <p className="mt-2 text-gray-600">
              Our team consists of certified electricians and technical experts who ensure every issue is resolved safely and efficiently.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-blue-100">
                <svg className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm-1 10h2V7h-2v5zm0 2h2v2h-2v-2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Real-time Updates</h3>
            <p className="mt-2 text-gray-600">
              Track the status of your complaint from submission to completion, with transparent updates every step of the way.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-blue-100">
                <svg className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm-1 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-1-8v4h2v-4h-2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Simplified Process</h3>
            <p className="mt-2 text-gray-600">
              Our platform replaces complicated paper forms and phone calls with a straightforward, user-friendly digital process.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-blue-100">
                <svg className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm-1 10h2v-4h-2v4zm0 6h2v-2h-2v2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Secure & Reliable</h3>
            <p className="mt-2 text-gray-600">
              We ensure every complaint is logged securely and assigned to the right team, providing a reliable system for all campus electrical needs.
            </p>
          </div>
        </div>
      </div>

      {/* Our Impact in Numbers Section */}
      <div className="bg-white py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 md:mt-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Our Impact in Numbers
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
            See how CampusFix has transformed electrical maintenance across campus
          </p>
        </div>
        <div className="mt-12 sm:mt-16 md:mt-20 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  {stat.icon}
                </div>
              </div>
              <p className="text-4xl font-bold text-blue-600">
                {stat.value}
              </p>
              <p className="mt-2 text-base font-medium text-gray-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;