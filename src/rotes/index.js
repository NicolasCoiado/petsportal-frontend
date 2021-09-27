import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../pages/home/';
import Login from '../pages/login/';
import CadastroPessoa from '../pages/cad-pessoa/';
import CadastroOng from '../pages/cad-ong/';
import CadastroAnimal from "../pages/cad-animal";

const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/login' component={ Login } />
            <Route path='/cadastrar' component={ CadastroPessoa } />
            <Route path='/cadastrar-ong' component={ CadastroOng } />
            <Route path='/cadastrar-animal' component={ CadastroAnimal } />
        </Switch>
    </BrowserRouter>
);
export default Rotas;