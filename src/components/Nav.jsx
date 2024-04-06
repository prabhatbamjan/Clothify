

import { RxHamburgerMenu } from "react-icons/rx";
export default function Nav({ showSideBar, setShowSideBar }) {

    return (
        <>
            <nav>
                <div className='wrapper'>
                    <RxHamburgerMenu className='show-btn' onClick={() => setShowSideBar(!showSideBar)} />

<div className="logo_container">
<h1>Clothify</h1>
<img src="logo.png"className="logo"></img>

</div>
                    <div className="search">
                        <input type="search" placeholder='Search... ' className='search_input'></input>
                        
                    </div>

                 
                </div>
            </nav>

        </>
    )
}