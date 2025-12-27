import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 border-t border-gray-200">
  <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-7">
    {/* About Section */}
    <div className="flex flex-col space-y-4 col-span-2 sm:col-span-1">
      <div className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <div className="flex flex-col">
          <span className="text-xl font-bold">CampusFix</span>
          <span className="text-xs text-gray-500">
            Electrical Management System
          </span>
        </div>
      </div>
      <p className="text-sm text-gray-600">
        Streamlining campus electrical maintenance with efficient complaint
        management, real-time tracking, and expert technical support for
        educational institutions.
      </p>
      {/* Social Icons */}
      <div className="flex space-x-4 mt-4">
        {/* ...social links */}
      </div>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
      <ul className="space-y-2">
        <li>
          <a href="#" className="hover:text-blue-500 transition-colors duration-200">Dashboard</a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500 transition-colors duration-200">Report Issue</a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500 transition-colors duration-200">Track Complaint</a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500 transition-colors duration-200">Help & Support</a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500 transition-colors duration-200">User Guide</a>
        </li>
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
      <ul className="space-y-4">
       <li className="flex items-center space-x-2"> <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.293a1 1 0 01.707.293l1.832 1.832a1 1 0 01.293.707v1.832a2 2 0 00.586 1.414l1.832 1.832a1 1 0 01.293.707v1.832a2 2 0 001.414.586l1.832 1.832a1 1 0 01.707.293L19 19m-4 0a2 2 0 01-2-2v-4a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2h-4z" /> </svg> <div> <p className="text-sm">Emergency</p> <p className="text-sm font-semibold">+1 (555) 911-ELEC</p> </div> </li> <li className="flex items-center space-x-2"> <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-4 13H7a4 4 0 01-4-4V7a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4z" /> </svg> <div> <p className="text-sm">Email Support</p> <p className="text-sm font-semibold">canpusfix1@gmail.com</p> </div> </li> <li className="flex items-center space-x-2">
         <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg> <div> <p className="text-sm">Office Hours</p> <p className="text-sm font-semibold">Mon-Fri: 8AM-6PM</p>
              <p className="text-xs text-gray-500">Emergency: 24/7</p> </div> </li>
      </ul>
    </div>

    {/* Openings */}
    {/* <div>
      <h4 className="font-semibold text-lg mb-4">Openings</h4>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-blue-500 transition-colors duration-200">Maintenance Technician</a></li>
        <li><a href="#" className="hover:text-blue-500 transition-colors duration-200">IT Support Specialist</a></li>
        <li><a href="#" className="hover:text-blue-500 transition-colors duration-200">Customer Service Representative</a></li>
        <li><a href="#" className="hover:text-blue-500 transition-colors duration-200">Electrician Apprentice</a></li>
      </ul>
    </div> */}
  </div>
</footer>

  );
};

export default Footer;