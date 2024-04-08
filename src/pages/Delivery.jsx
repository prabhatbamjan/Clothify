// import { useState } from "react"
// import Nav from "../components/Nav"
// import Siderbar from "../components/Siderbar"
// export default function Delivery(){
  
//     const [showSideBar, setShowSideBar] = useState(false)
//     return (
//         <>
//             <div className='flex'>
//                 {showSideBar &&  <Siderbar/>}
//                 <div className='home-container'>
//                     <Nav showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
//                     <div className='widjets'>
//                        <h1>Delivery Prodct</h1>
//                        {/* <h2>Delivered</h2>
//                        <h2>Not Delivered</h2> */}
//                         <button
//         type="button"
//         onClick={() => setColor("blue")}
//       >Delivered</button>
//       <button
//         type="button"
//         onClick={() => setColor("red")}
//       >Not Delivered</button>
     
//                     </div>

//                 </div>
                
//             </div>

        

//         </>


//     );
// }

import React, { useState } from 'react';
import Nav from "../components/Nav"
import Siderbar from "../components/Siderbar"

// import './pages.css';

function Delivery() {
    const [searchQuery, setSearchQuery] = useState('');
    const [orders, setOrders] = useState([
        { id: 1, customerName: 'John Doe', orderDate: '2024-04-10', status: 'Pending' },
        { id: 2, customerName: 'Jane Smith', orderDate: '2024-04-11', status: 'Delivered' }
    ]);

    // Function to handle updating the delivery status of an order
    function handleUpdateDeliveryStatus(orderId) {
        console.log('Update delivery status for order with ID:', orderId);
    }

    return (
        <div className="delivery-container">
            <h2>Delivery Management</h2>
            <div className="search-button-container">
                <input
                    type="text"
                    placeholder="Search for orders..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
            </div>
            <table className="order-table">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer Name</th>
                        <th>Order Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.customerName}</td>
                            <td>{order.orderDate}</td>
                            <td>{order.status}</td>
                            <td>
                                <button onClick={() => handleUpdateDeliveryStatus(order.id)}>Update Status</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Delivery;


