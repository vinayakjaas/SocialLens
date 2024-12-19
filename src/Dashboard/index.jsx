// import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
// import './index.css';
// import Sidebar from '../Sidebar/Sidebar';
// import {
//   LineChart,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   BarChart,
//   Bar,
//   PieChart,
//   Pie,
//   Cell,
//   Legend,
// } from "recharts";


// export default function Main() {
//   const [isMobile, setIsMobile] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isSidebarVisible, setIsSidebarVisible] = useState(true);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   // Check screen size and set mobile state
//   useEffect(() => {
//     const checkMobileView = () => {
//       setIsMobile(window.innerWidth < 640); // Tailwind's `sm` breakpoint
//     };

//     // Initial check
//     checkMobileView();

//     // Add event listener for window resize
//     window.addEventListener('resize', checkMobileView);

//     // Cleanup listener
//     return () => window.removeEventListener('resize', checkMobileView);
//   }, []);
//   const handleOpenPopup = () => {
//     setIsPopupOpen(true);
//   };

//   const handleClosePopup = () => {
//     setIsPopupOpen(false);
//   };

//   const toggleMobileSidebar = () => setIsSidebarOpen(!isSidebarOpen);
//   const toggleDesktopSidebar = () => {
//     if (!isMobile) setIsSidebarVisible(!isSidebarVisible);
//   };

//   const closeMobileSidebar = () => {
//     if (isMobile && isSidebarOpen) setIsSidebarOpen(false);
//   };
// // Dummy Data for Analytics
// const followerGrowth = [
//   { month: "Jan", followers: 1200 },
//   { month: "Feb", followers: 1500 },
//   { month: "Mar", followers: 1800 },
//   { month: "Apr", followers: 2100 },
//   { month: "May", followers: 2500 },
//   { month: "Jun", followers: 2800 },
// ];

// const engagementData = [
//   { month: "Jan", likes: 400, comments: 80 },
//   { month: "Feb", likes: 700, comments: 150 },
//   { month: "Mar", likes: 1200, comments: 200 },
//   { month: "Apr", likes: 1500, comments: 300 },
//   { month: "May", likes: 2000, comments: 400 },
// ];

// const timeSpentData = [
//   { platform: "Facebook", hours: 15 },
//   { platform: "Instagram", hours: 25 },
//   { platform: "Twitter", hours: 20 },
//   { platform: "LinkedIn", hours: 10 },
//   { platform: "TikTok", hours: 30 },
// ];

// const COLORS = ["#4267B2", "#E1306C", "#1DA1F2", "#2867B2", "#69C9D0"];
  
//   return (
//     <div className="flex h-screen overflow-hidden bg-gray-100">
 
//       <Sidebar
//              isMobile={isMobile}
//              isSidebarOpen={isSidebarOpen}
//              isSidebarVisible={isSidebarVisible}
//              toggleMobileSidebar={toggleMobileSidebar}
//              closeMobileSidebar={closeMobileSidebar}
//            />

// <div
//         className={`flex-grow overflow-y-auto transition-all duration-300 ${
//           isSidebarOpen ? "ml-64" : "ml-0"
//         }`}
//       >
//         <div className="bg-gray-100 p-6">
//           {/* Header */}
//           <div className="flex justify-between items-center mb-6">
//             <h1 className="text-3xl font-bold text-gray-800">
//               Social Media Dashboard
//             </h1>
//             <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-orange-500 text-white rounded-lg shadow-md hover:opacity-90">
//               Add New Platform
//             </button>
//           </div>

//           {/* Platform Overview */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//             {[
//               { title: "Facebook Followers", count: "12,500", growth: "+5%" },
//               { title: "Instagram Followers", count: "18,000", growth: "+8%" },
//               { title: "Twitter Followers", count: "5,600", growth: "+3%" },
//               { title: "LinkedIn Connections", count: "8,200", growth: "+2%" },
//             ].map((platform, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-200"
//               >
//                 <h3 className="text-xl font-semibold text-gray-700">
//                   {platform.title}
//                 </h3>
//                 <p className="text-3xl font-bold text-gray-800">
//                   {platform.count}
//                 </p>
//                 <p className="text-green-500 mt-2">{platform.growth} this month</p>
//               </div>
//             ))}
//           </div>

//           {/* Analytics Section */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             {/* Follower Growth */}
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h3 className="text-xl font-semibold text-gray-700 mb-4">
//                 Follower Growth Over Time
//               </h3>
//               <LineChart
//                 width={500}
//                 height={300}
//                 data={followerGrowth}
//                 className="mx-auto"
//               >
//                 <Line
//                   type="monotone"
//                   dataKey="followers"
//                   stroke="#4267B2"
//                   strokeWidth={2}
//                 />
//                 <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
//                 <XAxis dataKey="month" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//               </LineChart>
//             </div>

