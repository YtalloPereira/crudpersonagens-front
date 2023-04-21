import React from 'react';
import './AtualizarPersonagem.css';
import {withRouter} from 'react-router-dom';
import { showSuccessMessage } from '../components/Toastr';
import PersonagemApiService from '../services/PersonagemApiService';

class AtualizarPersonagem extends React.Component{

    state = {
      id: '',
      nome: '',
      classe: '',
      hp: ''
    }

    constructor(){
      super();
      this.service = new PersonagemApiService();
    }
  
    update = () => {
      
      this.service.update(this.state.id,
          {
            nome: this.state.nome,
            classe: this.state.classe,
            hp: this.state.hp
          }
      ).then(response => 
          {
            console.log(response);
            showSuccessMessage('Personagem Atualizado')
          }
      ).catch(error =>
          {
            console.log(error.response);
          }
      )

    }
 
    cancel = () =>{
      this.props.history.push('/');
    }

   render() {
      return (
        <div className="AtualizarPersonagem">
          
          <header>Atualização de Personagem</header>

          <div className="form-group">
            <label className="col-form=laber mt-4" htmlFor="id">Id:</label>
            <input type="text" className="form-control" placeholder="Id" id="id" 
            value={this.state.id} onChange={(e)=> this.setState({id: e.target.value})}/>
          </div>
          
          <div className="form-group">
            <label className="col-form=laber mt-4" htmlFor="nome">Nome:</label>
            <input type="text" className="form-control" placeholder="nome" id="nome" 
            value={this.state.nome} onChange={(e)=> this.setState({nome: e.target.value})}/>
          </div>
  
          <br/>
            <div className="form-group">
              <label className="col-form=laber mt-4" htmlFor="classe">Classe:</label>
              <input type="text" className="form-control" placeholder="Classe" id="classe" 
              value={this.state.classe} onChange={(e)=> this.setState({classe: e.target.value})}/>
            </div>
  
          <br/>
            <div className="form-group">
              <label className="col-form=laber mt-4" htmlFor="hp">Hp:</label>
              <input type="number" className="form-control" placeholder="Hp" id="hp" 
              value={this.state.hp} onChange={(e)=> this.setState({hp: e.target.value})}/>
            </div>
  
          <br/>
            <button type="submit" className="btn btn-primary" onClick={this.update}>Salvar</button>
            <button type="button" className="btn btn-primary" onClick={this.cancel}>Cancelar</button>
         </div>
      );
    }
  }
  export default withRouter(AtualizarPersonagem);