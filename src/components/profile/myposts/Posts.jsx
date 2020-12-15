import React from "react";
import Post from "./post/Post";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/ProfileReducer";


const Posts = (props) => {
    debugger;
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
        <div>
            <div>
                my posts
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.tempPost}></textarea>
                    <button onClick={ onAddPost }>add Post</button>
                    <button>remove</button>
                </div>
            </div>
            {postsComponents}
        </div>
    );
}

export default Posts;




