import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../pages/home/';
import Login from '../pages/login/';
import CadastroPessoa from '../pages/cad-pessoa/';
import CadastroOng from '../pages/cad-ong/';
import CadastroAnimal from "../pages/cad-animal";
import Perfil from "../pages/perfil";

const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/login' component={ Login } />
            <Route path='/cadastrar' component={ CadastroPessoa } />
            <Route path='/cadastrar-ong' component={ CadastroOng } />
            <Route path='/cadastrar-animal' component={ CadastroAnimal } />
            <Route path='/perfil' component={ Perfil } /> 
            {/*<Route path='/perfil/:id' component={ Perfil } /> */}
        </Switch>
    </BrowserRouter>
);
export default Rotas;