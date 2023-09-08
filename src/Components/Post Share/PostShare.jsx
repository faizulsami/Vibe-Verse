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
        <div className="bg-white rounded-2xl md:p-1 lg:p-4"> 
                <div className="flex ">
                    <img className="rounded-full lg:w-12 w-11 lg:h-12 h-11" src={ProfileImage} alt="" />
                    <input  className="w-full rounded-xl p-3 lg:text-lg md:text-md border-none outline-none" type="text" placeholder="What's happening" />
                </div>

                    <div className="pt-5 md:pt-2 text-sm lg:pt-5 grid grid-cols-3 md:flex justify-around">
                        <div className="p-1 pr-6 rounded-xl flex items-center justify-center lg:text-lg md:text-xs hover:cursor-pointer" style={{ color: "var(--photo)" }}
                            onClick={() => imageRef.current.click()}
                        >
                            <HiOutlinePhoto className="lg:text-xl md:text-md" />
                            Photo
                        </div>
                        <div className="p-1 pr-1 text-sm rounded-xl flex items-center justify-center lg:text-lg md:text-xs hover:cursor-pointer" style={{ color: "var(--video)" }}>
                            <MdSlowMotionVideo className="lg:text-xl  md:text-md" />
                            Video
                        </div>{" "}
                        <div className="p-1 text-sm pr-2 rounded-xl flex items-center justify-center lg:text-lg md:text-xs hover:cursor-pointer" style={{ color: "var(--location)" }}>
                            <SlLocationPin className="lg:text-xl md:text-md" />
                            Location
                        </div>{" "}
                        <div className="p-1 text-sm rounded-xl flex items-center justify-center lg:text-lg md:text-xs hover:cursor-pointer" style={{ color: "var(--shedule)" }}>
                            <HiOutlineCalendarDays className="lg:text-xl md:text-md" />
                            Schedule
                        </div>
                        <div className="ps-4 text-sm md:ps-4">
                     
                            <span className=" flex items-center justify-center w-full h-full text-[#a6ddf0] lg:text-base md:text-md">Share</span>

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