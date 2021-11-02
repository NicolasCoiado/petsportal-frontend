import React from "react";
import { Button } from "react-materialize";
import CardsDesktop from "../cards-desktop";
import CardsMobile from "../cards-mobile";
import './style.css';

function Animais(){
    return(
    <>
        <CardsDesktop />
        <CardsMobile />
        <Button>
            aaa
        </Button>
    </>
    );
}

export default Animais;
