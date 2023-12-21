

//VARIABLES BOTONES DE MOVIMIENTOS

const botonDer = document.querySelector(".DER");

const botonIzq = document.querySelector(".IZQ");

const botonArriba = document.querySelector(".ARRIBA");

const botonAbajo = document.querySelector(".ABAJO");

//VARIABLES BOTONES DE ARMAS

const arma1 = document.querySelector(".ARMA1")

const arma2 = document.querySelector(".ARMA2")

const arma3 = document.querySelector(".ARMA3")

const arma4 = document.querySelector(".ARMA4")

const arma5 = document.querySelector(".ARMA5")

const DESACTIVAR = document.querySelector(".DESACTIVAR")




// click entrada mousedown
// click salida mouseup

// captar entrada mouse mouseenter
// captar salida mouse  mouseleave



//MOVIMIENTO

botonDer.addEventListener("mousedown",caminar_1);

botonDer.addEventListener("mouseup",caminar_2);

botonIzq.addEventListener("mousedown",frenar_estabilizar);

botonIzq.addEventListener("mouseup",estabilizar_valor0);



// ARMAS

arma1.addEventListener("mouseenter",rayo_rojo_activacion);

arma1.addEventListener("mouseleave",rayo_rojo_desactivacion);

arma2.addEventListener("mousedown",cortada_activacion);

arma2.addEventListener("mouseup",cortada_cancelacion);

arma3.addEventListener("mouseenter",definitiva_activacion);

arma3.addEventListener("mouseleave", definitiva_cancelacion);

arma4.addEventListener("mouseenter", armaplasma);

arma4.addEventListener("mouseleave", armaplasmadesactivar);

arma5.addEventListener("mouseenter", misiles1);

arma5.addEventListener("mouseleave",  pararMisiles);

