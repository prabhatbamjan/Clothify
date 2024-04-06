import { useState } from "react"
import Nav from "../components/Nav"
import Siderbar from "../components/Siderbar"
export default function Orders(){
  
    const [showSideBar, setShowSideBar] = useState(false)
    return (
        <>
            <div className='flex'>
                {showSideBar &&  <Siderbar/>}
         
                
                <div className='home-container'>
                    <Nav showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
                    <div className='widjets'>
                       <h1>order Prodct</h1>
                    </div>

                </div>

            </div>



        </>
    )
}