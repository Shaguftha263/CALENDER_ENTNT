import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Admin from './components/Admin';
import User from './components/User';
import Reporting from './components/Reporting';
import Notification from './components/Notification';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Calendar Application for ENTNT</h1>
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