import { Switch, Route } from "react-router-dom";
import pages from "./pages";

const Routes = () => (
    <Switch>
        {pages.map((page) => (
            <Route path={page.path} component={page.component} exact />
        ))}
    </Switch>
);

export default Routes;
