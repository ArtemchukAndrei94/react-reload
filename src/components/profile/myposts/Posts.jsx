import React from "react";
import Post from "./post/Post";

const Posts = (props) => {
    const postsComponents = props.posts.map(posts => {
        return <Post msg={posts.msg} id={posts.id}/>
    });

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = "";
    }

    let changeTextAreaPost = () => {
        debugger;
        props.addTempPost(newPostElement.current.value.slice(-1))
    }

    return (
        <div>
            <div>
                my posts
                <div>
                    <textarea ref={newPostElement} onChange={changeTextAreaPost} value={props.tempPost}></textarea>
                    <button onClick={ addPost }>add Post</button>
                    <button>remove</button>
                </div>
            </div>
            {postsComponents}
        </div>
    );
}

export default Posts;

// next 34


