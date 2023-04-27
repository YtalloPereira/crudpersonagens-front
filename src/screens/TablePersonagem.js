import React from "react";
import {withRouter} from 'react-router-dom'
import {showSuccessMessage } from '../components/Toastr';
import PersonagemApiService from '../services/PersonagemApiService';
import PersonagensTable from "../components/PersonagensTable";
import Card from '../components/Card';


class TablePersonagem extends React.Component{

    state = {
        id: '',
        nome: '',
        classe: '',
        hp:'',
        personagens: []
    }

    constructor(){
        super();
        this.service = new PersonagemApiService();
      }
    
    
    delete = (personagemId) => {
        this.service.delete(personagemId
        ).then(response => 
            {
              console.log(response);
              this.find()
              showSuccessMessage('Personagem Excluido');
            }
        ).catch(error =>
            {
              console.log(error.response);
            }
        );
  
      }

      find = () =>{
        this.service.get(
        ).then(response => 
            {   
                const personagens = response.data;
                this.setState({personagens});
                console.log(personagens);
            }
        ).catch(error =>
            {
                console.log(error.response);
            }
        );
    }

    mostrar =() =>{
        console.log(this.state.personagens)
    }

    render(){
        return(
            <div>
                <Card title="Lista de Personagens">
                    
                    
                    <button onClick={this.find} type="button" className="btn btn-success">Buscar
                        <i className="pi pi-search"></i>
                    </button>
                    <div className="row" >
                        <div className="col-md-12">
                            <div className="bs-component" >
                                <br />
                                <PersonagensTable personagens={this.state.personagens}
                                    delete={this.delete}
                                />
                            </div>
                        </div>
                    </div>

                </Card>
            </div>
        )
    }
}
export default withRouter(TablePersonagem);
