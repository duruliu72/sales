import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import auth from "../services/authService";
class Attendance extends Component {
    state = {}
    render() {
        const user = auth.getCurrentUser();
        if (!user) {
            return <Redirect to="/login" />;
        } else {
            if (!user.storeCode) {
                return <Redirect to="/store" />;
            }
            return (
                <div className="attendance">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card attendance-title">
                                    <div className="card-header">
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <h1>Attendance</h1>
                                            </div>
                                            <div className="col-xl-6 text-right">
                                                <h4 className="mt-4">{user.userName} :: {user.storeName}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Thursday : 2020-02-13 16:06:53</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <form>
                                                    <div className="form-group">
                                                        <label htmlFor="staf">Staff</label>
                                                        <select className="form-control">
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="remarks">Remarks</label>
                                                        <textarea className="form-control" rows="5" id="remarks"></textarea>
                                                    </div>
                                                    <button type="submit" className="btn btn-purple waves-effect waves-light">IN</button>
                                                </form>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="table-responsive">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th>SN#</th>
                                                                <th>TimeIN</th>
                                                                <th>TimeOut</th>
                                                                <th>RemarkIn</th>
                                                                <th>RemarkOut</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>Mark</td>
                                                                <td>Otto</td>
                                                                <td>@mdo</td>
                                                                <td>20</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

    }
}
export default Attendance;