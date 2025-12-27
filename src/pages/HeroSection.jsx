// // src/components/HeroSection.jsx

// import React from 'react';
// import { BoltIcon, CheckCircleIcon, XCircleIcon, ClockIcon } from '@heroicons/react/24/solid'; // Added ClockIcon
// import { UserGroupIcon } from '@heroicons/react/24/outline'; // Added UserGroupIcon
// import { FireIcon } from '@heroicons/react/24/solid'; // Added FireIcon - this icon is a good substitute for the lightning bolt in the image.

// // A component for the report items in the sidebar.
// const ReportItem = ({ status, issue, location, time }) => {
//   let statusColorClass;
//   let borderColorClass;
//   let dotColorClass;
//   let statusIcon;

//   switch (status) {
//     case 'resolved':
//       statusColorClass = 'text-green-500';
//       borderColorClass = 'border-green-500';
//       dotColorClass = 'bg-green-500';
//       statusIcon = <CheckCircleIcon className="h-5 w-5" />;
//       break;
//     case 'in-progress':
//       statusColorClass = 'text-blue-500';
//       borderColorClass = 'border-blue-500';
//       dotColorClass = 'bg-blue-500';
//       statusIcon = <BoltIcon className="h-5 w-5" />;
//       break;
//     case 'open':
//     default:
//       statusColorClass = 'text-yellow-500';
//       borderColorClass = 'border-yellow-500';
//       dotColorClass = 'bg-yellow-500';
//       statusIcon = <XCircleIcon className="h-5 w-5" />;
//       break;
//   }

//   return (
//     <div className={`flex items-start p-4 border-l-4 ${borderColorClass} rounded-r-lg`}>
//       <div className={`w-3 h-3 rounded-full mr-4 mt-1 ${dotColorClass}`}></div>
//       <div className="flex-1">
//         <h4 className="font-semibold text-gray-800">{issue}</h4>
//         <p className="text-sm text-gray-500">{location}</p>
//       </div>
//       <div className="flex flex-col items-end text-right text-gray-400 text-sm">
//         <span>{time}</span>
//         <div className={`mt-1 ${statusColorClass}`}>{statusIcon}</div>
//       </div>
//     </div>
//   );
// };

// // A component for the statistics cards.
// const StatsCard = ({ icon, number, text }) => (
//   <div className="flex flex-col items-center text-center p-6 bg-white bg-opacity-20 rounded-lg backdrop-blur-md shadow-lg text-white">
//     <div className="h-16 w-16 p-4 rounded-full bg-white bg-opacity-10 flex items-center justify-center mb-4">
//       {icon}
//     </div>
//     <div className="text-2xl font-bold">{number}</div>
//     <div className="mt-1 text-sm text-gray-200">{text}</div>
//   </div>
// );

// const HeroSection = () => {
//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-blue-950 to-blue-800 text-white flex flex-col justify-center items-center py-20 px-4 sm:px-6 lg:px-8">
//       {/* Background overlay and image holder */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-blue-950 opacity-50"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
//         {/* Left Content Section */}
//         <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
//           <div className="inline-block bg-white bg-opacity-10 px-4 py-2 rounded-full text-sm font-semibold tracking-wider mb-6">
//             Campus Electrical Management System
//           </div>
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
//             Fix Campus
//             <br />
//             <span className="text-blue-300">Electrical</span>
//             <br />
//             Issues Fast
//           </h1>
//           <p className="mt-4 max-w-lg text-lg text-gray-200 mx-auto md:mx-0">
//             Streamline campus maintenance with intelligent complaint management and real-time tracking. Report electrical problems instantly, track repair progress in real-time, and ensure campus safety.
//           </p>
//           <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
//             <a href='/compliantform'> <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold transition-colors">
//               Report Issue Now →
//             </button></a>
            
//             <button className="px-6 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 rounded-lg font-bold transition-colors">
//               Track Complaint
//             </button>
//           </div>
//         </div>

