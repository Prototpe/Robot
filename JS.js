



/*
let objeto = document.querySelector("body");
let velocidad = 10;
let mTop = 0;
let mLeft = 20;




function moverD() {
    mLeft += velocidad;
    objeto.style.marginLeft = mLeft + "px";
}





function moverI() {
    mLeft -= velocidad;
    objeto.style.marginLeft = mLeft + "px";
}


*/

function armaplasma() {

    document.querySelector(".arma_der").style.animation = "arma_der 1s infinite";
    document.querySelector(".arma_der").style.rotate = ("5deg");
    document.querySelector(".arma_der").style.translate = ("40px");

    document.querySelector(".arma_izq").style.animation = "arma_der 1s infinite";
    document.querySelector(".arma_izq").style.rotate = ("5deg");
    document.querySelector(".arma_izq").style.translate = ("5px");

    document.querySelector(".valasd").style.animation = ("valas 0.8s infinite forwards");

    document.querySelector(".valasi").style.animation = ("valas 0.8s infinite forwards");
    document.querySelector(".disparo11").play("loop");
}

function armaplasmadesactivar() {
    document.querySelector(".arma_der").style.translate = ("-10px");
    document.querySelector(".arma_der").style.rotate = ("20deg");
    document.querySelector(".arma_der").style.animation = "finish";

    document.querySelector(".arma_izq").style.translate = ("-10px");
    document.querySelector(".arma_izq").style.rotate = ("20deg");
    document.querySelector(".arma_izq").style.animation = "finish";

    document.querySelector(".valasd").style.animation = ("finish");
    document.querySelector(".valasi").style.animation = ("finish");
    document.querySelector(".disparo11").load();

}





function pararMisiles() {
    document.querySelector(".pararR").play("loop");
    document.querySelector(".vuelo").pause();

    document.querySelector(".misileslaser").style.animation = "paused";
    document.querySelector(".m2").style.animation = "paused";
    document.querySelector(".m3").style.animation = "paused";
    document.querySelector(".m4").style.animation = "paused";
    document.querySelector(".m5").style.animation = "paused";
    document.querySelector(".m6").style.animation = "paused";
    document.querySelector(".m7").style.animation = "paused";
    document.querySelector(".m8").style.animation = "paused";
    document.querySelector(".m9").style.animation = "paused";
    document.querySelector(".m10").style.animation = "paused";

    document.querySelector(".misileslaser").style.opacity = "0";
    document.querySelector(".m2").style.opacity = "0";
    document.querySelector(".m3").style.opacity = "0";
    document.querySelector(".m4").style.opacity = "0";
    document.querySelector(".m5").style.opacity = "0";
    document.querySelector(".m6").style.opacity = "0";
    document.querySelector(".m7").style.opacity = "0";
    document.querySelector(".m8").style.opacity = "0";
    document.querySelector(".m9").style.opacity = "0";
    document.querySelector(".m10").style.opacity = "0";
}


//function misiles() {
   // document.querySelector(".vuelo1").play();

//}


function misiles1() {

    document.querySelector(".vuelo").play("loop");



    document.querySelector(".misileslaser").style.animation = "shadowazul 900ms infinite  forwards";

    document.querySelector(".m2").style.animation = "shadowazul 900ms infinite  forwards";
    document.querySelector(".m3").style.animation = "shadowazul 800ms infinite  forwards";
    document.querySelector(".m4").style.animation = "shadowazul 900ms infinite  forwards";
    document.querySelector(".m5").style.animation = "shadowazul 800ms infinite  forwards";
    document.querySelector(".m6").style.animation = "shadowazul 900ms infinite  forwards";
    document.querySelector(".m7").style.animation = "shadowazul 800ms infinite  forwards";
    document.querySelector(".m8").style.animation = "shadowazul 900ms infinite  forwards";
    document.querySelector(".m9").style.animation = "shadowazul 800ms infinite  forwards";
    document.querySelector(".m10").style.animation ="shadowazul 900ms infinite forwards";

    document.querySelector(".misileslaser").style.opacity = "9";

    document.querySelector(".m2").style.opacity = "7";
    document.querySelector(".m3").style.opacity = "9";
    document.querySelector(".m4").style.opacity = "7";
    document.querySelector(".m5").style.opacity = "9";
    document.querySelector(".m6").style.opacity = "7";
    document.querySelector(".m7").style.opacity = "9";
    document.querySelector(".m8").style.opacity = "7";
    document.querySelector(".m9").style.opacity = "9";
    document.querySelector(".m10").style.opacity = "7";
}




