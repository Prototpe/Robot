



/*
document.getElementById("brazoD").addEventListener("click", function () {

    document.querySelector(".brazo_der").style.rotate = ("-45deg");
    document.querySelector(".brazo_izq").style.rotate = ("45deg");

});

document.getElementById("brazoD").addEventListener("dblclick", function () {

    document.querySelector(".brazo_der").style.rotate = ("0deg");
    document.querySelector(".brazo_izq").style.rotate = ("0deg");

});



document.getElementById("piernaD").addEventListener("click", function () {
    document.querySelector(".pierna_der").style.rotate = ("45deg");
    document.querySelector(".pantorrillaD").style.rotate = ("60deg");
}
);

document.getElementById("piernaD").addEventListener("dblclick", function () {
    document.querySelector(".pierna_der").style.rotate = ("-45deg");
    document.querySelector(".pantorrillaD").style.rotate = ("30deg");
}
);


/*
$(document).keypress(function (event) {

    switch (event.which) {
        case 119:
            $("#cabeza").animate({ "top": "+=50px" }, "slow");
            break;

        case 97:
            $("#cabeza").animate({ "left": "+=50px" }, "slow");
            break;

        case 100:
            $("#cabeza").animate({ "left": "-=50px" }, "slow");
            break;


        case 115:
            $("#cabeza").animate({ "top": "-=50px" }, "slow");
            break;
    }
});
*/

/*
let element = document.getElementById("elemento")



window.addEventListener("keydown",(e)=> {
    let tecla=e.key

    switch (tecla) {

        case "ArrowRight":
         
        elemento.style.transform="translateX(100px)"
        break;

        
        case "ArrowLeft":
            
            elemento.style.transform="translateX(-100px)"
            break;

            

        case "ArrowUp":
            
            elemento.style.transform="translateY(-100px)"
            break

        case "ArrowDown":
            
            elemento.style.transform="translateY(100px)"
            break
            default:
                break;
    }
})









/*

document.getElementById("brazoI").addEventListener("click", function ()
{

document.querySelector(".brazo_izq").style.rotate =("45deg"); 

});

document.getElementById("brazoI").addEventListener("dblclick", function ()
{

document.querySelector(".brazo_izq").style.rotate =("0deg"); 

});

Eventos de teclado
El evento KeyDown, que se produce una vez.
El evento KeyPress, que se puede producir varias veces cuando un usuario mantiene presionada la misma tecla.
El evento KeyUp se produce una vez cuando el usuario suelta una tecla.




*/




















