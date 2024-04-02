import Siderbar from '../components/Siderbar'
import Nav from '../components/Nav'
import Widjet from '../components/Widjet'
import { useState } from 'react'




export default function Home() {

    const [showSideBar, setShowSideBar] = useState(false)
    return (
        <>
            <div className='flex'>
                {showSideBar &&  <Siderbar/>}
         
                
                <div className='home-container'>
                    <Nav showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
                    <div className='widjets'>
                        <Widjet type={"users"} />
                        <Widjet type={"order"} />
                        <Widjet type={"earning"} />
                        <Widjet type={"balance"} />
                    </div>

                </div>

            </div>



        </>
    )
}