function caminar_1() {


    x = x + 50;
    objeto.style.left = x + "px";

    document.querySelector(".pararR").play("loop");


    document.querySelector(".pierna_izq").style.rotate = ("-15deg");
    document.querySelector(".pantorrillaI").style.rotate = ("-20deg");
    document.querySelector(".PieI").style.rotate = ("20deg");

    document.querySelector(".pierna_der").style.rotate = ("0deg");
    document.querySelector(".pantorrillaD").style.rotate = ("0deg");
    document.querySelector(".PieD").style.rotate = ("-10deg");



}

function caminar_2() {

   
    x = x + 100;
    objeto.style.left = x + "px";


    document.querySelector(".pierna_der").style.rotate = ("-50deg");
    document.querySelector(".pantorrillaD").style.rotate = ("10deg");
    document.querySelector(".PieD").style.rotate = ("30deg");

    document.querySelector(".pierna_izq").style.rotate = ("30deg");
    document.querySelector(".pantorrillaI").style.rotate = ("0deg");
    document.querySelector(".PieI").style.rotate = ("-29deg");


    document.querySelector(".pararR").play("loop");
    document.querySelector(".caminataR").play();

}






function estabilizar_valor0() {
    document.querySelector(".pierna_der").style.rotate = ("0deg");
    document.querySelector(".pantorrillaD").style.rotate = ("0deg");
    document.querySelector(".PieD").style.rotate = ("0deg");

    document.querySelector(".pierna_izq").style.rotate = ("0deg");
    document.querySelector(".pantorrillaI").style.rotate = ("0deg");
    document.querySelector(".PieI").style.rotate = ("0deg");

    document.querySelector(".pararR").play("loop");
    document.querySelector(".hombrobrazocuchilla").style.rotate = ("0deg");

    document.querySelector(".brazocuchilla").style.rotate = ("0deg");

    x = x - 800;
    objeto.style.left = x + "px";
    
    document.querySelector(".vuelo").play();
}



function frenar_estabilizar() {

    document.querySelector(".pierna_der").style.animation = "moverpordefinitiva 250ms 1 forwards";
    document.querySelector(".pantorrillaD").style.animation = "moverpordefinitiva0 250ms 1 forwards";
    document.querySelector(".PieD").style.animation = "moverpordefinitiva1 250ms 1 forwards";

    document.querySelector(".pierna_izq").style.animation = "moverpordefinitivaA 500ms 1 forwards";
    document.querySelector(".pantorrillaI").style.animation = "moverpordefinitiva00 500ms 1 forwards";
    document.querySelector(".PieI").style.animation = "moverpordefinitiva11 500ms 1 forwards";


    document.querySelector(".pierna_der").style.rotate = ("20deg");
    document.querySelector(".pantorrillaD").style.rotate = ("20deg");
    document.querySelector(".PieD").style.rotate = ("20deg");

    document.querySelector(".pierna_izq").style.rotate = ("20deg");
    document.querySelector(".pantorrillaI").style.rotate = ("20deg");
    document.querySelector(".PieI").style.rotate = ("20deg");

    document.querySelector(".pararR").play("loop");
    document.querySelector(".hombrobrazocuchilla").style.rotate = ("20deg");

    document.querySelector(".brazocuchilla").style.rotate = ("20deg");


}






