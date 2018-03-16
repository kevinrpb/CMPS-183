import React from 'react';
import fb from '../../../Firebase';
import * as firebase from 'firebase';
import './UserLink.css';

class UserLink extends React.Component {
    constructor(props) {
        super(props);
        this.toggleLoginButton = this.toggleLoginButton.bind(this);
        this.state = {
            signedIn: this.props.isSignedIn,
            displayName: ""
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {this.toggleLoginButton(user)});
    }

    toggleLoginButton(user) {
        if (user) { // User is signed in.
            this.setState({
                signedIn: true,
                displayName: user.displayName,
                email: user.email,
            });

            let email = user.email

            fb.getUserInfo(user.email).then((data) => {
                if (!data) {
                    let userObj = {
                        email: user.email,
                        name: user.displayName,
                        age: "",
                        major: "",
                        bio: "",
                        img: "",
                        bookDescription: "",
                        offers: false,
                        requests: false,
                        uid: user.uid
                    }
                    fb.addNewUser(userObj, email);
                }
            })
        } else { // User is signed out.
            this.setState({
                signedIn: false,
                displayName: ""
            });
        }
    }

    render() {
        if (this.state.signedIn) {
            //replace all dots with commas for accessing firebase users
            var tt = this.state.email;
            tt=tt.replace(/\./g,',');
            return (
                <div>
                    <li className="nav-item dropdown active">
                        <a className="nav-link dropdown-toggle" href="#" id="navbar-user-name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-email={tt}>
                        {this.state.displayName}
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-user-name">
                            <a className="dropdown-item" href={"/profile/users" + "/" + tt}><span className="fa fa-user-circle"></span> Profile</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/newprofile"><span className="fa fa-plus"></span> Update Profile </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href={"/listing?type=offers&query=" + this.state.email}><span className="fa fa-list"></span> My Listings</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/new"><span className="fa fa-plus"></span> New Listing</a>
                            <div className="dropdown-divider"></div>
                            <a onClick={() => {fb.signOut()}} href="/" className="dropdown-item"><span className="fa fa-sign-out-alt"></span> Log Out</a>
                        </div>
                    </li>
                </div>
                );
        } else {
            return (
                <div>
                    <li className="nav-item">
                        <a onClick={() => {fb.signIn()}} className="nav-link active header-button">
                            <div className="font-awesome-bug-div"><span className="fa fa-user-circle"></span></div> Login
                        </a>
                    </li>
                </div>
            );
        }
    }
}

export default UserLink