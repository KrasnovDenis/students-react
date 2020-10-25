import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from './pages/Home';
import {NavBar} from "./components/NavBar";
import {Students} from "./pages/Students";
import {Groups} from "./pages/Groups";
import {StudentCardPage} from "./pages/StudentCardPage";
import {GroupCardPage} from "./pages/GroupCardPage";


function App() {
  return (
      <BrowserRouter>
          <NavBar/>
          <Switch>
              <Route path={'/home'} exact component={Home}/>
              <Route path={'/students'} exact component={Students}/>
              <Route path={'/groups'} exact component={Groups}/>
              <Route path={'/group/:id'} exact component={GroupCardPage}/>
              <Route path={'/student/:id'} component={StudentCardPage}/>
          </Switch>
      </BrowserRouter>
  )
}

export default App;
