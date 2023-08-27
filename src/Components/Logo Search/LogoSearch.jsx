import './LogoSearch.css';
import Logo from '../../img/WebLogo.svg';
import { BsSearch } from 'react-icons/bs';
const LogoSearch = () => {
    return (
        <div className="flex lg:gap-3 md:gap-2">
            <img src={Logo} className='w-10 lg:w-[57px] lg:h-[50px] md:w-[35px] md:lg:h-[35px]' alt=""/>
            <div className='flex pl-4 cs-staffs'>
                <input type="text" placeholder='Search' className='lg:w-full md:w-24 lg:text-base md:text-xs border-none outline-none bg-transparent'/>
                    <div className="items-center flex mr-3 justify-center text-[#a6ddf0] lg:text-xl md:text-sm hover:cursor-pointer">
                        <BsSearch/>
                    </div>
            </div>
        </div>
    );
};

export default LogoSearch;