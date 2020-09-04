import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

//note that we are importing the individual react component elements!!!
import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

//There is a <Route> element for each route of the application. The path attribute sets the url path.
//The component is the code that will be loaded when a user goes to that path.

//We now need to create five components: one for the Navbar and four for the routes.
//We’ll actually create them in separate files.

function App() {
  return (
    <router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </router>
  );
}

export default App;
