import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import auth from "../services/authService";
import { getStores } from "../services/storeService";
class StoreSelector extends Component {
  state = {
    stores: [],
    data: {
      storeCode: ""
    },
    errors: {
      storeCode: ""
    }
  };
  async componentDidMount() {
    try {
      const user = auth.getCurrentUser();
      const response = await getStores(user);
      this.setState({ stores: response.data.storeList });
    } catch (ex) {
      console.log(ex);
    }
  }
  handleChange = e => {
    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data });
  };
  handleSubmit = async e => {
    e.preventDefault();
    try {
      const { data } = this.state;
      const user = auth.getCurrentUser();
      const { data: resposne } = await auth.logrefresh(user.companyCode, user.userCode, data.storeCode);
      if (!resposne.status) {
        const { errors } = this.state;
        if (resposne.msg.Store_Code[0]) {
          errors.storeCode = "Please select shop";
          this.setState({ errors });
        }
      } else {
        const tokenKey = "token";
        localStorage.setItem(tokenKey, resposne.token);
        const { state } = this.props.location;
        window.location = state ? state.form.pathname : "/";
      }
    } catch (ex) {
      console.log(ex);
    }
  };
  render() {
    const user = auth.getCurrentUser();
    if (user.storeCode)
      return (
        <Redirect
          to={{
            pathname: "/",
            state: { from: this.props.location }
          }}
        />
      );
    return (
      <div className="store">
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-lg-6 offset-md-3">
              <form onSubmit={this.handleSubmit}>
                <div className="card">
                  <div className="card-header">
                    <div className="row">
                      <div className="col-lg-6">
                        <h1 className="card-title store-title">
                          <i className="fa fa-cart-arrow-down store-icon"></i>
                          &nbsp;&nbsp;Select Shop
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="form-group">
                      <select
                        name="storeCode"
                        select={this.state.data.storeCode}
                        onChange={this.handleChange}
                        className="form-control"
                      >
                        <option value="">-------------</option>
                        {this.state.stores.map((store, index) => (
                          <option key={index} value={store.Store_Code}>
                            {store.Store_Code + "::" + store.Store_Name}
                          </option>
                        ))}
                      </select>
                    </div>
                    {this.state.errors.storeCode ? <label className="error">{this.state.errors.storeCode}</label> : ""}
                  </div>
                  <div className="card-header text-right">
                    <button
                      type="submit"
                      className="btn btn-primary waves-effect waves-light m-b-5 store-btn"
                    >
                      next
                    </button>
                  </div>
                </div>
              </form>
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
export default StoreSelector;