//             {/* Engagement Data */}
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h3 className="text-xl font-semibold text-gray-700 mb-4">
//                 Engagement Rate (Likes & Comments)
//               </h3>
//               <BarChart
//                 width={500}
//                 height={300}
//                 data={engagementData}
//                 className="mx-auto"
//               >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="month" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Bar dataKey="likes" fill="#E1306C" />
//                 <Bar dataKey="comments" fill="#FFB6C1" />
//               </BarChart>
//             </div>
//           </div>

//           {/* Time Spent on Social Media */}
//           <div className="bg-white p-6 rounded-lg shadow mt-8">
//             <h3 className="text-xl font-semibold text-gray-700 mb-4">
//               Time Spent on Social Media (Hours/Week)
//             </h3>
//             <PieChart width={500} height={300} className="mx-auto">
//               <Pie
//                 data={timeSpentData}
//                 dataKey="hours"
//                 nameKey="platform"
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={120}
//                 fill="#8884d8"
//                 label
//               >
//                 {timeSpentData.map((entry, index) => (
//                   <Cell
//                     key={`cell-${index}`}
//                     fill={COLORS[index % COLORS.length]}
//                   />
//                 ))}
//               </Pie>
//               <Legend />
//             </PieChart>
//           </div>
//         </div>



//     </div>
//     </div>

//   );
// }


import React, { useState, useEffect } from "react";
import { BsCheckCircle, BsBell } from "react-icons/bs"; // For success tick and bell icons
import { FaInfoCircle } from "react-icons/fa"; // For info icon
import Sidebar from "../Sidebar/Sidebar";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

export default function Main() {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  // Check screen size and set mobile state
  useEffect(() => {
    const checkMobileView = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind's `sm` breakpoint
    };

    checkMobileView();
    window.addEventListener("resize", checkMobileView);

    return () => window.removeEventListener("resize", checkMobileView);
  }, []);

  const toggleMobileSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeMobileSidebar = () => {
    if (isMobile && isSidebarOpen) setIsSidebarOpen(false);
  };

  const toggleDesktopSidebar = () => {
    if (!isMobile) setIsSidebarVisible(!isSidebarVisible);
  };

  // Dummy Data for Analytics
  const followerGrowth = [
    { month: "Jan", Facebook: 1200, Instagram: 1500, Twitter: 800, LinkedIn: 500 },
    { month: "Feb", Facebook: 1500, Instagram: 1700, Twitter: 1000, LinkedIn: 700 },
    { month: "Mar", Facebook: 1800, Instagram: 1900, Twitter: 1200, LinkedIn: 1000 },
    { month: "Apr", Facebook: 2100, Instagram: 2100, Twitter: 1400, LinkedIn: 1300 },
    { month: "May", Facebook: 2500, Instagram: 2400, Twitter: 1700, LinkedIn: 1600 },
    { month: "Jun", Facebook: 2800, Instagram: 2800, Twitter: 2000, LinkedIn: 2000 },
  ];

  const engagementData = [
    { month: "Jan", likes: 400, comments: 80 },
    { month: "Feb", likes: 700, comments: 150 },
    { month: "Mar", likes: 1200, comments: 200 },
    { month: "Apr", likes: 1500, comments: 300 },
    { month: "May", likes: 2000, comments: 400 },
  ];

  const timeSpentData = [
    { platform: "Facebook", hours: 15 },
    { platform: "Instagram", hours: 25 },
    { platform: "Twitter", hours: 20 },
    { platform: "LinkedIn", hours: 10 },
    { platform: "TikTok", hours: 30 },
  ];

  const COLORS = ["#4267B2", "#E1306C", "#1DA1F2", "#2867B2", "#69C9D0"];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar
        isMobile={isMobile}
        isSidebarOpen={isSidebarOpen}
        isSidebarVisible={isSidebarVisible}
        toggleMobileSidebar={toggleMobileSidebar}
        closeMobileSidebar={closeMobileSidebar}
      />

      {/* Main Content */}

      <div className={`flex-grow transition-all duration-300 ${isSidebarVisible ? "ml-64" : "ml-0"}`}>
    {/* Header */}
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-40">
      <div
        className={`flex items-center justify-between p-4 ${
          isSidebarVisible ? "pl-64" : "pl-4"
        }`}
      >
        {/* Left Section: Tokens */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-purple-50 px-4 py-2 rounded-lg">
            <BsCheckCircle className="text-purple-500 h-5 w-5" />
            <span className="text-gray-700 font-medium">
              Tokens: <span className="font-bold">500</span>
            </span>
            <FaInfoCircle className="text-gray-400 h-4 w-4 cursor-pointer" />
          </div>
        </div>

        {/* Center Section: Title */}
        <div className="hidden sm:flex items-center">
          <h1 className="text-2xl font-bold text-gray-800">
          Social listening platform
          </h1>
        </div>

        {/* Right Section: Action Buttons */}
        <div className="flex items-center space-x-4">
          <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-200">
            Free Trial
          </button>
          <button className="bg-gradient-to-r from-purple-500 to-orange-500 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90">
            Upgrade
          </button>
          <BsBell className="text-gray-500 h-6 w-6 cursor-pointer hover:text-gray-700" />
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="h-10 w-10 rounded-full border"
          />
        </div>
      </div>
    </header>

          {/* Platform Overview */}
          <div className="pt-[64px] px-6 mt-8 bg-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { title: "Facebook Followers", count: "12,500", growth: "+5%" },
              { title: "Instagram Followers", count: "18,000", growth: "+8%" },
              { title: "Twitter Followers", count: "5,600", growth: "+3%" },
              { title: "LinkedIn Connections", count: "8,200", growth: "+2%" },
            ].map((platform, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-200"
              >
                <h3 className="text-xl font-semibold text-gray-700">
                  {platform.title}
                </h3>
                <p className="text-3xl font-bold text-gray-800">
                  {platform.count}
                </p>
                <p className="text-green-500 mt-2">{platform.growth} this month</p>
              </div>
            ))}
          </div>

          {/* Analytics Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Follower Growth */}
            {/* <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Follower Growth Over Time
              </h3>
              <LineChart
                width={500}
                height={300}
                data={followerGrowth}
                className="mx-auto"
              >
                <Line
                  type="monotone"
                  dataKey="followers"
                  stroke="#4267B2"
                  strokeWidth={2}
                />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
              </LineChart>
            </div> */}
