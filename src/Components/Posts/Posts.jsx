import { PostsData } from "../Data/PostsData";
import Post from "../Post/Post";
const Posts = () => {
    return (
    <div className="flex flex-col gap-4">
        {PostsData.map((post, id)=>{
            return <Post data={post} key={id}/>
        })}
    </div>
    );
};
export default Posts;