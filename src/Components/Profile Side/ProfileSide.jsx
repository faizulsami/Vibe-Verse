import FollowersCard from "../Followers Card/FollowersCard";
import LogoSearch from "../Logo Search/LogoSearch";
import ProfileCard from "../Profile Card/ProfileCard";

const ProfileSide = () => {
    return (
        <div>
            <div className="flex flex-col gap-4  ">
                <LogoSearch/>
                <ProfileCard/>
                <FollowersCard/>
            </div>
        </div>
    );
};

export default ProfileSide;