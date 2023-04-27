import React from "react";
import './HomePage.css';


 export default class HomePage extends React.Component{
    
  

    navigateToCreatePersonagem = () => {
        this.props.history.push('/CadastroPersonagem');
        
    }
    
    navigateToCreateHabilidade = () => {
        this.props.history.push('/CadastroHabilidade');
    }

    navigateToUpdatePersonagem = () => {
        this.props.history.push('/AtualizarPersonagem');
    }

    navigateToUpdateHabilidade = () => {
        this.props.history.push('/AtualizarHabilidade');
    }

    navigateToGetPersonagem = () => {
        this.props.history.push('/TabelaPersonagem');
    }
    
    navigateToDeletePersonagem = () => {
        this.props.history.push('/DeletarPersonagem');
    }

    navigateToDeleteHabilidade = () => {
        this.props.history.push('/DeletarHabilidade');
    }

    navigateToListarPersonagem = () => {
        this.props.history.push('/ListarPersonagem');
    }


    render(){
        return(
            <div className="HomePage">
                <header>CRUD Personagem</header>
                    <div className="d-grid gap-2">
                        <button className="btn btn-lg btn-primary" type="button" 
                        onClick={this.navigateToCreatePersonagem}>Criar Personagem</button>
                        
                        <button className="btn btn-lg btn-primary" type="button"
                        onClick={this.navigateToUpdatePersonagem}>Atualizar Personagem</button>
                       
                        <button className="btn btn-lg btn-primary" type="button"
                        onClick={this.navigateToDeletePersonagem}>Deletar Personagem</button>

                        <button className="btn btn-lg btn-primary" type="button"
                        onClick={this.navigateToListarPersonagem}>Listar Personagens</button>
                    </div>
                    <br/>
                <header>CRUD Habilidade</header>
                    <div className="d-grid gap-2">
                        <button className="btn btn-lg btn-primary" type="button" 
                        onClick={this.navigateToCreateHabilidade}>Criar Habilidade</button>
                        
                        <button className="btn btn-lg btn-primary" type="button"
                        onClick={this.navigateToUpdateHabilidade}>Atualizar Habilidade</button>
                        
                        <button className="btn btn-lg btn-primary" type="button"
                        onClick={this.navigateToDeleteHabilidade}>Deletar Habilidade</button>
                    </div>
            </div>
        );
    }
}
