if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Registro de SW exitoso', reg))
      .catch(err => console.warn('Error al tratar de registrar el sw', err))
  }

  function ALEATORIO1(){
   
    let maximo = 1 ;
    let minimo = 50;
     mas = Math.floor(Math.random()* (maximo - minimo + 1) + minimo);
    return mas;
  

}
   
  
  function ALEATORIO2(){

    let maximo = 1000 ;
    let minimo = 30000;

    return Math.floor(Math.random()* (maximo - minimo + 1) + minimo);
  }

  function ALEATORIO3(){
    
    
    let maximo = 1 ;
    let minimo = 50;
   
     u = Math.floor(Math.random()* (maximo - minimo + 1) + minimo);

    while(u > mas){

      u = Math.floor(Math.random()* (maximo - minimo + 1) + minimo);
      
    }
      alert (u);
      alert (mas);
      
      return u;
      
  }
 


  
 function cambio2(año) {

  
  if(año == 1 ){
    document.getElementById('año1').innerHTML="1729";
    document.getElementById('año2').innerHTML="$21 MP";
    document.getElementById('año3').innerHTML="1125";
    document.getElementById('año4').innerHTML="6156";
    document.getElementById('año5').innerHTML="$17 MP";
    document.getElementById('año6').innerHTML="5732";
    
    document.getElementById('m_uno').style.backgroundColor='#EDEDED';
    document.getElementById('m_dos').style.backgroundColor='#EDEDED';
    document.getElementById('m_tres').style.display='inline';
    document.getElementById('m_tres').style.backgroundColor='#EDEDED';
    document.getElementById('m_cuatro').style.display='inline';
    document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
    document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
    document.getElementById('m_seis').style.backgroundColor='#EDEDED';
    document.getElementById('m_siete').style.backgroundColor='#EDEDED';
    document.getElementById('m_ocho').style.display='inline';
    document.getElementById('m_ocho').style.backgroundColor='#EDEDED';
    document.getElementById('m_nueve').style.backgroundColor='#EDEDED';
    document.getElementById('m_nueve').style.display='inline';
    document.getElementById('m_diez').style.backgroundColor='#EDEDED';
    document.getElementById('m_diez').style.display='inline';
    document.getElementById('m_once').style.backgroundColor='#EDEDED';
    document.getElementById('m_once').style.display='inline';

    document.getElementById('b').style.backgroundColor='red';
    document.getElementById('c').style.backgroundColor='#EDEDED';
    document.getElementById('d').style.backgroundColor='#EDEDED';
    document.getElementById('e').style.backgroundColor='#EDEDED';
    document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='none';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
  }else if(año == 2){
    document.getElementById('año1').innerHTML="613";
    document.getElementById('año2').innerHTML="$6 MP";
    document.getElementById('año3').innerHTML="290";
    document.getElementById('año4').innerHTML="2215"
    document.getElementById('año5').innerHTML="$5 MP";
    document.getElementById('año6').innerHTML="2035";

    document.getElementById('m_uno').style.display='inline';   
    document.getElementById('m_dos').style.display='inline';  
    document.getElementById('m_tres').style.display='inline';  
    document.getElementById('m_cuatro').style.display='inline';  
    document.getElementById('m_cinco').style.display='inline';  
    document.getElementById('m_seis').style.display='inline';  
    document.getElementById('m_siete').style.display='inline';  
    document.getElementById('m_diez').style.display='inline';  
    document.getElementById('m_once').style.display='inline';   

    document.getElementById('m_uno').style.backgroundColor='#EDEDED';
    document.getElementById('m_dos').style.backgroundColor='#EDEDED';
    document.getElementById('m_tres').style.backgroundColor='#EDEDED';
    document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
    document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
    document.getElementById('m_seis').style.backgroundColor='#EDEDED';
    document.getElementById('m_siete').style.backgroundColor='#EDEDED';
    document.getElementById('m_ocho').style.display='none';
    document.getElementById('m_nueve').style.display='none';
    document.getElementById('m_diez').style.backgroundColor='#EDEDED';
    document.getElementById('m_once').style.backgroundColor='#EDEDED';
    
    document.getElementById('b').style.backgroundColor='#EDEDED';
    document.getElementById('c').style.backgroundColor='red';
    document.getElementById('d').style.backgroundColor='#EDEDED';
    document.getElementById('e').style.backgroundColor='#EDEDED';
    document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='none';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
  }else if(año == 3){
    document.getElementById('año1').innerHTML="747";
    document.getElementById('año2').innerHTML="$7 MP";
    document.getElementById('año3').innerHTML="258 ";
    document.getElementById('año4').innerHTML="1967";
    document.getElementById('año5').innerHTML="$7 MP";
    document.getElementById('año6').innerHTML="1776";

    document.getElementById('m_uno').style.backgroundColor='#EDEDED';
    document.getElementById('m_dos').style.backgroundColor='#EDEDED';
    document.getElementById('m_tres').style.display='none';
    document.getElementById('m_cuatro').style.display='none';
    document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
    document.getElementById('m_seis').style.backgroundColor='#EDEDED';
    document.getElementById('m_siete').style.backgroundColor='#EDEDED';
    document.getElementById('m_ocho').style.display='none';
    document.getElementById('m_nueve').style.display='none';
    document.getElementById('m_diez').style.display='none';
    document.getElementById('m_once').style.display='none';

    document.getElementById('b').style.backgroundColor='#EDEDED';
    document.getElementById('c').style.backgroundColor='#EDEDED';
    document.getElementById('d').style.backgroundColor='red';
    document.getElementById('e').style.backgroundColor='#EDEDED';
    document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='none';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
   
  }else if(año == 4){
    document.getElementById('año1').innerHTML="3089";
    document.getElementById('año2').innerHTML="$35 MP";
    document.getElementById('año3').innerHTML="1671";
    document.getElementById('año4').innerHTML="13332";
    document.getElementById('año5').innerHTML="$40.6 MP";
    document.getElementById('año6').innerHTML="12265";
    document.getElementById('m_uno').style.backgroundColor='#EDEDED';
    document.getElementById('m_dos').style.backgroundColor='#EDEDED';
    document.getElementById('m_tres').style.display='inline';
    document.getElementById('m_tres').style.backgroundColor='#EDEDED';
    document.getElementById('m_cuatro').style.display='inline';
    document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
    document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
    document.getElementById('m_seis').style.backgroundColor='#EDEDED';
    document.getElementById('m_siete').style.backgroundColor='#EDEDED';
    document.getElementById('m_ocho').style.display='inline';
    document.getElementById('m_ocho').style.backgroundColor='#EDEDED';
    document.getElementById('m_nueve').style.backgroundColor='#EDEDED';
    document.getElementById('m_nueve').style.display='inline';
    document.getElementById('m_diez').style.backgroundColor='#EDEDED';
    document.getElementById('m_diez').style.display='inline';
    document.getElementById('m_once').style.backgroundColor='#EDEDED';
    document.getElementById('m_once').style.display='inline';
    document.getElementById('b').style.backgroundColor='#EDEDED';
    document.getElementById('c').style.backgroundColor='#EDEDED';
    document.getElementById('d').style.backgroundColor='#EDEDED';
    document.getElementById('e').style.backgroundColor='red';
    document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='none';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
  }

  

  const element = document.getElementById('m_uno')/////////////////////////////////////////////////////////////
  element.addEventListener("click", () => {
   
    if(año == 1 ){
      document.getElementById('año1').innerHTML="543";
      document.getElementById('año2').innerHTML="$6 MP";
      document.getElementById('año3').innerHTML="360";
      document.getElementById('año4').innerHTML="453";
      document.getElementById('año5').innerHTML="$1 MP";
      document.getElementById('año6').innerHTML="430";

      document.getElementById('m_uno').style.backgroundColor='red';
      document.getElementById('m_dos').style.backgroundColor='#EDEDED';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_ocho').style.backgroundColor='#EDEDED';
      document.getElementById('m_nueve').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='red';
      document.getElementById('c').style.backgroundColor='#EDEDED';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';
      

      document.getElementById('actualizarfelipe1').style.display='flex';
      document.getElementById('actualizarfelipe2').style.display='none';
      document.getElementById('actualizarfelipe3').style.display='none';
      document.getElementById('actualizarjose1').style.display='none';
      document.getElementById('actualizarjose2').style.display='none';
     document.getElementById('actualizarjose3').style.display='none';
     document.getElementById('actualizarlazaro1').style.display='none';
     document.getElementById('actualizarlazaro2').style.display='none';
     document.getElementById('actualizarlazaro3').style.display='none';
     document.getElementById('actualizartulum1').style.display='none';
     document.getElementById('actualizartulum2').style.display='none';
     document.getElementById('actualizartulum3').style.display='none';
     document.getElementById('actualizarbacalar1').style.display='none';
     document.getElementById('actualizarbacalar2').style.display='none';
     document.getElementById('actualizarbacalar3').style.display='none';
     document.getElementById('actualizarothon1').style.display='none';
     document.getElementById('actualizarothon2').style.display='none';
     document.getElementById('actualizarothon3').style.display='none';
     document.getElementById('actualizarbenito1').style.display='none';
     document.getElementById('actualizarbenito2').style.display='none';
     document.getElementById('actualizarbenito3').style.display='none';
     document.getElementById('actualizarcozumel1').style.display='none';
     document.getElementById('actualizarcozumel2').style.display='none';
     document.getElementById('actualizarcozumel3').style.display='none';
     document.getElementById('actualizarisla1').style.display='none';
     document.getElementById('actualizarisla2').style.display='none';
     document.getElementById('actualizarisla3').style.display='none';
     document.getElementById('actualizarsolidaridad1').style.display='none';
     document.getElementById('actualizarsolidaridad2').style.display='none';
     document.getElementById('actualizarsolidaridad3').style.display='none';
     document.getElementById('actualizarpuerto1').style.display='none';
     document.getElementById('actualizarpuerto2').style.display='none';
     document.getElementById('actualizarpuerto3').style.display='none';
     let i = 0;
     
  const element = document.getElementById('actualizarfelipe1-s')/////////////////////////////////////////////////////////////
  element.addEventListener("click", () => {
  
   
    i++;

  if( i%2 == 0){
    let a = document.getElementById('actualizarfelipe1-s').value;
    if ( a == 0 ){
      
      document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML="$14665.416 P";
      document.getElementById('año3').innerHTML="-";
      document.getElementById('año4').innerHTML="2";
      document.getElementById('año5').innerHTML="$5559.88 P";
      document.getElementById('año6').innerHTML="2";
      

    }if ( a == 1 ){
      document.getElementById('año1').innerHTML="63";
      document.getElementById('año2').innerHTML="$16667048.92 P";
      document.getElementById('año3').innerHTML="33";
      document.getElementById('año4').innerHTML="6";
      document.getElementById('año5').innerHTML="$4464844.6 P";
      document.getElementById('año6').innerHTML="6";

    }if ( a == 2 ){
      document.getElementById('año1').innerHTML="37";
      document.getElementById('año2').innerHTML="$476579.396 P";
      document.getElementById('año3').innerHTML="17";
      document.getElementById('año4').innerHTML="4";
      document.getElementById('año5').innerHTML="$11476 P";
      document.getElementById('año6').innerHTML="4";

    }if ( a == 3 ){
      document.getElementById('año1').innerHTML="55";
      document.getElementById('año2').innerHTML="$641500.2848 P";
      document.getElementById('año3').innerHTML="36";
      document.getElementById('año4').innerHTML="8";
      document.getElementById('año5').innerHTML="$22952 P";
      document.getElementById('año6').innerHTML="4";

    }if ( a == 4 ){
      document.getElementById('año1').innerHTML="42";
      document.getElementById('año2').innerHTML="$532873.094 P";
      document.getElementById('año3').innerHTML="36";
      document.getElementById('año4').innerHTML="6";
      document.getElementById('año5').innerHTML="$17214 P";
      document.getElementById('año6').innerHTML="5";

    }if ( a == 5 ){
      document.getElementById('año1').innerHTML="-";
      document.getElementById('año2').innerHTML="$- P";
      document.getElementById('año3').innerHTML="-";
      document.getElementById('año4').innerHTML="4";
      document.getElementById('año5').innerHTML="$11119.76 P";
      document.getElementById('año6').innerHTML="4";

    }if ( a == 6 ){
      document.getElementById('año1').innerHTML="8";
      document.getElementById('año2').innerHTML="$100018.1371 P";
      document.getElementById('año3').innerHTML="8";
      document.getElementById('año4').innerHTML="3";
      document.getElementById('año5').innerHTML="$8607 P";
      document.getElementById('año6').innerHTML="3";

    }if ( a == 7 ){
      document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();


    
    }if ( a == 8 ){
      document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();

    }if ( a == 9 ){
      document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();

    }if ( a == 10 ){
      document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    }if ( a == 11 ){
      document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();

    }if ( a == 12 ){
      document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    }if ( a == 13 ){
      document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();

    }if ( a == 14 ){
      document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();

    }if ( a == 15 ){
      document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();

    }if ( a == 16 ){
      document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    }if ( a == 17 ){
      document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();

    }if ( a == 18 ){
      document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();

    }if ( a == 19 ){
      document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();

    }if ( a == 20 ){
      document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();

    }if ( a == 21 ){
      document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    }if ( a == 22 ){
      document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    }if ( a == 23 ){
      document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
      
    }
  }
  });

    }else if(año == 2){
      document.getElementById('año1').innerHTML="273";
      document.getElementById('año2').innerHTML="$3 MP";
      document.getElementById('año3').innerHTML="122";
      document.getElementById('año4').innerHTML="435"
      document.getElementById('año5').innerHTML="$1 MP";
      document.getElementById('año6').innerHTML="410";

      document.getElementById('m_uno').style.backgroundColor='red';
      document.getElementById('m_dos').style.backgroundColor='#EDEDED';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';


      document.getElementById('actualizarfelipe1').style.display='none';
      document.getElementById('actualizarfelipe2').style.display='flex';
      document.getElementById('actualizarfelipe3').style.display='none';
      document.getElementById('actualizarjose1').style.display='none';
      document.getElementById('actualizarjose2').style.display='none';
     document.getElementById('actualizarjose3').style.display='none';
     document.getElementById('actualizarlazaro1').style.display='none';
     document.getElementById('actualizarlazaro2').style.display='none';
     document.getElementById('actualizarlazaro3').style.display='none';
     document.getElementById('actualizartulum1').style.display='none';
     document.getElementById('actualizartulum2').style.display='none';
     document.getElementById('actualizartulum3').style.display='none';
     document.getElementById('actualizarbacalar1').style.display='none';
     document.getElementById('actualizarbacalar2').style.display='none';
     document.getElementById('actualizarbacalar3').style.display='none';
     document.getElementById('actualizarothon1').style.display='none';
     document.getElementById('actualizarothon2').style.display='none';
     document.getElementById('actualizarothon3').style.display='none';
     document.getElementById('actualizarbenito1').style.display='none';
     document.getElementById('actualizarbenito2').style.display='none';
     document.getElementById('actualizarbenito3').style.display='none';
     document.getElementById('actualizarcozumel1').style.display='none';
     document.getElementById('actualizarcozumel2').style.display='none';
     document.getElementById('actualizarcozumel3').style.display='none';
     document.getElementById('actualizarisla1').style.display='none';
     document.getElementById('actualizarisla2').style.display='none';
     document.getElementById('actualizarisla3').style.display='none';
     document.getElementById('actualizarsolidaridad1').style.display='none';
     document.getElementById('actualizarsolidaridad2').style.display='none';
     document.getElementById('actualizarsolidaridad3').style.display='none';
     document.getElementById('actualizarpuerto1').style.display='none';
     document.getElementById('actualizarpuerto2').style.display='none';
     document.getElementById('actualizarpuerto3').style.display='none';
     let i = 0;
      const element = document.getElementById('actualizarfelipe2-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarfelipe2-s').value;
        if ( a == 0 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();


    
        }if ( a == 2 ){
       document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 3 ){
    document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 4 ){
       document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 6 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 7 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 8 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 9 ){
       document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 10 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 11 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 12 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
      }}});

    }else if(año == 3){
      document.getElementById('año1').innerHTML="253";
      document.getElementById('año2').innerHTML="$2 MP";
      document.getElementById('año3').innerHTML="92 ";
      document.getElementById('año4').innerHTML="1077";
      document.getElementById('año5').innerHTML="$4 MP";
      document.getElementById('año6').innerHTML="986";

    document.getElementById('m_uno').style.backgroundColor='red';
    document.getElementById('m_dos').style.backgroundColor='#EDEDED';
    document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
    document.getElementById('m_seis').style.backgroundColor='#EDEDED';
    document.getElementById('m_siete').style.backgroundColor='#EDEDED';
   

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='#EDEDED';
      document.getElementById('d').style.backgroundColor='red';
      document.getElementById('e').style.backgroundColor='#EDEDED';

  
    

      document.getElementById('actualizarfelipe1').style.display='none';
      document.getElementById('actualizarfelipe2').style.display='none';
      document.getElementById('actualizarfelipe3').style.display='flex';
      document.getElementById('actualizarjose1').style.display='none';
      document.getElementById('actualizarjose2').style.display='none';
     document.getElementById('actualizarjose3').style.display='none';
     document.getElementById('actualizarlazaro1').style.display='none';
     document.getElementById('actualizarlazaro2').style.display='none';
     document.getElementById('actualizarlazaro3').style.display='none';
     document.getElementById('actualizartulum1').style.display='none';
     document.getElementById('actualizartulum2').style.display='none';
     document.getElementById('actualizartulum3').style.display='none';
     document.getElementById('actualizarbacalar1').style.display='none';
     document.getElementById('actualizarbacalar2').style.display='none';
     document.getElementById('actualizarbacalar3').style.display='none';
     document.getElementById('actualizarothon1').style.display='none';
     document.getElementById('actualizarothon2').style.display='none';
     document.getElementById('actualizarothon3').style.display='none';
     document.getElementById('actualizarbenito1').style.display='none';
     document.getElementById('actualizarbenito2').style.display='none';
     document.getElementById('actualizarbenito3').style.display='none';
     document.getElementById('actualizarcozumel1').style.display='none';
     document.getElementById('actualizarcozumel2').style.display='none';
     document.getElementById('actualizarcozumel3').style.display='none';
     document.getElementById('actualizarisla1').style.display='none';
     document.getElementById('actualizarisla2').style.display='none';
     document.getElementById('actualizarisla3').style.display='none';
     document.getElementById('actualizarsolidaridad1').style.display='none';
     document.getElementById('actualizarsolidaridad2').style.display='none';
     document.getElementById('actualizarsolidaridad3').style.display='none';
     document.getElementById('actualizarpuerto1').style.display='none';
     document.getElementById('actualizarpuerto2').style.display='none';
     document.getElementById('actualizarpuerto3').style.display='none';
      let i = 0;
      const element = document.getElementById('actualizarfelipe3-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarfelipe3-s').value;
        if ( a == 0 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 4 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 6 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 7 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 8 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 9 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 10 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 11 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 12 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }  }});


    }else if(año == 4){
      document.getElementById('año1').innerHTML="3089";
      document.getElementById('año2').innerHTML="$35 MP";
      document.getElementById('año3').innerHTML="1671";
      document.getElementById('año4').innerHTML="13332";
      document.getElementById('año5').innerHTML="$40.6 MP";
      document.getElementById('año6').innerHTML="12265";

      document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='#EDEDED';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_ocho').style.backgroundColor='#EDEDED';
      document.getElementById('m_nueve').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='#EDEDED';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='red';
      
    }
  
  });
  const element1 = document.getElementById('m_dos') //////////////////////////////////////////////////////////
  element1.addEventListener("click", () => {

    if(año == 1 ){
      document.getElementById('año1').innerHTML="153";
      document.getElementById('año2').innerHTML="$1 MP";
      document.getElementById('año3').innerHTML="103";
      document.getElementById('año4').innerHTML="186";
      document.getElementById('año5').innerHTML="$500 000 P";
      document.getElementById('año6').innerHTML="173";
     
      document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='red';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_ocho').style.backgroundColor='#EDEDED';
      document.getElementById('m_nueve').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='red';
      document.getElementById('c').style.backgroundColor='#EDEDED';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';

         document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='flex';
    document.getElementById('actualizarjose2').style.display='none';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
let i = 0;
      const element = document.getElementById('actualizarjose1-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarjose1-s').value;
        if ( a == 0 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 4 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 6 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 7 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 8 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 9 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 10 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 11 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 12 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 15 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 16 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 17 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 18 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 19 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 21 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
      }}});
    }else if(año == 2){
      document.getElementById('año1').innerHTML="137";
      document.getElementById('año2').innerHTML="$1 MP";
      document.getElementById('año3').innerHTML="55";
      document.getElementById('año4').innerHTML="626";
      document.getElementById('año5').innerHTML="$1 MP";
      document.getElementById('año6').innerHTML="576";

       document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='red';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';

          document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='flex';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
let i = 0;
      const element = document.getElementById('actualizarjose2-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarjose2-s').value;
        if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 4 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 6 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 7 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 8 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 9 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 10 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 11 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 12 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 15 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 16 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 17 ){
         document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 18 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 19 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }  }});
    }else if(año == 3){
      document.getElementById('año1').innerHTML="322";
      document.getElementById('año2').innerHTML="$3 MP";
      document.getElementById('año3').innerHTML="97 ";
      document.getElementById('año4').innerHTML="271";
      document.getElementById('año5').innerHTML="$1 MP";
      document.getElementById('año6').innerHTML="240";

      document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='red';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='#EDEDED';
      document.getElementById('d').style.backgroundColor='red';
      document.getElementById('e').style.backgroundColor='#EDEDED';

         document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='none';
   document.getElementById('actualizarjose3').style.display='flex';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
   let i=0;
      const element = document.getElementById('actualizarjose3-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarjose3-s').value;
        if ( a == 0 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 4 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 6 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 7 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 8 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 9 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 10 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 11 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 12 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 15 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 16 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 17 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 18 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 19 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 21 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
      }}});
    }else if(año == 2){
      document.getElementById('año1').innerHTML="137";
      document.getElementById('año2').innerHTML="$1 MP";
      document.getElementById('año3').innerHTML="55";
      document.getElementById('año4').innerHTML="626";
      document.getElementById('año5').innerHTML="$1 MP";
      document.getElementById('año6').innerHTML="576";

       document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='red';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';

          document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='flex';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
let i = 0;
      const element = document.getElementById('actualizarjose2-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarjose2-s').value;
        if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 4 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 6 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 7 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 8 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 9 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 10 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 11 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 12 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 15 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 16 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 17 ){
         document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 18 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 19 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }  }});
    }else if(año == 4){
      document.getElementById('año1').innerHTML="3089";
      document.getElementById('año2').innerHTML="$35 MP";
      document.getElementById('año3').innerHTML="1671";
      document.getElementById('año4').innerHTML="13332";
      document.getElementById('año5').innerHTML="$40.6 MP";
      document.getElementById('año6').innerHTML="12265";

      document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='#EDEDED';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_ocho').style.backgroundColor='#EDEDED';
      document.getElementById('m_nueve').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='#EDEDED';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='red';
    }
  });
  const element2 = document.getElementById('m_tres')///////////////////////////////////////////////////////////
  element2.addEventListener("click", () => {

    if(año == 1 ){
      document.getElementById('año1').innerHTML="184";
      document.getElementById('año2').innerHTML="$2 MP";
      document.getElementById('año3').innerHTML="126";
      document.getElementById('año4').innerHTML="110";
      document.getElementById('año5').innerHTML="$300 000 P";
      document.getElementById('año6').innerHTML="104";
     
      document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='#EDEDED';
      document.getElementById('m_tres').style.backgroundColor='red';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_ocho').style.backgroundColor='#EDEDED';
      document.getElementById('m_nueve').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='red';
      document.getElementById('c').style.backgroundColor='#EDEDED';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';

         document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='none';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='flex';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
   let i = 0;
      const element = document.getElementById('actualizarlazaro1-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarlazaro1-s').value;
        if ( a == 0 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 4 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 6 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 7 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 8 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 9 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 10 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 11 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 12 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 15 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 16 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 17 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 18 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 19 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 21 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
      }}});
    }else if(año == 2){
      document.getElementById('año1').innerHTML="137";
      document.getElementById('año2').innerHTML="$1 MP";
      document.getElementById('año3').innerHTML="55";
      document.getElementById('año4').innerHTML="626";
      document.getElementById('año5').innerHTML="$1 MP";
      document.getElementById('año6').innerHTML="576";

       document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='red';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';

          document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='flex';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
let i = 0;
      const element = document.getElementById('actualizarjose2-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarjose2-s').value;
        if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 4 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 6 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 7 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 8 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 9 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 10 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 11 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 12 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 15 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 16 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 17 ){
         document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 18 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 19 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }}});
    }else if(año == 2){
      document.getElementById('año1').innerHTML="93";
      document.getElementById('año2').innerHTML="$800 000P";
      document.getElementById('año3').innerHTML="58";
      document.getElementById('año4').innerHTML="255"
      document.getElementById('año5').innerHTML="$600 000 P";
      document.getElementById('año6').innerHTML="218";

      document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='#EDEDED';
      document.getElementById('m_tres').style.backgroundColor='red';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';


      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';
      

         document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='none';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='flex';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
   let i = 0;
      const element = document.getElementById('actualizarlazaro2-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarlazaro2-s').value;
        if ( a == 0 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 4 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 6 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 7 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 8 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 9 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 10 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 11 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 12 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 15 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 16 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 17 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 18 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 19 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 21 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
      }}});
    }else if(año == 2){
      document.getElementById('año1').innerHTML="137";
      document.getElementById('año2').innerHTML="$1 MP";
      document.getElementById('año3').innerHTML="55";
      document.getElementById('año4').innerHTML="626";
      document.getElementById('año5').innerHTML="$1 MP";
      document.getElementById('año6').innerHTML="576";

       document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='red';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';

          document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='flex';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
let i = 0;
      const element = document.getElementById('actualizarjose2-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarjose2-s').value;
        if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 4 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 6 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 7 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 8 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 9 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 10 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 11 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 12 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 15 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 16 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 17 ){
         document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 18 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 19 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        } }});
    }else if(año == 3){
      document.getElementById('año1').innerHTML="747";
      document.getElementById('año2').innerHTML="$7 MP";
      document.getElementById('año3').innerHTML="258 ";
      document.getElementById('año4').innerHTML="1967";
      document.getElementById('año5').innerHTML="$7 MP";
      document.getElementById('año6').innerHTML="1776";

      document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='#EDEDED';
      document.getElementById('d').style.backgroundColor='red';
      document.getElementById('e').style.backgroundColor='#EDEDED';
      
   

        document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='none';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='flex';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
   let i = 0;
      const element = document.getElementById('actualizarlazaro3-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarlazaro3-s').value;
        if ( a == 0 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 4 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 6 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 7 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 8 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 9 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 10 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 11 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 12 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 15 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 16 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 17 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 18 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 19 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 21 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
      }}});
    }else if(año == 2){
      document.getElementById('año1').innerHTML="137";
      document.getElementById('año2').innerHTML="$1 MP";
      document.getElementById('año3').innerHTML="55";
      document.getElementById('año4').innerHTML="626";
      document.getElementById('año5').innerHTML="$1 MP";
      document.getElementById('año6').innerHTML="576";

       document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='red';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';

          document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='flex';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
let i = 0;
      const element = document.getElementById('actualizarjose2-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarjose2-s').value;
        if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 4 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 6 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 7 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 8 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 9 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 10 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 11 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 12 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 15 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 16 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 17 ){
         document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 18 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 19 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }}});
    }else if(año == 4){
      document.getElementById('año1').innerHTML="3089";
      document.getElementById('año2').innerHTML="$35 MP";
      document.getElementById('año3').innerHTML="1671";
      document.getElementById('año4').innerHTML="13332";
      document.getElementById('año5').innerHTML="$40.6 MP";
      document.getElementById('año6').innerHTML="12265";

      document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='#EDEDED';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_ocho').style.backgroundColor='#EDEDED';
      document.getElementById('m_nueve').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';


      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='#EDEDED';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='red';
    }
  });
  const element3 = document.getElementById('m_cuatro')/////////////////////////////////////////////////////
  element3.addEventListener("click", () => {

    if(año == 1 ){
      document.getElementById('año1').innerHTML="229";
      document.getElementById('año2').innerHTML="$2 MP";
      document.getElementById('año3').innerHTML="150";
      document.getElementById('año4').innerHTML="248";
      document.getElementById('año5').innerHTML="$700 000 P";
      document.getElementById('año6').innerHTML="236";
     
      document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='#EDEDED';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='red';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_ocho').style.backgroundColor='#EDEDED';
      document.getElementById('m_nueve').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='red';
      document.getElementById('c').style.backgroundColor='#EDEDED';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';

         document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='none';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='flex';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
   let i = 0;
      const element = document.getElementById('actualizartulum1-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizartulum1-s').value;
        if ( a == 0 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 4 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 6 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 7 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 8 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 9 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 10 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 11 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 12 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 15 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 16 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 17 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 18 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 19 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 21 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
      }}});
    }else if(año == 2){
      document.getElementById('año1').innerHTML="137";
      document.getElementById('año2').innerHTML="$1 MP";
      document.getElementById('año3').innerHTML="55";
      document.getElementById('año4').innerHTML="626";
      document.getElementById('año5').innerHTML="$1 MP";
      document.getElementById('año6').innerHTML="576";

       document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='red';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';

          document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='flex';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
let i = 0;
      const element = document.getElementById('actualizarjose2-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarjose2-s').value;
        if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 4 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 6 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 7 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 8 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 9 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 10 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 11 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 12 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 15 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 16 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 17 ){
         document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 18 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 19 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }}});
    }else if(año == 2){
      document.getElementById('año1').innerHTML="1";
      document.getElementById('año2').innerHTML="$12 000 P";
      document.getElementById('año3').innerHTML="0";
      document.getElementById('año4').innerHTML="6"
      document.getElementById('año5').innerHTML="$16 000 P";
      document.getElementById('año6').innerHTML="6";

      document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='#EDEDED';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='red';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';
      
      document.getElementById('actualizarfelipe1').style.display='none';
      document.getElementById('actualizarfelipe2').style.display='none';
      document.getElementById('actualizarfelipe3').style.display='none';
      document.getElementById('actualizarjose1').style.display='none';
      document.getElementById('actualizarjose2').style.display='none';
     document.getElementById('actualizarjose3').style.display='none';
     document.getElementById('actualizarlazaro1').style.display='none';
     document.getElementById('actualizarlazaro2').style.display='none';
     document.getElementById('actualizarlazaro3').style.display='none';
     document.getElementById('actualizartulum1').style.display='none';
     document.getElementById('actualizartulum2').style.display='flex';
     document.getElementById('actualizartulum3').style.display='none';
     document.getElementById('actualizarbacalar1').style.display='none';
     document.getElementById('actualizarbacalar2').style.display='none';
     document.getElementById('actualizarbacalar3').style.display='none';
     document.getElementById('actualizarothon1').style.display='none';
     document.getElementById('actualizarothon2').style.display='none';
     document.getElementById('actualizarothon3').style.display='none';
     document.getElementById('actualizarbenito1').style.display='none';
     document.getElementById('actualizarbenito2').style.display='none';
     document.getElementById('actualizarbenito3').style.display='none';
     document.getElementById('actualizarcozumel1').style.display='none';
     document.getElementById('actualizarcozumel2').style.display='none';
     document.getElementById('actualizarcozumel3').style.display='none';
     document.getElementById('actualizarisla1').style.display='none';
     document.getElementById('actualizarisla2').style.display='none';
     document.getElementById('actualizarisla3').style.display='none';
     document.getElementById('actualizarsolidaridad1').style.display='none';
     document.getElementById('actualizarsolidaridad2').style.display='none';
     document.getElementById('actualizarsolidaridad3').style.display='none';
     document.getElementById('actualizarpuerto1').style.display='none';
     document.getElementById('actualizarpuerto2').style.display='none';
     document.getElementById('actualizarpuerto3').style.display='none';
     let i = 0;
      const element = document.getElementById('actualizartulum2-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizartulum2-s').value;
        if ( a == 0 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 4 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 6 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 7 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 8 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 9 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 10 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 11 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 12 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 15 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 16 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 17 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 18 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 19 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 21 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
      }}});
    }else if(año == 2){
      document.getElementById('año1').innerHTML="137";
      document.getElementById('año2').innerHTML="$1 MP";
      document.getElementById('año3').innerHTML="55";
      document.getElementById('año4').innerHTML="626";
      document.getElementById('año5').innerHTML="$1 MP";
      document.getElementById('año6').innerHTML="576";

       document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='red';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';

          document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='flex';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
let i = 0;
      const element = document.getElementById('actualizarjose2-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarjose2-s').value;
        if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 4 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 6 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 7 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 8 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 9 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 10 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 11 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 12 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 15 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 16 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 17 ){
         document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 18 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 19 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }}});
      
    }else if(año == 3){
      document.getElementById('año1').innerHTML="747";
      document.getElementById('año2').innerHTML="$7 MP";
      document.getElementById('año3').innerHTML="258 ";
      document.getElementById('año4').innerHTML="1967";
      document.getElementById('año5').innerHTML="$7 MP";
      document.getElementById('año6').innerHTML="1776";

      document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='#EDEDED';
      document.getElementById('d').style.backgroundColor='red';
      document.getElementById('e').style.backgroundColor='#EDEDED';
      
      document.getElementById('actualizarfelipe1').style.display='none';
      document.getElementById('actualizarfelipe2').style.display='none';
      document.getElementById('actualizarfelipe3').style.display='none';
      document.getElementById('actualizarjose1').style.display='none';
      document.getElementById('actualizarjose2').style.display='none';
     document.getElementById('actualizarjose3').style.display='none';
     document.getElementById('actualizarlazaro1').style.display='none';
     document.getElementById('actualizarlazaro2').style.display='none';
     document.getElementById('actualizarlazaro3').style.display='none';
     document.getElementById('actualizartulum1').style.display='none';
     document.getElementById('actualizartulum2').style.display='none';
     document.getElementById('actualizartulum3').style.display='flex';
     document.getElementById('actualizarbacalar1').style.display='none';
     document.getElementById('actualizarbacalar2').style.display='none';
     document.getElementById('actualizarbacalar3').style.display='none';
     document.getElementById('actualizarothon1').style.display='none';
     document.getElementById('actualizarothon2').style.display='none';
     document.getElementById('actualizarothon3').style.display='none';
     document.getElementById('actualizarbenito1').style.display='none';
     document.getElementById('actualizarbenito2').style.display='none';
     document.getElementById('actualizarbenito3').style.display='none';
     document.getElementById('actualizarcozumel1').style.display='none';
     document.getElementById('actualizarcozumel2').style.display='none';
     document.getElementById('actualizarcozumel3').style.display='none';
     document.getElementById('actualizarisla1').style.display='none';
     document.getElementById('actualizarisla2').style.display='none';
     document.getElementById('actualizarisla3').style.display='none';
     document.getElementById('actualizarsolidaridad1').style.display='none';
     document.getElementById('actualizarsolidaridad2').style.display='none';
     document.getElementById('actualizarsolidaridad3').style.display='none';
     document.getElementById('actualizarpuerto1').style.display='none';
     document.getElementById('actualizarpuerto2').style.display='none';
     document.getElementById('actualizarpuerto3').style.display='none';
     let i = 0;
      const element = document.getElementById('actualizartulum3-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizartulum3-s').value;
        if ( a == 0 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 4 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 6 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 7 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 8 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 9 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 10 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 11 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 12 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 15 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 16 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 17 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 18 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 19 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 21 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
      }}});
    }else if(año == 2){
      document.getElementById('año1').innerHTML="137";
      document.getElementById('año2').innerHTML="$1 MP";
      document.getElementById('año3').innerHTML="55";
      document.getElementById('año4').innerHTML="626";
      document.getElementById('año5').innerHTML="$1 MP";
      document.getElementById('año6').innerHTML="576";

       document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='red';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';

          document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='flex';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
let i = 0;
      const element = document.getElementById('actualizarjose2-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarjose2-s').value;
        if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 4 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 6 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 7 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 8 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 9 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 10 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 11 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 12 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 15 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 16 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 17 ){
         document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 18 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 19 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        } }});
    }else if(año == 4){
      document.getElementById('año1').innerHTML="3089";
      document.getElementById('año2').innerHTML="$35 MP";
      document.getElementById('año3').innerHTML="1671";
      document.getElementById('año4').innerHTML="13332";
      document.getElementById('año5').innerHTML="$40.6 MP";
      document.getElementById('año6').innerHTML="12265";

      document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='#EDEDED';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_ocho').style.backgroundColor='#EDEDED';
      document.getElementById('m_nueve').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='#EDEDED';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='red';
    }
  });
  const element4 = document.getElementById('m_cinco')///////////////////////////////////////////////////////
  element4.addEventListener("click", () => {

    if(año == 1 ){
      document.getElementById('año1').innerHTML="284";
      document.getElementById('año2').innerHTML="$3 MP";
      document.getElementById('año3').innerHTML="146";
      document.getElementById('año4').innerHTML="47";
      document.getElementById('año5').innerHTML="$100 000 P";
      document.getElementById('año6').innerHTML="44";
     
      document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='#EDEDED';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='red';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_ocho').style.backgroundColor='#EDEDED';
      document.getElementById('m_nueve').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='red';
      document.getElementById('c').style.backgroundColor='#EDEDED';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';
      document.getElementById('actualizarfelipe1').style.display='none';
      document.getElementById('actualizarfelipe2').style.display='none';
      document.getElementById('actualizarfelipe3').style.display='none';
      document.getElementById('actualizarjose1').style.display='none';
      document.getElementById('actualizarjose2').style.display='none';
     document.getElementById('actualizarjose3').style.display='none';
     document.getElementById('actualizarlazaro1').style.display='none';
     document.getElementById('actualizarlazaro2').style.display='none';
     document.getElementById('actualizarlazaro3').style.display='none';
     document.getElementById('actualizartulum1').style.display='none';
     document.getElementById('actualizartulum2').style.display='none';
     document.getElementById('actualizartulum3').style.display='none';
     document.getElementById('actualizarbacalar1').style.display='flex';
     document.getElementById('actualizarbacalar2').style.display='none';
     document.getElementById('actualizarbacalar3').style.display='none';
     document.getElementById('actualizarothon1').style.display='none';
     document.getElementById('actualizarothon2').style.display='none';
     document.getElementById('actualizarothon3').style.display='none';
     document.getElementById('actualizarbenito1').style.display='none';
     document.getElementById('actualizarbenito2').style.display='none';
     document.getElementById('actualizarbenito3').style.display='none';
     document.getElementById('actualizarcozumel1').style.display='none';
     document.getElementById('actualizarcozumel2').style.display='none';
     document.getElementById('actualizarcozumel3').style.display='none';
     document.getElementById('actualizarisla1').style.display='none';
     document.getElementById('actualizarisla2').style.display='none';
     document.getElementById('actualizarisla3').style.display='none';
     document.getElementById('actualizarsolidaridad1').style.display='none';
     document.getElementById('actualizarsolidaridad2').style.display='none';
     document.getElementById('actualizarsolidaridad3').style.display='none';
     document.getElementById('actualizarpuerto1').style.display='none';
     document.getElementById('actualizarpuerto2').style.display='none';
     document.getElementById('actualizarpuerto3').style.display='none';
     let i = 0;
      const element = document.getElementById('actualizarbacalar1-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarbacalar1-s').value;
        if ( a == 0 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 4 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 6 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 7 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 8 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 9 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 10 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 11 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 12 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 15 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 16 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 17 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 18 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 19 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 21 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
      }}});
    }else if(año == 2){
      document.getElementById('año1').innerHTML="137";
      document.getElementById('año2').innerHTML="$1 MP";
      document.getElementById('año3').innerHTML="55";
      document.getElementById('año4').innerHTML="626";
      document.getElementById('año5').innerHTML="$1 MP";
      document.getElementById('año6').innerHTML="576";

       document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='red';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';

          document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='flex';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
let i = 0;
      const element = document.getElementById('actualizarjose2-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarjose2-s').value;
        if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 4 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 6 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 7 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 8 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 9 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 10 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 11 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 12 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 15 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 16 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 17 ){
         document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 18 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 19 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        } }});
    }else if(año == 2){
      document.getElementById('año1').innerHTML="109";
      document.getElementById('año2').innerHTML="$1 MP";
      document.getElementById('año3').innerHTML="54";
      document.getElementById('año4').innerHTML="884"
      document.getElementById('año5').innerHTML="$2 MP";
      document.getElementById('año6').innerHTML="818";

      document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='#EDEDED';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='red';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';
      document.getElementById('actualizarfelipe1').style.display='none';
      document.getElementById('actualizarfelipe2').style.display='none';
      document.getElementById('actualizarfelipe3').style.display='none';
      document.getElementById('actualizarjose1').style.display='none';
      document.getElementById('actualizarjose2').style.display='none';
     document.getElementById('actualizarjose3').style.display='none';
     document.getElementById('actualizarlazaro1').style.display='none';
     document.getElementById('actualizarlazaro2').style.display='none';
     document.getElementById('actualizarlazaro3').style.display='none';
     document.getElementById('actualizartulum1').style.display='none';
     document.getElementById('actualizartulum2').style.display='none';
     document.getElementById('actualizartulum3').style.display='none';
     document.getElementById('actualizarbacalar1').style.display='none';
     document.getElementById('actualizarbacalar2').style.display='flex';
     document.getElementById('actualizarbacalar3').style.display='none';
     document.getElementById('actualizarothon1').style.display='none';
     document.getElementById('actualizarothon2').style.display='none';
     document.getElementById('actualizarothon3').style.display='none';
     document.getElementById('actualizarbenito1').style.display='none';
     document.getElementById('actualizarbenito2').style.display='none';
     document.getElementById('actualizarbenito3').style.display='none';
     document.getElementById('actualizarcozumel1').style.display='none';
     document.getElementById('actualizarcozumel2').style.display='none';
     document.getElementById('actualizarcozumel3').style.display='none';
     document.getElementById('actualizarisla1').style.display='none';
     document.getElementById('actualizarisla2').style.display='none';
     document.getElementById('actualizarisla3').style.display='none';
     document.getElementById('actualizarsolidaridad1').style.display='none';
     document.getElementById('actualizarsolidaridad2').style.display='none';
     document.getElementById('actualizarsolidaridad3').style.display='none';
     document.getElementById('actualizarpuerto1').style.display='none';
     document.getElementById('actualizarpuerto2').style.display='none';
     document.getElementById('actualizarpuerto3').style.display='none';
     let i = 0;
      const element = document.getElementById('actualizarbacalar2-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarbacalar2-s').value;
        if ( a == 0 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 4 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 6 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 7 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 8 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 9 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 10 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 11 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 12 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 15 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 16 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 17 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 18 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 19 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 21 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
      }}});
    }else if(año == 2){
      document.getElementById('año1').innerHTML="137";
      document.getElementById('año2').innerHTML="$1 MP";
      document.getElementById('año3').innerHTML="55";
      document.getElementById('año4').innerHTML="626";
      document.getElementById('año5').innerHTML="$1 MP";
      document.getElementById('año6').innerHTML="576";

       document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='red';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';

          document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='flex';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
let i = 0;
      const element = document.getElementById('actualizarjose2-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarjose2-s').value;
        if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 4 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 6 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 7 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 8 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 9 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 10 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 11 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 12 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 15 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 16 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 17 ){
         document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 18 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 19 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        } }});
    }else if(año == 3){
      document.getElementById('año1').innerHTML="171";
      document.getElementById('año2').innerHTML="$1 MP";
      document.getElementById('año3').innerHTML="69";
      document.getElementById('año4').innerHTML="613";
      document.getElementById('año5').innerHTML="$2 MP";
      document.getElementById('año6').innerHTML="546";

      document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='red';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';


      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='#EDEDED';
      document.getElementById('d').style.backgroundColor='red';
      document.getElementById('e').style.backgroundColor='#EDEDED';
      document.getElementById('actualizarfelipe1').style.display='none';
      document.getElementById('actualizarfelipe2').style.display='none';
      document.getElementById('actualizarfelipe3').style.display='none';
      document.getElementById('actualizarjose1').style.display='none';
      document.getElementById('actualizarjose2').style.display='none';
     document.getElementById('actualizarjose3').style.display='none';
     document.getElementById('actualizarlazaro1').style.display='none';
     document.getElementById('actualizarlazaro2').style.display='none';
     document.getElementById('actualizarlazaro3').style.display='none';
     document.getElementById('actualizartulum1').style.display='none';
     document.getElementById('actualizartulum2').style.display='none';
     document.getElementById('actualizartulum3').style.display='none';
     document.getElementById('actualizarbacalar1').style.display='none';
     document.getElementById('actualizarbacalar2').style.display='none';
     document.getElementById('actualizarbacalar3').style.display='flex';
     document.getElementById('actualizarothon1').style.display='none';
     document.getElementById('actualizarothon2').style.display='none';
     document.getElementById('actualizarothon3').style.display='none';
     document.getElementById('actualizarbenito1').style.display='none';
     document.getElementById('actualizarbenito2').style.display='none';
     document.getElementById('actualizarbenito3').style.display='none';
     document.getElementById('actualizarcozumel1').style.display='none';
     document.getElementById('actualizarcozumel2').style.display='none';
     document.getElementById('actualizarcozumel3').style.display='none';
     document.getElementById('actualizarisla1').style.display='none';
     document.getElementById('actualizarisla2').style.display='none';
     document.getElementById('actualizarisla3').style.display='none';
     document.getElementById('actualizarsolidaridad1').style.display='none';
     document.getElementById('actualizarsolidaridad2').style.display='none';
     document.getElementById('actualizarsolidaridad3').style.display='none';
     document.getElementById('actualizarpuerto1').style.display='none';
     document.getElementById('actualizarpuerto2').style.display='none';
     document.getElementById('actualizarpuerto3').style.display='none';
     let i = 0;
      const element = document.getElementById('actualizarbacalar3-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarbacalar3-s').value;
        if ( a == 0 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 4 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 6 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 7 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 8 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 9 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 10 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 11 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 12 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 15 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 16 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 17 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 18 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 19 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 21 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
      }}});
    }else if(año == 2){
      document.getElementById('año1').innerHTML="137";
      document.getElementById('año2').innerHTML="$1 MP";
      document.getElementById('año3').innerHTML="55";
      document.getElementById('año4').innerHTML="626";
      document.getElementById('año5').innerHTML="$1 MP";
      document.getElementById('año6').innerHTML="576";

       document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='red';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';

          document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='flex';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
let i = 0;
      const element = document.getElementById('actualizarjose2-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarjose2-s').value;
        if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 4 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 6 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 7 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 8 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 9 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 10 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 11 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 12 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 15 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 16 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 17 ){
         document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 18 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 19 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }}});
    }else if(año == 4){
      document.getElementById('año1').innerHTML="3089";
      document.getElementById('año2').innerHTML="$35 MP";
      document.getElementById('año3').innerHTML="1671";
      document.getElementById('año4').innerHTML="13332";
      document.getElementById('año5').innerHTML="$40.6 MP";
      document.getElementById('año6').innerHTML="12265";

      document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='#EDEDED';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_ocho').style.backgroundColor='#EDEDED';
      document.getElementById('m_nueve').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';


      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='#EDEDED';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='red';
    }
  });
  const element5 = document.getElementById('m_seis')////////////////////////////////////////////////////////
  element5.addEventListener("click", () => {

    if(año == 1 ){
      document.getElementById('año1').innerHTML="304";
      document.getElementById('año2').innerHTML="$3 MP";
      document.getElementById('año3').innerHTML="211";
      document.getElementById('año4').innerHTML="53";
      document.getElementById('año5').innerHTML="$100 000 P";
      document.getElementById('año6').innerHTML="48";
     
      document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='#EDEDED';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='red';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_ocho').style.backgroundColor='#EDEDED';
      document.getElementById('m_nueve').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='red';
      document.getElementById('c').style.backgroundColor='#EDEDED';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';
      document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='none';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='flex';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
   let i = 0;
      const element = document.getElementById('actualizarothon1-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarothon1-s').value;
        if ( a == 0 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 4 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 6 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 7 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 8 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 9 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 10 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 11 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 12 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 15 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 16 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 17 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 18 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 19 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 21 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
      }}});
    }else if(año == 2){
      document.getElementById('año1').innerHTML="137";
      document.getElementById('año2').innerHTML="$1 MP";
      document.getElementById('año3').innerHTML="55";
      document.getElementById('año4').innerHTML="626";
      document.getElementById('año5').innerHTML="$1 MP";
      document.getElementById('año6').innerHTML="576";

       document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='red';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';

          document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='flex';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
let i = 0;
      const element = document.getElementById('actualizarjose2-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarjose2-s').value;
        if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 4 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 6 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 7 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 8 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 9 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 10 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 11 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 12 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 15 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 16 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 17 ){
         document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 18 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 19 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        } }});

    }else if(año == 2){
      document.getElementById('año1').innerHTML="-";
      document.getElementById('año2').innerHTML="$- MP";
      document.getElementById('año3').innerHTML="-";
      document.getElementById('año4').innerHTML="5"
      document.getElementById('año5').innerHTML="$13 000 P";
      document.getElementById('año6').innerHTML="5";

      document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='#EDEDED';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='red';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';
      document.getElementById('actualizarfelipe1').style.display='none';
      document.getElementById('actualizarfelipe2').style.display='none';
      document.getElementById('actualizarfelipe3').style.display='none';
      document.getElementById('actualizarjose1').style.display='none';
      document.getElementById('actualizarjose2').style.display='none';
     document.getElementById('actualizarjose3').style.display='none';
     document.getElementById('actualizarlazaro1').style.display='none';
     document.getElementById('actualizarlazaro2').style.display='none';
     document.getElementById('actualizarlazaro3').style.display='none';
     document.getElementById('actualizartulum1').style.display='none';
     document.getElementById('actualizartulum2').style.display='none';
     document.getElementById('actualizartulum3').style.display='none';
     document.getElementById('actualizarbacalar1').style.display='none';
     document.getElementById('actualizarbacalar2').style.display='none';
     document.getElementById('actualizarbacalar3').style.display='none';
     document.getElementById('actualizarothon1').style.display='none';
     document.getElementById('actualizarothon2').style.display='flex';
     document.getElementById('actualizarothon3').style.display='none';
     document.getElementById('actualizarbenito1').style.display='none';
     document.getElementById('actualizarbenito2').style.display='none';
     document.getElementById('actualizarbenito3').style.display='none';
     document.getElementById('actualizarcozumel1').style.display='none';
     document.getElementById('actualizarcozumel2').style.display='none';
     document.getElementById('actualizarcozumel3').style.display='none';
     document.getElementById('actualizarisla1').style.display='none';
     document.getElementById('actualizarisla2').style.display='none';
     document.getElementById('actualizarisla3').style.display='none';
     document.getElementById('actualizarsolidaridad1').style.display='none';
     document.getElementById('actualizarsolidaridad2').style.display='none';
     document.getElementById('actualizarsolidaridad3').style.display='none';
     document.getElementById('actualizarpuerto1').style.display='none';
     document.getElementById('actualizarpuerto2').style.display='none';
     document.getElementById('actualizarpuerto3').style.display='none';
     let i = 0;
      const element = document.getElementById('actualizarothon2-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarothon2-s').value;
        if ( a == 0 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 4 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 6 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 7 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 8 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 9 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 10 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 11 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 12 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 15 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 16 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 17 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 18 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 19 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 21 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
      }}});
    }else if(año == 2){
      document.getElementById('año1').innerHTML="137";
      document.getElementById('año2').innerHTML="$1 MP";
      document.getElementById('año3').innerHTML="55";
      document.getElementById('año4').innerHTML="626";
      document.getElementById('año5').innerHTML="$1 MP";
      document.getElementById('año6').innerHTML="576";

       document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='red';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';

          document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='flex';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
let i = 0;
      const element = document.getElementById('actualizarjose2-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarjose2-s').value;
        if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 4 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 6 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 7 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 8 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 9 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 10 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 11 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 12 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 15 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 16 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 17 ){
         document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 18 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 19 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }}});
      
    }else if(año == 3){
      document.getElementById('año1').innerHTML="-";
      document.getElementById('año2').innerHTML="$- MP";
      document.getElementById('año3').innerHTML="- ";
      document.getElementById('año4').innerHTML="4";
      document.getElementById('año5').innerHTML="$15 000 P";
      document.getElementById('año6').innerHTML="2";

      document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='red';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';


      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='#EDEDED';
      document.getElementById('d').style.backgroundColor='red';
      document.getElementById('e').style.backgroundColor='#EDEDED';
      document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='none';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='flex';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
   let i = 0;
      const element = document.getElementById('actualizarothon3-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarothon3-s').value;
        if ( a == 0 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 4 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 6 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 7 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 8 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 9 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 10 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 11 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 12 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 15 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 16 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 17 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 18 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 19 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 21 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
      }}});
    }else if(año == 2){
      document.getElementById('año1').innerHTML="137";
      document.getElementById('año2').innerHTML="$1 MP";
      document.getElementById('año3').innerHTML="55";
      document.getElementById('año4').innerHTML="626";
      document.getElementById('año5').innerHTML="$1 MP";
      document.getElementById('año6').innerHTML="576";

       document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='red';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';

          document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='flex';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
let i = 0;
      const element = document.getElementById('actualizarjose2-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarjose2-s').value;
        if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 4 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 6 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 7 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 8 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 9 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 10 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 11 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 12 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 15 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 16 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 17 ){
         document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 18 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 19 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }}});
      
    }else if(año == 4){
      document.getElementById('año1').innerHTML="3089";
      document.getElementById('año2').innerHTML="$35 MP";
      document.getElementById('año3').innerHTML="1671";
      document.getElementById('año4').innerHTML="13332";
      document.getElementById('año5').innerHTML="$40.6 MP";
      document.getElementById('año6').innerHTML="12265";

      document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='#EDEDED';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_ocho').style.backgroundColor='#EDEDED';
      document.getElementById('m_nueve').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='#EDEDED';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='red';
    }
  });
  const element6 = document.getElementById('m_siete')///////////////////////////////////////////////////////
  element6.addEventListener("click", () => {

    if(año == 1 ){
      document.getElementById('año1').innerHTML="6";
      document.getElementById('año2').innerHTML="$82 000 P";
      document.getElementById('año3').innerHTML="6";
      document.getElementById('año4').innerHTML="16";
      document.getElementById('año5').innerHTML="$45 000 P";
      document.getElementById('año6').innerHTML="15";
     
      document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='#EDEDED';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='red';
      document.getElementById('m_ocho').style.backgroundColor='#EDEDED';
      document.getElementById('m_nueve').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='red';
      document.getElementById('c').style.backgroundColor='#EDEDED';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';
      document.getElementById('actualizarfelipe1').style.display='none';
      document.getElementById('actualizarfelipe2').style.display='none';
      document.getElementById('actualizarfelipe3').style.display='none';
      document.getElementById('actualizarjose1').style.display='none';
      document.getElementById('actualizarjose2').style.display='none';
     document.getElementById('actualizarjose3').style.display='none';
     document.getElementById('actualizarlazaro1').style.display='none';
     document.getElementById('actualizarlazaro2').style.display='none';
     document.getElementById('actualizarlazaro3').style.display='none';
     document.getElementById('actualizartulum1').style.display='none';
     document.getElementById('actualizartulum2').style.display='none';
     document.getElementById('actualizartulum3').style.display='none';
     document.getElementById('actualizarbacalar1').style.display='none';
     document.getElementById('actualizarbacalar2').style.display='none';
     document.getElementById('actualizarbacalar3').style.display='none';
     document.getElementById('actualizarothon1').style.display='none';
     document.getElementById('actualizarothon2').style.display='none';
     document.getElementById('actualizarothon3').style.display='none';
     document.getElementById('actualizarbenito1').style.display='flex';
     document.getElementById('actualizarbenito2').style.display='none';
     document.getElementById('actualizarbenito3').style.display='none';
     document.getElementById('actualizarcozumel1').style.display='none';
     document.getElementById('actualizarcozumel2').style.display='none';
     document.getElementById('actualizarcozumel3').style.display='none';
     document.getElementById('actualizarisla1').style.display='none';
     document.getElementById('actualizarisla2').style.display='none';
     document.getElementById('actualizarisla3').style.display='none';
     document.getElementById('actualizarsolidaridad1').style.display='none';
     document.getElementById('actualizarsolidaridad2').style.display='none';
     document.getElementById('actualizarsolidaridad3').style.display='none';
     document.getElementById('actualizarpuerto1').style.display='none';
     document.getElementById('actualizarpuerto2').style.display='none';
     document.getElementById('actualizarpuerto3').style.display='none';
     let i = 0;
      const element = document.getElementById('actualizarbenito1-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarbenito1-s').value;
        if ( a == 0 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 4 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 6 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 7 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 8 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 9 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 10 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 11 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 12 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 15 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 16 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 17 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 18 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 19 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 21 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
      }}});
    }else if(año == 2){
      document.getElementById('año1').innerHTML="137";
      document.getElementById('año2').innerHTML="$1 MP";
      document.getElementById('año3').innerHTML="55";
      document.getElementById('año4').innerHTML="626";
      document.getElementById('año5').innerHTML="$1 MP";
      document.getElementById('año6').innerHTML="576";

       document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='red';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';

          document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='flex';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
let i = 0;
      const element = document.getElementById('actualizarjose2-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarjose2-s').value;
        if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 4 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 6 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 7 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 8 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 9 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 10 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 11 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 12 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 15 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 16 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 17 ){
         document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 18 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 19 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }}});
    }else if(año == 2){
      document.getElementById('año1').innerHTML="-";
      document.getElementById('año2').innerHTML="$- MP";
      document.getElementById('año3').innerHTML="-";
      document.getElementById('año4').innerHTML="1"
      document.getElementById('año5').innerHTML="$2000 P";
      document.getElementById('año6').innerHTML="1";

      document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='#EDEDED';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='red';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';
      document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='none';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='flex';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
   let i = 0;
      const element = document.getElementById('actualizarbenito2-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarbenito2-s').value;
        if ( a == 0 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 4 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 6 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 7 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 8 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 9 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 10 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 11 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 12 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 15 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 16 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 17 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 18 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 19 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 21 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
      }}});
    }else if(año == 2){
      document.getElementById('año1').innerHTML="137";
      document.getElementById('año2').innerHTML="$1 MP";
      document.getElementById('año3').innerHTML="55";
      document.getElementById('año4').innerHTML="626";
      document.getElementById('año5').innerHTML="$1 MP";
      document.getElementById('año6').innerHTML="576";

       document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='red';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';

          document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='flex';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
let i = 0;
      const element = document.getElementById('actualizarjose2-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarjose2-s').value;
        if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 4 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 6 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 7 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 8 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 9 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 10 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 11 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 12 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 15 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 16 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 17 ){
         document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 18 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 19 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        } }});
    }else if(año == 3){
      document.getElementById('año1').innerHTML="-";
      document.getElementById('año2').innerHTML="$- MP";
      document.getElementById('año3').innerHTML="- ";
      document.getElementById('año4').innerHTML="2";
      document.getElementById('año5').innerHTML="$7 000 P";
      document.getElementById('año6').innerHTML="2";

      document.getElementById('m_uno').style.backgroundColor='#EDEDED';
    document.getElementById('m_dos').style.backgroundColor='#EDEDED';
    document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
    document.getElementById('m_seis').style.backgroundColor='#EDEDED';
    document.getElementById('m_siete').style.backgroundColor='red';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='#EDEDED';
      document.getElementById('d').style.backgroundColor='red';
      document.getElementById('e').style.backgroundColor='#EDEDED';
      document.getElementById('actualizarfelipe1').style.display='none';
      document.getElementById('actualizarfelipe2').style.display='none';
      document.getElementById('actualizarfelipe3').style.display='none';
      document.getElementById('actualizarjose1').style.display='none';
      document.getElementById('actualizarjose2').style.display='none';
     document.getElementById('actualizarjose3').style.display='none';
     document.getElementById('actualizarlazaro1').style.display='none';
     document.getElementById('actualizarlazaro2').style.display='none';
     document.getElementById('actualizarlazaro3').style.display='none';
     document.getElementById('actualizartulum1').style.display='none';
     document.getElementById('actualizartulum2').style.display='none';
     document.getElementById('actualizartulum3').style.display='none';
     document.getElementById('actualizarbacalar1').style.display='none';
     document.getElementById('actualizarbacalar2').style.display='none';
     document.getElementById('actualizarbacalar3').style.display='none';
     document.getElementById('actualizarothon1').style.display='none';
     document.getElementById('actualizarothon2').style.display='none';
     document.getElementById('actualizarothon3').style.display='none';
     document.getElementById('actualizarbenito1').style.display='none';
     document.getElementById('actualizarbenito2').style.display='none';
     document.getElementById('actualizarbenito3').style.display='flex';
     document.getElementById('actualizarcozumel1').style.display='none';
     document.getElementById('actualizarcozumel2').style.display='none';
     document.getElementById('actualizarcozumel3').style.display='none';
     document.getElementById('actualizarisla1').style.display='none';
     document.getElementById('actualizarisla2').style.display='none';
     document.getElementById('actualizarisla3').style.display='none';
     document.getElementById('actualizarsolidaridad1').style.display='none';
     document.getElementById('actualizarsolidaridad2').style.display='none';
     document.getElementById('actualizarsolidaridad3').style.display='none';
     document.getElementById('actualizarpuerto1').style.display='none';
     document.getElementById('actualizarpuerto2').style.display='none';
     document.getElementById('actualizarpuerto3').style.display='none';
     let i = 0;
      const element = document.getElementById('actualizarbenito3-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarbenito3-s').value;
        if ( a == 0 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 4 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 6 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 7 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 8 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 9 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 10 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 11 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 12 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 15 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 16 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 17 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 18 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 19 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 21 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
      }}});
    }else if(año == 2){
      document.getElementById('año1').innerHTML="137";
      document.getElementById('año2').innerHTML="$1 MP";
      document.getElementById('año3').innerHTML="55";
      document.getElementById('año4').innerHTML="626";
      document.getElementById('año5').innerHTML="$1 MP";
      document.getElementById('año6').innerHTML="576";

       document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='red';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';

          document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='flex';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
let i = 0;
      const element = document.getElementById('actualizarjose2-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarjose2-s').value;
        if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 4 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 6 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 7 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 8 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 9 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 10 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 11 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 12 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 15 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 16 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 17 ){
         document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 18 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 19 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }}});
      
    }else if(año == 4){
      document.getElementById('año1').innerHTML="3089";
      document.getElementById('año2').innerHTML="$35 MP";
      document.getElementById('año3').innerHTML="1671";
      document.getElementById('año4').innerHTML="13332";
      document.getElementById('año5').innerHTML="$40.6 MP";
      document.getElementById('año6').innerHTML="12265";

      document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='#EDEDED';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_ocho').style.backgroundColor='#EDEDED';
      document.getElementById('m_nueve').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='#EDEDED';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='red';
    }
  });
  const element7 = document.getElementById('m_ocho')///////////////////////////////////////////////////////7//
  element7.addEventListener("click", () => {

    if(año == 1 ){
      document.getElementById('año1').innerHTML="1";
      document.getElementById('año2').innerHTML="$14 000 P";
      document.getElementById('año3').innerHTML="1";
      document.getElementById('año4').innerHTML="4";
      document.getElementById('año5').innerHTML="$11 000 P";
      document.getElementById('año6').innerHTML="4";
     
      document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='#EDEDED';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_ocho').style.backgroundColor='red';
      document.getElementById('m_nueve').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='red';
      document.getElementById('c').style.backgroundColor='#EDEDED';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';
      document.getElementById('actualizarfelipe1').style.display='none';
      document.getElementById('actualizarfelipe2').style.display='none';
      document.getElementById('actualizarfelipe3').style.display='none';
      document.getElementById('actualizarjose1').style.display='none';
      document.getElementById('actualizarjose2').style.display='none';
     document.getElementById('actualizarjose3').style.display='none';
     document.getElementById('actualizarlazaro1').style.display='none';
     document.getElementById('actualizarlazaro2').style.display='none';
     document.getElementById('actualizarlazaro3').style.display='none';
     document.getElementById('actualizartulum1').style.display='none';
     document.getElementById('actualizartulum2').style.display='none';
     document.getElementById('actualizartulum3').style.display='none';
     document.getElementById('actualizarbacalar1').style.display='none';
     document.getElementById('actualizarbacalar2').style.display='none';
     document.getElementById('actualizarbacalar3').style.display='none';
     document.getElementById('actualizarothon1').style.display='none';
     document.getElementById('actualizarothon2').style.display='none';
     document.getElementById('actualizarothon3').style.display='none';
     document.getElementById('actualizarbenito1').style.display='none';
     document.getElementById('actualizarbenito2').style.display='none';
     document.getElementById('actualizarbenito3').style.display='none';
     document.getElementById('actualizarcozumel1').style.display='flex';
     document.getElementById('actualizarcozumel2').style.display='none';
     document.getElementById('actualizarcozumel3').style.display='none';
     document.getElementById('actualizarisla1').style.display='none';
     document.getElementById('actualizarisla2').style.display='none';
     document.getElementById('actualizarisla3').style.display='none';
     document.getElementById('actualizarsolidaridad1').style.display='none';
     document.getElementById('actualizarsolidaridad2').style.display='none';
     document.getElementById('actualizarsolidaridad3').style.display='none';
     document.getElementById('actualizarpuerto1').style.display='none';
     document.getElementById('actualizarpuerto2').style.display='none';
     document.getElementById('actualizarpuerto3').style.display='none';
     let i =0;
      const element = document.getElementById('actualizarcozumel1-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarcozumel1-s').value;
        if ( a == 0 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 4 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 6 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 7 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 8 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 9 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 10 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 11 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 12 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 15 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 16 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 17 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 18 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 19 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 21 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
      }}});
    }else if(año == 2){
      document.getElementById('año1').innerHTML="137";
      document.getElementById('año2').innerHTML="$1 MP";
      document.getElementById('año3').innerHTML="55";
      document.getElementById('año4').innerHTML="626";
      document.getElementById('año5').innerHTML="$1 MP";
      document.getElementById('año6').innerHTML="576";

       document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='red';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';

          document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='flex';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
let i = 0;
      const element = document.getElementById('actualizarjose2-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarjose2-s').value;
        if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 4 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 6 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 7 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 8 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 9 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 10 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 11 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 12 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 15 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 16 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 17 ){
         document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 18 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 19 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        } }});

    }else if(año == 2){
      document.getElementById('año1').innerHTML="613";
      document.getElementById('año2').innerHTML="$6 MP";
      document.getElementById('año3').innerHTML="290";
      document.getElementById('año4').innerHTML="2215"
      document.getElementById('año5').innerHTML="$5 MP";
      document.getElementById('año6').innerHTML="2035";

      document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='#EDEDED';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';
      document.getElementById('actualizarfelipe1').style.display='none';
      document.getElementById('actualizarfelipe2').style.display='none';
      document.getElementById('actualizarfelipe3').style.display='none';
      document.getElementById('actualizarjose1').style.display='none';
      document.getElementById('actualizarjose2').style.display='none';
     document.getElementById('actualizarjose3').style.display='none';
     document.getElementById('actualizarlazaro1').style.display='none';
     document.getElementById('actualizarlazaro2').style.display='none';
     document.getElementById('actualizarlazaro3').style.display='none';
     document.getElementById('actualizartulum1').style.display='none';
     document.getElementById('actualizartulum2').style.display='none';
     document.getElementById('actualizartulum3').style.display='none';
     document.getElementById('actualizarbacalar1').style.display='none';
     document.getElementById('actualizarbacalar2').style.display='none';
     document.getElementById('actualizarbacalar3').style.display='none';
     document.getElementById('actualizarothon1').style.display='none';
     document.getElementById('actualizarothon2').style.display='none';
     document.getElementById('actualizarothon3').style.display='none';
     document.getElementById('actualizarbenito1').style.display='none';
     document.getElementById('actualizarbenito2').style.display='none';
     document.getElementById('actualizarbenito3').style.display='none';
     document.getElementById('actualizarcozumel1').style.display='none';
     document.getElementById('actualizarcozumel2').style.display='flex';
     document.getElementById('actualizarcozumel3').style.display='none';
     document.getElementById('actualizarisla1').style.display='none';
     document.getElementById('actualizarisla2').style.display='none';
     document.getElementById('actualizarisla3').style.display='none';
     document.getElementById('actualizarsolidaridad1').style.display='none';
     document.getElementById('actualizarsolidaridad2').style.display='none';
     document.getElementById('actualizarsolidaridad3').style.display='none';
     document.getElementById('actualizarpuerto1').style.display='none';
     document.getElementById('actualizarpuerto2').style.display='none';
     document.getElementById('actualizarpuerto3').style.display='none';
     let i = 0;
      const element = document.getElementById('actualizarcozumel2-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarcozumel2-s').value;
        if ( a == 0 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 4 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 6 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 7 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 8 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 9 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 10 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 11 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 12 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 15 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 16 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 17 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 18 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 19 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 21 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
      }}});
    }else if(año == 2){
      document.getElementById('año1').innerHTML="137";
      document.getElementById('año2').innerHTML="$1 MP";
      document.getElementById('año3').innerHTML="55";
      document.getElementById('año4').innerHTML="626";
      document.getElementById('año5').innerHTML="$1 MP";
      document.getElementById('año6').innerHTML="576";

       document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='red';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';

          document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='flex';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
let i = 0;
      const element = document.getElementById('actualizarjose2-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarjose2-s').value;
        if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 4 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 6 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 7 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 8 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 9 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 10 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 11 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 12 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 15 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 16 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 17 ){
         document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 18 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 19 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        } }});
    }else if(año == 3){
      document.getElementById('año1').innerHTML="747";
      document.getElementById('año2').innerHTML="$7 MP";
      document.getElementById('año3').innerHTML="258 ";
      document.getElementById('año4').innerHTML="1967";
      document.getElementById('año5').innerHTML="$7 MP";
      document.getElementById('año6').innerHTML="1776";
      document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='#EDEDED';
      document.getElementById('d').style.backgroundColor='red';
      document.getElementById('e').style.backgroundColor='#EDEDED';
      document.getElementById('actualizarfelipe1').style.display='none';
      document.getElementById('actualizarfelipe2').style.display='none';
      document.getElementById('actualizarfelipe3').style.display='none';
      document.getElementById('actualizarjose1').style.display='none';
      document.getElementById('actualizarjose2').style.display='none';
     document.getElementById('actualizarjose3').style.display='none';
     document.getElementById('actualizarlazaro1').style.display='none';
     document.getElementById('actualizarlazaro2').style.display='none';
     document.getElementById('actualizarlazaro3').style.display='none';
     document.getElementById('actualizartulum1').style.display='none';
     document.getElementById('actualizartulum2').style.display='none';
     document.getElementById('actualizartulum3').style.display='none';
     document.getElementById('actualizarbacalar1').style.display='none';
     document.getElementById('actualizarbacalar2').style.display='none';
     document.getElementById('actualizarbacalar3').style.display='none';
     document.getElementById('actualizarothon1').style.display='none';
     document.getElementById('actualizarothon2').style.display='none';
     document.getElementById('actualizarothon3').style.display='none';
     document.getElementById('actualizarbenito1').style.display='none';
     document.getElementById('actualizarbenito2').style.display='none';
     document.getElementById('actualizarbenito3').style.display='none';
     document.getElementById('actualizarcozumel1').style.display='none';
     document.getElementById('actualizarcozumel2').style.display='none';
     document.getElementById('actualizarcozumel3').style.display='flex';
     document.getElementById('actualizarisla1').style.display='none';
     document.getElementById('actualizarisla2').style.display='none';
     document.getElementById('actualizarisla3').style.display='none';
     document.getElementById('actualizarsolidaridad1').style.display='none';
     document.getElementById('actualizarsolidaridad2').style.display='none';
     document.getElementById('actualizarsolidaridad3').style.display='none';
     document.getElementById('actualizarpuerto1').style.display='none';
     document.getElementById('actualizarpuerto2').style.display='none';
     document.getElementById('actualizarpuerto3').style.display='none';
     let i= 0;
      const element = document.getElementById('actualizarcozumel3-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarcozumel3-s').value;
        if ( a == 0 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 4 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 6 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 7 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 8 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 9 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 10 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 11 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 12 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 15 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 16 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 17 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 18 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 19 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 21 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
      }}});
    }else if(año == 2){
      document.getElementById('año1').innerHTML="137";
      document.getElementById('año2').innerHTML="$1 MP";
      document.getElementById('año3').innerHTML="55";
      document.getElementById('año4').innerHTML="626";
      document.getElementById('año5').innerHTML="$1 MP";
      document.getElementById('año6').innerHTML="576";

       document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='red';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';

          document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='flex';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
let i = 0;
      const element = document.getElementById('actualizarjose2-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarjose2-s').value;
        if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 4 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 6 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 7 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 8 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 9 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 10 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 11 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 12 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 15 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 16 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 17 ){
         document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 18 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 19 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        } }});
    }else if(año == 4){
      document.getElementById('año1').innerHTML="3089";
      document.getElementById('año2').innerHTML="$35 MP";
      document.getElementById('año3').innerHTML="1671";
      document.getElementById('año4').innerHTML="13332";
      document.getElementById('año5').innerHTML="$40.6 MP";
      document.getElementById('año6').innerHTML="12265";

      document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='#EDEDED';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_ocho').style.backgroundColor='#EDEDED';
      document.getElementById('m_nueve').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='#EDEDED';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='red';
    }
  });
  const element8 = document.getElementById('m_nueve')//////////////////////////////////////////////////////////
  element8.addEventListener("click", () => {

    if(año == 1 ){
      document.getElementById('año1').innerHTML="-";
      document.getElementById('año2').innerHTML="$- MP";
      document.getElementById('año3').innerHTML="-";
      document.getElementById('año4').innerHTML="1";
      document.getElementById('año5').innerHTML="$2000 P";
      document.getElementById('año6').innerHTML="1";
     
      document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='#EDEDED';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_ocho').style.backgroundColor='#EDEDED';
      document.getElementById('m_nueve').style.backgroundColor='red';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='red';
      document.getElementById('c').style.backgroundColor='#EDEDED';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';
      document.getElementById('actualizarfelipe1').style.display='none';
      document.getElementById('actualizarfelipe2').style.display='none';
      document.getElementById('actualizarfelipe3').style.display='none';
      document.getElementById('actualizarjose1').style.display='none';
      document.getElementById('actualizarjose2').style.display='none';
     document.getElementById('actualizarjose3').style.display='none';
     document.getElementById('actualizarlazaro1').style.display='none';
     document.getElementById('actualizarlazaro2').style.display='none';
     document.getElementById('actualizarlazaro3').style.display='none';
     document.getElementById('actualizartulum1').style.display='none';
     document.getElementById('actualizartulum2').style.display='none';
     document.getElementById('actualizartulum3').style.display='none';
     document.getElementById('actualizarbacalar1').style.display='none';
     document.getElementById('actualizarbacalar2').style.display='none';
     document.getElementById('actualizarbacalar3').style.display='none';
     document.getElementById('actualizarothon1').style.display='none';
     document.getElementById('actualizarothon2').style.display='none';
     document.getElementById('actualizarothon3').style.display='none';
     document.getElementById('actualizarbenito1').style.display='none';
     document.getElementById('actualizarbenito2').style.display='none';
     document.getElementById('actualizarbenito3').style.display='none';
     document.getElementById('actualizarcozumel1').style.display='none';
     document.getElementById('actualizarcozumel2').style.display='none';
     document.getElementById('actualizarcozumel3').style.display='none';
     document.getElementById('actualizarisla1').style.display='flex';
     document.getElementById('actualizarisla2').style.display='none';
     document.getElementById('actualizarisla3').style.display='none';
     document.getElementById('actualizarsolidaridad1').style.display='none';
     document.getElementById('actualizarsolidaridad2').style.display='none';
     document.getElementById('actualizarsolidaridad3').style.display='none';
     document.getElementById('actualizarpuerto1').style.display='none';
     document.getElementById('actualizarpuerto2').style.display='none';
     document.getElementById('actualizarpuerto3').style.display='none';
     let i = 0;
      const element = document.getElementById('actualizarisla1-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarisla1-s').value;
        if ( a == 0 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 4 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 6 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 7 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 8 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 9 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 10 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 11 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 12 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 15 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 16 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 17 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 18 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 19 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 21 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
      }}});
    }else if(año == 2){
      document.getElementById('año1').innerHTML="137";
      document.getElementById('año2').innerHTML="$1 MP";
      document.getElementById('año3').innerHTML="55";
      document.getElementById('año4').innerHTML="626";
      document.getElementById('año5').innerHTML="$1 MP";
      document.getElementById('año6').innerHTML="576";

       document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='red';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';

          document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='flex';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
let i = 0;
      const element = document.getElementById('actualizarjose2-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarjose2-s').value;
        if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 4 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 6 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 7 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 8 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 9 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 10 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 11 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 12 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 15 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 16 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 17 ){
         document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 18 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 19 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        } }});
    }else if(año == 2){
      document.getElementById('año1').innerHTML="613";
      document.getElementById('año2').innerHTML="$6 MP";
      document.getElementById('año3').innerHTML="290";
      document.getElementById('año4').innerHTML="2215"
      document.getElementById('año5').innerHTML="$5 MP";
      document.getElementById('año6').innerHTML="2035";

      document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='#EDEDED';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';
      document.getElementById('actualizarfelipe1').style.display='none';
      document.getElementById('actualizarfelipe2').style.display='none';
      document.getElementById('actualizarfelipe3').style.display='none';
      document.getElementById('actualizarjose1').style.display='none';
      document.getElementById('actualizarjose2').style.display='none';
     document.getElementById('actualizarjose3').style.display='none';
     document.getElementById('actualizarlazaro1').style.display='none';
     document.getElementById('actualizarlazaro2').style.display='none';
     document.getElementById('actualizarlazaro3').style.display='none';
     document.getElementById('actualizartulum1').style.display='none';
     document.getElementById('actualizartulum2').style.display='none';
     document.getElementById('actualizartulum3').style.display='none';
     document.getElementById('actualizarbacalar1').style.display='none';
     document.getElementById('actualizarbacalar2').style.display='none';
     document.getElementById('actualizarbacalar3').style.display='none';
     document.getElementById('actualizarothon1').style.display='none';
     document.getElementById('actualizarothon2').style.display='none';
     document.getElementById('actualizarothon3').style.display='none';
     document.getElementById('actualizarbenito1').style.display='none';
     document.getElementById('actualizarbenito2').style.display='none';
     document.getElementById('actualizarbenito3').style.display='none';
     document.getElementById('actualizarcozumel1').style.display='none';
     document.getElementById('actualizarcozumel2').style.display='none';
     document.getElementById('actualizarcozumel3').style.display='none';
     document.getElementById('actualizarisla1').style.display='none';
     document.getElementById('actualizarisla2').style.display='flex';
     document.getElementById('actualizarisla3').style.display='none';
     document.getElementById('actualizarsolidaridad1').style.display='none';
     document.getElementById('actualizarsolidaridad2').style.display='none';
     document.getElementById('actualizarsolidaridad3').style.display='none';
     document.getElementById('actualizarpuerto1').style.display='none';
     document.getElementById('actualizarpuerto2').style.display='none';
     document.getElementById('actualizarpuerto3').style.display='none';
     let i = 0;
      const element = document.getElementById('actualizarisla2-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarisla2-s').value;
        if ( a == 0 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 4 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 6 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 7 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 8 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 9 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 10 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 11 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 12 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 15 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 16 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 17 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 18 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 19 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 21 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
      }}});
    }else if(año == 2){
      document.getElementById('año1').innerHTML="137";
      document.getElementById('año2').innerHTML="$1 MP";
      document.getElementById('año3').innerHTML="55";
      document.getElementById('año4').innerHTML="626";
      document.getElementById('año5').innerHTML="$1 MP";
      document.getElementById('año6').innerHTML="576";

       document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='red';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';

          document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='flex';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
let i = 0;
      const element = document.getElementById('actualizarjose2-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarjose2-s').value;
        if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 4 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 6 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 7 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 8 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 9 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 10 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 11 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 12 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 15 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 16 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 17 ){
         document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 18 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 19 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }}});
    }else if(año == 3){
      document.getElementById('año1').innerHTML="747";
      document.getElementById('año2').innerHTML="$7 MP";
      document.getElementById('año3').innerHTML="258 ";
      document.getElementById('año4').innerHTML="1967";
      document.getElementById('año5').innerHTML="$7 MP";
      document.getElementById('año6').innerHTML="1776";

      document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='#EDEDED';
      document.getElementById('d').style.backgroundColor='red';
      document.getElementById('e').style.backgroundColor='#EDEDED';
      document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='none';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='flex';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
   let i = 0;
      const element = document.getElementById('actualizarisla3-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarisla3-s').value;
        if ( a == 0 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 4 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 6 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 7 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 8 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 9 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 10 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 11 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 12 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 15 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 16 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 17 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 18 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 19 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 21 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
      }}});
    }else if(año == 2){
      document.getElementById('año1').innerHTML="137";
      document.getElementById('año2').innerHTML="$1 MP";
      document.getElementById('año3').innerHTML="55";
      document.getElementById('año4').innerHTML="626";
      document.getElementById('año5').innerHTML="$1 MP";
      document.getElementById('año6').innerHTML="576";

       document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='red';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';

          document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='flex';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
let i = 0;
      const element = document.getElementById('actualizarjose2-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarjose2-s').value;
        if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 4 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 6 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 7 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 8 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 9 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 10 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 11 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 12 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 15 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 16 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 17 ){
         document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 18 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 19 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        } }});
    }else if(año == 4){
      document.getElementById('año1').innerHTML="3089";
      document.getElementById('año2').innerHTML="$35 MP";
      document.getElementById('año3').innerHTML="1671";
      document.getElementById('año4').innerHTML="13332";
      document.getElementById('año5').innerHTML="$40.6 MP";
      document.getElementById('año6').innerHTML="12265";

      document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='#EDEDED';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_ocho').style.backgroundColor='#EDEDED';
      document.getElementById('m_nueve').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='#EDEDED';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='red';
    }
  });
  const element9 = document.getElementById('m_diez')///////////////////////////////////////
  element9.addEventListener("click", () => {

    if(año == 1 ){
      document.getElementById('año1').innerHTML="26";
      document.getElementById('año2').innerHTML="$300 000 P";
      document.getElementById('año3').innerHTML="23";
      document.getElementById('año4').innerHTML="39";
      document.getElementById('año5').innerHTML="$100 000 MP";
      document.getElementById('año6').innerHTML="39";
     
      document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='#EDEDED';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_ocho').style.backgroundColor='#EDEDED';
      document.getElementById('m_nueve').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='red';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='red';
      document.getElementById('c').style.backgroundColor='#EDEDED';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';
      document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='none';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='flex';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
   let i = 0;
      const element = document.getElementById('actualizarsolidaridad1-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarsolidaridad1-s').value;
        if ( a == 0 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 4 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 6 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 7 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 8 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 9 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 10 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 11 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 12 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 15 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 16 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 17 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 18 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 19 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 21 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
      }}});
    }else if(año == 2){
      document.getElementById('año1').innerHTML="137";
      document.getElementById('año2').innerHTML="$1 MP";
      document.getElementById('año3').innerHTML="55";
      document.getElementById('año4').innerHTML="626";
      document.getElementById('año5').innerHTML="$1 MP";
      document.getElementById('año6').innerHTML="576";

       document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='red';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';

          document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='flex';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
let i = 0;
      const element = document.getElementById('actualizarjose2-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarjose2-s').value;
        if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 4 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 6 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 7 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 8 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 9 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 10 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 11 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 12 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 15 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 16 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 17 ){
         document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 18 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 19 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        } }});
    }else if(año == 2){
      document.getElementById('año1').innerHTML="-";
      document.getElementById('año2').innerHTML="$- MP";
      document.getElementById('año3').innerHTML="-";
      document.getElementById('año4').innerHTML="2"
      document.getElementById('año5').innerHTML="$5 000 P";
      document.getElementById('año6').innerHTML="2";

      document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='#EDEDED';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='red';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';
      document.getElementById('actualizarfelipe1').style.display='none';
      document.getElementById('actualizarfelipe2').style.display='none';
      document.getElementById('actualizarfelipe3').style.display='none';
      document.getElementById('actualizarjose1').style.display='none';
      document.getElementById('actualizarjose2').style.display='none';
     document.getElementById('actualizarjose3').style.display='none';
     document.getElementById('actualizarlazaro1').style.display='none';
     document.getElementById('actualizarlazaro2').style.display='none';
     document.getElementById('actualizarlazaro3').style.display='none';
     document.getElementById('actualizartulum1').style.display='none';
     document.getElementById('actualizartulum2').style.display='none';
     document.getElementById('actualizartulum3').style.display='none';
     document.getElementById('actualizarbacalar1').style.display='none';
     document.getElementById('actualizarbacalar2').style.display='none';
     document.getElementById('actualizarbacalar3').style.display='none';
     document.getElementById('actualizarothon1').style.display='none';
     document.getElementById('actualizarothon2').style.display='none';
     document.getElementById('actualizarothon3').style.display='none';
     document.getElementById('actualizarbenito1').style.display='none';
     document.getElementById('actualizarbenito2').style.display='none';
     document.getElementById('actualizarbenito3').style.display='none';
     document.getElementById('actualizarcozumel1').style.display='none';
     document.getElementById('actualizarcozumel2').style.display='none';
     document.getElementById('actualizarcozumel3').style.display='none';
     document.getElementById('actualizarisla1').style.display='none';
     document.getElementById('actualizarisla2').style.display='none';
     document.getElementById('actualizarisla3').style.display='none';
     document.getElementById('actualizarsolidaridad1').style.display='none';
     document.getElementById('actualizarsolidaridad2').style.display='flex';
     document.getElementById('actualizarsolidaridad3').style.display='none';
     document.getElementById('actualizarpuerto1').style.display='none';
     document.getElementById('actualizarpuerto2').style.display='none';
     document.getElementById('actualizarpuerto3').style.display='none';/////////////////////////////////////////////////////
     let i = 0;
      const element = document.getElementById('actualizarsolidaridad2-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarsolidaridad2-s').value;
        if ( a == 0 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 4 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 6 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 7 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 8 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 9 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 10 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 11 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 12 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 15 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 16 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 17 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 18 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 19 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 21 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
      }}});
    }else if(año == 2){
      document.getElementById('año1').innerHTML="137";
      document.getElementById('año2').innerHTML="$1 MP";
      document.getElementById('año3').innerHTML="55";
      document.getElementById('año4').innerHTML="626";
      document.getElementById('año5').innerHTML="$1 MP";
      document.getElementById('año6').innerHTML="576";

       document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='red';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';

          document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='flex';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
let i = 0;
      const element = document.getElementById('actualizarjose2-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarjose2-s').value;
        if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 4 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 6 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 7 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 8 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 9 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 10 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 11 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 12 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 15 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 16 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 17 ){
         document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 18 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 19 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }}});
    }else if(año == 3){
      document.getElementById('año1').innerHTML="747";
      document.getElementById('año2').innerHTML="$7 MP";
      document.getElementById('año3').innerHTML="258 ";
      document.getElementById('año4').innerHTML="1967";
      document.getElementById('año5').innerHTML="$7 MP";
      document.getElementById('año6').innerHTML="1776";

      document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';


      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='#EDEDED';
      document.getElementById('d').style.backgroundColor='red';
      document.getElementById('e').style.backgroundColor='#EDEDED';
      document.getElementById('actualizarfelipe1').style.display='none';
      document.getElementById('actualizarfelipe2').style.display='none';
      document.getElementById('actualizarfelipe3').style.display='none';
      document.getElementById('actualizarjose1').style.display='none';
      document.getElementById('actualizarjose2').style.display='none';
     document.getElementById('actualizarjose3').style.display='none';
     document.getElementById('actualizarlazaro1').style.display='none';
     document.getElementById('actualizarlazaro2').style.display='none';
     document.getElementById('actualizarlazaro3').style.display='none';
     document.getElementById('actualizartulum1').style.display='none';
     document.getElementById('actualizartulum2').style.display='none';
     document.getElementById('actualizartulum3').style.display='none';
     document.getElementById('actualizarbacalar1').style.display='none';
     document.getElementById('actualizarbacalar2').style.display='none';
     document.getElementById('actualizarbacalar3').style.display='none';
     document.getElementById('actualizarothon1').style.display='none';
     document.getElementById('actualizarothon2').style.display='none';
     document.getElementById('actualizarothon3').style.display='none';
     document.getElementById('actualizarbenito1').style.display='none';
     document.getElementById('actualizarbenito2').style.display='none';
     document.getElementById('actualizarbenito3').style.display='none';
     document.getElementById('actualizarcozumel1').style.display='none';
     document.getElementById('actualizarcozumel2').style.display='none';
     document.getElementById('actualizarcozumel3').style.display='none';
     document.getElementById('actualizarisla1').style.display='none';
     document.getElementById('actualizarisla2').style.display='none';
     document.getElementById('actualizarisla3').style.display='none';
     document.getElementById('actualizarsolidaridad1').style.display='none';
     document.getElementById('actualizarsolidaridad2').style.display='none';
     document.getElementById('actualizarsolidaridad3').style.display='flex';
     document.getElementById('actualizarpuerto1').style.display='none';
     document.getElementById('actualizarpuerto2').style.display='none';
     document.getElementById('actualizarpuerto3').style.display='none';
     let i = 0;
      const element = document.getElementById('actualizarsolidaridad3-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarsolidaridad3-s').value;
        if ( a == 0 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 4 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 6 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 7 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 8 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 9 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 10 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 11 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 12 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 15 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 16 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 17 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 18 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 19 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 21 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
      }}});
    }else if(año == 2){
      document.getElementById('año1').innerHTML="137";
      document.getElementById('año2').innerHTML="$1 MP";
      document.getElementById('año3').innerHTML="55";
      document.getElementById('año4').innerHTML="626";
      document.getElementById('año5').innerHTML="$1 MP";
      document.getElementById('año6').innerHTML="576";

       document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='red';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';

          document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='flex';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
let i = 0;
      const element = document.getElementById('actualizarjose2-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarjose2-s').value;
        if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 4 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 6 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 7 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 8 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 9 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 10 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 11 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 12 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 15 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 16 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 17 ){
         document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 18 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 19 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }}});
    }else if(año == 4){
      document.getElementById('año1').innerHTML="3089";
      document.getElementById('año2').innerHTML="$35 MP";
      document.getElementById('año3').innerHTML="1671";
      document.getElementById('año4').innerHTML="13332";
      document.getElementById('año5').innerHTML="$40.6 MP";
      document.getElementById('año6').innerHTML="12265";

      document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='#EDEDED';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_ocho').style.backgroundColor='#EDEDED';
      document.getElementById('m_nueve').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='#EDEDED';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='red';
    }
  });
  const element10 = document.getElementById('m_once')///////////////////////////////////////
  element10.addEventListener("click", () => {

    if(año == 1 ){
      document.getElementById('año1').innerHTML="-";
      document.getElementById('año2').innerHTML="$- MP";
      document.getElementById('año3').innerHTML="-";
      document.getElementById('año4').innerHTML="2";
      document.getElementById('año5').innerHTML="$5 000 P";
      document.getElementById('año6').innerHTML="2";
     
      document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='#EDEDED';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_ocho').style.backgroundColor='#EDEDED';
      document.getElementById('m_nueve').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='red';

      document.getElementById('b').style.backgroundColor='red';
      document.getElementById('c').style.backgroundColor='#EDEDED';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';
      document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='none';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='flex';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
   let i = 0;
      const element = document.getElementById('actualizarpuerto1-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarpuerto1-s').value;
        if ( a == 0 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 4 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 6 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 7 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 8 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 9 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 10 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 11 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 12 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 15 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 16 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 17 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 18 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 19 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 21 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
      }}});
    }else if(año == 2){
      document.getElementById('año1').innerHTML="137";
      document.getElementById('año2').innerHTML="$1 MP";
      document.getElementById('año3').innerHTML="55";
      document.getElementById('año4').innerHTML="626";
      document.getElementById('año5').innerHTML="$1 MP";
      document.getElementById('año6').innerHTML="576";

       document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='red';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';

          document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='flex';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
let i = 0;
      const element = document.getElementById('actualizarjose2-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarjose2-s').value;
        if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 4 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 6 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 7 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 8 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 9 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 10 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 11 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 12 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 15 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 16 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 17 ){
         document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 18 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 19 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }}});
    }else if(año == 2){
      document.getElementById('año1').innerHTML="-";
      document.getElementById('año2').innerHTML="$- MP";
      document.getElementById('año3').innerHTML="-";
      document.getElementById('año4').innerHTML="1"
      document.getElementById('año5').innerHTML="$2000 P";
      document.getElementById('año6').innerHTML="1";

      document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='#EDEDED';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='red';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';
      document.getElementById('actualizarfelipe1').style.display='none';
      document.getElementById('actualizarfelipe2').style.display='none';
      document.getElementById('actualizarfelipe3').style.display='none';
      document.getElementById('actualizarjose1').style.display='none';
      document.getElementById('actualizarjose2').style.display='none';
     document.getElementById('actualizarjose3').style.display='none';
     document.getElementById('actualizarlazaro1').style.display='none';
     document.getElementById('actualizarlazaro2').style.display='none';
     document.getElementById('actualizarlazaro3').style.display='none';
     document.getElementById('actualizartulum1').style.display='none';
     document.getElementById('actualizartulum2').style.display='none';
     document.getElementById('actualizartulum3').style.display='none';
     document.getElementById('actualizarbacalar1').style.display='none';
     document.getElementById('actualizarbacalar2').style.display='none';
     document.getElementById('actualizarbacalar3').style.display='none';
     document.getElementById('actualizarothon1').style.display='none';
     document.getElementById('actualizarothon2').style.display='none';
     document.getElementById('actualizarothon3').style.display='none';
     document.getElementById('actualizarbenito1').style.display='none';
     document.getElementById('actualizarbenito2').style.display='none';
     document.getElementById('actualizarbenito3').style.display='none';
     document.getElementById('actualizarcozumel1').style.display='none';
     document.getElementById('actualizarcozumel2').style.display='none';
     document.getElementById('actualizarcozumel3').style.display='none';
     document.getElementById('actualizarisla1').style.display='none';
     document.getElementById('actualizarisla2').style.display='none';
     document.getElementById('actualizarisla3').style.display='none';
     document.getElementById('actualizarsolidaridad1').style.display='none';
     document.getElementById('actualizarsolidaridad2').style.display='none';
     document.getElementById('actualizarsolidaridad3').style.display='none';
     document.getElementById('actualizarpuerto1').style.display='none';
     document.getElementById('actualizarpuerto2').style.display='flex';
     document.getElementById('actualizarpuerto3').style.display='none';
     let i = 0;
      const element = document.getElementById('actualizarpuerto2-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarpuerto2-s').value;
        if ( a == 0 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 4 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 6 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 7 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 8 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 9 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 10 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 11 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 12 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 15 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 16 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 17 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 18 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 19 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 21 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
      }}});
    }else if(año == 2){
      document.getElementById('año1').innerHTML="137";
      document.getElementById('año2').innerHTML="$1 MP";
      document.getElementById('año3').innerHTML="55";
      document.getElementById('año4').innerHTML="626";
      document.getElementById('año5').innerHTML="$1 MP";
      document.getElementById('año6').innerHTML="576";

       document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='red';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';

          document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='flex';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
let i = 0;
      const element = document.getElementById('actualizarjose2-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarjose2-s').value;
        if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 4 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 6 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 7 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 8 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 9 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 10 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 11 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 12 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 15 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 16 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 17 ){
         document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 18 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 19 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }}});
    }else if(año == 3){
      document.getElementById('año1').innerHTML="747";
      document.getElementById('año2').innerHTML="$7 MP";
      document.getElementById('año3').innerHTML="258 ";
      document.getElementById('año4').innerHTML="1967";
      document.getElementById('año5').innerHTML="$7 MP";
      document.getElementById('año6').innerHTML="1776";

      document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';


      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='#EDEDED';
      document.getElementById('d').style.backgroundColor='red';
      document.getElementById('e').style.backgroundColor='#EDEDED';
      document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='none';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='flex';
   let i = 0;
      const element = document.getElementById('actualizarpuerto3-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarpuerto3-s').value;
        if ( a == 0 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 4 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 6 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 7 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 8 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
        }if ( a == 9 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 10 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 11 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 12 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 15 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 16 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 17 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 18 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 19 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO3();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
        }if ( a == 21 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO3();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO3();
    
      }}});
    }else if(año == 2){
      document.getElementById('año1').innerHTML="137";
      document.getElementById('año2').innerHTML="$1 MP";
      document.getElementById('año3').innerHTML="55";
      document.getElementById('año4').innerHTML="626";
      document.getElementById('año5').innerHTML="$1 MP";
      document.getElementById('año6').innerHTML="576";

       document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='red';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';

          document.getElementById('actualizarfelipe1').style.display='none';
    document.getElementById('actualizarfelipe2').style.display='none';
    document.getElementById('actualizarfelipe3').style.display='none';
    document.getElementById('actualizarjose1').style.display='none';
    document.getElementById('actualizarjose2').style.display='flex';
   document.getElementById('actualizarjose3').style.display='none';
   document.getElementById('actualizarlazaro1').style.display='none';
   document.getElementById('actualizarlazaro2').style.display='none';
   document.getElementById('actualizarlazaro3').style.display='none';
   document.getElementById('actualizartulum1').style.display='none';
   document.getElementById('actualizartulum2').style.display='none';
   document.getElementById('actualizartulum3').style.display='none';
   document.getElementById('actualizarbacalar1').style.display='none';
   document.getElementById('actualizarbacalar2').style.display='none';
   document.getElementById('actualizarbacalar3').style.display='none';
   document.getElementById('actualizarothon1').style.display='none';
   document.getElementById('actualizarothon2').style.display='none';
   document.getElementById('actualizarothon3').style.display='none';
   document.getElementById('actualizarbenito1').style.display='none';
   document.getElementById('actualizarbenito2').style.display='none';
   document.getElementById('actualizarbenito3').style.display='none';
   document.getElementById('actualizarcozumel1').style.display='none';
   document.getElementById('actualizarcozumel2').style.display='none';
   document.getElementById('actualizarcozumel3').style.display='none';
   document.getElementById('actualizarisla1').style.display='none';
   document.getElementById('actualizarisla2').style.display='none';
   document.getElementById('actualizarisla3').style.display='none';
   document.getElementById('actualizarsolidaridad1').style.display='none';
   document.getElementById('actualizarsolidaridad2').style.display='none';
   document.getElementById('actualizarsolidaridad3').style.display='none';
   document.getElementById('actualizarpuerto1').style.display='none';
   document.getElementById('actualizarpuerto2').style.display='none';
   document.getElementById('actualizarpuerto3').style.display='none';
let i = 0;
      const element = document.getElementById('actualizarjose2-s')/////////////////////////////////////////////////////////////
      element.addEventListener("click", () => {
        i++;

        if( i%2 == 0){
        let a = document.getElementById('actualizarjose2-s').value;
        if ( a == 1 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 2 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 3 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 4 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 5 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 6 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 7 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 8 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 9 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 10 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 11 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 12 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 13 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
        }if ( a == 14 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 15 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 16 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 17 ){
         document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 18 ){
            document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 19 ){
           document.getElementById('año1').innerHTML=ALEATORIO1();
      document.getElementById('año2').innerHTML=ALEATORIO2();
      document.getElementById('año3').innerHTML=ALEATORIO1();
      document.getElementById('año4').innerHTML=ALEATORIO1();
      document.getElementById('año5').innerHTML=ALEATORIO2();
      document.getElementById('año6').innerHTML=ALEATORIO1();
    
        }if ( a == 20 ){
          document.getElementById('año1').innerHTML=ALEATORIO1();
          document.getElementById('año2').innerHTML=ALEATORIO2();
          document.getElementById('año3').innerHTML=ALEATORIO1();
          document.getElementById('año4').innerHTML=ALEATORIO1();
          document.getElementById('año5').innerHTML=ALEATORIO2();
          document.getElementById('año6').innerHTML=ALEATORIO1();
    
        } }});
    }else if(año == 4){
      document.getElementById('año1').innerHTML="3089";
      document.getElementById('año2').innerHTML="$35 MP";
      document.getElementById('año3').innerHTML="1671";
      document.getElementById('año4').innerHTML="13332";
      document.getElementById('año5').innerHTML="$40.6 MP";
      document.getElementById('año6').innerHTML="12265";

      document.getElementById('m_uno').style.backgroundColor='#EDEDED';
      document.getElementById('m_dos').style.backgroundColor='#EDEDED';
      document.getElementById('m_tres').style.backgroundColor='#EDEDED';
      document.getElementById('m_cuatro').style.backgroundColor='#EDEDED';
      document.getElementById('m_cinco').style.backgroundColor='#EDEDED';
      document.getElementById('m_seis').style.backgroundColor='#EDEDED';
      document.getElementById('m_siete').style.backgroundColor='#EDEDED';
      document.getElementById('m_ocho').style.backgroundColor='#EDEDED';
      document.getElementById('m_nueve').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='#EDEDED';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='red';
    }
  });
}


