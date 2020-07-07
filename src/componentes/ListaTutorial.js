import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
 





export default class ListaTutorial extends Component {

    state = {
        id: 0,
        estado: false 
        }
        
        onclick1 = (ids) => { 
            const paso = ids 
            this.setstate({ id: paso, estado: true })
        }

    render(){

    const {tutorial}= this.props
    


       return(
        <div ClassName= "row">
        <div ClassName = "col-sm-6">
    < div ClassName= "Card card-body">
                <h1>Lista de Tutoriales</h1>
                 <br/>
                   <ul className="list-group">
                       {
                           
                           tutorial.map ( name => <li ClassName = "list-group-item list-group-item-action" key={name.id} >
                           < button type = "button " ClassName= "list-group-item list-group-item-action" onclick= {()=> this.onclick1(name.id)} > {name.titulo}  </button>
                           </li>)
                       
                       }
                   </ul> 
                   <button button type = "button" class= "btn btn-danger" 
                        onclick={() => this.eliminarTutoriales()}>borrar todo</button>
                        </ div>
                        </div>
                        {this.state.estado ? (
                            <div ClassName = "col-sm-6">
                        < div ClassName= "Card ">
                        <div ClassName= "Card-body">
                            <h5 ClassName="Card-title"> detalles </h5>
            
                            </div>
                            </div>
                            </div>
                        ) : (<h1></h1>
                        )}

                        </div>
                         )





                    }
                

            
                   
                
                        }