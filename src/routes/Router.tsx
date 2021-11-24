import { Switch, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
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
            <Route path={page.path} component={page.component} exact key={uuidv4()} />
        ))}
    </Switch>
);

export default Routes;
