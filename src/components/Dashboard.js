import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import User from './pages/User';
import Reporting from './pages/Reporting';
import Notification from './pages/Notification';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Calendar App for ENTNT</h1>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/admin" component={Admin} />
          <Route path="/user" component={User} />
          <Route path="/reporting" component={Reporting} />
          <Route path="/notifications" component={Notification} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
