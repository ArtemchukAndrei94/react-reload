import React from "react";
import {connect} from "react-redux";
import {changePageAC, followAC, setUsersAC, totalCountAC, unFollowAC} from "../../redux/UsersReducer";
import Users from "./Users";
import * as axios from "axios";

class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setTotalCount(response.data.totalCount);
                this.props.setUsers(response.data.items);
            })
    }

    componentDidUpdate(prevProps) {
        // Популярный пример (не забудьте сравнить пропсы):
        if (this.props.currentPage !== prevProps.currentPage) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                })
        }
    }

    render() {
        return (<Users totalCount={this.props.totalCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       changePage={this.props.changePage}
                       users={this.props.users}/>);

    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {
            dispatch(followAC(userId));
        },
        unFollowUser: (userId) => {
            dispatch(unFollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        changePage: (changePage) => {
            dispatch(changePageAC(changePage));
        },
        setTotalCount: (totalCount) => {
            dispatch(totalCountAC(totalCount));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);


