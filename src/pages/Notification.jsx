import { useState } from "react"
import Nav from "../components/Nav"
import Siderbar from "../components/Siderbar"
import { IoIosNotifications } from "react-icons/io";
import "../index.css"
export default function Notification(){
  
    const [showSideBar, setShowSideBar] = useState(false)
    return (
        <>
            <div className='flex'>
                {showSideBar &&  <Siderbar/>}
         
                
                <div className='home-container'>
                    <Nav showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
                 
                       <div className = "notification_container">
                        <div className = "notifcation_cards">
                            <div className="notifcation_card">
                               <IoIosNotifications className="notifcation_icon"/>
                                <div className="card_description">
                                    <h1>Title</h1>
                                    <p>Tshirt was purchased</p>
                                </div>
                            </div>

                            <div className="notifcation_card">
                               <IoIosNotifications className="notifcation_icon"/>
                                <div className="card_description">
                                    <h1>Title</h1>
                                    <p>Tshirt was purchased</p>
                                </div>
                            </div>

                            <div className="notifcation_card">
                               <IoIosNotifications className="notifcation_icon"/>
                                <div className="card_description">
                                    <h1>Title</h1>
                                    <p>Tshirt was purchased</p>
                                </div>
                            </div>
                            <div className="notifcation_card">
                               <IoIosNotifications className="notifcation_icon"/>
                                <div className="card_description">
                                    <h1>Title</h1>
                                    <p>Tshirt was purchased</p>
                                </div>
                            </div>

                            <div className="notifcation_card">
                               <IoIosNotifications className="notifcation_icon"/>
                                <div className="card_description">
                                    <h1>Title</h1>
                                    <p>Tshirt was purchased</p>
                                </div>
                            </div>


                        </div>
                       </div>
                    </div>

                </div>

            



        </>
    )
}