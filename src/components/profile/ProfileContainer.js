import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import Preloader from "../common/preloader/Preloader";
import {setProfile} from "../../redux/ProfileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 2;
        }
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/" + userId)
            .then(response => {
                this.props.setProfile(response.data);
            });
    }

    render() {
        if (this.props.profile == null) {
            return <Preloader/>
        } else {
            return (<Profile {...this.props.profile} />);

        }
    }
}

const mapStateToProps = (state) => {
        return {
            profile: state.profilePage.profile
        }
}

let WithRouterProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setProfile})(WithRouterProfileContainer);


