import { useRef } from "react";
import { useState } from "react";
import ProfileImage from '../../img/profileImg.jpg'
import { HiOutlinePhoto } from 'react-icons/hi2';
import { MdSlowMotionVideo } from 'react-icons/md';
import { SlLocationPin } from 'react-icons/sl';
import { HiOutlineCalendarDays } from 'react-icons/hi2';
import { FaTimes } from 'react-icons/fa';

const PostShare = () => {
    const [image, setImage] = useState(null);
    const imageRef = useRef();

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage({
                image: URL.createObjectURL(img),
            });
        }
    };
    return (
        <div className=" bg-white  rounded-2xl p-4 mt-5"> 
                <div className="flex ">
                    <img className="rounded-full lg:w-12 w-11 lg:h-12 h-11" src={ProfileImage} alt="" />
                    <input  className="w-full rounded-xl p-3 lg:text-lg md:text-md border-none outline-none" type="text" placeholder="What's happening" />
                </div>

                    <div className="pt-5 md:pt-2 lg:pt-5 grid grid-cols-3 md:flex justify-around">
                        <div className="p-1 pr-1 rounded-xl flex items-center justify-center lg:text-lg md:text-xs hover:cursor-pointer" style={{ color: "var(--photo)" }}
                            onClick={() => imageRef.current.click()}
                        >
                            <HiOutlinePhoto className="lg:text-xl md:text-md" />
                            Photo
                        </div>
                        <div className="p-1 pr-1 rounded-xl flex items-center justify-center lg:text-lg md:text-xs hover:cursor-pointer" style={{ color: "var(--video)" }}>
                            <MdSlowMotionVideo className="lg:text-xl md:text-md" />
                            Video
                        </div>{" "}
                        <div className="p-1 pr-2 rounded-xl flex items-center justify-center lg:text-lg md:text-xs hover:cursor-pointer" style={{ color: "var(--location)" }}>
                            <SlLocationPin className="lg:text-xl md:text-md" />
                            Location
                        </div>{" "}
                        <div className="p-1 pr-2 rounded-xl flex items-center justify-center lg:text-lg md:text-xs hover:cursor-pointer" style={{ color: "var(--shedule)" }}>
                            <HiOutlineCalendarDays className="lg:text-xl md:text-md" />
                            Schedule
                        </div>
                        <div className="ps-4 md:ps-4">
                        <a href="#_" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#a6ddf0] rounded-full shadow-md group lg:w-24 md:w-16 lg:h-10 md:h-4">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-[#a6ddf0] duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease lg:text-base md:text-xs">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-[#a6ddf0] transition-all duration-300 transform group-hover:translate-x-full ease lg:text-base md:text-xs">Share</span>
                            <span className="relative invisible">Share</span>
                        </a>
                        </div>
                        <div style={{ display: "none" }}>
                            <input
                                type="file"
                                name="myImage"
                                ref={imageRef}
                                onChange={onImageChange}
                            />
                        </div>
                    </div>
                    {image && (
                        <div className="relative">
                            <FaTimes onClick={() => setImage(null)} />
                            <img className="w-full max-h-80 object-cover rounded-lg" src={image.image} alt="" />
                        </div>
                    )}
            
        </div>
    );
};

export default PostShare;