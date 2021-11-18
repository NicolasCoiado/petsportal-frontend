import 'materialize-css';
import { TiThMenu } from 'react-icons/ti';
import { FaHandHoldingHeart, FaUserCheck } from 'react-icons/fa'
import { GiSittingDog } from 'react-icons/gi'
import { RiLogoutBoxRLine, RiArrowDropDownLine } from 'react-icons/ri'
import { IoIosPeople } from 'react-icons/io'
import { HiPlusCircle, HiUserAdd, HiViewList } from 'react-icons/hi'
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
          <TiThMenu fontSize="x-large" />
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
                <FaHandHoldingHeart className="nav-icon-mobile" />
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
                <FaHandHoldingHeart className="nav-icon-mobile" />
                Doar
              </NavLink>
              <NavLink className="nav-item-mobile"  to='/'>
                <GiSittingDog className="nav-icon-mobile"/>
                Adotar
              </NavLink>

              {(user.tipo==='adm')&&(
                <>
                  <Link className="nav-event-mobile" to="/eventos">
                    <IoIosPeople className="nav-icon-mobile"/>
                    Eventos
                  </Link>
                  <Divider />
                  <Link className="nav-event-mobile" to="/adm/adocoes">
                    <HiViewList className="nav-icon-mobile"/> 
                    Lista de adoções
                  </Link>
                  <Divider />
                  <Link className="nav-event-mobile" to="/adm/ongs">
                    <FaUserCheck className="nav-icon-mobile"/>
                    Validar ONGs
                  </Link>
                  <Link className="nav-event-mobile" to="/adm/eventos">
                    <FaUserCheck className="nav-icon-mobile"/>
                    Validar eventos
                  </Link>
                  <Divider />
                  <Link className="nav-event-mobile" to="/adm/reports">
                    Ver reports
                  </Link>
                  <Divider />
                </>
              )}

              {(user.tipo==='ong')&&(
                <>
                  <Divider />
                  <Link className="nav-event-mobile" to="/cadastrar-evento">
                    <HiPlusCircle className="nav-icon-mobile"/>
                    Criar evento
                  </Link>
                  <Link className="nav-event-mobile" to="/meus-eventos">
                    <HiUserAdd className="nav-icon-mobile"/>
                    Meus eventos
                  </Link>
                  <Link className="nav-event-mobile" to="/eventos">
                    <IoIosPeople className="nav-icon-mobile"/>
                    Outros eventos
                  </Link>
                  <Divider />
                </>
              )}
              {(user.tipo==='nrm')&&(
                <NavLink className="nav-item-mobile" to='/eventos'>
                  <IoIosPeople className="nav-icon-mobile"/> Eventos
                </NavLink>
              )}
              <a className="nav-item-mobile" onClick={logoff}>
                <RiLogoutBoxRLine className="nav-icon-mobile" />
                Logout
              </a>
          </>)
          }
        </div>
        }
      >
        <div className="navbar-edited">
          <NavLink className="nav-item" to='/cadastrar-animal'>
            Doar
          </NavLink>
          <NavLink className="nav-item"  to='/'>
            Adotar
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
            >
              LOGIN
            </Button>
          </NavLink>
          )
          ://Se o usuário ESTIVER logado...
          (<>
            {(user.tipo==='nrm')&&(
              <NavLink className="nav-item" to='/eventos'>
                Eventos
              </NavLink>
            )}
            {(user.tipo==='ong')&&(
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
                trigger={<Link to="#!" className="nav-item-ong">Eventos<RiArrowDropDownLine className="nav-icon-ong"/>{''}</Link>}
              >
                  <Divider />
                  <Link to="/cadastrar-evento">
                    Criar evento
                  </Link>
                  <Link to="/meus-eventos">
                    Meus eventos
                  </Link>
                  <Link to="/eventos">
                    Outros eventos
                  </Link>
                  <Divider />
              </Dropdown>
            )}
            {(user.tipo==='adm')&&(
            <>
              <NavLink className="nav-item" to='/eventos'>
                Eventos
              </NavLink>
              <Dropdown
                id="Dropdown_15"
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
                trigger={<Link to="#!" className="nav-item-ong">Administrar<RiArrowDropDownLine className="nav-icon-ong"/>{''}</Link>}
              >
                <Link to="/adm/adocoes">
                  Lista de adoções
                </Link>
                <Divider />
                <Link to="/adm/ongs">
                  Validar ONGs
                </Link>
                <Link to="/adm/eventos">
                  Validar eventos
                </Link>
                <Divider />
                <Link to="/adm/reports">
                  Ver reports
                </Link>
              </Dropdown>
            </>
            )}
            <NavLink className="nav-pic-item"  to={`/perfil/${user.id}`}>
              <ViewerNavIMG uploadUrl={user.img} />
            </NavLink>
            <Dropdown
              id="Dropdown_16"
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
              trigger={<a href="#">{' '}<Icon right>arrow_drop_down</Icon></a>}
            >
              <Link className="item-drop" to={`/perfil/${user.id}`}>
                Meu perfil
              </Link>
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