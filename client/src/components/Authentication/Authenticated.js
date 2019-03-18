import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import API from "../../utils/API"
import { getJwt } from "../../helpers/getJwt"

class Authenticated extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: undefined
        }
    }

    // state = {
    //     user: undefined
    // }

    componentDidMount() {
        const jwt  = getJwt();
        if(!jwt){
            this.props.history.push('/login');
        }

        API.getUser({
            headers: { Authorization: `Bearer ${jwt}`}
        })
        .then(res => {
            this.setState({
                user: res.data
            })
        })
        // .catch(err => {
        //     localStorage.removeItem('jwt-auth');
        //     this.props.history.push('/login');
        // })
        .catch(err => {
            console.log(err);
            this.props.history.push('/login');
        });
    }

    render() {
        if (this.state.user === undefined) {
            return(
                <div>
                    <p>Loading...</p>
                </div>
            )
        }

        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default withRouter(Authenticated);