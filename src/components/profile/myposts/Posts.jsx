import React from "react";
import Post from "./post/Post";

const Posts = (props) => {
    const postsComponents = props.posts.map(posts => {
        return <Post msg={posts.msg} id={posts.id}/>
    });

    let newPostElement = React.createRef();

    let addPostt = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = "";
    }

    let changeTextAreaPost = () => {
        debugger;
        props.addTempPost(newPostElement.current.value.slice(-1))
        newPostElement.current.value = props.tempPost;
    }

    return (
        <div>
            <div>
                my posts
                <div>
                    <textarea ref={newPostElement} onChange={changeTextAreaPost}></textarea>
                    <button onClick={ addPostt }>add Post</button>
                    <button>remove</button>
                </div>
            </div>
            {postsComponents}
        </div>
    );
}

export default Posts;

// next 34


