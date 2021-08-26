import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../pages/home/';
import Login from '../pages/login/';
import CadastroPessoa from '../pages/cad-pessoa/';

const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/login' component={ Login } />
            <Route path='/cadastrar' component={ CadastroPessoa } />
        </Switch>
    </BrowserRouter>
);
export default Rotas;