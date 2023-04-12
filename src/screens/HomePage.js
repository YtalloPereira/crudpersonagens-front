import React from "react";
import './HomePage.css';


 export default class HomePage extends React.Component{
    
  

    navigateToCreatePersonagem = () => {
        this.props.history.push('/CadastroPersonagem');
        
    }
    
    navigateToCreateHabilidade = () => {
        this.props.history.push('/CadastroHabilidade');
    }

    render(){
        return(
            <div>
                <header>CRUD Personagem</header>
                    <div class="d-grid gap-2">
                        <button class="btn btn-lg btn-primary" type="button" 
                        onClick={this.navigateToCreatePersonagem}>Criar Personagem</button>
                        
                        <button class="btn btn-lg btn-primary" type="button">Atualizar Personagem</button>
                        <button class="btn btn-lg btn-primary" type="button">Deletar Personagem</button>
                    </div>
                    <br/>
                <header>CRUD Habilidade</header>
                    <div class="d-grid gap-2">
                        <button class="btn btn-lg btn-primary" type="button" 
                        onClick={this.navigateToCreateHabilidade}>Criar Habilidade</button>
                        
                        <button class="btn btn-lg btn-primary" type="button">Atualizar Habilidade</button>
                        <button class="btn btn-lg btn-primary" type="button">Deletar Habilidade</button>
                    </div>
            </div>
        );
    }
}
