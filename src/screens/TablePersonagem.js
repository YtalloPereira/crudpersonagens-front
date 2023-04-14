import React from "react";
import {withRouter} from 'react-router-dom'
import PersonagemTable from '../components/PersonagemTable'
import axios from "axios";

class TablePersonagem extends React.Component{

    state = {
        id: '',
        nome: '',
        classe: '',
        personagens: []
    }
    
    delete = (personagemId) => {
        axios.delete(`http://localhost:8080/api/personagem/${personagemId}`,
            {
              
            }
        ).then(response => 
            {
              console.log(response);
              alert("Personagem Deletado")
            }
        ).catch(error =>
            {
              console.log(error.response);
            }
        );
  
      }

      achar = () =>{
        var params = '?';

        if(this.state.id != ''){
            if(params != '?'){
                params = `${params}&`;
            }
            params = `${params}id=${this.state.id}`;
        }

        if(this.state.nome != ''){
            if(params != '?'){
                params = `${params}&`;
            }
            params = `${params}id=${this.state.nome}`;
        }

        if(this.state.classe != ''){
            if(params != '?'){
                params = `${params}&`;
            }
            params = `${params}id=${this.state.classe}`;
        }

        if(this.state.hp != ''){
            if(params != '?'){
                params = `${params}&`;
            }
            params = `${params}id=${this.state.hp}`;
        }

        axios.get(`http://localhost:8080/api/personagem/`,
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


    render(){
        return(
            <div className="bs-Component">
                <header>Listagem de Personagem</header>
                <PersonagemTable>
                    personagens = {this.state.personagens}
                    delete = {this.delete}
                </PersonagemTable>
            </div>
        )
    }
}
export default withRouter(TablePersonagem);
