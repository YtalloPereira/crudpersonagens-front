import React from "react";
import './CadastroHabilidade.css';
import {withRouter} from 'react-router-dom';
import { showSuccessMessage,showErrorMessage } from '../components/Toastr';
import HabibilidadeApiService from '../services/HabilidadeApiService';

class CadastroHabilidade extends React.Component{

    state = {
        nome: '',
        cooldown: '',
        descricao: '',
        dano: '',
        personagemId: ''
    }

    constructor(){
      super();
      this.service = new HabibilidadeApiService ();
    }

    cancel = () =>{
        this.props.history.push('/');
    }
    
    validate = () =>{
        const errors = [];
  
        if(!this.state.nome){
          errors.push('Campo nome é obrigário');
        }
  
        if(!this.state.cooldown){
          errors.push('Campo cooldown é obrigário');
        }
  
        if(!this.state.descricao){
          errors.push('Campo descrição é obrigário');
        }

        if(!this.state.dano){
            errors.push('Campo dano é obrigário');
        }

        if(!this.state.personagemId){
            errors.push('Campo id so personagem é obrigário');
        }
  
        return errors;
      }
    
    create = () => {

        const errors = this.validate();

        if(errors.length > 0){
          errors.forEach((message, index) => {
            showErrorMessage(message);
          });
          return false;
        }
  

        this.service.create(
            {
              nome: this.state.nome,
              cooldown: this.state.cooldown,
              descricao: this.state.descricao,
              dano: this.state.dano,
              personagemId: this.state.personagemId
        }
        ).then(response => 
            {
              console.log(response);
              showSuccessMessage('Habilidade Criada')
            }
        ).catch(error =>
            {
              console.log(error.response);
            }
        )
  
      }

    render(){
        return(
            <div className="CadastroHabilidade">
                <header>Criação de Habilidade</header>
                <div className="form-group">
                    <label className="col-form=laber mt-4" htmlFor="nome">Nome:</label>
                    <input type="text" className="form-control" placeholder="nome" id="nome" 
                    value={this.nome} onChange={(e)=>{this.setState({nome: e.target.value})}}/>
                </div>
                
                
                <div className="form-group">
                    <label className="col-form=laber mt-4" htmlFor="nome">Cooldown:</label>
                    <input type="number" className="form-control" placeholder="cooldown" id="cooldown" 
                    value={this.cooldown} onChange={(e)=>{this.setState({cooldown: e.target.value})}}/>
                </div>

                
                <div className="form-group">
                    <label htmlFor="descricao" className="form-label mt-4">Descrição</label>
                    <textarea className="form-control" id="descricao" rows="3" placeholder="Descrição"
                    value={this.descricao} onChange={(e)=>{this.setState({descricao: e.target.value})}}></textarea>
                </div>

                
                <div className="form-group">
                    <label className="col-form=laber mt-4" htmlFor="dano">Dano:</label>
                    <input type="number" className="form-control" placeholder="dano" id="dano" 
                    value={this.dano} onChange={(e)=>{this.setState({dano: e.target.value})}}/>
                </div>
                
                
                <div className="form-group">
                    <label className="col-form=laber mt-4" htmlFor="personagemId">Id do Personagem:</label>
                    <input type="number" className="form-control" placeholder="id" id="personagemId" 
                    value={this.personagemId} onChange={(e)=>{this.setState({personagemId: e.target.value})}}/>
                </div>

                <br/>
                <button type="submit" className="btn btn-primary" onClick={this.create}>Salvar</button>
                <button type="button" className="btn btn-primary" onClick={this.cancel}>Cancelar</button>
                
            </div>
        )
    }
}
export default withRouter(CadastroHabilidade);
