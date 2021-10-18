if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Registro de SW exitoso', reg))
      .catch(err => console.warn('Error al tratar de registrar el sw', err))
  }


function cambio1() {
  document.getElementById('año1').innerHTML="1";
  document.getElementById('año2').innerHTML="1 mdp";
  document.getElementById('año3').innerHTML="1";
  document.getElementById('año4').innerHTML="1";
  document.getElementById('año5').innerHTML="1 mdp";
  document.getElementById('año6').innerHTML="1";
  document.getElementById('cambio2017').style.backgroundColor="red";
 }
 function cambio2() {
  document.getElementById('año1').innerHTML="2";
  document.getElementById('año2').innerHTML="2 mdp";
  document.getElementById('año3').innerHTML="2";
  document.getElementById('año4').innerHTML="2";
  document.getElementById('año5').innerHTML="2 mdp";
  document.getElementById('año6').innerHTML="2";
}
function cambio3() {
  document.getElementById('año1').innerHTML="3";
  document.getElementById('año2').innerHTML="3 mdp";
  document.getElementById('año3').innerHTML="3";
  document.getElementById('año4').innerHTML="3";
  document.getElementById('año5').innerHTML="3 mdp";
  document.getElementById('año6').innerHTML="3";
}
function cambio4() {
  document.getElementById('año1').innerHTML="4";
  document.getElementById('año2').innerHTML="4 mdp";
  document.getElementById('año3').innerHTML="4 ";
  document.getElementById('año4').innerHTML="4";
  document.getElementById('año5').innerHTML="4 mdp";
  document.getElementById('año6').innerHTML="4";
}
function cambio5() {
  document.getElementById('año1').innerHTML="3,089";
  document.getElementById('año2').innerHTML="35 mdp";
  document.getElementById('año3').innerHTML="1,671";
  document.getElementById('año4').innerHTML="13,332";
  document.getElementById('año5').innerHTML="40.6 mdp";
  document.getElementById('año6').innerHTML="12,265";
}
function cambio6() {
  document.getElementById('año1').innerHTML="6";
  document.getElementById('año2').innerHTML="6 mdp";
  document.getElementById('año3').innerHTML="6";
  document.getElementById('año4').innerHTML="6";
  document.getElementById('año5').innerHTML="6 mdp";
  document.getElementById('año6').innerHTML="6";
}