function definitiva_cancelacion() {
    document.querySelector(".definitiva1").style.animation = "paused";
    document.querySelector(".definitiva2").style.animation = "paused";
    document.querySelector(".definitiva3").style.animation = "paused";

    document.querySelector(".torso").style.animation = "paused";


    /* document.querySelector(".pierna_der").style.animation = "moverpordefinitiva 1s 1 forwards";
     document.querySelector(".pierna_izq").style.animation = "moverpordefinitiva 1s 1 forwards";*/

    document.querySelector(".pierna_der").style.rotate = ("-10deg");
    document.querySelector(".pantorrillaD").style.rotate = ("-10deg");
    document.querySelector(".PieD").style.rotate = ("-10deg");

    document.querySelector(".pierna_izq").style.rotate = ("-10deg");
    document.querySelector(".pantorrillaI").style.rotate = ("-10deg");
    document.querySelector(".PieI").style.rotate = ("-10deg");


    document.querySelector(".arma1").style.animation = ("armasatras1  2s 1 forwards");

    document.querySelector(".arma_der").style.rotate = ("-50deg");
    document.querySelector(".arma_der").style.translate = ("40px");

    document.querySelector(".arma_izq").style.rotate = ("-50deg");
    document.querySelector(".arma_izq").style.translate = ("5px");

    document.querySelector(".disparo0").load();

    document.querySelector(".disparo1").load();
    document.querySelector(".disparo2").load();
}



function definitiva_activacion() {

    x = x + 10;
    objeto.style.left = x + "px";
    document.querySelector(".definitiva1").style.animation = "definitiva 2s 1 forwards";
    document.querySelector(".definitiva2").style.animation = "definitiva 2s 1 forwards";
    document.querySelector(".definitiva3").style.animation = "definitiva 2s 1 forwards";
    document.querySelector(".arma_der").style.animation = " armasatras 2s 1 forwards";
    document.querySelector(".arma_izq").style.animation = " armasatras 2s 1 forwards";

    document.querySelector(".arma1").style.animation = ("armasatras1  2s infnite");
    document.querySelector(".torso").style.animation = "torsoatras 2s infinite";



    document.querySelector(".pierna_der").style.rotate = ("10deg");
    document.querySelector(".pantorrillaD").style.rotate = ("10deg");
    document.querySelector(".PieD").style.rotate = ("10deg");

    document.querySelector(".pierna_izq").style.rotate = ("5deg");
    document.querySelector(".pantorrillaI").style.rotate = ("5deg");
    document.querySelector(".PieI").style.rotate = ("5deg");


    /*
        document.querySelector(".pierna_der").style.animation = "paused";
        document.querySelector(".pantorrillaD").style.animation = "paused";
        document.querySelector(".PieD").style.animation = "paused";
    
        document.querySelector(".pierna_izq").style.animation = "paused";
        document.querySelector(".pantorrillaI").style.animation = "paused";
    
        document.querySelector(".PieI").style.animation = "paused";
    */


    document.querySelector(".caminataR").load();
    document.querySelector(".pararR").play("loop");



    document.querySelector(".pierna_der").style.animation = "moverpordefinitiva 1s 1 forwards";

    document.querySelector(".pierna_izq").style.animation = "moverpordefinitiva 1s 1 forwards alternate-reverse";

    document.querySelector(".arma_der").style.rotate = ("5deg");
    document.querySelector(".arma_der").style.translate = ("40px");

    document.querySelector(".arma_izq").style.rotate = ("5deg");
    document.querySelector(".arma_izq").style.translate = ("5px");

    document.querySelector(".disparo1").play("loop");
    document.querySelector(".disparo2").play("loop");
    document.querySelector(".disparo0").play("loop");


}


