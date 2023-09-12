import { useState } from "react";
import { RiHome6Fill, RiSettings3Line, RiNotification3Line } from 'react-icons/ri'
import { FaRegCommentDots } from 'react-icons/fa'
import TrendCard from "../Trend Card/TrendCard";
import ShareModal from "../Share Modal/ShareModal";
const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);
  console.log(modalOpened);
  return (
    <div className="grid  lg:gap-y-10 md:gap-y-4" >
      <div className="mt-10  text-2xl lg:text-3xl md:text-xl flex justify-between ">
        <RiHome6Fill  />
        <RiSettings3Line  />
        <RiNotification3Line  />
        <FaRegCommentDots  />
      </div>
      <TrendCard />
      <a href="#_" onClick={() => setModalOpened(true)} className="relative lg:w-62 md:w-28 md:text-sm lg:text-base text-center px-5 py-3 overflow-hidden font-semibold mx-auto text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-[#a6ddf0] group-hover:w-full ease"></span>
        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-[#a6ddf0] group-hover:w-full ease"></span>
        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#a6ddf0] group-hover:h-full ease"></span>
        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#a6ddf0] group-hover:h-full ease"></span>
        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#a6ddf0] opacity-0 group-hover:opacity-100"></span>
        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Share</span>
      </a>
      {/* onClick={() => setModalOpened(true)} */}
      <div  >
        <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
      </div>
    </div>
  );
};

export default RightSide;