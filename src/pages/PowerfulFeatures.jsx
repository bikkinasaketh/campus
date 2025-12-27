import React from 'react';

const PowerfulFeatures = () => {
  const features = [
    {
      title: 'Instant Reporting',
      description: 'Report electrical issues instantly with our user-friendly interface. Upload photos and provide detailed descriptions for faster resolution.',
      subFeatures: ['One-click reporting', 'Photo attachments', 'Location mapping'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9" />
          <path d="M16.5 3.5l-2.5 2.5-3.5-3.5 2.5-2.5 3.5 3.5zM21 16l-2-2-5 5-2 2h7l2-2z" />
          <path d="M15 13l-5 5" />
          <path d="M5 16l-2 2-2 2h10l2-2z" />
        </svg>
      ),
    },
    {
      title: 'Real-time Tracking',
      description: 'Monitor your complaint status in real-time. Get live updates from assignment to completion with estimated resolution times.',
      subFeatures: ['Live status updates', 'Progress notifications', 'Time estimates'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      title: 'Smart Notifications',
      description: 'Receive instant notifications via email and SMS. Stay informed about updates, assignments, and completion status.',
      subFeatures: ['Email alerts', 'SMS notifications', 'Custom preferences'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 01-3.46 0" />
        </svg>
      ),
    },
    {
      title: 'Role-based Access',
      description: 'Different interfaces for students, faculty, and administration. Each user sees relevant information based on their role.',
      subFeatures: ['Student dashboard', 'Faculty tools', 'Admin controls'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      title: 'Priority Management',
      description: 'Smart priority system ensures safety-critical issues are handled first. Automatic escalation for high-priority problems.',
      subFeatures: ['Priority classification', 'Auto-escalation', 'Safety first approach'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13l-3 3 3 3" />
          <path d="M14 13l3 3-3 3" />
          <line x1="7" y1="16" x2="17" y2="16" />
        </svg>
      ),
    },
    {
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics for administration. Track response times, common issues, and maintenance patterns.',
      subFeatures: ['Performance metrics', 'Trend analysis', 'Resource planning'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" />
          <path d="M18 10l-6 6-4-4-5 5" />
        </svg>
      ),
    },
    {
      title: 'Mobile Optimized',
      description: 'Fully responsive design works perfectly on all devices. Report issues and track progress from anywhere on campus.',
      subFeatures: ['Responsive design', 'Touch-friendly interface', 'Offline capability'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
    },
    {
      title: 'Location Services',
      description: 'Integrated location services help technicians find issues quickly. GPS coordinates and interactive campus maps.',
      subFeatures: ['GPS navigation', 'Campus maps', 'Quick navigation'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21.35l-2.12-2.12C4.51 14.28 2 11.23 2 9a7 7 0 0114 0c0 2.23-2.51 5.28-7.88 10.23L12 21.35z" />
          <circle cx="12" cy="9" r="3" />
        </svg>
      ),
    },
    {
      title: 'Visual Documentation',
      description: 'Upload multiple photos and videos to document issues clearly. Before and after photos for completed work.',
      subFeatures: ['Multiple file uploads', 'Video support', 'Visual progress tracking'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Powerful Features for Everyone
        </h2>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
          Everything you need to manage campus electrical maintenance efficiently. <br className="hidden sm:inline" />Designed for students, faculty, staff, and administrators.
        </p>
      </div>
      <div className="mt-16 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-300 p-2  text-white rounded-md">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
            </div>
            <p className="mt-4 text-sm text-gray-600">{feature.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              {feature.subFeatures.map((subFeature, subIndex) => (
                <li key={subIndex} className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{subFeature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PowerfulFeatures;