window.onload = () => {
    const player = {
        element: document.getElementById("player"),
        topPosition: 0,
        leftPosition: 0,
        step: 30,
        move: function (direction) {
            switch (direction) {
                case "ArrowUp":

                   /* this.topPosition = this.topPosition - this.step; /* ctualizamos la variable en el objeto agregando el valor del step*/
                   /* this.element.style.top = this.topPosition + "px"; *//* Actualizamos el css*/


                    /*
                    
                                        document.querySelector(".pierna_der").style.rotate = ("-20deg");
                    
                                        document.querySelector(".pantorrillaD").style.rotate = ("80deg");
                    
                                        document.querySelector(".pierna_izq").style.rotate = ("-20deg");
                                        document.querySelector(".pantorrillaI").style.rotate = ("30deg");
                    
                    */

                    document.querySelector(".pierna_der").style.animation = "moverpordefinitiva 1s 1 forwards";
                    document.querySelector(".pierna_izq").style.animation = "moverpordefinitiva 1s 1 forwards";

                    document.querySelector(".pierna_der").style.rotate = ("-10deg");
                    document.querySelector(".pantorrillaD").style.rotate = ("5deg");

                    document.querySelector(".pierna_izq").style.rotate = ("-10deg");
                    document.querySelector(".pantorrillaI").style.rotate = ("5deg");

                    document.querySelector(".arma_der").style.animation = " armasatras 2s 1 forwards";
                    document.querySelector(".arma_izq").style.animation = " armasatras 2s 1 forwards";

                    document.querySelector(".arma1").style.animation = ("armasatras1  2s 1 forwards");
                    document.querySelector(".pararR").play("loop");
                    document.querySelector(".caminataR").load();
                    document.querySelector(".pantorrillaI").style.animation = "paused";
                    document.querySelector(".pantorrillaD").style.animation = "paused";

                    document.querySelector(".PieI").style.animation = "paused";

                    document.querySelector(".arma1").style.rotate = ("50deg");

                    document.querySelector(".arma_der").style.rotate = ("50deg");


                    document.querySelector(".arma_izq").style.rotate = ("50deg");

                    break;

                case "ArrowDown":
                    /*this.topPosition = this.topPosition + this.step;
                    this.element.style.top = this.topPosition + "px";*/

                    /*
                                        document.querySelector(".pierna_der").style.rotate = ("1deg");
                    
                                        document.querySelector(".pantorrillaD").style.rotate = ("50deg");
                    
                                        document.querySelector(".pierna_izq").style.rotate = ("1deg");
                                        document.querySelector(".pantorrillaI").style.rotate = ("-5deg");
                    
                    
                                        /*  document.querySelector(".pierna_der").style.rotate = ("10deg");
                                          
                                          document.querySelector(".pantorrillaD").style.rotate = ("0deg");
                      
                                          document.querySelector(".pierna_izq").style.rotate = ("0deg");
                                          document.querySelector(".pantorrillaI").style.rotate = ("0deg");
                      */


                    /*
                    
                                        break;
                    
                    
                    
                                    case "Numpad0":
                                        this.leftPosition = this.leftPosition + this.step;
                                        this.element.style.left = this.leftPosition + "px";
                    
                                        /*  document.querySelector(".pierna_der").style.rotate = ("-50deg");
                                          document.querySelector(".pantorrillaD").style.rotate = ("78deg");
                      
                                          document.querySelector(".pierna_izq").style.rotate = ("1deg");
                                          document.querySelector(".pantorrillaI").style.rotate = ("5deg");
                      
                                          document.querySelector(".caminataR").play("loop");
                      */

                    document.querySelector(".arma_der").style.rotate = ("-50deg");
                    document.querySelector(".arma_der").style.translate = ("-40px");

                    document.querySelector(".arma_izq").style.rotate = ("-50deg");
                    document.querySelector(".arma_izq").style.translate = ("-5px");

                    document.querySelector(".arma1").style.rotate = ("-30deg");

                    break;



                case "ArrowRight":

                    /*  this.leftPosition = this.leftPosition + this.step;
                      this.element.style.left = this.leftPosition + "px";*/

                    moverD()
                    document.querySelector(".caminataR").play("loop");

                   

                    document.querySelector(".pierna_der").style.animation = " piernaD 2300ms infinite";
                    document.querySelector(".pantorrillaD").style.animation = "pantorrilD 2350ms infinite forwards alternate";
                    document.querySelector(".PieI").style.animation = " pieI 2800ms infinite";



                    document.querySelector(".pierna_izq").style.animation = "piernaI 2300ms infinite forwards";
                    document.querySelector(".pantorrillaI").style.animation = "pantorrilI 2400ms infinite forwards";

                    document.querySelector(".caminataR").play("loop");


                    /*
                                        document.querySelector(".brazo_der").style.rotate = ("45deg");
                                        document.querySelector(".brazo_izq").style.rotate = ("45deg");
                    */
                    /*
                    document.querySelector(".pierna_der").style.animation = "mmove 4s 2 ";
                    document.querySelector(".pantorrillaD").style.animation = "mmove 4s infinite";
                    */
                    /*
                     document.querySelector(".pierna_der").style.rotate = ("-5deg");
 
                     document.querySelector(".pantorrillaD").style.rotate = ("28deg");
 
                     document.querySelector(".pierna_izq").style.rotate = ("-40deg");
                     document.querySelector(".pantorrillaI").style.rotate = ("40deg");
                 
                     */


                    break;


                case "ArrowLeft":
                    /* this.leftPosition = this.leftPosition - this.step;
                     this.element.style.left = this.leftPosition + "px";*/



                    moverI()


                    document.querySelector(".pierna_der").style.animation = " piernaD 2300ms infinite";
                    document.querySelector(".pantorrillaD").style.animation = "pantorrilD 2350ms infinite forwards alternate";
                    document.querySelector(".PieI").style.animation = " pieI 2800ms infinite";



                    document.querySelector(".pierna_izq").style.animation = "piernaI 2300ms infinite forwards";
                    document.querySelector(".pantorrillaI").style.animation = "pantorrilI 2400ms infinite forwards";

                    document.querySelector(".caminataR").play("loop");


                    /*
 
 
                 /*
                                     document.querySelector(".brazo_der").style.rotate = ("-50deg");
                                     document.querySelector(".brazo_izq").style.rotate = ("-45deg");
                 */
                    /*
                                        document.querySelector(".pierna_der").style.rotate = ("-5deg");
                    
                                        document.querySelector(".pantorrillaD").style.rotate = ("28deg");
                    
                                        document.querySelector(".pierna_izq").style.rotate = ("-40deg");
                                        document.querySelector(".pantorrillaI").style.rotate = ("40deg");
                                        document.querySelector(".caminataR").play("loop");
                                        */


                    break;

                case "NumpadDecimal":
                    this.leftPosition = this.leftPosition - this.step;
                    this.element.style.left = this.leftPosition + "px";

                    /*  document.querySelector(".pierna_der").style.rotate = ("-50deg");
                    document.querySelector(".pantorrillaD").style.rotate = (" 78deg");
                     
                    document.querySelector(".pierna_izq").style.rotate = ("1deg");
                    document.querySelector(".pantorrillaI").style.rotate = ("5deg");
                    document.querySelector(".caminataR").play("loop");
                     
                    */

                    document.querySelector(".definitiva1").style.animation = "definitiva 2s 1 forwards";
                    document.querySelector(".definitiva2").style.animation = "definitiva 2s 1 forwards";
                    document.querySelector(".definitiva3").style.animation = "definitiva 2s 1 forwards";
                    document.querySelector(".arma_der").style.animation = " armasatras 2s 1 forwards";
                    document.querySelector(".arma_izq").style.animation = " armasatras 2s 1 forwards";

                    document.querySelector(".arma1").style.animation = ("armasatras1  2s 1 forwards");
                    document.querySelector(".torso").style.animation = "torsoatras 2s 1 forwards";


                    document.querySelector(".pierna_der").style.animation = "paused";
                    document.querySelector(".pantorrillaD").style.animation = "paused";

                    document.querySelector(".pierna_izq").style.animation = "paused";
                    document.querySelector(".pantorrillaI").style.animation = "paused";

                    document.querySelector(".PieI").style.animation = "paused";



                    document.querySelector(".caminataR").load();
                    document.querySelector(".pararR").play("loop");



                    document.querySelector(".pierna_der").style.animation = "moverpordefinitiva 1s 1 forwards";
                    document.querySelector(".pierna_izq").style.animation = "moverpordefinitiva 1s 1 forwards";



                    document.querySelector(".disparo1").play("loop");
                    document.querySelector(".disparo2").play("loop");
                    document.querySelector(".disparo0").play("loop");
                    break;


                case "NumpadAdd":/* ARMA */


                    document.querySelector(".arma_der").style.animation = "arma_der 1s infinite";
                    document.querySelector(".arma_der").style.rotate = ("5deg");
                    document.querySelector(".arma_der").style.translate = ("40px");

                    document.querySelector(".arma_izq").style.animation = "arma_der 1s infinite";
                    document.querySelector(".arma_izq").style.rotate = ("5deg");
                    document.querySelector(".arma_izq").style.translate = ("5px");

                    document.querySelector(".valasd").style.animation = ("valas 0.8s infinite forwards");

                    document.querySelector(".valasi").style.animation = ("valas 0.8s infinite forwards");
                    document.querySelector(".disparo11").play("loop");


                    break;

                case "NumpadSubtract":
                    document.querySelector(".arma_der").style.translate = ("-10px");
                    document.querySelector(".arma_der").style.rotate = ("20deg");
                    document.querySelector(".arma_der").style.animation = "finish";

                    document.querySelector(".arma_izq").style.translate = ("-10px");
                    document.querySelector(".arma_izq").style.rotate = ("20deg");
                    document.querySelector(".arma_izq").style.animation = "finish";

                  

                    document.querySelector(".arma1").style.animation = ("finish");
                    document.querySelector(".arma1").style.rotate = ("-5deg");

                    
                    document.querySelector(".proyectil").style.animation = ("finish");/* pausar arma rayo rojo*/
                    document.querySelector(".proyectil1").style.animation = ("finish");/* pausar arma rayo rojo*/
                    document.querySelector(".disparo11").load();/* pausar arma rayo rojo*/
                    document.querySelector(".prolongado").load();/* pausar arma rayo rojo*/
                    document.querySelector(".disparo").load();/* pausar arma rayo rojo*/




                    document.querySelector(".valasd").style.animation = ("finish");
                    document.querySelector(".valasi").style.animation = ("finish");

                    document.querySelector(".pararR").play("loop");


                    document.querySelector(".disparo0").load();

                    document.querySelector(".disparo1").load();
                    document.querySelector(".disparo2").load();

                    document.querySelector(".pierna_der").style.animation = "paused";
                    document.querySelector(".pantorrillaD").style.animation = "paused";

                    document.querySelector(".pierna_izq").style.animation = "paused";
                    document.querySelector(".pantorrillaI").style.animation = "paused";

                    document.querySelector(".PieI").style.animation = "paused";



                    document.querySelector(".caminataR").load();


                    document.querySelector(".definitiva1").style.animation = "paused";
                    document.querySelector(".definitiva2").style.animation = "paused";
                    document.querySelector(".definitiva3").style.animation = "paused";

                    document.querySelector(".torso").style.animation = "paused";


                    document.querySelector(".pierna_der").style.animation = "moverpordefinitiva 1s 1 forwards";
                    document.querySelector(".pierna_izq").style.animation = "moverpordefinitiva 1s 1 forwards";

                    /* document.querySelector(".arma_der").style.animation = " armasatras 2s 1 forwards";
                     document.querySelector(".arma_izq").style.animation = " armasatras 2s 1 forwards";*/

                    document.querySelector(".arma1").style.animation = ("armasatras1  2s 1 forwards");

                    document.querySelector(".arma_der").style.rotate = ("5deg");
                    document.querySelector(".arma_der").style.translate = ("40px");

                    document.querySelector(".arma_izq").style.rotate = ("5deg");
                    document.querySelector(".arma_izq").style.translate = ("5px");
                    break;

                case "Numpad9":

                    document.querySelector(".proyectil").style.background = "rgb(234, 3, 3)";
                    document.querySelector(".proyectil").style.animation = "proyectil 2s 1 forwards";

                    document.querySelector(".disparo").play();
                    document.querySelector(".prolongado").play();


                    document.querySelector(".arma1").style.rotate = ("-1deg");
                    document.querySelector(".arma1").style.animation = ("arma1 3s infinite");


                    document.querySelector(".proyectil1").style.background = "rgb(234, 3, 3)";
                    document.querySelector(".proyectil1").style.animation = "proyectil 2s 1 forwards";
                    break;


                default:
                    break;

            }
        }
    };

    onkeydown = (key) => {
        player.move(key.code);
    }
}

