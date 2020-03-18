import React, { Component } from 'react';
import { Link } from "react-router-dom";
class UserInfo extends Component {
    render() {
        const { user } = this.props;
        return (
            <div className="userinfo-section" style={{ backgroundColor: '#17a2b8' }}>
                <ul className="nav" style={{ float: "left" }}>
                    <li className="nav-item">
                        <a style={{ color: "#ffffff" }} className="nav-link" href="4"> {user.userName}</a>
                    </li>
                    <li className="nav-item">
                        <a style={{ color: "#ffffff" }} className="nav-link" href="5">{user.storeName} - {user.storeCode}</a>
                    </li>
                </ul>
                <div style={{ float: "right" }}>
                    <Link to="logout" style={{ color: "#ffffff" }} className="nav-link">Logout</Link>
                </div>
            </div>
        );
    };
}
export default UserInfo;