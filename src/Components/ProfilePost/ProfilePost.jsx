import React, { useContext } from 'react';
import PostShare from '../Post Share/PostShare';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { AuthContext } from '../Provider/AuthProvider';
import Post from '../Post/Post';

const ProfilePost = () => {
    const {user} = useContext(AuthContext);

    const { isLoading, data, refetch } = useQuery(["allpost"], async () => {
        const res = await axios.get("http://localhost:5000/allpost");
        return res.data;
    });

    // Handle the case when data is not available yet (isLoading is true)
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // Filter the data only when it's available
    const myPost = data.filter(postData => postData.email === user.email);

    return (
        <div className="flex flex-col gap-4 overflow-auto">
            <PostShare refetch={refetch} />
            {myPost.map((postData, id) => (
                <Post data={postData} key={id} />
            ))}
        </div>
    );
};

export default ProfilePost;
