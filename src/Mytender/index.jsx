import React, { useState, useEffect } from 'react';
import { FiSearch, FiInfo } from "react-icons/fi";
import './index.css';
import Sidebar from '../Sidebar/Sidebar';

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
      <main
        className={`flex-1 flex flex-col overflow-auto transition-all duration-300 ease-in-out 
          ${isMobile ? 'ml-0' : isSidebarVisible ? 'ml-64' : 'ml-0'}`}
        onClick={closeMobileSidebar}
      >
        {isMobile && (
          <div className="p-4 bg-white shadow-md">
            <button onClick={toggleMobileSidebar} className="text-gray-600">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        )}
        <div className="w-full bg-white shadow-md flex items-center justify-between px-4 py-2 sm:px-6 md:px-8">
          {/* Left Section (Logo/Title) */}
          <div className="flex items-center gap-4">
          </div>

          {/* Middle Section (Optional - for navigation) */}

          {/* Right Section (Icons and Profile) */}
          <div className="flex items-center gap-4">
            <div class="relative flex w-64 mx-auto">
              <input type="checkbox" id="toggle" class="sr-only peer" />
              <label for="toggle" class="flex w-full rounded-md border border-indigo-500 cursor-pointer">
                <div class="w-1/2 text-center py-2 bg-indigo-500 text-white font-medium rounded-l-md peer-checked:bg-transparent peer-checked:text-indigo-500 transition-all">
                  Free Trial
                </div>
                <div class="w-1/2 text-center py-2 bg-transparent text-indigo-500 font-medium rounded-r-md peer-checked:bg-indigo-500 peer-checked:text-white transition-all">
                  Upgrade
                </div>
              </label>
            </div>


            {/* Settings Icon */}
            <div className='w-[24px] h-[24px] shrink-0 relative z-[38]'>
              {/* <div className='w-[17.787px] h-[19.222px] bg-[url(../assets/images/2329be46-b3c5-4e1b-aa63-b568f506f09d.png)] bg-[length:100%_100%] bg-no-repeat relative z-[39] mt-[2.278px] mr-0 mb-0 ml-[3.279px]' /> */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Iconly/Light/Setting">
                  <g id="Setting">
                    <path id="Path_33946" fill-rule="evenodd" clip-rule="evenodd" d="M20.8067 7.62361L20.1842 6.54352C19.6577 5.6296 18.4907 5.31432 17.5755 5.83872V5.83872C17.1399 6.09534 16.6201 6.16815 16.1307 6.04109C15.6413 5.91402 15.2226 5.59752 14.9668 5.16137C14.8023 4.88415 14.7139 4.56839 14.7105 4.24604V4.24604C14.7254 3.72922 14.5304 3.2284 14.17 2.85767C13.8096 2.48694 13.3145 2.27786 12.7975 2.27808H11.5435C11.037 2.27807 10.5513 2.47991 10.194 2.83895C9.83669 3.19798 9.63717 3.68459 9.63961 4.19112V4.19112C9.6246 5.23693 8.77248 6.07681 7.72657 6.0767C7.40421 6.07336 7.08846 5.98494 6.81123 5.82041V5.82041C5.89606 5.29601 4.72911 5.61129 4.20254 6.52522L3.53435 7.62361C3.00841 8.53639 3.3194 9.70261 4.23 10.2323V10.2323C4.8219 10.574 5.18653 11.2056 5.18653 11.8891C5.18653 12.5725 4.8219 13.2041 4.23 13.5458V13.5458C3.32056 14.0719 3.00923 15.2353 3.53435 16.1454V16.1454L4.16593 17.2346C4.41265 17.6798 4.8266 18.0083 5.31619 18.1474C5.80578 18.2866 6.33064 18.2249 6.77462 17.976V17.976C7.21108 17.7213 7.73119 17.6516 8.21934 17.7822C8.70749 17.9128 9.12324 18.233 9.37416 18.6717C9.5387 18.9489 9.62711 19.2646 9.63046 19.587V19.587C9.63046 20.6435 10.487 21.5 11.5435 21.5H12.7975C13.8505 21.5001 14.7055 20.6491 14.7105 19.5962V19.5962C14.7081 19.088 14.9089 18.6 15.2682 18.2407C15.6275 17.8814 16.1155 17.6807 16.6236 17.6831C16.9452 17.6917 17.2596 17.7798 17.5389 17.9394V17.9394C18.4517 18.4653 19.6179 18.1544 20.1476 17.2438V17.2438L20.8067 16.1454C21.0618 15.7075 21.1318 15.186 21.0012 14.6964C20.8706 14.2067 20.5502 13.7894 20.111 13.5367V13.5367C19.6718 13.284 19.3514 12.8666 19.2208 12.3769C19.0902 11.8873 19.1603 11.3658 19.4154 10.928C19.5812 10.6383 19.8214 10.3982 20.111 10.2323V10.2323C21.0161 9.70289 21.3264 8.54349 20.8067 7.63277V7.63277V7.62361Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <circle id="Ellipse_737" cx="12.1751" cy="11.8891" r="2.63616" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                </g>
              </svg>


            </div>

            {/* Notification Icon */}

            {/* Profile */}
            <div className='w-[24px] h-[24px] shrink-0 relative z-40'>

              <div className='w-[17px] h-[20px] relative z-[41] mt-[2px] mr-0 mb-0 ml-[3.5px]'>
                {/* <div className='w-[18.5px] h-[17.348px] bg-[url(../assets/images/0bb13f3a-dd33-451b-90eb-2bea41184eb8.png)] bg-[length:100%_100%] bg-no-repeat relative z-[42] mt-[-0.75px] mr-0 mb-0 ml-[-0.75px]' /> */}
                {/* <div className='w-[6.369px] h-[2.643px] bg-[url(../assets/images/9c841fac-477f-495d-9597-377682512179.png)] bg-[length:100%_100%] bg-no-repeat relative z-[43] mt-[1.51px] mr-0 mb-0 ml-[5.269px]' /> */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Iconly/Light/Notification">
                    <g id="Notification">
                      <path id="Stroke 1" fill-rule="evenodd" clip-rule="evenodd" d="M12 17.8476C17.6392 17.8476 20.2481 17.1242 20.5 14.2205C20.5 11.3188 18.6812 11.5054 18.6812 7.94511C18.6812 5.16414 16.0452 2 12 2C7.95477 2 5.31885 5.16414 5.31885 7.94511C5.31885 11.5054 3.5 11.3188 3.5 14.2205C3.75295 17.1352 6.36177 17.8476 12 17.8476Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path id="Stroke 3" d="M14.3887 20.8572C13.0246 22.3719 10.8966 22.3899 9.51941 20.8572" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                  </g>
                </svg>

              </div>
            </div>
            <div className='flex w-[72px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[44]'>
              <div className='flex w-[32px] gap-[20px] items-center shrink-0 flex-nowrap relative z-[45]'>
                {/* <div className='w-[32px] h-[32px] shrink-0 bg-[url(../assets/images/a68291239adabc1b461893a09975e11abc591d9a.png)] bg-cover bg-no-repeat rounded-[8px] relative z-[46]' /> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" xml:space="preserve"><path fill="#282828" d="M135.832 140.848h-70.9c-2.9 0-5.6-1.6-7.4-4.5-1.4-2.3-1.4-5.7 0-8.6l4-8.2c2.8-5.6 9.7-9.1 14.9-9.5 1.7-.1 5.1-.8 8.5-1.6 2.5-.6 3.9-1 4.7-1.3-.2-.7-.6-1.5-1.1-2.2-6-4.7-9.6-12.6-9.6-21.1 0-14 9.6-25.3 21.5-25.3s21.5 11.4 21.5 25.3c0 8.5-3.6 16.4-9.6 21.1-.5.7-.9 1.4-1.1 2.1.8.3 2.2.7 4.6 1.3 3 .7 6.6 1.3 8.4 1.5 5.3.5 12.1 3.8 14.9 9.4l3.9 7.9c1.5 3 1.5 6.8 0 9.1-1.6 2.9-4.4 4.6-7.2 4.6zm-35.4-78.2c-9.7 0-17.5 9.6-17.5 21.3 0 7.4 3.1 14.1 8.2 18.1.1.1.3.2.4.4 1.4 1.8 2.2 3.8 2.2 5.9 0 .6-.2 1.2-.7 1.6-.4.3-1.4 1.2-7.2 2.6-2.7.6-6.8 1.4-9.1 1.6-4.1.4-9.6 3.2-11.6 7.3l-3.9 8.2c-.8 1.7-.9 3.7-.2 4.8.8 1.3 2.3 2.6 4 2.6h70.9c1.7 0 3.2-1.3 4-2.6.6-1 .7-3.4-.2-5.2l-3.9-7.9c-2-4-7.5-6.8-11.6-7.2-2-.2-5.8-.8-9-1.6-5.8-1.4-6.8-2.3-7.2-2.5-.4-.4-.7-1-.7-1.6 0-2.1.8-4.1 2.2-5.9.1-.1.2-.3.4-.4 5.1-3.9 8.2-10.7 8.2-18-.2-11.9-8-21.5-17.7-21.5z" /></svg>

              </div>
              <span className="h-[21px] shrink-0 basis-auto font-['Inter'] text-[15px] font-medium leading-[20.574px] text-[#9f71fd] relative text-left whitespace-nowrap z-0">
                User
              </span>

            </div>
          </div>

          {/* Mobile Menu Button */}

        </div>


        {/* <div className="flex flex-col md:flex-row justify-between items-center w-full">
            <h1 className="text-lg font-medium text-gray-700">Your Tenders</h1>
            <button onClick={handleOpenPopup} className="flex items-center bg-gradient-to-r from-orange-400 to-purple-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:opacity-90" >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              Add new Tender
            </button>
          </div> */}

        {/* <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <h1 className="text-lg font-medium text-gray-700">Your Tenders</h1>
        <button
          onClick={handleOpenSidebar}
          className="flex items-center bg-gradient-to-r from-orange-400 to-purple-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:opacity-90"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path d="M12 5V19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Add new Tender
        </button>
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg transform transition-transform duration-300 ${
          rightSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Appointment of Agency</h2>
          <button onClick={handleCloseSidebar} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>

        <div className="p-4 space-y-6">
          <div className="flex items-center space-x-2">
            <span className="bg-green-200 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">Accepted</span>
            <span className="text-gray-500 text-sm">12 Aug 2022 - 12:25 am • Medium</span>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Tender Documents</h3>
            <ul className="space-y-2">
              <li className="flex items-center bg-gray-100 p-2 rounded-md">
                <img src="https://img.icons8.com/color/24/pdf.png" alt="PDF Icon" className="mr-2" />
                <span className="flex-1 text-gray-700">my-cv.pdf</span>
                <span className="text-gray-500 text-sm">320 KB</span>
              </li>
              <li className="flex items-center bg-gray-100 p-2 rounded-md">
                <img src="https://img.icons8.com/color/24/pdf.png" alt="PDF Icon" className="mr-2" />
                <span className="flex-1 text-gray-700">my-cv.pdf</span>
                <span className="text-gray-500 text-sm">2.1 MB</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Fillable Documents</h3>
            <ul className="space-y-2">
              <li className="flex items-center bg-gray-100 p-2 rounded-md">
                <img src="https://img.icons8.com/color/24/pdf.png" alt="PDF Icon" className="mr-2" />
                <span className="flex-1 text-gray-700">my-cv.pdf</span>
                <span className="text-gray-500 text-sm">120 KB</span>
              </li>
              <li className="flex items-center bg-gray-100 p-2 rounded-md">
                <img src="https://img.icons8.com/color/24/pdf.png" alt="PDF Icon" className="mr-2" />
                <span className="flex-1 text-gray-700">my-cv.pdf</span>
                <span className="text-gray-500 text-sm">120 KB</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="p-4 flex justify-between border-t">
          <button className="flex items-center text-red-500 hover:text-red-600">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
            Delete
          </button>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600">
            View Project
          </button>
        </div>
      </div>

      {rightSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={handleCloseSidebar}></div>
      )}
    </div> */}
        <div className=" gap-5 p-5 items-start relative">
          <div className="flex flex-col gap-5 p-5 items-start relative z-50 bg-gray-100 ">
            {/* Header and Button */}
            <div className="flex flex-col md:flex-row justify-between items-center w-full">
              <h1 className="text-lg font-medium text-gray-700">Your Tenders</h1>
              <button
                onClick={handleOpenSidebar}
                className="flex items-center bg-gradient-to-r from-orange-400 to-purple-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:opacity-90 ml-auto"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M12 5V19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Add new Tender
              </button>
            </div>


            {/* Sidebar */}
            <div
              className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg z-50 transform transition-transform duration-300 ${rightSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-xl font-semibold">Appointment of Agency</h2>
                <button onClick={handleCloseSidebar} className="text-gray-500 hover:text-gray-700">
                  ✕
                </button>
              </div>

              <div className="p-4 space-y-6">
                <div className="flex items-center space-x-2">
                  <span className="bg-green-200 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">Accepted</span>
                  <span className="text-gray-500 text-sm">12 Aug 2022 - 12:25 am • Medium</span>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Tender Documents</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center bg-gray-100 p-2 rounded-md">
                      <img src="https://img.icons8.com/color/24/pdf.png" alt="PDF Icon" className="mr-2" />
                      <span className="flex-1 text-gray-700">my-cv.pdf</span>
                      <span className="text-gray-500 text-sm">320 KB</span>
                    </li>
                    <li className="flex items-center bg-gray-100 p-2 rounded-md">
                      <img src="https://img.icons8.com/color/24/pdf.png" alt="PDF Icon" className="mr-2" />
                      <span className="flex-1 text-gray-700">my-cv.pdf</span>
                      <span className="text-gray-500 text-sm">2.1 MB</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Fillable Documents</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center bg-gray-100 p-2 rounded-md">
                      <img src="https://img.icons8.com/color/24/pdf.png" alt="PDF Icon" className="mr-2" />
                      <span className="flex-1 text-gray-700">my-cv.pdf</span>
                      <span className="text-gray-500 text-sm">120 KB</span>
                    </li>
                    <li className="flex items-center bg-gray-100 p-2 rounded-md">
                      <img src="https://img.icons8.com/color/24/pdf.png" alt="PDF Icon" className="mr-2" />
                      <span className="flex-1 text-gray-700">my-cv.pdf</span>
                      <span className="text-gray-500 text-sm">120 KB</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-4 flex justify-between border-t">
                <button className="flex items-center text-red-500 hover:text-red-600">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  Delete
                </button>
                <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600">
                  View Project
                </button>
              </div>
            </div>

            {/* Overlay to hide background content */}
            {rightSidebarOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={handleCloseSidebar}></div>
            )}
          </div>
          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {/* Card 1 */}
            <div className="bg-white rounded-lg p-5 shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-orange-100 rounded-full flex justify-center items-center">
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9446 13.8894C18.6193 13.8894 19.1856 14.4462 19.0824 15.1125C18.4772 19.0325 15.1214 21.9431 11.074 21.9431C6.59613 21.9431 2.96666 18.3136 2.96666 13.8368C2.96666 10.1483 5.76876 6.71255 8.9235 5.9357C9.6014 5.76834 10.2961 6.24518 10.2961 6.94307C10.2961 11.6715 10.4551 12.8947 11.353 13.5599C12.2509 14.2252 13.3067 13.8894 17.9446 13.8894Z" stroke="#9F71FD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.3592 9.9517C22.4129 6.9138 18.6813 2.01696 14.1339 2.10117C13.7802 2.10749 13.4971 2.40222 13.4813 2.75485C13.3665 5.25275 13.5213 8.48959 13.6076 9.95696C13.6339 10.4138 13.9929 10.7727 14.4487 10.7991C15.9571 10.8854 19.3118 11.0033 21.7739 10.6306C22.1087 10.5801 22.3539 10.2896 22.3592 9.9517Z" stroke="#9F71FD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </div>
                <div>
                  <p className="text-sm text-gray-500">Tenders Submitted</p>
                  <div className="flex items-center gap-2">
                    <p className="text-xl font-semibold text-gray-800">321</p>
                    <span className="text-green-600 text-sm bg-green-100 rounded-full px-2">
                      +12%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg p-5 shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-orange-100 rounded-full flex justify-center items-center">
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9446 13.8894C18.6193 13.8894 19.1856 14.4462 19.0824 15.1125C18.4772 19.0325 15.1214 21.9431 11.074 21.9431C6.59613 21.9431 2.96666 18.3136 2.96666 13.8368C2.96666 10.1483 5.76876 6.71255 8.9235 5.9357C9.6014 5.76834 10.2961 6.24518 10.2961 6.94307C10.2961 11.6715 10.4551 12.8947 11.353 13.5599C12.2509 14.2252 13.3067 13.8894 17.9446 13.8894Z" stroke="#9F71FD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.3592 9.9517C22.4129 6.9138 18.6813 2.01696 14.1339 2.10117C13.7802 2.10749 13.4971 2.40222 13.4813 2.75485C13.3665 5.25275 13.5213 8.48959 13.6076 9.95696C13.6339 10.4138 13.9929 10.7727 14.4487 10.7991C15.9571 10.8854 19.3118 11.0033 21.7739 10.6306C22.1087 10.5801 22.3539 10.2896 22.3592 9.9517Z" stroke="#9F71FD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </div>
                <div>
                  <p className="text-sm text-gray-500">Tenders Submitted</p>
                  <div className="flex items-center gap-2">
                    <p className="text-xl font-semibold text-gray-800">321</p>
                    <span className="text-green-600 text-sm bg-green-100 rounded-full px-2">
                      +12%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg p-5 shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-orange-100 rounded-full flex justify-center items-center">
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9446 13.8894C18.6193 13.8894 19.1856 14.4462 19.0824 15.1125C18.4772 19.0325 15.1214 21.9431 11.074 21.9431C6.59613 21.9431 2.96666 18.3136 2.96666 13.8368C2.96666 10.1483 5.76876 6.71255 8.9235 5.9357C9.6014 5.76834 10.2961 6.24518 10.2961 6.94307C10.2961 11.6715 10.4551 12.8947 11.353 13.5599C12.2509 14.2252 13.3067 13.8894 17.9446 13.8894Z" stroke="#9F71FD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.3592 9.9517C22.4129 6.9138 18.6813 2.01696 14.1339 2.10117C13.7802 2.10749 13.4971 2.40222 13.4813 2.75485C13.3665 5.25275 13.5213 8.48959 13.6076 9.95696C13.6339 10.4138 13.9929 10.7727 14.4487 10.7991C15.9571 10.8854 19.3118 11.0033 21.7739 10.6306C22.1087 10.5801 22.3539 10.2896 22.3592 9.9517Z" stroke="#9F71FD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </div>
                <div>
                  <p className="text-sm text-gray-500">Tenders Submitted</p>
                  <div className="flex items-center gap-2">
                    <p className="text-xl font-semibold text-gray-800">150</p>
                    <span className="text-red-600 text-sm bg-red-100 rounded-full px-2">
                      -5%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="min-h-screen bg-gray-100 flex flex-col">

          <header className="bg-white shadow p-4 flex items-center justify-between">
            <h1 className="text-lg font-semibold text-gray-800">My Tenders</h1>
            <div className="relative w-64">
              <input
                type="text"
                placeholder="Search tenders..."
                className="block w-full py-2 px-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FiSearch className="absolute top-2.5 right-3 text-gray-400" />
            </div>
          </header>

          {/* Table Container */}
          <div className="flex-1 overflow-auto">

            <div className="container mx-auto px-4 py-6">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                {/* Responsive Table */}
                <table className="table-auto w-full border-collapse" >

                  <thead className="bg-gray-50">

                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Tender Name</th>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Submit Date</th>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Volume</th>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Status</th>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTenders.map((tender, index) => (
                      <tr
                        key={index}
                        className={`hover:bg-gray-50 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                      >
                        <td className="px-4 py-2 text-sm text-gray-700">{tender.tenderName}</td>
                        <td className="px-4 py-2 text-sm text-gray-700">{tender.submitDate}</td>
                        <td className="px-4 py-2 text-sm text-gray-700">{tender.volume}</td>
                        <td
                          className={`px-4 py-2 text-sm font-semibold text-center`}
                          style={{
                            backgroundColor:
                              tender.status === "Analyzing"
                                ? "#FEF3C7" // Light yellow for "Analyzing"
                                : tender.status === "Accepted"
                                  ? "#D1FAE5" // Light green for "Accepted"
                                  : tender.status === "Rejected"
                                    ? "#FEE2E2" // Light red for "Rejected"
                                    : tender.status === "Submitted"
                                      ? "#DBEAFE" // Light blue for "Submitted"
                                      : "#F3F4F6", // Default light gray
                            color:
                              tender.status === "Analyzing"
                                ? "#B45309" // Darker yellow text for "Analyzing"
                                : tender.status === "Accepted"
                                  ? "#065F46" // Dark green text for "Accepted"
                                  : tender.status === "Rejected"
                                    ? "#B91C1C" // Dark red text for "Rejected"
                                    : tender.status === "Submitted"
                                      ? "#1D4ED8" // Dark blue text for "Submitted"
                                      : "#4B5563", // Default gray text
                            border: ` ${tender.status === "Analyzing"
                              ? "#FDE68A" // Border yellow for "Analyzing"
                              : tender.status === "Accepted"
                                ? "#34D399" // Border green for "Accepted"
                                : tender.status === "Rejected"
                                  ? "#F87171" // Border red for "Rejected"
                                  : tender.status === "Submitted"
                                    ? "#60A5FA" // Border blue for "Submitted"
                                    : "#D1D5DB" // Default gray border
                              }`,
                            borderRadius: "12px", // Slightly more rounded corners
                            padding: "10px 12px", // Better padding for text readability
                            marginTop: "5px", // Small margin between rows and cells
                          }}
                        >
                          {tender.status}
                        </td>

                        <td className="px-7 py-2 text-sm text-gray-500">
                          <a href="#" className="text-gray-500 hover:underline">
                            <FiInfo className="inline-block mr-1" />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
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