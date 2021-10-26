import { Switch, Route } from 'react-router-dom';
import pages from './pages';

const Routes = () => (
    <Switch>
        {pages.map((page: any) => (
            <Route path={page.path} component={page.component} exact />
        ))}
    </Switch>
);

export default Routes;
