import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import auth from "../services/authService";
class Login extends Component {
  state = {
    data: {
      username: "",
      password: ""
    }
  };
  handleChange = e => {
    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      const { data } = this.state;
      await auth.login(data.username, data.password);
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/store";
    } catch (ex) {
      console.log(ex);
    }
  };
  render() {
    if (auth.getCurrentUser()) return <Redirect to="/store" />;
    return (
      <div className="login-reg">
        <div className="wrapper-page login-reg-page">
          <div className="card card-pages">
            <div className="card-header card-header-bg">
              <div className="card-header-img">
                <img src="bugla.png" alt="fake_url"></img>
              </div>
              <div className="card-header-title">
                <h3>Point of Sales</h3>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <input
                  name="username"
                  onChange={this.handleChange}
                  value={this.state.data.username}
                  className="form-control input-lg"
                  type="text"
                  placeholder="Username"
                />
                <div className="form-group">
                  <input
                    name="password"
                    onChange={this.handleChange}
                    value={this.state.data.password}
                    className="form-control input-lg"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group text-center m-t-40">
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg w-lg waves-effect waves-light login"
                    >
                      Log In
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
