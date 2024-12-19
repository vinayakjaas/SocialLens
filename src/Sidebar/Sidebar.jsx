import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Sidebar = ({
  isMobile,
  isSidebarOpen,
  isSidebarVisible,
  toggleMobileSidebar,
  closeMobileSidebar,
}) => {
  return (
    <>

  {isMobile && isSidebarOpen && (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-40"
      onClick={closeMobileSidebar}
    />
  )}

  {/* Sidebar */}
  <aside
    className={`fixed top-0 left-0 z-50 h-full bg-white shadow-md w-64 transition-transform duration-300 ease-in-out 
      ${isMobile ? (isSidebarOpen ? 'translate-x-0' : '-translate-x-full') : (isSidebarVisible ? 'translate-x-0' : '-translate-x-full')}`}
  >
    <div className="p-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">SocialLens.</h1>
      {isMobile && (
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
    <nav className="mt-6 space-y-4 px-4">
      <div className="bg-gradient-to-r from-orange-400 to-purple-500 px-6 py-4 rounded-lg shadow-md cursor-pointer flex items-center gap-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.4" d="M16.0755 2H19.4615C20.8637 2 22 3.14585 22 4.55996V7.97452C22 9.38864 20.8637 10.5345 19.4615 10.5345H16.0755C14.6732 10.5345 13.537 9.38864 13.537 7.97452V4.55996C13.537 3.14585 14.6732 2 16.0755 2Z" fill="white" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.53852 2H7.92449C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2ZM4.53852 13.4655H7.92449C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655ZM19.4615 13.4655H16.0755C14.6732 13.4655 13.537 14.6114 13.537 16.0255V19.44C13.537 20.8532 14.6732 22 16.0755 22H19.4615C20.8637 22 22 20.8532 22 19.44V16.0255C22 14.6114 20.8637 13.4655 19.4615 13.4655Z" fill="white" />
        </svg>
        <Link
    to="/dashboard"
    className="text-white text-2xl font-bold"
  >
    Dashboard
  </Link>
      </div>

      <div className="flex items-center ">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.5137 21.5H8.1659C5.09954 21.5 2.74714 20.3925 3.41533 15.9348L4.19336 9.89363C4.60526 7.66937 6.02402 6.81812 7.26888 6.81812H17.4474C18.7105 6.81812 20.0469 7.73345 20.5229 9.89363L21.3009 15.9348C21.8684 19.8891 19.5801 21.5 16.5137 21.5Z"
            stroke="#53545C"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.651 6.59848C16.651 4.21241 14.7167 2.27812 12.3307 2.27812V2.27812C11.1817 2.27325 10.0781 2.72628 9.26386 3.53703C8.44967 4.34778 7.99198 5.44947 7.99199 6.59848H7.99199"
            stroke="#53545C"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.2963 11.102H15.2506"
            stroke="#53545C"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.46567 11.102H9.41991"
            stroke="#53545C"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <Link
    to="/postsocialmedia"
    className="block py-2 px-4 rounded hover:bg-gray-100 text-gray-700 font-medium"
    onClick={closeMobileSidebar} // Keep this if you're closing the sidebar on click
  >
    My Posts
  </Link>
      </div>

      {/* <div className="flex items-center gap-2">
        <svg width="26" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11.7666" cy="11.7669" r="8.98856" stroke="#53545C" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M18.0183 18.4854L21.5423 22.0002" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <a
          href="#others"
          className="block py-2 px-4 rounded hover:bg-gray-100 text-gray-700 font-medium"
          onClick={closeMobileSidebar}
        >
          Browse Tender
        </a>
      </div> */}
      {/* <div className="flex items-center gap-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7378 2.76175H8.0848C6.0048 2.75375 4.2998 4.41175 4.2508 6.49075V17.2037C4.2048 19.3167 5.8798 21.0677 7.9928 21.1147C8.0238 21.1147 8.0538 21.1157 8.0848 21.1147H16.0738C18.1678 21.0297 19.8178 19.2997 19.8028 17.2037V8.03775L14.7378 2.76175Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M14.4751 2.75V5.659C14.4751 7.079 15.6231 8.23 17.0431 8.234H19.7981" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M14.2881 15.3584H8.88811" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M12.2432 11.6064H8.88721" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg> */}

        {/* <a
          href="#others"
          className="block py-2 px-4 rounded hover:bg-gray-100 text-gray-700 font-medium"
          onClick={closeMobileSidebar}
        >
          My Documents
        </a> */}
      {/* </div> */}
      <div className="flex items-center gap-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.82 2H4.18C2.97602 2 2 2.97602 2 4.18V19.82C2 21.024 2.97602 22 4.18 22H19.82C21.024 22 22 21.024 22 19.82V4.18C22 2.97602 21.024 2 19.82 2Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M7 2V22" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M17 2V22" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M2 12H22" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M2 7H7" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M2 17H7" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M17 17H22" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M17 7H22" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

        <a
          href="#others"
          className="block py-2 px-4 rounded hover:bg-gray-100 text-gray-700 font-medium"
          onClick={closeMobileSidebar}
        >
          Tutorials
        </a>
      </div>


    </nav>
    <div className="absolute bottom-6 left-6 w-[calc(100%-3rem)]">
      <a
        href="#logout"
        className="block py-2 px-4 rounded hover:bg-red-100 text-red-600 font-medium"
        onClick={closeMobileSidebar}
      >
        Logout
      </a>
      <a
        href="#support"
        className="block py-2 px-4 rounded hover:bg-gray-100 text-gray-700 font-medium"
        onClick={closeMobileSidebar}
      >
        Support
      </a>
    </div>
  </aside>
    </>
  );
};

Sidebar.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
  isSidebarVisible: PropTypes.bool.isRequired,
  toggleMobileSidebar: PropTypes.func.isRequired,
  closeMobileSidebar: PropTypes.func.isRequired,
};

export default Sidebar;




