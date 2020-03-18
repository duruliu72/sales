import React, { Component } from 'react';
import { Link } from "react-router-dom";
class SalesLink extends Component {
    render() {
        return (
            <div className="link-section" style={{ backgroundColor: '#f8f9fa' }}>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" href="4">Receive</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="5">Dispatch</a>
                    </li>
                    <li className="nav-item">
                        <Link to="/attendance" className="nav-link">Attendance</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="u">Customer</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="o">Test Sales For BDPOS</a>
                    </li>
                </ul>
            </div>
        );
    };
}
export default SalesLink;
