






function camn1 () {
    x = x + 100;
        objeto.style.left = x + "px";
     

        
        caminar_1()
        
}


function camn2 (){
   
    caminar_2()
    
    console.log("funciona mouseup");
}


const botonDer = document.querySelector(".DER");




botonDer.addEventListener("mousedown",camn1);

botonDer.addEventListener("mouseup",camn2);
