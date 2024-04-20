// import { useState } from "react"
// import Nav from "../components/Nav"
// import Siderbar from "../components/Siderbar"
// export default function Setting(){
  
//     const [showSideBar, setShowSideBar] = useState(false)
//     return (
//         <>
//             <div className='flex'>
//                 {showSideBar &&  <Siderbar/>}
         
                
//                 <div className='home-container'>
//                     <Nav showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
//                     <div className='widjets'>
//                        <h1>SETTING </h1>
//                     </div>

//                 </div>

//             </div>
//         </>
//     )
// }

// import React, { useState } from 'react';

// function Settings() {
//     const [newName, setNewName] = useState('');
//     const [newPhoneNumber, setNewPhoneNumber] = useState('');
//     const [newPassword, setNewPassword] = useState('');

//     function handleNameReset() {
//         // Handle name reset functionality
//     }

//     function handlePhoneNumberReset() {
//         // Handle phone number reset functionality
//     }

//     function handlePasswordReset() {
//         // Handle password reset functionality
//     }

//     return (

//         <div className='flex'>
//                 {showSideBar &&  <Siderbar/>}

//         <div className="settings-container">
//             <h1>SETTING</h1>

//             <Nav showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
//                     <div className='widjets'></div>
//             {/* <div className="settings-section">
//                 <h3>Name Reset</h3>
//                 <input
//                     type="text"
//                     value={newName}
//                     onChange={(e) => setNewName(e.target.value)}
//                     placeholder="Enter new name"
//                 />
//                 <button onClick={handleNameReset}>Reset Name</button>
//             </div> */}
//             {/* <div className="settings-section">
//                 <h3>Phone Number Reset</h3>
//                 <input
//                     type="text"
//                     value={newPhoneNumber}
//                     onChange={(e) => setNewPhoneNumber(e.target.value)}
//                     placeholder="Enter new phone number"
//                 />
//                 <button onClick={handlePhoneNumberReset}>Reset Phone Number</button>
//             </div> */}
//             <div className="settings-section">
//                 <h3>Password Reset</h3>
//                 <input
//                     type="password"
//                     value={newPassword}
//                     onChange={(e) => setNewPassword(e.target.value)}
//                     placeholder="Enter current password"
//                 />
//                 {/* <button onClick={handlePasswordReset}>Current Password</button> */}
//             </div>

//             <div className="settings-section">
//                 <h3>Password Reset</h3>
//                 <input
//                     type="password"
//                     value={newPassword}
//                     onChange={(e) => setNewPassword(e.target.value)}
//                     placeholder="Enter new password"
//                 />
//                 {/* <button onClick={handlePasswordReset}>Reset Password</button> */}
//             </div>

//             <div className="settings-section">
//                 <h3>Password Reset</h3>
//                 <input
//                     type="password"
//                     value={newPassword}
//                     onChange={(e) => setNewPassword(e.target.value)}
//                     placeholder="Enter confirm password"
//                 />
//                 <button onClick={handlePasswordReset}>Reset Password</button>
//             </div>

            

            


//         </div>
//     );
// }

// export default Settings;


import React, { useState } from 'react';
import Nav from "../components/Nav";
import Siderbar from "../components/Siderbar";

function Settings() {
    const [showSideBar, setShowSideBar] = useState(false); // Added state for sidebar
    const [newPassword, setNewPassword] = useState('');

    function handlePasswordReset() {
        // Handle password reset functionality
    }

    return (
        <div className='flex'>
            {showSideBar && <Siderbar />}
            <div className="settings-container">
                <h1>SETTING</h1>
                <Nav showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
                <div className='widjets'></div>
                <div className="settings-section">
                    <h3>Password Reset</h3>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter current password"
                    />
                </div>
                <div className="settings-section">
                    <h3>Password Reset</h3>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter new password"
                    />
                </div>
                <div className="settings-section">
                    <h3>Password Reset</h3>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter confirm password"
                    />
                    <button onClick={handlePasswordReset}>Reset Password</button>
                </div>
            </div>
        </div>
    );
}

export default Settings;