function cortada_activacion() {

    x = x + 800;
    objeto.style.left = x + "px";

    document.querySelector(".hombrobrazocuchilla").style.rotate = ("20deg");
    
    document.querySelector(".brazocuchilla").style.rotate = ("-50deg");
    
    
    


    document.querySelector(".pararR").play("loop");
    /*document.querySelector("body").style.animation = "movimientocuerpo 800ms infinite forwards alternate reversed";*/



    document.querySelector(".pierna_der").style.animation = "mpierna1D  500ms 1 forwards";
    //document.querySelector(".pantorrillaD").style.animation = "mpierna2D  500ms 1 forwards";
   // document.querySelector(".PieD").style.animation = "mpierna3D  500ms 1 forwards";

    //document.querySelector(".pierna_izq").style.animation = "mpierna1I 1000ms 1 forwards";
    document.querySelector(".pantorrillaI").style.animation = "mpierna2I 1000ms 1 forwards";
    //document.querySelector(".PieI").style.animation = "mpierna3I  1000ms 1 forwards";

    document.querySelector("body").style.top = "50px";
    document.querySelector(".torso").style.rotate = ("50deg");



}

function cortada_cancelacion() {


    //document.querySelector(".brazocuchilla").style.height = ("2000px");

    document.querySelector(".hombrobrazocuchilla").style.rotate = ("-70deg");

    document.querySelector(".brazocuchilla").style.rotate = ("40deg");


    /*document.querySelector(".hombrobrazocuchilla").style.animation = "movimientohombro 500ms 1 forwards";

    document.querySelector(".brazocuchilla").style.animation = "movimienbrazo 1000ms 1 forwards";*/


    /*document.querySelector("body").style.animation = "movimientocuerpo 800ms 2 forwards alternate";*/

    document.querySelector(".audio_corte_espada").play();

    document.querySelector(".pierna_der").style.animation = "paused";
    document.querySelector(".pantorrillaD").style.animation = "paused";
    document.querySelector(".PieD").style.animation = "paused";

    document.querySelector(".pierna_izq").style.animation = "paused";
    document.querySelector(".pantorrillaI").style.animation = "paused";
    document.querySelector(".PieI").style.animation = "paused";


    document.querySelector("body").style.top = "-100px";

    document.querySelector(".torso").style.rotate = ("-10deg");

}



function rayo_rojo_activacion() {
    document.querySelector(".proyectil").style.background = "rgb(234, 3, 3)";
    document.querySelector(".proyectil").style.animation = "proyectil 2s 1 forwards";

    document.querySelector(".disparo").play();
    document.querySelector(".prolongado").play();


    document.querySelector(".arma1").style.rotate = ("-1deg");
    document.querySelector(".arma1").style.animation = ("arma1 3s infinite");


    document.querySelector(".proyectil1").style.background = "rgb(234, 3, 3)";
    document.querySelector(".proyectil1").style.animation = "proyectil 2s 1 forwards";
}

function rayo_rojo_desactivacion() {


    document.querySelector(".proyectil").style.animation = ("finish");/* pausar arma rayo rojo*/
    document.querySelector(".proyectil1").style.animation = ("finish");/* pausar arma rayo rojo*/
    document.querySelector(".disparo11").load();/* pausar arma rayo rojo*/
    document.querySelector(".prolongado").load();/* pausar arma rayo rojo*/
    document.querySelector(".disparo").load();/* pausar arma rayo rojo*/






    /*document.querySelector(".pierna_der").style.animation = "paused";
    document.querySelector(".pantorrillaD").style.animation = "paused";
    document.querySelector(".PieI").style.animation = "paused";



    document.querySelector(".pierna_izq").style.animation = "paused";
    document.querySelector(".pantorrillaI").style.animation = "paused";

    document.querySelector(".caminataR").load();

    document.querySelector(".pararR").play("loop");

    document.querySelector(".pierna_der").style.animation = "moverpordefinitiva 250ms 1 forwards reverse";
    document.querySelector(".pantorrillaD").style.animation = "moverpordefinitiva0 250ms 1 forwards reverse";
    document.querySelector(".PieD").style.animation = "moverpordefinitiva1 250ms 1 forwards reverse";

    document.querySelector(".pierna_izq").style.animation = "moverpordefinitivaA 500ms 1 forwards reverse";
    document.querySelector(".pantorrillaI").style.animation = "moverpordefinitiva00 500ms 1 forwards reverse";
    document.querySelector(".PieI").style.animation = "moverpordefinitiva11 500ms 1 forwards reverse";
*/

}

