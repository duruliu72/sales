import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import auth from "../services/authService";
class MenuBoard extends Component {
  state = {};
  handleClick = e => {
    this.props.history.push("/" + e.currentTarget.name);
  };
  render() {
    const user = auth.getCurrentUser();
    if (!user.storeCode) return <Redirect to="/store" />;
    return (
      <div className="menuboard">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Choose Option</h3>
                </div>
                <div className="card-body text-center">
                  <button
                    name="sales"
                    onClick={this.handleClick}
                    type="button"
                    className="btn btn-secondary waves-effect m-b-5 mr-3"
                  >
                    Reatil Sale
                  </button>
                  <button
                    name="wholesale"
                    onClick={this.handleClick}
                    type="button"
                    className="btn btn-primary waves-effect waves-light m-b-5 mr-3"
                  >
                    Whole Sale
                  </button>
                  <button
                    name="customer"
                    onClick={this.handleClick}
                    type="button"
                    className="btn btn-success waves-effect waves-light m-b-5 mr-3"
                  >
                    Customer
                  </button>
                  <button
                    name="attendance"
                    onClick={this.handleClick}
                    type="button"
                    className="btn btn-info waves-effect waves-light m-b-5 mr-3"
                  >
                    Attendance
                  </button>
                  <button
                    name="receive"
                    onClick={this.handleClick}
                    type="button"
                    className="btn btn-warning waves-effect waves-light m-b-5 mr-3"
                  >
                    Receive
                  </button>
                  <button
                    name="dispatch"
                    onClick={this.handleClick}
                    type="button"
                    className="btn btn-danger waves-effect waves-light m-b-5 mr-3"
                  >
                    Dispatch
                  </button>
                  <button
                    type="button"
                    className="btn btn-inverse waves-effect waves-light m-b-5 mr-3"
                  >
                    .btn-inverse
                  </button>
                  <button
                    type="button"
                    className="btn btn-purple waves-effect waves-light m-b-5 mr-3"
                  >
                    .btn-purple
                  </button>
                  <button
                    type="button"
                    className="btn btn-pink waves-effect waves-light m-b-5"
                  >
                    .btn-pink
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="logout">
          <Link
            to="/logout"
            className="btn  waves-effect waves-light logout-btn"
          >
            <i className="fa fa-power-off" aria-hidden="true"></i>&nbsp;Logout
          </Link>
        </div>
      </div>
    );
  }
}
export default MenuBoard;
