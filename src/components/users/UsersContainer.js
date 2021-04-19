import React from "react";
import {connect} from "react-redux";
import {changePage, follow, isFetching, setUsers, totalCount, unFollow} from "../../redux/UsersReducer";
import Users from "./Users";
import * as axios from "axios";
import Preloader from "../common/preloader/Preloader";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.isFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.isFetching(false);
                this.props.totalCount(response.data.totalCount);
                this.props.setUsers(response.data.items);

            })
    }

    componentDidUpdate(prevProps) {
        // Популярный пример (не забудьте сравнить пропсы):
        if (this.props.currentPage !== prevProps.currentPage) {
            this.props.isFetching(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.isFetching(false);
                    this.props.setUsers(response.data.items);
                })
        }
    }

    render() {
        return (
            <>
                {this.props.fetch ? <Preloader/> : null}
                <Users count={this.props.count}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       changePage={this.props.changePage}
                       users={this.props.users}
                />
            </>
        );
    }


}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        count: state.usersPage.count,
        currentPage: state.usersPage.currentPage,
        fetch: state.usersPage.fetch
    }
}
/*let mapDispatchToProps = (dispatch) => {
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
        },
        fetchData: (fetch) => {
            dispatch(isFetchingAC(fetch));
        }
    }
}*/

let ac = {
    follow,
    unFollow,
    setUsers,
    changePage,
    totalCount,
    isFetching
}

export default connect(mapStateToProps, ac)(UsersContainer);


