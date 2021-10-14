import 'materialize-css';
import { TiThMenu } from 'react-icons/ti';
import { BiDonateHeart } from 'react-icons/bi'
import { GiSittingDog } from 'react-icons/gi'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import { Navbar, Button, Dropdown, Divider, Icon } from 'react-materialize';
import { NavLink, Link, useHistory } from 'react-router-dom';
import ViewerNavIMG from '../viewer-img-nav/'
import Logo from '../../images/Logo.svg';
import './style.css';
import React, { useEffect, useState } from "react";
import API from '../../api/'

function NavBar (){
  const [user, setUser] = useState({});
  const history = useHistory();

  function logoff(){
    localStorage.setItem('token', null)
    history.push('/login')
}

  useEffect(() => {
    API.post("/navValidation", {}, {
      headers: { Authorization : 'Bearer ' + window.localStorage.getItem('token')}
      
      })
      .then(res => {
         console.log(res);
         setUser(res.data.user);
      })
      .catch(err =>{
         console.log(err);
      })
  
  }, []);

    return(
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

      //NAVMOBILE:
      sidenav={
      <div id="sidenav">
        {(!user.tipo) //Se o usuário não estiver logado...
          ?(<>
            <NavLink className="nav-item-mobile" to='/cadastrar-animal'>
              <BiDonateHeart className="nav-icon-mobile" />
              DOAR
            </NavLink>
            <NavLink className="nav-item-mobile"  to='/'>
              <GiSittingDog className="nav-icon-mobile"/>
              ADOTAR
            </NavLink>
            <NavLink className="nav-item-mobile"  to='/login'>
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
          </>)://Se o usuário ESTIVER logado...
          (<> 
            <NavLink className="nav-pic-mobile" to={`/perfil/${user.id}`}>
              <ViewerNavIMG uploadUrl={user.img} />
            </NavLink>
            <NavLink className="nav-nick-mobile"  to={`/perfil/${user.id}`}>
              <span className="nickname">{user.nome}</span>
            </NavLink>
            <NavLink className="nav-item-mobile" to='/cadastrar-animal'>
              <BiDonateHeart className="nav-icon-mobile" />
              DOAR
            </NavLink>
            <NavLink className="nav-item-mobile"  to='/'>
              <GiSittingDog className="nav-icon-mobile"/>
              ADOTAR
            </NavLink>
            <a className="nav-item-mobile" onClick={logoff}>
              <RiLogoutBoxRLine className="nav-icon-mobile" />
              LOGOUT
            </a>
        </>)
        }
      </div>
      }
    >
      <div className="navbar-edited">
        <NavLink className="nav-item" to='/cadastrar-animal'>
          DOAR
        </NavLink>
        <NavLink className="nav-item"  to='/'>
          ADOTAR
        </NavLink>
        {(!user.tipo)//Se o usuário não estiver logado...
        ?(
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
        )
        ://Se o usuário ESTIVER logado...
        (<>
          <NavLink className="nav-item"  to={`/perfil/${user.id}`}>
            <ViewerNavIMG uploadUrl={user.img} />
          </NavLink>
          <Dropdown
            id="Dropdown_14"
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
            trigger={<a href="#!">{' '}<Icon right>arrow_drop_down</Icon></a>}
          >
            <Link to={`/perfil/${user.id}`}>
              Meu perfil
            </Link>
            <Divider />
            {(user.tipo==='adm')&&(
              <Link to='/'>
                ADM
              </Link>
            )}
            {(user.tipo==='ong')&&(
              <Link to='/'>
                  +Evento
              </Link>
            )}
            <Divider />
            <a onClick={logoff}>
                Logout
            </a>
          </Dropdown>
      </>)
      }
      </div>
    </Navbar>
  
    
    );
}

export default NavBar;