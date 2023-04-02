import logo from './logo.svg';
import './App.css';
import React from 'react';

export default class App extends React.Component{

  statePersonagem = {
    nome: null,
    classe: null,
    hp: null
  }

  stateHabilidade = {
    nome: null,
    cooldown: null,
    descricao: null,
    dano: null,
    personagemId: null
  }

  render() {
    return (
      <div className="App">
        <header>Criação de Personagem</header>
        <label>Nome:</label>
        <input type = "text" value={this.statePersonagem.nome} onChange={(e) => {this.setState({nome: e.target.value})}}/>

        <br/>
        <label>Classe:</label>
        <input type = "text" value={this.statePersonagem.classe} onChange={(e) => {this.setState({classe: e.target.value})}}/>
        
        <br/>
        <label>Hp:</label>
        <input type = "number" value={this.statePersonagem.hp} onChange={(e) => {this.setState({hp: e.target.value})}}/>

        <br/>
          <button type="submit" name="botao-salvar">Salvar</button>
        <hr/>
        <header>Criação de Habilidade</header>
        <label>Nome:</label>
        <input type = "text" value={this.stateHabilidade.nome} onChange={(e) => {this.setState({hp: e.target.value})}}/>
        <br/>
        <label>Cooldown:</label>
        <input type = "number" value={this.stateHabilidade.cooldown} onChange={(e) => {this.setState({hp: e.target.value})}}/>
        
        <br/>
        <label>Descrição:</label>
        <br/>        
        <textarea name="descricao" rows="3" cols="23" placeholder='Descreva a habilidade'></textarea>
        
        <br/>
        <label>Dano:</label>
        <input type = "number" value={this.stateHabilidade.dano} onChange={(e) => {this.setState({hp: e.target.value})}}/>
        
        <br/>
        <label>Id do Personagem:</label>
        <input type = "number" value={this.stateHabilidade.personagemId} onChange={(e) => {this.setState({hp: e.target.value})}}/>
        <br/>
        <button type="submit" name="botao-salvar">Salvar</button>
        </div>
    );
  }
}
