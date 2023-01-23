

let misUno = document.querySelector('#mis-1');
let misDue = document.querySelector('#mis-2');
let misTre = document.querySelector('#mis-3');
let misQuattro = document.querySelector('#mis-4');


window.addEventListener('scroll', function() {
    if(window.pageYOffset > 50) {
      misUno.classList.add('misuratore-pieno-1');
      misDue.classList.add('misuratore-pieno-2');
      misTre.classList.add('misuratore-pieno-3');
      misQuattro.classList.add('misuratore-pieno-4');
     
    } else if (window.pageYOffset < 49) {
      misUno.classList.remove('misuratore-pieno-1');
      misDue.classList.remove('misuratore-pieno-2');
      misTre.classList.remove('misuratore-pieno-3');
      misQuattro.classList.remove('misuratore-pieno-4');
      
    }
  });