if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Registro de SW exitoso', reg))
      .catch(err => console.warn('Error al tratar de registrar el sw', err))
  }


  
 function cambio2(saludo) {

  if(saludo == 1 ){
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

    
    return (1);


  } if(saludo == 2){
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
    return (2);
  }if(saludo == 3){
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
  }if(saludo == 4){
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
}


