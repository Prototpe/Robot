

const botonDer = document.querySelector(".DER");

const arma1 = document.querySelector(".ARMA1")

function camn1 () {
    x = x + 100;
        objeto.style.left = x + "px";
     

        
        caminar_1()
        
}


function camn2 (){
   
    caminar_2()
    
    console.log("funciona mouseup");
}







botonDer.addEventListener("mousedown",camn1);

botonDer.addEventListener("mouseup",camn2);



arma1.addEventListener("mouseenter",rayo_rojo_activacion);

arma1.addEventListener("mouseleave",rayo_rojo_desactivacion);