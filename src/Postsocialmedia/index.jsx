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
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
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
import { FaTelegramPlane, FaWhatsapp, FaInbox, FaShareAlt } from "react-icons/fa"; // For icons
import { BsGrid } from "react-icons/bs";

export default function Main() {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);

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

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedPlatforms([]); // Clear selected platforms when closing
  };

  const togglePlatform = (platform) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    );
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
          <div className="grid grid-cols-12 gap-4">
        {/* Sidebar Section */}
        <aside className="col-span-3 bg-white rounded-lg shadow p-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Social Media</h2>
          <nav className="space-y-4">
            <div className="flex items-center space-x-4 cursor-pointer p-2 rounded hover:bg-gray-100">
              <FaShareAlt className="text-gray-500" />
              <span className="font-medium text-gray-700">Posts</span>
            </div>
            <div className="flex items-center space-x-4 cursor-pointer p-2 rounded hover:bg-gray-100">
              <FaTelegramPlane className="text-gray-500" />
              <span className="font-medium text-gray-700">Telegram</span>
            </div>
            <div className="flex items-center space-x-4 cursor-pointer p-2 rounded hover:bg-gray-100">
              <FaWhatsapp className="text-gray-500" />
              <span className="font-medium text-gray-700">WhatsApp</span>
            </div>
            <div className="flex items-center space-x-4 cursor-pointer p-2 rounded hover:bg-gray-100">
              <FaInbox className="text-gray-500" />
              <span className="font-medium text-gray-700">Smart Inbox</span>
            </div>
            <div className="flex items-center space-x-4 cursor-pointer p-2 rounded hover:bg-gray-100">
              <BsGrid className="text-gray-500" />
              <span className="font-medium text-gray-700">Social Accounts</span>
            </div>
          </nav>
        </aside>

        {/* Main Content Section */}
        <section className="col-span-9 bg-white rounded-lg shadow p-6">
          <div className="flex items-center space-x-4">
            {/* Start Date */}
            <div className="flex items-center space-x-2">
              <label htmlFor="start-date" className="text-gray-600">
                Start Date
              </label>
              <input
                type="datetime-local"
                id="start-date"
                className="border-gray-300 rounded p-2"
              />
            </div>
            <span className="text-gray-500">→</span>
            {/* End Date */}
            <div className="flex items-center space-x-2">
              <label htmlFor="end-date" className="text-gray-600">
                End Date
              </label>
              <input
                type="datetime-local"
                id="end-date"
                className="border-gray-300 rounded p-2"
              />
            </div>
            {/* Status Dropdown */}
            <select
              className="border-gray-300 rounded p-2"
              defaultValue=""
            >
              <option value="" disabled>
                Status
              </option>
              <option value="all">All</option>
              <option value="draft">Draft</option>
              <option value="scheduled">Scheduled</option>
            </select>
            {/* Search and Clear Buttons */}
            <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600">
              Search
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded shadow hover:bg-gray-300">
              Clear
            </button>
          </div>

          {/* Empty State */}
          <div className="flex flex-col items-center justify-center mt-16">
            <svg
              className="h-16 w-16 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16l-4-4m0 0l4-4m-4 4h16"
              />
            </svg>
            <p className="text-gray-500 mt-4">No data was found</p>
          </div>
        </section>
      </div>
      <div className="p-6 bg-gray-100 min-h-screen">
      {/* Button to Open Popup */}
      <button
        onClick={handleOpenPopup}
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-lg shadow-md hover:opacity-90 justify-center"
      >
        Create Post
      </button>

      {/* Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-2xl p-6">
            {/* Popup Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 js"  >Create Post</h2>
              <button
                onClick={handleClosePopup}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Social Media Platforms */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Select Social Media Platforms
              </h3>
              <div className="flex space-x-4">
                {[
                  { name: "Facebook", icon: <FaFacebook className="h-6 w-6" /> },
                  { name: "Instagram", icon: <FaInstagram className="h-6 w-6" /> },
                 
                  { name: "LinkedIn", icon: <FaLinkedin className="h-6 w-6" /> },
                ].map((platform) => (
                  <button
                    key={platform.name}
                    onClick={() => togglePlatform(platform.name)}
                    className={`flex flex-col items-center justify-center px-4 py-2 rounded-lg shadow ${
                      selectedPlatforms.includes(platform.name)
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {platform.icon}
                    <span className="mt-1 text-sm">{platform.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Message Input */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Add Message
              </label>
              <textarea
                className="w-full border-gray-300 rounded-lg p-3 focus:ring focus:ring-blue-500"
                rows="4"
                placeholder="Write your post message here..."
              ></textarea>
              <div className="flex justify-end mt-2">
                <button className="text-blue-500 font-medium text-sm hover:underline">
                  + Insert Short Link
                </button>
              </div>
            </div>

            {/* Image Upload */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Add Image
              </label>
              <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg text-center hover:border-blue-500">
                <p className="text-gray-500">Click or drag files here to upload</p>
                <p className="text-sm text-gray-400">(.png, .jpg, .gif)</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleClosePopup}
                className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-200"
              >
                Save Draft
              </button>
              <button
                onClick={handleClosePopup}
                className="bg-gradient-to-r from-purple-500 to-orange-500 text-white px-4 py-2 rounded-lg hover:opacity-90"
              >
                Save & Publish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>

        </div>
      </div>
      </div>
  
  );
}
