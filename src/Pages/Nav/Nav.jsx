import { Link, useLocation } from 'react-router-dom';
import Logo from '../../img/WebLogo.svg';
import RightSide from '../../Components/Right Side/RightSide';
import ProfileLeft from '../../Components/Profile Left/ProfileLeft';
import ProfileSide from '../../Components/Profile Side/ProfileSide';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSlackHash } from "react-icons/fa";
import { RiHome6Fill   } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";


const Nav = () => {
    const location = useLocation();

    const isProfilePage = location.pathname.includes('/profile');
    const isHomePage = location.pathname === '/';

    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <div className="flex items-center">
                        <img src={Logo} className="w-14" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                    </div>
                    <div className="flex items-center">

                        <a href="#" className="text-sm text-blue-600 dark:text-blue-500 hover:underline">Login</a>
                    </div>
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <ul className="flex justify-evenly flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                        <li>

                            <div className="drawer">
                                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                                <div className="drawer-content">
                                    {/* Page content here */}
                                    <label htmlFor="my-drawer" className=" drawer-button"><GiHamburgerMenu className='text-xl' /></label>
                                </div>
                                <div className="drawer-side ">
                                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                                        {/* Sidebar content here */}
                                        {isProfilePage && <ProfileLeft />}
                                        {isHomePage && <ProfileSide />}

                                    </ul>
                                </div>
                            </div> 
                        </li>

                        <li>
                            <Link to="/" className="text-gray-900 dark:text-white hover:underline" aria-current="page"><RiHome6Fill  className='text-2xl' /></Link>
                        </li>

                        <li>
                            <Link to="/profile" className="text-gray-900 dark:text-white hover:underline" aria-current="page"><CgProfile className='text-2xl' /></Link>
                        </li>
                        <li>
                            <div className="drawer drawer-end">
                                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                                <div className="drawer-content">
                                    {/* Page content here */}
                                    <label htmlFor="my-drawer-4" className="drawer-button  "><FaSlackHash className='text-2xl' /> </label>
                                </div>
                                <div className="drawer-side">
                                    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                                        {/* Sidebar content here */}
                                        <RightSide />
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
