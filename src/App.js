import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppTutoriales from './componentes/AppTutoriales';
import AgregarTutorial from './componentes/AgregarTutorial';
import Navegation from './componentes/Navegation';


class App extends Component{
 
  render (){
     return (
       
    <Router>
        <Navegation/>
        <Route path="/" exact component={AppTutoriales}/>
        <Route path="/agregar" component={AgregarTutorial}/>
    </Router>
  );
}
}

export default App;