//         {/* Right Reports Card */}
//         <div className="md:w-1/2 p-6 bg-white rounded-xl shadow-2xl backdrop-blur-lg">
//           <div className="flex justify-between items-center mb-6">
//             <h3 className="text-2xl font-bold text-gray-800">Recent Reports</h3>
//             <span className="text-sm text-blue-600 font-semibold">Live</span>
//           </div>
//           <div className="space-y-4">
//             <ReportItem
//               status="open"
//               issue="Fan not working"
//               location="Room 204"
//               time="5 mins ago"
//             />
//             <ReportItem
//               status="in-progress"
//               issue="Projector Issue"
//               location="Lab 1"
//               time="12 mins ago"
//             />
//             <ReportItem
//               status="open"
//               issue="Light Flickering"
//               location="Corridor 3B"
//               time="18 mins ago"
//             />
//           </div>
//           <div className="mt-8 pt-4 border-t border-gray-200">
//             <div className="flex justify-between items-center text-gray-600 font-semibold">
//               <span>Total Reports Today</span>
//               <span>23</span>
//             </div>
//             <div className="flex justify-between items-center text-gray-600 font-semibold mt-2">
//               <span>Resolved</span>
//               <span>18</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Statistics Section with the new icons */}
//       <div className="relative z-20 mt-16 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           <StatsCard
//             icon={<ClockIcon className="h-8 w-8 text-blue-300" />}
//             number="24/7"
//             text="Support Available"
//           />
//           <StatsCard
//             icon={<FireIcon className="h-8 w-8 text-blue-300" />}
//             number="<2h"
//             text="Avg Response"
//           />
//           <StatsCard
//             icon={<UserGroupIcon className="h-8 w-8 text-blue-300" />}
//             number="100%"
//             text="Tracked Issues"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
import React from 'react';
import { BoltIcon, CheckCircleIcon, ClockIcon, FireIcon } from '@heroicons/react/24/solid';
import { UserGroupIcon } from '@heroicons/react/24/outline';

// Stats card with animation
const StatsCard = ({ icon, number, text }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white/10 rounded-xl backdrop-blur-lg shadow-lg text-white transform transition duration-300 hover:scale-105 hover:bg-white/20">
    <div className="h-16 w-16 p-4 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 animate-pulse">
      {icon}
    </div>
    <div className="text-2xl font-extrabold">{number}</div>
    <div className="mt-1 text-sm text-gray-200">{text}</div>
  </div>
);

// Feature item with hover effect
const FeatureItem = ({ icon, title, description }) => (
  <div className="flex items-start gap-4 p-4 rounded-lg bg-white/10 backdrop-blur-md transform transition duration-300 hover:scale-105 hover:bg-white/20">
    <div className="flex-shrink-0 h-10 w-10 p-2 rounded-full bg-blue-600 text-white flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-gray-200">{description}</p>
    </div>
  </div>
);

const HeroSection = () => {
  return (
    <div 
      className="relative min-h-screen flex flex-col justify-center items-center text-white overflow-hidden"
      style={{
        backgroundImage: `url('./hbg1.png')`,  // background image
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left animate-fadeInUp">
          <div className="inline-block bg-white/10 px-4 py-2 rounded-full text-sm font-semibold tracking-wider mb-6">
            Campus Electrical Management System
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Fix Campus <br />
            <span className="text-blue-500">Electrical</span> <br />
            Issues Fast
          </h1>
          <p className="mt-4 max-w-lg text-lg text-gray-200 mx-auto md:mx-0">
            Fast issue reporting, real-time tracking, and dedicated support to ensure a safe campus environment.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a href="/complaint">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold transition transform hover:scale-105">
                Report Issue Now →
              </button>
            </a>
            <button className="px-6 py-3 border-2 border-white hover:bg-white hover:text-blue-600 rounded-lg font-bold transition transform hover:scale-105">
              Track Complaint
            </button>
          </div>
        </div>

        {/* Right Section - Features */}
        <div className="md:w-1/2 animate-fadeInUp delay-200">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center md:text-left">Why Choose Us?</h2>
          <div className="space-y-4">
            <FeatureItem
              icon={<BoltIcon className="h-6 w-6" />}
              title="Instant Reporting"
              description="Submit electrical complaints in seconds with our easy-to-use form."
            />
            <FeatureItem
              icon={<CheckCircleIcon className="h-6 w-6" />}
              title="Real-Time Tracking"
              description="Stay updated with live notifications and repair progress."
            />
            <FeatureItem
              icon={<UserGroupIcon className="h-6 w-6" />}
              title="Dedicated Support"
              description="Our team ensures fast response and guaranteed issue resolution."
            />
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="relative z-20 mt-12 mb-7 max-w-6xl mx-auto w-full px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <StatsCard
            icon={<ClockIcon className="h-8 w-8 text-blue-300" />}
            number="24/7"
            text="Support Available"
          />
          <StatsCard
            icon={<FireIcon className="h-8 w-8 text-blue-300" />}
            number="<2h"
            text="Avg Response"
          />
          <StatsCard
            icon={<UserGroupIcon className="h-8 w-8 text-blue-300" />}
            number="100%"
            text="Tracked Issues"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
