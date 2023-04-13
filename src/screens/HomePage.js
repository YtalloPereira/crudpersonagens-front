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

    render(){
        return(
            <div>
                <header>CRUD Personagem</header>
                    <div className="d-grid gap-2">
                        <button className="btn btn-lg btn-primary" type="button" 
                        onClick={this.navigateToCreatePersonagem}>Criar Personagem</button>
                        
                        <button className="btn btn-lg btn-primary" type="button"
                        onClick={this.navigateToUpdatePersonagem}>Atualizar Personagem</button>
                       
                        <button className="btn btn-lg btn-primary" type="button">Listar Personagens</button>
                    </div>
                    <br/>
                <header>CRUD Habilidade</header>
                    <div class="d-grid gap-2">
                        <button className="btn btn-lg btn-primary" type="button" 
                        onClick={this.navigateToCreateHabilidade}>Criar Habilidade</button>
                        
                        <button className="btn btn-lg btn-primary" type="button"
                         onClick={this.navigateToUpdateHabilidade}>Atualizar Habilidade</button>
                        <button className="btn btn-lg btn-primary" type="button">Listar Habilidades</button>
                    </div>
            </div>
        );
    }
}
