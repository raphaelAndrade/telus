import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../Home';
import Watches from '../Pages/Watches'
import Iphones from '../Pages/Iphones'
import NotFound from '../NotFound';

const App = () => (
  <Router>
    <Switch>
      {/* <Route path="/">
        <Home />
      </Route>
      <Route path="/watches">
        <Watches />
      </Route> */}

      <Route path="/" component={Home}/>
      <Route path='/watches' component={Watches}/>
      <Route path='/iphones' component={Iphones}/>
    </Switch>
  </Router>
);

export default App;

