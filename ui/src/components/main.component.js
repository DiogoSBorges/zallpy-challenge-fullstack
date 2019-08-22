import React, { Component } from "react";
import { BrowserRouter, Switch } from "react-router-dom";

/* App */
import AppLayout from "./../components/layouts/layout.component";
import LoginComponent from "./../components/login/login.component";

/* Component */
import DashboardComponent from './dashboard/usuario/dashboard.component'
import AdminDashboardComponent from './dashboard/admin/admin-dashboard.component'

/* Routes Wrap */
import AppRoute from "./routes/route.component";
import AppPrivateRoute from "./routes/private.route.component";

class Main extends Component {
  render() {
    return (
        <BrowserRouter>
        <Switch>
            <AppPrivateRoute exact path="/" layout={AppLayout} component={DashboardComponent} roles={["user", "admin"]} />
            <AppPrivateRoute exact path="/admin" layout={AppLayout} component={AdminDashboardComponent} roles={["admin"]} />
            <AppRoute exact path="/login" layout={AppLayout} component={LoginComponent} />
        </Switch>
        </BrowserRouter>
    );
  }
}

export default Main;
