import React from "react";
import classes from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
    return (
        <div className={classes.profileInfo}>
            <img className={classes.avatar} src="https://pbs.twimg.com/profile_images/431529196478038018/i_qx9taM.jpeg"/>
            <div className={classes.description}>
                <div className="fio">{props.fio}</div>
            </div>
        </div>
    );
}

export default ProfileInfo;