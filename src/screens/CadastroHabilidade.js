import React from "react";
import './CadastroHabilidade.css';
import {withRouter} from 'react-router-dom';
import axios from "axios";

class CadastroHabilidade extends React.Component{

    state = {
        nome: '',
        cooldown: '',
        descricao: '',
        dano: '',
        personagemId: ''
    }

    cancel = () =>{
        this.props.history.push('/');
    }
    
    mostrar=()=>{
        console.log(this.state.nome)
        console.log(this.state.cooldown)
        console.log(this.state.descricao)
        console.log(this.state.dano)
        console.log(this.state.personagemId)
    }

    create = () => {
        axios.post('http://localhost:8080/api/habilidade',
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
              alert("Criado")
            }
        ).catch(error =>
            {
              console.log(error.response);
            }
        )
  
      }

    render(){
        return(
            <div class="CadastroHabilidade">
                <header>Criação de Habilidade</header>
                <div className="form-group">
                    <label className="col-form=laber mt-4" htmlFor="nome">Nome:</label>
                    <input type="text" className="form-control" placeholder="nome" id="nome" 
                    value={this.nome} onChange={(e)=>{this.setState({nome: e.target.value})}}/>
                </div>
                
                <br/>
                <div className="form-group">
                    <label className="col-form=laber mt-4" htmlFor="nome">Cooldown:</label>
                    <input type="number" className="form-control" placeholder="cooldown" id="cooldown" 
                    value={this.cooldown} onChange={(e)=>{this.setState({cooldown: e.target.value})}}/>
                </div>

                <br/>
                <div class="form-group">
                    <label for="exampleTextarea" class="form-label mt-4">Descrição</label>
                    <textarea className="form-control" id="descricao" rows="3" placeholder="Descrição"
                    value={this.descricao} onChange={(e)=>{this.setState({descricao: e.target.value})}}></textarea>
                </div>

                <br/>
                <div className="form-group">
                    <label className="col-form=laber mt-4" htmlFor="dano">Dano:</label>
                    <input type="number" className="form-control" placeholder="dano" id="dano" 
                    value={this.dano} onChange={(e)=>{this.setState({dano: e.target.value})}}/>
                </div>
                
                <br/>
                <div className="form-group">
                    <label className="col-form=laber mt-4" htmlFor="personagemId">Id do Personagem:</label>
                    <input type="number" className="form-control" placeholder="id" id="personagemId" 
                    value={this.personagemId} onChange={(e)=>{this.setState({personagemId: e.target.value})}}/>
                </div>

                <br/>
                <button type="submit" class="btn btn-primary" onClick={this.create}>Salvar</button>
                <button type="button" class="btn btn-primary" onClick={this.cancel}>Cancelar</button>
                
            </div>
        )
    }
}
export default withRouter(CadastroHabilidade);