
import './App.less';
import { Router, Switch } from 'react-router';
import { UrlConstants } from './constants';
import { PrivateRoute } from './routes/PrivateRoute';
import { history } from './helpers';
import { Home } from './pages/Home';
function App() {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute exact path={UrlConstants.HOME}>
          <Home />
        </PrivateRoute>
      
      </Switch>
    </Router>
  );
}

export default App;
