import 'materialize-css';
import { TiThMenu } from 'react-icons/ti';
import { BiLogOutCircle } from 'react-icons/bi'
import { IoPersonCircle } from 'react-icons/io5'
import { Navbar, Button, Dropdown, Divider, Icon } from 'react-materialize';
import { NavLink, Link } from 'react-router-dom';
import ViewerNavIMG from '../viewer-img-nav/'
import Logo from '../../images/Logo.svg';
import './style.css';
import { Fragment } from 'react';

function NavBar (){
    return(
<>
{/*  <Navbar
      className="navbar"
      alignLinks="right"
      brand={
      <NavLink className="brand-logo" to='/'>
        <img src={Logo} alt="logo" />
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
      <NavLink className="nav-item"  to=''>
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
        */}
    <Navbar
      className="navbar"
      alignLinks="right"
      brand={
      <NavLink className="brand-logo" to='/'>
        <img src={Logo} alt="logo" />
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
      <NavLink className="nav-item" to='/cadastrar-animal'>
        DOAR
      </NavLink>
      <NavLink className="nav-item"  to='/'>
        ADOTAR
      </NavLink>
      <NavLink className="nav-item"  to='/login'>
        <span className="nickname">nickname</span>
      </NavLink>
      <NavLink className="nav-item"  to='/perfil'>
        <ViewerNavIMG />
      </NavLink>
      <Dropdown
        options={{
          alignment: 'left',
          autoTrigger: true,
          closeOnClick: true,
          constrainWidth: true,
          container: null,
          coverTrigger: true,
          hover: false,
          inDuration: 150,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 250
        }}
        trigger={<Link to="#!">{' '}<Icon medium>arrow_drop_down</Icon></Link>}
      >
        <Link to='/perfil'>
          <IoPersonCircle />
          Perfil
        </Link>
        <Divider />
          <a>
            <BiLogOutCircle />
            logout
          </a>
      </Dropdown>
    </Navbar>
</>
    );
}

export default NavBar;