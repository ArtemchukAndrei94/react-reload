import React from "react";
import Post from "./post/Post";
import classes from "./Posts.module.css";


const Posts = (props) => {
    const postsComponents = props.posts.map(posts => {
        return <Post msg={posts.msg} id={posts.id}/>
    });

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
        newPostElement.current.value = "";
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={classes.posts}>
            <div>
                my posts
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.tempPost}></textarea>
                    <button onClick={onAddPost}>add Post</button>
                    <button>remove</button>
                </div>
            </div>
            {postsComponents}
        </div>
    );
}

export default Posts;




