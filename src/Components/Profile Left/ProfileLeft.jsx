import FollowersCard from "../Followers Card/FollowersCard";
import InfoCard from "../Info Card/InfoCard";
import LogoSearch from "../Logo Search/LogoSearch";

const ProfileLeft = () => {
    return (
        <div>
            <LogoSearch/>
            <InfoCard/>
            <FollowersCard/>
        </div>
    );
};

export default ProfileLeft;