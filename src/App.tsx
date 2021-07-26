
import './App.less';
import { Router, Switch } from 'react-router';
import { UrlConstants } from './constants';
import { PrivateRoute } from './routes/PrivateRoute';
import { history } from './helpers';

import { Actor } from './pages/Actor'
import { DetailActor } from './pages/Actor/Detail';
import { UpdateActor } from './pages/Actor/Update';
import { InsertActor } from './pages/Actor/Insert';
import { DeleteActor } from './pages/Actor/Delete';

import { Customer } from './pages/Customer'
import { Button } from 'antd'
function App() {
  return (
    <Router history={history}>
      <div style={{ marginTop: "1%", marginLeft: "5%" }}>
        <Button type="primary" href="/" size={'large'}>Homepage</Button>
        <Switch>
          {/* Actor */}
          <PrivateRoute exact path={UrlConstants.ACTOR_DETAILS}>
            <DetailActor />
          </PrivateRoute>
          <PrivateRoute exact path={UrlConstants.ACTOR_UPDATE}>
            <UpdateActor />
          </PrivateRoute>
          <PrivateRoute exact path={UrlConstants.ACTOR_INSERT}>
            <InsertActor />
          </PrivateRoute>
          <PrivateRoute exact path={UrlConstants.ACTOR_DELETE}>
            <DeleteActor />
          </PrivateRoute>
          <PrivateRoute exact path={UrlConstants.ACTOR_GETLIST}>
            <Actor />
          </PrivateRoute>

          {/* Customer */}
          <PrivateRoute exact path={UrlConstants.CUSTOMER_DETAILS}>
            <Actor />
          </PrivateRoute>
          <PrivateRoute exact path={UrlConstants.CUSTOMER_UPDATE}>
            <Actor />
          </PrivateRoute>
          <PrivateRoute exact path={UrlConstants.CUSTOMER_INSERT}>
            <Actor />
          </PrivateRoute>
          <PrivateRoute exact path={UrlConstants.CUSTOMER_DELETE}>
            <Actor />
          </PrivateRoute>
          <PrivateRoute exact path={UrlConstants.CUSTOMER_GETLIST}>
            <Actor />
          </PrivateRoute>


        </Switch>
      </div>
    </Router>
  );
}

export default App;
