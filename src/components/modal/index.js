import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import './style.css';


const Modal = ({showModal, setShowModal}) => {

    
    /*======================================================================*/


    return <> {showModal ? 

        <div className="card">
        <form className="col s12" >
            <div className="row">
                <div className="input-field col s6">
                    <i className="material-icons prefix">account_circle</i>
                    <input placeholder="Nome Completo" id="nome" type="text" className="validate" />
                    
                </div>
            </div>

           <div className="row">
                <div className="input-field col s6">
                    <i className="material-icons prefix">assistant_photo</i>
                    <input placeholder="Estado" id="estado" type="text" className="validate" />
                </div>
           </div>

           <div className="row">
                <div className="input-field col s6">
                    <i className="material-icons prefix">assistant_photo</i>
                    <input placeholder="Cidade" id="cidade" type="text" className="validate" />
                </div>
           </div>

           <div className="row">
                <div className="input-field col s6">
                    <i className="material-icons prefix">security</i>
                    <input placeholder="Telefone" id="tell" type="number" className="validate" />
                </div>
           </div>

           <div className="row">
                <div className="input-field col s6">
                    <i className="material-icons prefix">fiber_manual_record</i>
                    <input placeholder="DDD" id="ddd" type="text" className="validate" />
                </div>
           </div>
           <div className="row">
                <div className="botao">
                    <button className="btn waves-effect waves-light" type="submit" name="action" >
                        Submit
                    </button>
                </div>
           </div>
        </form>
    </div>

    : null} </>
}

export default Modal;