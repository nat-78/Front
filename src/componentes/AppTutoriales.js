import React, { Component } from 'react'
import ListaTutorial from '../componentes/ListaTutorial';
import 'bootstrap/dist/css/bootstrap.min.css'


export default class AppTutoriales extends Component {
  state = {
    tutorial: []
    
  }
  componentDidMount() {
    this.apiTutoriales()
  }
  apiTutoriales = async () => {
    try {
      const datos = await fetch('http://localhost:3001/tutorial', { method: 'GET' })
      const tutorial = await datos.json()
      console.log(tutorial)
      this.setState({ tutorial: tutorial })
    } catch (err) {
      alert("Se produjo el siguiente error: " + err) 
    }
  }

  render() {
    const { tutorial } = this.state;
  return (
    <div className="tutorial">
       <ListaTutorial tutorial= {tutorial}/>
    </div>
    );
  };

}


