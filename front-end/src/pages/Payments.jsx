import { useState } from "react"
import Nav from "../components/Nav"
import Siderbar from "../components/Siderbar"
export default function Payments(){
  
    const [showSideBar, setShowSideBar] = useState(false)
    return (
        <>
            <div className='flex'>
                {showSideBar &&  <Siderbar/>}
         
                
                <div className='home-container'>
                    <Nav showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
                    <div className='widjets'>
                       <h1>payment Prodct</h1>
                    </div>

                </div>

            </div>



        </>
    )
}