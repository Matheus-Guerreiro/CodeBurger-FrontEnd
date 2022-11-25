import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import paths from '../constants/paths'
import { Home, Login, Register, Products, Cart, Admin } from '../containers'
import PrivateRoute from './private-route'

function Routes() {
    return (
        <Router>
            <Switch>
                <Route component={Login} path={paths.Login} />
                <Route component={Register} path={paths.Registration} />
                <PrivateRoute exact component={Home} path={paths.Home} />
                <PrivateRoute component={Products} path={paths.Products} />
                <PrivateRoute component={Cart} path="/carrinho" />

                <PrivateRoute component={Admin} path={paths.Order} isAdmin />
                <PrivateRoute
                    component={Admin}
                    path={paths.ListProducts}
                    isAdmin
                />
                <PrivateRoute
                    component={Admin}
                    path={paths.NewProduct}
                    isAdmin
                />
                <PrivateRoute
                    component={Admin}
                    path={paths.EditProduct}
                    isAdmin
                />
            </Switch>
        </Router>
    )
}

export default Routes