document.addEventListener("Keyup", function (e) {

    if (e.keyCode == "39") {
        moverD()
    }
})













































let objeto = document.querySelector("body");
let velocidad = 20;
let mTop = 0;
let mLeft = 0;




function moverD() {
    mLeft += velocidad;
    objeto.style.marginLeft = mLeft + "px";
}


function moverI() {
    mLeft -= velocidad;
    objeto.style.marginLeft = mLeft + "px";
}














document.addEventListener("keydown", function (e) {

    if (e.keyCode == "39") {
        moverD()
        document.querySelector(".caminataR").play("loop");



        document.querySelector(".pierna_der").style.animation = " piernaD 2300ms infinite";
        document.querySelector(".pantorrillaD").style.animation = "pantorrilD 2350ms infinite forwards alternate";
        document.querySelector(".PieI").style.animation = " pieI 2800ms infinite";



        document.querySelector(".pierna_izq").style.animation = "piernaI 2300ms infinite forwards";
        document.querySelector(".pantorrillaI").style.animation = "pantorrilI 2400ms infinite forwards";

        document.querySelector(".caminataR").play("loop");


        document.addEventListener("keyup", function (e){


            if (e.keyCode == "39") {

            document.querySelector(".pierna_der").style.animation = "paused";
            document.querySelector(".pantorrillaD").style.animation = "paused";
            document.querySelector(".PieI").style.animation = "paused";
    
    
    
            document.querySelector(".pierna_izq").style.animation = "paused";
            document.querySelector(".pantorrillaI").style.animation = "paused";
            }
        })





        
    }
    if (e.keyCode == "37") {
        moverI()

        document.querySelector(".pierna_der").style.animation = " piernaD 2300ms infinite";
        document.querySelector(".pantorrillaD").style.animation = "pantorrilD 2350ms infinite forwards alternate";
        document.querySelector(".PieI").style.animation = " pieI 2800ms infinite";



        document.querySelector(".pierna_izq").style.animation = "piernaI 2300ms infinite forwards";
        document.querySelector(".pantorrillaI").style.animation = "pantorrilI 2400ms infinite forwards";

        document.querySelector(".caminataR").play("loop");


        document.addEventListener("keyup", function (e){


            if (e.keyCode == "37") {

                document.querySelector(".pierna_der").style.animation = "paused";
                document.querySelector(".pantorrillaD").style.animation = "paused";
                document.querySelector(".PieI").style.animation = "paused";
        
        
        
                document.querySelector(".pierna_izq").style.animation = "paused";
                document.querySelector(".pantorrillaI").style.animation = "paused";
            }
        })

    }
})
