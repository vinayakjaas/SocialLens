// import React from 'react';
// import Dashboard from './Dashboard'

// export default function App() {
//   return (
//     <div>
//       <Dashboard />
//     </div>
//   );
// }



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import MyTender from './Mytender'; 

import Project from './Mytender/Project';
import Login from './Login/Login';
import AddSocialMedia from './Addsocialmedia/Addsocialmedia';
import Postsocialmedia from './Postsocialmedia';



export default function App() {
  return (
    <Router>
      <div>
        {/* Define your routes */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Login />} />
          <Route path="/mytender" element={<MyTender />} />
          <Route path="/mytender/project" element={<Project/>}/>
          <Route path="/addsocialmedia" element={<AddSocialMedia/>}/>
          <Route path="/postsocialmedia" element={<Postsocialmedia/>}/>

        
          
        </Routes>
      </div>
    </Router>
  );
}
