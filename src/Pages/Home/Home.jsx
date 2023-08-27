import { Outlet } from 'react-router-dom';
import PostSide from '../../Components/Post Side/PostSide';
import ProfileSide from '../../Components/Profile Side/ProfileSide';
import RightSide from '../../Components/Right Side/RightSide';
import Nav from '../Nav/Nav';
import './Home.css'
const Home = () => {
    return (
        <div >
            <div className='md:hidden'>
                <Nav />
            </div>
            <Outlet />
            <div className="grid  md:grid-cols-12 gap-5">
                <div className='hidden md:block md:col-span-3 lg:mt-3 md:mt-5 lg:ml-4 md:ml-2'>
                    <ProfileSide />
                </div>

                <div className=' md:col-span-6'>
                    <PostSide />
                </div>

                <div className='hidden md:block md:col-span-3 lg:mr-4 md:mr-3'>
                    <RightSide />
                </div>
            </div>

        </div>
    );
};

export default Home;