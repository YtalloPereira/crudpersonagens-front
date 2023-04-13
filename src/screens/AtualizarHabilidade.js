import React from 'react';
import './AtualizarHabilidade.css';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class AtualizarHabilidade extends React.Component{

    state = {
      id: '',
      nome: '',
      cooldown: '',
      descricao: '',
      dano: '',
      personagemId: ''
    }
  
    update = () => {
      axios.put(`http://localhost:8080/api/habilidade/${this.state.id}`,
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
            alert("Habilidade Atualizada")
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

    render(){
        return(
            <div className="CadastroHabilidade">
                <header>Atualização de Habilidade</header>

                <div className="form-group">
                    <label className="col-form=laber mt-4" htmlFor="id">Id da Habilidade:</label>
                    <input type="number" className="form-control" placeholder="Id da Habilidade" id="id" 
                    value={this.id} onChange={(e)=>{this.setState({id: e.target.value})}}/>
                </div>

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
                    <input type="number" className="form-control" placeholder="Id do Personagem" id="personagemId" 
                    value={this.personagemId} onChange={(e)=>{this.setState({personagemId: e.target.value})}}/>
                </div>

                <br/>
                <button type="submit" className="btn btn-primary" onClick={this.update}>Salvar</button>
                <button type="button" className="btn btn-primary" onClick={this.cancel}>Cancelar</button>
                
            </div>
        )
    }
  }
  export default withRouter(AtualizarHabilidade);