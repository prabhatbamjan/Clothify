import { useState } from "react";
import Nav from "../components/Nav";
import Siderbar from "../components/Siderbar";
import Product from "../components/product"; // Import the Product component

export default function Products() {
    const [showSideBar, setShowSideBar] = useState(false);

    return (
        <>
            <div className='flex'>
                {  <Siderbar />}
                
                <div className='home-container'>
                    <Nav showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
                    <div className='widjets'>
                        {/* Render the Product component */}
                        <Product />
                    </div>
                </div>
            </div>
        </>
    );

}