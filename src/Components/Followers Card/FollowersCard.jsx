import { Followers } from "../Data/FollowersData";

const FollowersCard = () => {
    return (
        <div className="w-full lg:rounded-xl md:rounded-lg gap-4 flex flex-col text-sm">
            <h3 className="font-semibold lg:text-lg md:text-sm">Who is following you</h3>
            {Followers.map((follower, id) => (
                <div className="flex justify-between items-center" key={id}>
                    <div className="flex lg:gap-3 md:gap-1">
                        <img src={follower.img} alt="" className='lg:w-14 md:w-10 lg:h-14 md:h-10 object-cover rounded-full' />
                        <div className="flex flex-col items-start justify-center">
                            <span className="font-bold lg:text-base md:text-xs">{follower.name}</span>
                            <span className="lg:text-base md:text-xs">@{follower.username}</span>
                        </div>
                    </div>
                    <a href="#_" className="relative inline-flex items-center justify-start lg:px-6 md:px-3 lg:py-3 md:py-2 overflow-hidden font-medium transition-all bg-sky-300 rounded-xl group">
                        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#a6ddf0] rounded group-hover:-mr-4 group-hover:-mt-4">
                            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#a6ddf0] rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white lg:text-base md:text-xs">Follow</span>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default FollowersCard;