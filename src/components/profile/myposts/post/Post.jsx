import classes from './Post.module.css';
import React from "react";

const Post = (props) => {
    return (
        <div className={classes.item} id={props.id}>
            <img src="https://i1.wp.com/animalsik.com/wp-content/uploads/2016/05/velsh-korgi-6-e1462947255540.jpg"/>
            {props.msg}
        </div>
    );
}

export default Post;


