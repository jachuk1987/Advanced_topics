import React from "react";
import { useSelector } from "react-redux";

const SocialMediaPost = () => {
    const posts = useSelector((state) => state.subscribes,
    );
    return (
        <div>
            <h2>Welcome to SocialMediaPost!</h2>
            <ul>
                {posts.map((User) => {
                    return <li>{User}</li>
                })}
            </ul>
        </div>
    )
}

export default SocialMediaPost;