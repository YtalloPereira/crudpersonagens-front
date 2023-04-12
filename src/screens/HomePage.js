import React from "react";
import './HomePage.css';


 export default class HomePage extends React.Component{
    
  

    navigateToCrudPeronagem = () => {
        this.props.history.push('/CadastroPersonagem');
        
    }
    
    navigateToCrudHabilidade = () => {
        this.props.history.push('/CadastroHabilidade');
    }

    render(){
        return(
            <div className="HomePage">
                
            <div className="d-grid gap-2">
                <button className="btn btn-lg btn-primary" type="button" 
                onClick={this.navigateToCrudPeronagem}>CRUD Personagem</button>

                <button className="btn btn-lg btn-primary" type="button" 
                onClick={this.navigateToCrudHabilidade}>CRUD Habilidade</button>
            </div>

            </div>
        );
    }
}
