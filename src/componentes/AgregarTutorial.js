import React, {Component} from 'react'

export default class AgregarTutorial extends Component {

    state = { 
      titulo: "",
      descipcion: "",
      publicado: false
    }
    onInputChange = (r) => {
      this.setState ({
        [r.target.name]: r.target.value

      })
    }
      onSubmit = async (r) => { 
        r.preventdefault()

        const AgregarTutorial = { 
          titulo: this.state.titulo,
          descripcion: this.state.descripcion,
          publicado: this.state.publicado
        }
        try {
          await fetch ('http://localhost:3001/tutorial', {
            method: "POST",
            body: JSON.stringify(AgregarTutorial),
            headers: { 
              "content-type": "aplication/json",
            }
          }

          )
        } catch (err) {
          alert("se produjo un error"+ err)
        }
        //window.location.href= 'http://localhost:3001/tutorial'
      }

    
    render()
    {
    
      return (
      <div ClassName= " col-md-6 offset-md-3">
        <div ClassName= " Card card-body">
          <h4>Crear tutorial</h4>
        <div ClassName= " from-group">
          <input type= "text"
            ClassName= "form-control"
            placeholder="titulo"
            onChange={this.onInputChange}
            require
          />
        </div>
        <div  ClassName= " from-group" > 
        <textarea name= "descripcion"
        ClassName= "form-control"
        placeholder="descripcion"
        onChange={this.onInputChange}
        require
        ></textarea>

        
      </div>
          <form onSubmit={this.onSubmit}>
            <button type = "submit" ClassName= "btn btn-primary">
              AgregarTutorial
              </button>
          </form>
          </div>
          </div>

       );
    }
}