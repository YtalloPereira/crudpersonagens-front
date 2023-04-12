import React from "react";
import {Route, BrowserRouter} from "react-router-dom";
import HomePage from "../screens/HomePage";
import CadastroPersonagem from "../screens/CadastroPersonagem";
import CasdastroHabilidade from "../screens/CadastroHabilidade";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Route component = {HomePage} path = "/" exact/>
            <Route component = {CadastroPersonagem} path = "/CadastroPersonagem" />
            <Route component = {CasdastroHabilidade} path = "/CadastroHabilidade" />
        </BrowserRouter>
    );
}

export default AppRoutes;