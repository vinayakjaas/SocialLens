// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//     const LoginButton = () => {
//         const navigate = useNavigate(); // Initialize the navigate function
      
//         const handleLogin = (event) => {
//           event.preventDefault(); // Prevent form submission default behavior (if wrapped in a form)
//           navigate("/addsocialmedia"); // Redirect to the /addsocialmedia page
//         };
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-50 to-purple-100">
//       <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
//         <h1 className="text-3xl font-bold text-purple-700 text-center mb-4">
//           TenderSeal.
//         </h1>
//         <h2 className="text-lg text-center text-gray-600 mb-6">
//           Get Started with
//         </h2>
//         <form className="space-y-4">
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm text-gray-600 mb-1"
//             >
//               Your Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
//               placeholder="Your Email Address"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm text-gray-600 mb-1"
//             >
//               Enter Password
//             </label>
//             <div className="relative">
//               <input
//                 type="password"
//                 id="password"
//                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
//                 placeholder="Enter Password"
//                 required
//               />
//               <button
//                 type="button"
//                 className="absolute inset-y-0 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
//               >
//                 👁️
//               </button>
//             </div>
//           </div>
//           <p className="text-sm text-gray-600 text-center">
//             Don’t have an account?{" "}
//             <a
//               href="/signup"
//               className="text-purple-600 hover:underline font-medium"
//             >
//               Sign up
//             </a>
//           </p>
//           <button
//             type="submit"
//             className="w-full py-2 text-white bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-purple-400"
//           >
//             Login
//           </button>
//         </form>
//         <div className="relative mt-6 flex items-center">
//   <div className="flex-grow h-px bg-gray-300"></div>
//   <p className="text-sm text-gray-500 text-center bg-white px-4">
//     Or
//   </p>
//   <div className="flex-grow h-px bg-gray-300"></div>
// </div>

//         <div className="space-y-3 mt-6">
//           {/* <button
//             className="w-full py-2 flex items-center justify-center border rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
//           >
            
//             Login with Google
//           </button> */}
//           <button
//   className="w-full py-2 flex items-center justify-center border rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
// >
//   <img
//     src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"
//     alt="Google Logo"
//     className="w-5 h-5 mr-2"
//   />
//   Login with Google
// </button>

//           <button
//             className="w-full py-2 flex items-center justify-center border rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
//           >
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
//               alt="Microsoft Logo"
//               className="w-5 h-5 mr-2"
//             />
//             Login with Microsoft
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const Login = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent form submission default behavior

    // Show success toast
    toast.success("Successfully Logged In!", {
      position: "top-center",
      autoClose: 2000, // Automatically close after 2 seconds
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      icon: "✅", // Add tick icon
    });

    // Navigate to /addsocialmedia after a short delay
    setTimeout(() => {
      navigate("/addsocialmedia");
    }, 2000); // 2-second delay to allow the toast to show
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-50 to-purple-100">
      {/* Toast Container */}
      <ToastContainer />

      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
        {/* Header */}
        <h1 className="text-3xl font-bold text-purple-700 text-center mb-4">
        SocialLens.
        </h1>
        <h2 className="text-lg text-center text-gray-600 mb-6">
          Get Started with
        </h2>

        {/* Login Form */}
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-gray-600 mb-1"
            >
              Your Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Your Email Address"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm text-gray-600 mb-1"
            >
              Enter Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Enter Password"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                👁️
              </button>
            </div>
          </div>

          <p className="text-sm text-gray-600 text-center">
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="text-purple-600 hover:underline font-medium"
            >
              Sign up
            </a>
          </p>

          <button
            type="submit"
            className="w-full py-2 text-white bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            Login
          </button>
        </form>

        {/* Separator */}
        <div className="relative mt-6 flex items-center">
          <div className="flex-grow h-px bg-gray-300"></div>
          <p className="text-sm text-gray-500 text-center bg-white px-4">Or</p>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3 mt-6">
          <button
            className="w-full py-2 flex items-center justify-center border rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <img
              src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"
              alt="Google Logo"
              className="w-5 h-5 mr-2"
            />
            Login with Google
          </button>

          <button
            className="w-full py-2 flex items-center justify-center border rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
              alt="Microsoft Logo"
              className="w-5 h-5 mr-2"
            />
            Login with Microsoft
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
