import React from "react";
import Post from "./post/Post";

const Posts = (props) => {

    const postsComponents = props.posts.map(posts => {
        return <Post msg={posts.msg} id={posts.id}/>
    });

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
    }

    return (
        <div>
            <div>
                my posts
                <div>
                    <textarea ref={newPostElement}></textarea>
                    <button onClick={ addPost}>add Post</button>
                    <button>remove</button>
                </div>
            </div>
            {postsComponents}
        </div>
    );
}

export default Posts;

// next 32


