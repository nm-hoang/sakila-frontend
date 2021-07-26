
import './App.less';
import { Router, Switch } from 'react-router';
import { UrlConstants } from './constants';
import { PrivateRoute } from './routes/PrivateRoute';
import { history } from './helpers';

import { Home } from './pages';

import { Actor } from './pages/Actor/'
import { DetailActor } from './pages/Actor/Details';
import { UpdateActor } from './pages/Actor/Update';
import { InsertActor } from './pages/Actor/Insert';
import { DeleteActor } from './pages/Actor/Delete';

import { Customer } from './pages/Customer'
import { DetailCustomer } from './pages/Customer/Details';
import { UpdateCustomer } from './pages/Customer/Update';
import { InsertCustomer } from './pages/Customer/Insert';
import { DeleteCustomer } from './pages/Customer/Delete';
import { Button, Tag } from 'antd'
function App() {
  return (
    <Router history={history}>
      <div style={{ marginTop: "1%", marginLeft: "5%", marginBottom: "8%" }}>
        <Button className="mb-3" type="primary" href="/" size={'large'}>Homepage</Button><br />
        <Tag color="green">
          <a href="/actor-getlist" style={{ color: "#389e0d",fontSize:"2em" }}>Actor</a>
        </Tag>
        <Tag color="green">
          <a href="/customer-getlist" style={{ color: "#389e0d", fontSize:"2em"}}>Customer</a>
        </Tag><br />
       
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
            <DetailCustomer />
          </PrivateRoute>
          <PrivateRoute exact path={UrlConstants.CUSTOMER_UPDATE}>
            <UpdateCustomer />
          </PrivateRoute>
          <PrivateRoute exact path={UrlConstants.CUSTOMER_INSERT}>
            <InsertCustomer />
          </PrivateRoute>
          <PrivateRoute exact path={UrlConstants.CUSTOMER_DELETE}>
            <DeleteCustomer />
          </PrivateRoute>
          <PrivateRoute exact path={UrlConstants.CUSTOMER_GETLIST}>
            <Customer />
          </PrivateRoute>

          <PrivateRoute exact path={UrlConstants.HOME}>
            <Home />
          </PrivateRoute>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
