import React, { useState, useEffect } from 'react';
import { FiSearch, FiInfo } from "react-icons/fi";
import './index.css';
import Sidebar from '../../Sidebar/Sidebar';

export default function Main() {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [tenders, setTenders] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [rightSidebarOpen, setRightsidebarOpen] = useState(false);

  // Check screen size and set mobile state
  useEffect(() => {
    const checkMobileView = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind's `sm` breakpoint
    };

    // Initial check
    checkMobileView();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobileView);

    // Cleanup listener
    return () => window.removeEventListener('resize', checkMobileView);
  }, []);
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const toggleMobileSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleDesktopSidebar = () => {
    if (!isMobile) setIsSidebarVisible(!isSidebarVisible);
  };

  const closeMobileSidebar = () => {
    if (isMobile && isSidebarOpen) setIsSidebarOpen(false);
  };
  const fetchTenderData = () => {
    const sampleData = [
      { tenderName: "Appointment of Agency", submitDate: "12 Aug 2022 - 12:25 am", volume: "Medium", status: "Analyzing" },
      { tenderName: "Appointment of Agency", submitDate: "12 Aug 2022 - 12:25 am", volume: "Medium", status: "Accepted" },
      { tenderName: "Enhancements of CBFC's Application", submitDate: "12 Aug 2022 - 12:25 am", volume: "Big", status: "Not Submitted" },
      { tenderName: "Empanelment of Zonal Marketing", submitDate: "12 Aug 2022 - 12:25 am", volume: "Small", status: "Rejected" },
      { tenderName: "eProcurement System", submitDate: "12 Aug 2022 - 12:25 am", volume: "Big", status: "Submitted" },
    ];
    setTenders(sampleData);
  };

  useEffect(() => {
    fetchTenderData();
  }, []);
  useEffect(() => {
    if (rightSidebarOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [rightSidebarOpen]);

  // Filter tenders by search query
  const filteredTenders = tenders.filter((tender) =>
    tender.tenderName.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleOpenSidebar = () => setRightsidebarOpen(true);
  const handleCloseSidebar = () => setRightsidebarOpen(false);
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar
             isMobile={isMobile}
             isSidebarOpen={isSidebarOpen}
             isSidebarVisible={isSidebarVisible}
             toggleMobileSidebar={toggleMobileSidebar}
             closeMobileSidebar={closeMobileSidebar}
           />
      {/* Main Content */}

      
    </div>
  );
}
<div class="flex justify-center gap-4 mt-5">
  <button class="bg-transparent border border-indigo-500 rounded-md text-indigo-500 font-medium px-4 py-2 hover:bg-indigo-500 hover:text-white transition-colors">
    Free Trial
  </button>
  <button class="bg-transparent border border-indigo-500 rounded-md text-indigo-500 font-medium px-4 py-2 hover:bg-indigo-500 hover:text-white transition-colors">
    Upgrade
  </button>
</div>