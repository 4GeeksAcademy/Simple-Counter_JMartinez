//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

import Restart from "./component/Botones"

let años  = 0;
let meses = 0;
let dia   = 0;
let hora  = 0;
let min   = 0;
let seg   = 0;

function reset() {

    años  = 0;       
    meses = 0;      
    dia   = 0;        
    hora  = 0;       
    min   = 0;        
    seg   = 0;    
} 

setInterval(Cambio, 100);

function Cambio(num) {
    ReactDOM.render(<Home seg = {seg} min={min} hora={hora} dia={dia} meses={meses} años={años} reset = {reset} />, document.querySelector("#app"));
    seg ++;
    if (seg > 9) {
        min ++
        seg = 0
        if (min > 9) {
            hora ++
            min = 0
            if (hora > 9) {
                dia ++
                hora = 0

                if (dia > 9) {
                    meses ++
                    dia = 0
                    if (meses > 9) {
                       años ++
                       meses = 0
                    }

                }
            }

        }
  

        }
      
    }
    


        
    








//render your react application
