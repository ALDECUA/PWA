if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Registro de SW exitoso', reg))
      .catch(err => console.warn('Error al tratar de registrar el sw', err))
  }


  
 function cambio2(año) {

  
  if(año == 1 ){
    document.getElementById('año1').innerHTML="1729";
    document.getElementById('año2').innerHTML="$21 MP";
    document.getElementById('año3').innerHTML="1125";
    document.getElementById('año4').innerHTML="6156";
    document.getElementById('año5').innerHTML="$17 MP";
    document.getElementById('año6').innerHTML="5732";
    document.getElementById('b').style.backgroundColor='red';
    document.getElementById('c').style.backgroundColor='#EDEDED';
    document.getElementById('d').style.backgroundColor='#EDEDED';
    document.getElementById('e').style.backgroundColor='#EDEDED';
  
 

  }else if(año == 2){
    document.getElementById('año1').innerHTML="613";
    document.getElementById('año2').innerHTML="$6 MP";
    document.getElementById('año3').innerHTML="290";
    document.getElementById('año4').innerHTML="2215"
    document.getElementById('año5').innerHTML="$5 MP";
    document.getElementById('año6').innerHTML="2035";
    document.getElementById('b').style.backgroundColor='#EDEDED';
    document.getElementById('c').style.backgroundColor='red';
    document.getElementById('d').style.backgroundColor='#EDEDED';
    document.getElementById('e').style.backgroundColor='#EDEDED';
    
  }else if(año == 3){
    document.getElementById('año1').innerHTML="747";
    document.getElementById('año2').innerHTML="$7 MP";
    document.getElementById('año3').innerHTML="258 ";
    document.getElementById('año4').innerHTML="1967";
    document.getElementById('año5').innerHTML="$7 MP";
    document.getElementById('año6').innerHTML="1776";
    document.getElementById('b').style.backgroundColor='#EDEDED';
    document.getElementById('c').style.backgroundColor='#EDEDED';
    document.getElementById('d').style.backgroundColor='red';
    document.getElementById('e').style.backgroundColor='#EDEDED';
    return (3);
  }else if(año == 4){
    document.getElementById('año1').innerHTML="3089";
    document.getElementById('año2').innerHTML="$35 MP";
    document.getElementById('año3').innerHTML="1671";
    document.getElementById('año4').innerHTML="13332";
    document.getElementById('año5').innerHTML="$40.6 MP";
    document.getElementById('año6').innerHTML="12265";
    document.getElementById('b').style.backgroundColor='#EDEDED';
    document.getElementById('c').style.backgroundColor='#EDEDED';
    document.getElementById('d').style.backgroundColor='#EDEDED';
    document.getElementById('e').style.backgroundColor='red';
    return (4);
  }


  const element = document.getElementById('m_uno')
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
      document.getElementById('m_ocho').style.backgroundColor='#EDEDED';
      document.getElementById('m_nueve').style.backgroundColor='#EDEDED';
      document.getElementById('m_diez').style.backgroundColor='#EDEDED';
      document.getElementById('m_once').style.backgroundColor='#EDEDED';

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';
      
    }else if(año == 3){
      document.getElementById('año1').innerHTML="253";
      document.getElementById('año2').innerHTML="$2 MP";
      document.getElementById('año3').innerHTML="92 ";
      document.getElementById('año4').innerHTML="1077";
      document.getElementById('año5').innerHTML="$4 MP";
      document.getElementById('año6').innerHTML="986";

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

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='#EDEDED';
      document.getElementById('d').style.backgroundColor='red';
      document.getElementById('e').style.backgroundColor='#EDEDED';
      return (3);

    }else if(año == 4){
      document.getElementById('año1').innerHTML="3089";
      document.getElementById('año2').innerHTML="$35 MP";
      document.getElementById('año3').innerHTML="1671";
      document.getElementById('año4').innerHTML="13332";
      document.getElementById('año5').innerHTML="$40.6 MP";
      document.getElementById('año6').innerHTML="12265";

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

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='#EDEDED';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='red';
      return (4);
    }

  });
  const element1 = document.getElementById('m_dos')
  element1.addEventListener("click", () => {

    if(año == 1 ){
      document.getElementById('año1').innerHTML="1729";
      document.getElementById('año2').innerHTML="$21 MP";
      document.getElementById('año3').innerHTML="1125";
      document.getElementById('año4').innerHTML="6156";
      document.getElementById('año5').innerHTML="$17 MP";
      document.getElementById('año6').innerHTML="5732";
     
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

    }else if(año == 2){
      document.getElementById('año1').innerHTML="613";
      document.getElementById('año2').innerHTML="$6 MP";
      document.getElementById('año3').innerHTML="290";
      document.getElementById('año4').innerHTML="2215"
      document.getElementById('año5').innerHTML="$5 MP";
      document.getElementById('año6').innerHTML="2035";

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

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='red';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='#EDEDED';
      
    }else if(año == 3){
      document.getElementById('año1').innerHTML="747";
      document.getElementById('año2').innerHTML="$7 MP";
      document.getElementById('año3').innerHTML="258 ";
      document.getElementById('año4').innerHTML="1967";
      document.getElementById('año5').innerHTML="$7 MP";
      document.getElementById('año6').innerHTML="1776";

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

      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='#EDEDED';
      document.getElementById('d').style.backgroundColor='red';
      document.getElementById('e').style.backgroundColor='#EDEDED';
      return (3);
    }else if(año == 4){
      document.getElementById('año1').innerHTML="3089";
      document.getElementById('año2').innerHTML="$35 MP";
      document.getElementById('año3').innerHTML="1671";
      document.getElementById('año4').innerHTML="13332";
      document.getElementById('año5').innerHTML="$40.6 MP";
      document.getElementById('año6').innerHTML="12265";

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
      
      document.getElementById('b').style.backgroundColor='#EDEDED';
      document.getElementById('c').style.backgroundColor='#EDEDED';
      document.getElementById('d').style.backgroundColor='#EDEDED';
      document.getElementById('e').style.backgroundColor='red';
      return (4);
    }
  });
}


