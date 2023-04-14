import React from "react";

export default props => {
    const rows = props.porsonagens.map( personagem =>{
        return(
            <tr key={personagem.id}>
                <td>{personagem.id}</td>
                <td>{personagem.nome}</td>
                <td>{personagem.classe}</td>
                <td>{personagem.hp}</td>
                <td>
                    <button type="button" className="btn btn-primary" 
                    onClick={ e => props.delete(personagem.id)}>Excluir</button>
                </td>
            </tr>
        )
    });

    return(
       <table className="table-primary">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Classe</th> 
                    <th scope="col">Hp</th> 
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}