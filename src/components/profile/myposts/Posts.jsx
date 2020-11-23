import React from "react";
import Post from "./post/Post";
import classes from "./Posts.module.css";

const Posts = () => {

    const postsData = [
        {id :"1", msg : "Hello"},
        {id :"2", msg : "How are you"},
        {id :"3", msg : "Hi"},
        {id :"4", msg : "All cool"}
    ];

    const postsComponents = postsData.map(posts => {
        return <Post msg={posts.msg} id={posts.id}/>
    });

    return (
        <div>
            <div>
                my posts
                <div>
                    <textarea></textarea>
                    <button>add Post</button>
                    <button>remove</button>
                </div>
            </div>
            {postsComponents}
        </div>
    );
}

export default Posts;


