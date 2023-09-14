import PostSide from "../../Components/Post Side/PostSide";
import ProfileCard from "../../Components/Profile Card/ProfileCard";
import ProfileLeft from "../../Components/Profile Left/ProfileLeft";
import ProfilePost from "../../Components/ProfilePost/ProfilePost";
import RightSide from "../../Components/Right Side/RightSide";
import Nav from "../Nav/Nav";
import './Profile.css'
const Profile = () => {
    return (
        <div>
            <div className=' md:hidden'>
                <Nav />
            </div>
            <div className="grid md:grid-cols-12  gap-5">
                <div className="lg:p-5 md:col-span-3 md:ms-2 md:mt-6 lg:mt-0 hidden md:block">
                    <ProfileLeft />
                </div>
                <div className="md:col-span-6 p-3 pt-6 grid gap-y-5">
                    <ProfileCard />
                    <ProfilePost/>
                </div>
                <div className="md:col-span-3 lg:p-5 hidden md:block">
                    <RightSide />
                </div>
            </div>
        </div>
    );
};

export default Profile;