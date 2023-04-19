
import React from 'react';

import 'bootswatch/dist/lumen/bootstrap.css'
import './screens/Global.css';
import 'toastr/build/toastr.css';
import 'toastr/build/toastr.min.js';




import AppRoutes from './main/Approutes';

export default class App extends React.Component{
  
  render() {
    return (
      <div>
        <AppRoutes/>
      </div>
      // <div className="App">
      //   <header>Criação de Personagem</header>
      //   <div className="form-group">
      //     <label className="col-form=laber mt-4" for="nome">Nome:</label>
      //     <input type="text" className="form-control" placeholder="nome" id="nome" 
      //     value={this.nome} onChange={(e)=>{this.setState({nome: e.target.value})}}/>
      //   </div>

      //   <br/>
      //     <div className="form-group">
      //       <label className="col-form=laber mt-4" for="classe">Classe:</label>
      //       <input type="text" className="form-control" placeholder="Classe" id="classe" 
      //       value={this.classe} onChange={(e)=>{this.setState({classe: e.target.value})}}/>
      //     </div>

      //   <br/>
      //     <div className="form-group">
      //       <label className="col-form=laber mt-4" for="hp">Hp:</label>
      //       <input type="number" className="form-control" placeholder="Hp" id="hp" 
      //       value={this.hp} onChange={(e)=>{this.setState({hp: e.target.value})}}/>
      //     </div>

      //   <br/>
      //     <button type="submit" class="btn btn-primary" onClick={this.mostrar}>Salvar</button>
      //     <button type="button" class="btn btn-primary">Cancelar</button>
      //  </div>

    );
  }
}
