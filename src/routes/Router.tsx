import { Switch, Route } from 'react-router-dom';
import pages from './pages';

/*
    TO DO
    1. Update react-router-dom lib
    2. Replace Switch with Routes
    3. Replace 15 row with <Route path={page.path} element={page.component} />
*/

const Routes = () => (
    <Switch>
        {pages.map((page: any) => (
            <Route path={page.path} component={page.component} exact />
        ))}
    </Switch>
);

export default Routes;
