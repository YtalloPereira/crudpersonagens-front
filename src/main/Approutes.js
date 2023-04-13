import React from "react";
import {Route, BrowserRouter} from "react-router-dom";
import HomePage from "../screens/HomePage";
import CadastroPersonagem from "../screens/CadastroPersonagem";
import CadastroHabilidade from "../screens/CadastroHabilidade";
import AtualizarPersonagem from "../screens/AtualizarPersonagem";
import AtualizarHabilidade from "../screens/AtualizarHabilidade";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Route component = {HomePage} path = "/" exact/>
            <Route component = {CadastroPersonagem} path = "/CadastroPersonagem" />
            <Route component = {CadastroHabilidade} path = "/CadastroHabilidade" />
            <Route component = {AtualizarPersonagem} path = "/AtualizarPersonagem" />
            <Route component = {AtualizarHabilidade} path = "/AtualizarHabilidade" />
        </BrowserRouter>
    );
}

export default AppRoutes;