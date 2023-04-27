import React from 'react';

export default props => {
    const rows = props.personagens.map(personagem => {
        return (
            <tr className="table-dark" key={personagem.id}>
                <td>{personagem.id}</td>
                <td>{personagem.nome}</td>
                <td>{personagem.classe}</td>
                <td>{personagem.hp}</td>
                <td>
                <button type="button" title="Excluir" 
                    className="btn btn-danger"
                    onClick={e => props.delete(personagem.id)}>
                    <i className="pi pi-trash"></i>
                </button>
                </td>
            </tr>
        )
    })

    return(
        <table className="table table-hover">
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