import 'materialize-css';
import { TiThMenu } from 'react-icons/ti';
import { Navbar, Button } from 'react-materialize';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/Logo.svg';
import './style.css';

function NavBar (){
    return(
      <Navbar
      className="navbar"
      alignLinks="right"
      brand={
      <NavLink className="brand-logo" to='/'>
        <img src={Logo} />
      </NavLink>}
      id="mobile-nav"
      menuIcon={
        <TiThMenu className="nav-menu-mobile" fontSize="x-large" />
      }
      options={{
        draggable: true,
        edge: 'left',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true
      }}
    >
      <NavLink className="nav-item" to='/'>
        DOAR
      </NavLink>
      <NavLink className="nav-item"  to='/'>
        ADOTAR
      </NavLink>
      <NavLink className="nav-item"  to='/login'>
        <Button 
          className="btn-nav"
          node="button"
          style={{
            marginRight: '5px'
          }}
          waves="light"
        >
          LOGIN
        </Button>
      </NavLink>
    </Navbar>
    );
}

export default NavBar;