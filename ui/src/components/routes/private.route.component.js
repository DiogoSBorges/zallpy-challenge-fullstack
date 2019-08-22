import React from "react";
import { Route, Redirect } from "react-router-dom";

/* Auth */
import UserProfileService from "../../services/usuario-profile.service";

const AppPrivateRoute = ({
  component: Component,
  layout: Layout,
  roles: Roles,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>      
      <Layout> 
      {UserProfileService.isAutenticado() === true ? (
        UserProfileService.isAutorizado(Roles) ? (        
            <Component {...props} />
        ) : (
          <h1>Não Tem Permissão</h1>
        )
      ) : (
        <Redirect to="/login" />
      )}
      </Layout> 
    }
  />
);

export default AppPrivateRoute;