function vueloArriba(){

    document.querySelector("#player").style.top = ("-200px");
    frenar_estabilizar()
}

function vueloAbajo(){

    document.querySelector("#player").style.top = ("200px");
    //estabilizar_valor0()
}




const objeto = document.querySelector("body")
let x = 0;
let y = 0;


document.addEventListener("keydown", function (e) {
    console.log(e.code);
    if (e.code === "ArrowUp") {
        /*
                y = y + 100;
                objeto.style.top = (-y) + "px";
        
                */
                vueloArriba()

    }

    if (e.code === "ArrowDown") {
        /*
        y = y - 100;
        objeto.style.top = (-y) + "px";
        */
        //shadow1()
        estabilizar_valor0()


        /*
              document.querySelector(".proyectil").style.background = "rgb(234, 3, 3)";
              document.querySelector(".proyectil").style.animation = "proyectil 2s 1 forwards";
      
              document.querySelector(".disparo").play();
              document.querySelector(".prolongado").play();
      
      
              document.querySelector(".arma1").style.rotate = ("-1deg");
              document.querySelector(".arma1").style.animation = ("arma1 3s infinite");
      
      
              document.querySelector(".proyectil1").style.background = "rgb(234, 3, 3)";
              document.querySelector(".proyectil1").style.animation = "proyectil 2s 1 forwards";
              */

    }


    if (e.code === "ArrowLeft") {
        frenar_estabilizar()
       // document.querySelector(".vuelo").pause();

        /*
                document.querySelector(".pierna_der").style.animation = " piernaD 800ms infinite reverse ease-in";
                document.querySelector(".pantorrillaD").style.animation = "pantorrilD 850ms infinite reverse  ease-out";
                document.querySelector(".PieI").style.animation = " pieI 1300ms infinite reverse ease-out";
        
        
        
                document.querySelector(".pierna_izq").style.animation = "piernaI 800ms infinite  reverse ease-out";
                document.querySelector(".pantorrillaI").style.animation = "pantorrilI 900ms infinite  reverse ease-out";
        
                document.querySelector(".caminataR").play();*/


    }

    if (e.code === "ArrowRight") {
        x = x + 100;
        objeto.style.left = x + "px";
     

      
        caminar_1()

        /*
                document.querySelector(".pierna_izq").style.animation = "piernaI 950ms infinite";
                document.querySelector(".pantorrillaI").style.animation = "pantorrilI 950ms infinite";
                document.querySelector(".PieI").style.animation = "pieI 950ms infinite";
        
        
                document.querySelector(".pierna_der").style.animation = "piernaD 900ms infinite";
                document.querySelector(".pantorrillaD").style.animation = "pantorrilD 900ms infinite";
                document.querySelector(".PieD").style.animation = "pieD 900ms infinite";
        
                document.querySelector(".caminataR").play();
        */




        /*
                document.querySelector(".pierna_der").style.animation = "paused";
                document.querySelector(".pantorrillaD").style.animation = "paused";
                document.querySelector(".PieD").style.animation = "paused";
        */







        /* document.querySelector(".caminataR").play();
 
 
         document.querySelector(".pierna_der").style.animation = "moverpordefinitiva 1s 1 forwards alternate-reverse";
         document.querySelector(".pantorrillaD").style.animation = "moverpordefinitiva0 1s 1 forwards";
         document.querySelector(".PieD").style.animation = "moverpordefinitiva1 1s 1 forwards";
 
         document.querySelector(".pierna_izq").style.animation = "moverpordefinitivaA 2s 1 forwards";
         document.querySelector(".pantorrillaI").style.animation = "moverpordefinitiva00 2s 1 forwards";
         document.querySelector(".PieI").style.animation = "moverpordefinitiva11 2s 1 forwards";
 
 */
    }





    if (e.code === "Numpad1") {
        cortada_activacion()

    }

    if (e.code === "Numpad2") {

        rayo_rojo_activacion()
    }

    if (e.code === "Numpad3") {

        definitiva_activacion()
    }



    if (e.code === "Numpad4") {

        armaplasma()
    }

    if (e.code === "Numpad5") {

        pararMisiles()

    }


    if (e.code === "Numpad6") {

        misiles1()

    }

});












