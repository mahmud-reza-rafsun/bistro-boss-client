import { NavLink, Outlet } from "react-router-dom";
import { IoHomeOutline, IoCartOutline, IoCardOutline, IoRibbonOutline, IoBagAddOutline, IoMailOutline } from "react-icons/io5";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { RiHome2Line, RiMenu3Line, RiMenuSearchLine, RiShoppingBag4Line, RiUserSettingsLine } from "react-icons/ri";
import { LuUtensils } from "react-icons/lu";
import useCart from "../hooks/useCart";
import { BsJournalBookmark } from "react-icons/bs";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            <div className="min-w-1/4 min-h-screen bg-green-600">
                <div className="border-b border-white px-3 py-2">
                    <h2 className="text-2xl font-semibold text-white ">Bistro Boss</h2>
                    {
                        isAdmin ? <p className="text-white font-bold">Dashboard Admin</p> : <p className="text-white font-bold">Dashboard Client</p>
                    }
                </div>
                <ul className="menu w-full">
                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink to="/dashboard/admin-home" className="text-lg text-white"><IoHomeOutline />
                                        <span className="text-[15px] font-medium mt-[2px]">Admin Home</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/add-items" className="text-lg text-white"><LuUtensils />
                                        <span className="text-[15px] font-medium mt-[2px]">Add Items</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manage-items" className="text-lg text-white"><RiMenuSearchLine />
                                        <span className="text-[15px] font-medium mt-[2px]">Manage Items</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/admin-home" className="text-lg text-white"><BsJournalBookmark />
                                        <span className="text-[15px] font-medium mt-[2px]">Manage Booking</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/users" className="text-lg text-white"><RiUserSettingsLine />
                                        <span className="text-[15px] font-medium mt-[2px]">All Users</span>
                                    </NavLink>
                                </li>
                            </>
                            :
                            <>
                                <li>
                                    <NavLink to="/cart" className="text-lg text-white"><IoHomeOutline />
                                        <span className="text-[15px] font-medium mt-[2px]">Home</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/my-cart" className="text-lg text-white"><IoCalendarNumberOutline />
                                        <span className="text-[15px] font-medium mt-[2px]">Reservation</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/payment-history" className="text-lg text-white"><IoCardOutline />
                                        <span className="text-[15px] font-medium mt-[2px]">Payment History</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart" className="text-lg text-white"><IoCartOutline />
                                        <span className="text-[15px] font-medium mt-[2px]">My Cart ({cart.length})</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/my-cart" className="text-lg text-white"><IoRibbonOutline />
                                        <span className="text-[15px] font-medium mt-[2px]">Review</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/my-cart" className="text-lg text-white"><IoBagAddOutline />
                                        <span className="text-[15px] font-medium mt-[2px]">My Booking</span>
                                    </NavLink>
                                </li>
                            </>
                    }
                    <div className="divider text-white">Or</div>
                    <li>
                        <NavLink to="/" className="text-lg text-white"><RiHome2Line />
                            <span className="text-[15px] font-medium mt-[2px]">Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu" className="text-lg text-white"><RiMenu3Line />
                            <span className="text-[15px] font-medium mt-[2px]">Menu</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/our-shop/salad" className="text-lg text-white"><RiShoppingBag4Line />
                            <span className="text-[15px] font-medium mt-[2px]">Shop</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact-us" className="text-lg text-white"><IoMailOutline />
                            <span className="text-[15px] font-medium mt-[2px]">Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1/2 p-3">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;