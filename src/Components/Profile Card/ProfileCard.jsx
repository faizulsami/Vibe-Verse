import './ProfileCard.css';
import Cover from '../../img/cover.jpg';
import Profile from '../../img/profileImg.jpg';
import { Link } from 'react-router-dom';
const ProfileCard = () => {
    return (
        <div className=" flex flex-col  gap-4 rounded-2xl overflow-x-clip bg-white">
            <img src={Cover} />
            <div className="flex flex-col items-center   gap-2 ">

                <img className='w-24 md:w-16 lg:w-24 rounded-full ' src={Profile} />
                <span className='font-bold md:text-xs lg:text-base'>Marry Jane</span>
                <span className='md:text-sm lg:text-base'>Frontend Developer</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
                <hr />
                <div className='flex gap-4  justify-around items-center'>
                    <div className="flex flex-col gap-2 md:gap-1 lg:gap-2 items-center justify-center">
                        <span className='font-bold md:text-xs lg:text-base'>6,890</span>
                        <span className='cs-clr md:text-sm lg:text-base'>Followings</span>
                    </div>
                    <div className="border-l-2 border-[#cfcdcd] h-16"></div>
                    <div className="flex flex-col gap-2 md:gap-1 lg:gap-2 items-center justify-center">
                        <span className='font-bold md:text-xs lg:text-base'>1</span>
                        <span className='cs-clr md:text-sm lg:text-base'>Followers</span>
                    </div>
                </div>
                <hr />
            </div>
            <Link to='profile' className='lg:font-semibold md:font-normal md:text-sm lg:text-base text-sky-300 self-center cursor-pointer pb-4 md:pb-5'>
                My Profile
            </Link>
        </div>
    );
};

export default ProfileCard;