document.addEventListener("keyup", function (e) {
    console.log(e.code);
    if (e.code === "ArrowUp") {

        vueloAbajo()




    }

    if (e.code === "ArrowDown") {



        /*
                document.querySelector(".pierna_der").style.animation = "moverpordefinitiva 250ms 1 forwards";
                document.querySelector(".pantorrillaD").style.animation = "moverpordefinitiva0 250ms 1 forwards";
                document.querySelector(".PieD").style.animation = "moverpordefinitiva1 250ms 1 forwards";
        
                document.querySelector(".pierna_izq").style.animation = "moverpordefinitivaA 500ms 1 forwards";
                document.querySelector(".pantorrillaI").style.animation = "moverpordefinitiva00 500ms 1 forwards";
                document.querySelector(".PieI").style.animation = "moverpordefinitiva11 500ms 1 forwards";
        
        
                document.querySelector(".proyectil").style.animation = ("finish");
        
                document.querySelector(".proyectil1").style.animation = ("finish");
                document.querySelector(".disparo11").load();
                document.querySelector(".prolongado").load();
                document.querySelector(".disparo").load();
                document.querySelector(".arma1").style.animation = ("finish");
                document.querySelector(".arma1").style.rotate = ("-5deg");
        */
    }


    if (e.code === "ArrowLeft") {
    

        estabilizar_valor0()

    }

    if (e.code === "ArrowRight") {
        x = x + 400;
        objeto.style.left = x + "px";


        caminar_2()


        /*
                document.querySelector(".pierna_der").style.animation = "paused";
                document.querySelector(".pantorrillaD").style.animation = "paused";
                document.querySelector(".PieD").style.animation = "paused";
        
                document.querySelector(".caminataR").play();
        
        
        
        
                document.querySelector(".pierna_izq").style.animation = "paused";
                document.querySelector(".pantorrillaI").style.animation = "paused";
                document.querySelector(".PieI").style.animation = "paused";
        
                CAMINATA  MEDIANTE ANIMACION DESDE CSS */



        /* document.querySelector(".pararR").play("loop");
 
         document.querySelector(".pierna_izq").style.animation = "paused";
         document.querySelector(".pantorrillaI").style.animation = "paused";
 
         document.querySelector(".caminataR").load();*/


        /* document.querySelector(".pierna_der").style.animation = "moverpordefinitiva 250ms 1 forwards";
         document.querySelector(".pantorrillaD").style.animation = "moverpordefinitiva0 250ms 1 forwards";
         document.querySelector(".PieD").style.animation = "moverpordefinitiva1 250ms 1 forwards";
 
         document.querySelector(".pierna_izq").style.animation = "moverpordefinitivaA 500ms 1 forwards";
         document.querySelector(".pantorrillaI").style.animation = "moverpordefinitiva00 500ms 1 forwards";
         document.querySelector(".PieI").style.animation = "moverpordefinitiva11 500ms 1 forwards";*/


    }






    if (e.code === "Numpad1") {

        cortada_cancelacion()


    }
    if (e.code === "Numpad2") {

        rayo_rojo_desactivacion()
    }
    if (e.code === "Numpad3") {

        definitiva_cancelacion()

    }

    if (e.code === "Numpad4") {

        armaplasmadesactivar()

    }
    if (e.code === "Numpad5") {
        shadow()
    }

    if (e.code === "Numpad6") {





    }

});





















/*
document.addEventListener("keydown", function (e) {

    if (e.keyCode == "39") {

       



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

*/




