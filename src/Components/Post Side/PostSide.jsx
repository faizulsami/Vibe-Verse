import PostShare from "../Post Share/PostShare";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Post from "../Post/Post";

const PostSide = () => {

    const { isLoading, data, refetch } = useQuery(["allpost"], async () => {
        const res = await axios.get("http://localhost:5000/allpost");
        return res.data;
    });


    return (
        <div  className="flex flex-col gap-4 overflow-auto">
            <PostShare refetch={refetch} />

            
            {!isLoading && data ? (
                data.map((postData, id) => {
                    return <Post data={postData} key={id}/>;
                })
            ) : null}
            {/* <Posts/> */}
        </div>
    );
};

export default PostSide;