<div className="bg-white p-6 rounded-lg shadow">
    <h3 className="text-xl font-semibold text-gray-700 mb-4">
      Follower Growth Over Time
    </h3>
    <LineChart
      width={500}
      height={300}
      data={followerGrowth}
      className="mx-auto"
    >
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />

      {/* Lines for each platform */}
      <Line
        type="monotone"
        dataKey="Facebook"
        stroke="#4267B2"
        strokeWidth={2}
        name="Facebook"
      />
      <Line
        type="monotone"
        dataKey="Instagram"
        stroke="#E1306C"
        strokeWidth={2}
        name="Instagram"
      />
      <Line
        type="monotone"
        dataKey="Twitter"
        stroke="#1DA1F2"
        strokeWidth={2}
        name="Twitter"
      />
      <Line
        type="monotone"
        dataKey="LinkedIn"
        stroke="#2867B2"
        strokeWidth={2}
        name="LinkedIn"
      />
    </LineChart>
  </div>
            {/* Engagement Data */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Engagement Rate (Likes & Comments)
              </h3>
              <BarChart
                width={500}
                height={300}
                data={engagementData}
                className="mx-auto"
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="likes" fill="#E1306C" />
                <Bar dataKey="comments" fill="#FFB6C1" />
              </BarChart>
            </div>
          </div>

          {/* Time Spent on Social Media */}
          {/* <div className="bg-white p-6 rounded-lg shadow mt-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Time Spent on Social Media (Hours/Week)
            </h3>
            <PieChart width={500} height={300} className="mx-auto">
              <Pie
                data={timeSpentData}
                dataKey="hours"
                nameKey="platform"
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#8884d8"
                label
              >
                {timeSpentData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </div> */}
          <div className="bg-white p-6 rounded-lg shadow mt-8">
  <h3 className="text-xl font-semibold text-gray-700 mb-4">
    Time Spent on Social Media (Hours/Week)
  </h3>
  <div className="w-full flex justify-center">
    <PieChart
      width={isMobile ? 300 : 500} // Adjust size based on screen size
      height={isMobile ? 300 : 500}
      className="mx-auto"
    >
      <Pie
        data={timeSpentData}
        dataKey="hours"
        nameKey="platform"
        cx="50%"
        cy="50%"
        outerRadius={isMobile ? 80 : 120} // Adjust radius for mobile view
        fill="#8884d8"
        label={(entry) => `${entry.platform}: ${entry.hours} hrs`} // Custom labels
      >
        {timeSpentData.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
            stroke="#ffffff"
            strokeWidth={2} // Add a stroke for better separation
          />
        ))}
      </Pie>
      <Tooltip formatter={(value) => `${value} hrs`} />
      <Legend />
    </PieChart>
  </div>
</div>

        </div>
      </div>
      </div>
  
  );
}
