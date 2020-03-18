import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Login from "./components/LoginComponent";
import Logout from "./components/LogoutComponent";
import MenuBoard from "./components/MenuBoardComponent";
import StoreSelector from "./components/StoreSelectorComponent";
import Sales from "./components/SalesComponent";
import Attendance from "./components/AttendanceComponent";
import Modals from "./components/ModalsComponent";
import auth from "./services/authService";
import "./App.css";
class App extends Component {
  state = { stores: {}, user: {} };
  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/login"
            render={props => (
              <Login {...props} handleLogin={this.handleLogin} />
            )}
          />
          <Route exact path="/logout" component={Logout} />
          <ProtectedRoute exact path="/store" component={StoreSelector} />
          <ProtectedRoute exact path="/" component={MenuBoard} />
          <ProtectedRoute exact path="/sales" component={Sales} />
          <ProtectedRoute exact path="/attendance" component={Attendance} />
          <Route path="/modals" component={Modals} />
        </Switch>
      </Router>
    );
  }
}
export default App;
