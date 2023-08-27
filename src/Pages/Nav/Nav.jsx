import { Link } from 'react-router-dom';
import Logo from '../../img/WebLogo.svg';

const Nav = () => {
    return (
    <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <div className="flex items-center">
                    <img src={Logo} className="w-14" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">VibeVerse</span>
                </div>
                <div className="flex items-center">
                 
                    <a href="#" className="text-sm text-blue-600 dark:text-blue-500 hover:underline">Login</a>
                </div>
            </div>
        </nav>
        <nav className="bg-gray-50 dark:bg-gray-700">
            <div className="max-w-screen-xl px-4 py-3 mx-auto">
                <div className="flex items-center">
                    <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                        <li>
                            <Link to="/" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <a href="#" className="text-gray-900 dark:text-white hover:underline">Company</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-900 dark:text-white hover:underline">Team</a>
                        </li>
                        <li>
                        <Link to="/Profile" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Profile</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    );
};

export default Nav;
