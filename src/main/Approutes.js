import React from "react";
import {Route, BrowserRouter} from "react-router-dom";
import HomePage from "../screens/HomePage";
import CadastroPersonagem from "../screens/CadastroPersonagem";
import CadastroHabilidade from "../screens/CadastroHabilidade";
import AtualizarPersonagem from "../screens/AtualizarPersonagem";
import AtualizarHabilidade from "../screens/AtualizarHabilidade";
import DeletarPersonagem from "../screens/DeletarPersonagem";
import DeletarHabilidade from "../screens/DeletarHabilidade";
import TablePersonagem from "../screens/TablePersonagem";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Route component = {HomePage} path = "/" exact/>
            <Route component = {CadastroPersonagem} path = "/CadastroPersonagem" />
            <Route component = {CadastroHabilidade} path = "/CadastroHabilidade" />
            <Route component = {AtualizarPersonagem} path = "/AtualizarPersonagem" />
            <Route component = {AtualizarHabilidade} path = "/AtualizarHabilidade" />
            <Route component = {DeletarPersonagem} path = "/DeletarPersonagem" />
            <Route component = {DeletarHabilidade} path = "/DeletarHabilidade" />
            <Route component = {TablePersonagem} path = "/ListarPersonagens" />
        </BrowserRouter>
    );
}

export default AppRoutes;