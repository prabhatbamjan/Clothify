import { IoIosHome } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaJediOrder } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { MdOutlinePayments } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar-container">
            <div className="top"></div>
            <div className="center">
                <ul>
                    <Link to="/" className="link">
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

                    <Link to="/Products" className="link">
                        <li>
                            <MdOutlineProductionQuantityLimits className="icon" />
                            <span>Products</span>
                        </li>
                    </Link>

                    <Link to="/Orders" className="link">
                        <li>
                            <FaJediOrder className="icon" />
                            <span>Orders</span>
                        </li>
                    </Link>

                    <Link to="/Delivery" className="link">
                        <li>
                            <CiDeliveryTruck className="icon" />
                            <span>Delivery</span>
                        </li>
                    </Link>

                    <Link to="/Notification" className="link">
                        <li>
                            <IoIosNotifications className="icon" />
                            <span>Notification</span>
                        </li>
                    </Link>

                    <Link to="/Payments" className="link">
                        <li>
                            <MdOutlinePayments className="icon" />
                            <span>Payments</span>
                        </li>
                    </Link>

                    <Link to="/Setting" className="link">
                        <li>
                            <IoSettings className="icon" />
                            <span>Settings</span>
                        </li>
                    </Link>

                    <Link to="/Logout" className="link">
                        <li>
                            <IoLogOut className="icon" />
                            <span>Logout</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}
