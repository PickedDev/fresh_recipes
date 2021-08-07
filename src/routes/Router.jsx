import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import pages from "./pages";

const Routes = () => {
    return (
            <Switch>
                {pages.map(page => (
                    <Route path={page.path} component={page.component} exact />
                ))}
            </Switch>
    );
};

export default Routes;