import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from './pages/Home';
import {NavBar} from "./components/NavBar";
import GroupsComponent from "./store/components/GroupsComponent";
import StudentCardPage from "./pages/StudentCardPage";
import GroupCardPage from "./pages/GroupCardPage";
import StudentsComponent from "./store/components/StudentsComponent";
import CreateNewStudent from "./pages/CreateNewStudent";
import CreateNewGroup from "./pages/CreateNewGroup";
import AddStudentModal from "./components/AddStudentModal";


function App() {
  return (
      <BrowserRouter>
          <NavBar/>
          <Switch>
              <Route path={'/home'} exact component={Home}/>
              <Route path={'/groups'} exact component={GroupsComponent}/>
              <Route path={'/groups/:id'} exact component={GroupCardPage}/>
              <Route path={'/create-group'} exact component={CreateNewGroup}/>
              <Route path={'/students'} exact component={StudentsComponent}/>
              <Route path={'/students/:id'} component={StudentCardPage}/>
              <Route path={'/create-student'} component={CreateNewStudent}/>
              <Route path={'/add-student-to-group'} component={AddStudentModal}/>
          </Switch>
      </BrowserRouter>
  )
}

export default App;
