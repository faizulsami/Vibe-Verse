import { useContext, useRef, useState } from "react";
import ProfileImage from '../../img/profileImg.jpg';
import { HiOutlinePhoto } from 'react-icons/hi2';
import { MdSlowMotionVideo } from 'react-icons/md';
import { FaTimes } from 'react-icons/fa';
import { AuthContext } from "../Provider/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const PostShare = ({ refetch }) => {
    const { user } = useContext(AuthContext)
    const [image, setImage] = useState(null);
    const imageRef = useRef();
    const textFieldRef = useRef();
    const [loading, setLoading] = useState(false)
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const currentTime = new Date();
    const dhakaTimeOffset = 6 * 60 * 60 * 1000; // 6 hours in milliseconds
    const postTime = new Date(currentTime.getTime() + dhakaTimeOffset);


    const formatDate = (date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');

        return `${day}/${month}/${year} ${hours}:${minutes}`;
    };

    const formattedPostTime = formatDate(postTime);
    // console.log(postTime);

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage({
                image: URL.createObjectURL(img),
            });
        }
    };




    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const postText = textFieldRef.current.value;
    
        if (!postText) {
            toast.error("Please enter some text before posting.");
            setLoading(false);
            return;
        }
    
        try {
            let postImg = ""; // Initialize postImg to an empty string
            if (imageRef.current && imageRef.current.files && imageRef.current.files[0]) {
                // If an image is selected, upload it
                const formData = new FormData();
                formData.append('image', imageRef.current.files[0]);
    
                const imgResponse = await fetch(img_hosting_url, {
                    method: 'POST',
                    body: formData,
                });
    
                if (imgResponse.ok) {
                    const imgData = await imgResponse.json();
                    if (imgData.success) {
                        postImg = imgData.data.display_url;
                    } else {
                        toast.error("Image upload failed. Please try again.");
                        setLoading(false);
                        return;
                    }
                }
            }
    
            const allpost = {
                displayName,
                email,
                photoURL,
                postText,
                postImg, // Assign the image URL here
                postTime: formattedPostTime,
            };
    
            const postResponse = await fetch(`http://localhost:5000/allpost`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(allpost),
            });
    
            if (postResponse.ok) {
                const data = await postResponse.json();
                console.log(data);
                toast.success("Post added", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
    
                textFieldRef.current.value = '';
                // Clear the input field and reset the image state
                setImage(null);
                // Reset the file input field
                imageRef.current.value = '';
            } else {
                console.error('Failed to post data to the server');
                toast.error("Ahh, something went wrong. Please try again.");
            }
        } catch (error) {
            console.error('An error occurred while posting:', error);
            toast.error("Ahh, something went wrong. Please try again.");
        }
    
        setLoading(false);
        refetch();
    };
    



    return (
        <div className="bg-white rounded-2xl md:p-1 lg:p-4">
            <ToastContainer />
            <div className="flex">
                <img className="rounded-full lg:w-12 w-11 lg:h-12 h-11" src={ProfileImage} alt="" />
                <textarea ref={textFieldRef} className="w-full rounded-xl p-3 lg:text-lg md:text-md border-none outline-none" type="text" placeholder="What's happening" />
            </div>
            {image && (
                <div className="relative">
                    <FaTimes onClick={() => setImage(null)} />
                    <img className="w-full max-h-80 object-cover rounded-lg" src={image.image} alt="" />
                </div>
            )}
            <div className="pt-5 my-3 md:pt-2 text-sm lg:pt-5 grid grid-cols-3 md:flex justify-around">
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
                <div className="ps-4 text-sm md:ps-4">
                    <button onClick={handleSubmit} className="flex items-center justify-center w-full h-full text-[#a6ddf0] lg:text-base md:text-md">Share</button>
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
        </div>
    );
};

export default PostShare;
