import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from './pages/Home';
import {NavBar} from "./components/NavBar";
import {Students} from "./pages/Students";
import {Groups} from "./pages/Groups";
import {StudentCardPage} from "./pages/StudentCardPage";
import {TestMongo} from "./pages/TestMongo";


function App() {
  return (
      <BrowserRouter>
          <NavBar/>
          <Switch>
              <Route path={'/home'} exact component={Home}/>
              <Route path={'/students'} exact component={Students}/>
              <Route path={'/groups'} exact component={Groups}/>
              <Route path={'/user/:id'} component={StudentCardPage}/>
              <Route path={'/testMongo'} exact component={TestMongo}/>
          </Switch>
      </BrowserRouter>
  )
}

export default App;
