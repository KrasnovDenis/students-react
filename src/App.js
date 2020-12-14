import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from './pages/Home';
import {NavBar} from "./components/NavBar";
import {Students} from "./pages/Students";
import GroupsComponent from "./store/components/GroupsComponent";
import StudentCardPage from "./pages/StudentCardPage";
import GroupCardPage from "./pages/GroupCardPage";
import StudentsComponent from "./store/components/StudentsComponent";


function App() {
  return (
      <BrowserRouter>
          <NavBar/>
          <Switch>
              <Route path={'/home'} exact component={Home}/>
              <Route path={'/groups'} exact component={GroupsComponent}/>
              <Route path={'/groups/:id'} exact component={GroupCardPage}/>
              <Route path={'/students'} exact component={StudentsComponent}/>
              <Route path={'/students/:id'} component={StudentCardPage}/>
          </Switch>
      </BrowserRouter>
  )
}

export default App;
