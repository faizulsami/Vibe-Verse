import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import { useRef, useState } from 'react';
import { AiFillLike } from "react-icons/ai";

const Post = ({ data }) => {


    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const timeoutRef = useRef(null);


    const [reaction,setReaction]=useState(null);

    const HandleLike=()=>{
        setReaction("Like")
    }

    const HandleLove=()=>{
        setReaction("Love")
    }

    const HandleCare=()=>{
        setReaction("Care")
    }



    const openDropdown = () => {
        clearTimeout(timeoutRef.current);
        setIsDropdownOpen(true);
    };

    const closeDropdown = () => {
        timeoutRef.current = setTimeout(() => {
            setIsDropdownOpen(false);
        }, 2000);
    };

    const toggleDropdown = () => {
        if (isDropdownOpen) {
            closeDropdown();
        } else {
            openDropdown();
        }
    };

    console.log(reaction);

    return (
        <div style={{ backgroundColor: 'var(--cardColor)' }} className="flex flex-col p-4 rounded-2xl gap-4">
            <img className='w-full max-h-96 object-cover rounded-lg' src={data.img} alt="" />


            <div className="flex items-start gap-6">
                {isDropdownOpen && (
                    <div
                        ref={dropdownRef}
                        onMouseEnter={openDropdown}
                        onMouseLeave={closeDropdown}
                        className="absolute -mt-20 p-1 dark:bg-gray-800 space-x-5 bg-white border border-gray-300 shadow-md rounded-md"
                    >
                        <button onClick={HandleLike} className='md:text-4xl text-3xl text-blue-400 '><AiFillLike/></button>
                        <button onClick={HandleLove} className='md:text-4xl text-3xl '>🧡</button>
                        <button onClick={HandleCare} className='md:text-4xl text-3xl'>😍</button>
                    </div>
                )}
                <div
                    onMouseEnter={toggleDropdown}
                    onMouseLeave={toggleDropdown}
                    className="flex items-center  py-0 px-2 rounded-2xl gap-1 ">
                    <img src={data.liked ? Heart : NotLike} alt="" />
                </div>

                <img src={Comment} alt="" />
                <img src={Share} alt="" />
            </div>


            <span style={{ color: "var(--gray)", fontSize: '12px' }}>{data.likes} likes</span>

            <div className="detail">
                <span><b>{data.name}</b></span>
                <span> {data.desc}</span>
            </div>
        </div>
    );
};

export default Post;