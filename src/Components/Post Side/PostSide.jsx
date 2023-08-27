import PostShare from "../Post Share/PostShare";
import Posts from "../Posts/Posts";

const PostSide = () => {
    return (
        <div  className="flex flex-col gap-4 overflow-auto">
            <PostShare></PostShare>
            <Posts/>
        </div>
    );
};

export default PostSide;