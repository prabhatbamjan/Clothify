import { IoIosHome } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaJediOrder } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { FcSalesPerformance } from "react-icons/fc";
import { MdOutlinePayments } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { Link } from "react-router-dom";
export default function Siderbar() {
    return (
        <>

            <div className="sidebar-container">

                <div className='top'></div>

                <div className="center">
                    <ul>
                        <Link to="/">
                            <li>
                                <IoIosHome className="icon" />

                                <span>Dashboard</span>
                            </li>
                        </Link>


                        <Link to="/user" className="link">
                            <li>
                                <FaUserCircle className="icon" />
                                <span>Users</span>
                            </li>
                        </Link>


                        <li>
                            <MdOutlineProductionQuantityLimits className="icon" />
                            <span>Products</span>
                        </li>

                        <li>
                            <FaJediOrder className="icon" />
                            <span>Orders</span>
                        </li>

                        <li>
                            <CiDeliveryTruck className="icon" />
                            <span>Delivery</span>
                        </li>

                        <li>
                            <IoIosNotifications className="icon" />
                            <span>Notification</span>
                        </li>

                      

                        <li>
                            <MdOutlinePayments className="icon" />
                            <span>Payments</span>
                        </li>
                      

                        <li>
                            <IoSettings className="icon" />
                            <span>Settings</span>
                        </li>

                        <li>
                            <IoLogOut className="icon" />
                            <span>Logout</span>
                        </li>

                    </ul>
                </div>


            </div>

        </>
    )
}