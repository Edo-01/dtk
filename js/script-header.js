
let apriDropDesk = document.querySelector('#apri-drop-desk');
let dropdownDesk = document.querySelector('#dropdown-deskk');
let frecciaNav = document.querySelector('#freccia-nav');
let oscuranteDropdownDesk = document.querySelector('#oscurante-dropdown-desk');
let rowTreHeader = document.querySelector('#row-3-header');
let mainRowDue = document.querySelector('.main-row-2');

let inputModelli = document.querySelector('#input-modelli');
let inputCodici = document.querySelector('#input-codici');
let containerIcoCerca = document.querySelectorAll('.container-ico-cerca');
let tastiLog = document.querySelectorAll('.login');
let buttonOutlet = document.querySelector('.button-outlet');


window.addEventListener('scroll', function() {
  
  if(window.pageYOffset > 0) {
    rowTreHeader.classList.add('sfumata-scroll');
    mainRowDue.classList.add('altezza-ridotta');
    inputModelli.classList.add('input-header-resize');
    inputCodici.classList.add('input-header-resize');
    for(let i = 0; i < containerIcoCerca.length; i++ ) {
      containerIcoCerca[i].classList.add('cerca-resize');
    }
    for(let i = 0; i < tastiLog.length; i++ ) {
      tastiLog[i].classList.add('tasti-log-resize');
    }
    // buttonOutlet.classList.add('tasti-log-resize');
  } else {
    rowTreHeader.classList.remove('sfumata-scroll');
    mainRowDue.classList.remove('altezza-ridotta');
    inputModelli.classList.remove('input-header-resize');
    inputCodici.classList.remove('input-header-resize');
    for(let i = 0; i < containerIcoCerca.length; i++ ) {
      containerIcoCerca[i].classList.remove('cerca-resize');
    }
    for(let i = 0; i < tastiLog.length; i++ ) {
      tastiLog[i].classList.remove('tasti-log-resize');
    }
    // buttonOutlet.classList.remove('tasti-log-resize');
  }
 
 
  
  
});

// window.addEventListener('scroll', function() {
  
//   if(window.pageYOffset > 0) {
//     mainRowDue.classList.add('altezza-ridotta');
//   } else {
//     mainRowDue.classList.remove('altezza-ridotta');
//   }
 
  
  
// });




apriDropDesk.addEventListener('click', function(e) {
  e.preventDefault();
  dropdownDesk.classList.add('muovi-drop-desk');
  dropdownDesk.classList.remove('esci-drop-desk');
  frecciaNav.classList.add('freccia-menu');
  frecciaNav.classList.remove('freccia-menu-chiudi');

});  

 
document.body.addEventListener('click', function(e) {
  if(e.target !== apriDropDesk) {
    dropdownDesk.classList.remove('muovi-drop-desk');
    dropdownDesk.classList.add('esci-drop-desk');
    frecciaNav.classList.remove('freccia-menu');
    frecciaNav.classList.add('freccia-menu-chiudi');
  }
    
    
});


let liMenu = document.querySelectorAll('.nav');  //tutti i Li del menu desk 
let linkMenu = document.querySelectorAll('.link-menu'); //tutti gli A del menu desk 
let paginaCorrente = window.location.href;



for (let i = 0; i < liMenu.length; i++) {
  if(paginaCorrente == linkMenu[i].href) {
    linkMenu[i].classList.add('sottolineaSi');
  }
}  



for (let i = 0; i < liMenu.length; i++) {
  liMenu[i].addEventListener('mouseover', function(){
    linkMenu[i].classList.remove('sottolineaNo');
    linkMenu[i].classList.add('sottolineaSi');
  })
}                                       

for (let i = 0; i < liMenu.length; i++) {
  liMenu[i].addEventListener('mouseout', function(){

      linkMenu[i].classList.add('sottolineaNo');
   

    
    
    if(paginaCorrente !== linkMenu[i].href ) {
      linkMenu[i].classList.remove('sottolineaSi');
    }
  })
}

if(window.location.pathname == '/prodotti/toner.html' || window.location.pathname == '/prodotti/ricambi.html' || window.location.pathname == '/prodotti/laser-print.html' || window.location.pathname == '/prodotti/opc-drum.html' || window.location.pathname == '/prodotti/accessori.html') {
  linkMenu[2].classList.add('sottolineaSi');
}


console.log(linkMenu[1].href);  // http://127.0.0.1:5500/chi-siamo.html
console.log(window.location.pathname);  // /chi-siamo.html






let apriSecondoMenu = document.querySelector('#apri-second-menu');
let secondMenu = document.querySelector('#second-menu');
let closeSecondMenu = document.querySelector('#close-second-menu');


apriSecondoMenu.addEventListener('click', function() {
  event.preventDefault();
  secondMenu.classList.remove('secondo-dropdown-mobile');
  secondMenu.classList.remove('uscita-secondo-dropdown-mobile');
  secondMenu.classList.add('entra-secondo-dropdown-mobile');
});

closeSecondMenu.addEventListener('click', function() {
  secondMenu.classList.remove('entra-secondo-dropdown-mobile');
  secondMenu.classList.add('uscita-secondo-dropdown-mobile');
  secondMenu.classList.add('secondo-dropdown-mobile');
});

let apriMenuMob = document.querySelector('#apri-menu-mob');
let primoMenuMobile = document.querySelector('#primo-menu-mobile');
let sfondoMenuMob = document.querySelector('#sfondo-menu-mob')
let clickToClose = document.querySelector('#click-to-close');

apriMenuMob.addEventListener('click', function() {
  sfondoMenuMob.classList.add('dropdown-mobile-overlay');
  primoMenuMobile.classList.add('dropdown-mobile-enter');
  primoMenuMobile.classList.remove('dropdown-mobile-exit');
  primoMenuMobile.classList.remove('dropdown-mobile');
})




clickToClose.addEventListener('click', function() {
 
  sfondoMenuMob.classList.remove('dropdown-mobile-overlay');  //questo crea problema grafico alla chiusura del menu in mobile
  primoMenuMobile.classList.remove('dropdown-mobile-enter');
  secondMenu.classList.remove('entra-secondo-dropdown-mobile');
  secondMenu.classList.add('uscita-secondo-dropdown-mobile');
  secondMenu.classList.add('secondo-dropdown-mobile');
  primoMenuMobile.classList.add('dropdown-mobile-exit');
  primoMenuMobile.classList.add('dropdown-mobile');
 
    
  
  
  
})

let moduloLogin = document.querySelector('#modulo-login');
let sfondoModuloLogin = document.querySelector('#sfondo-modulo-login');
let tastoLoginDesk = document.querySelector('#tasto-login-desk');
let apriLoginMob = document.querySelector('#apri-login-mob');

let tastoRegistraMob = document.querySelector('#tasto-registra-mob');


let chiudiLog = document.querySelector('.chiudi-log');

chiudiLog.addEventListener('click', function() {
  document.body.removeAttribute('style');
  sfondoModuloLogin.style.display = 'none';
  moduloLogin.style.display = 'none';
  moduloLogin.classList.remove('entra-login');
})





function muoviLogin() {
  setTimeout(function() {
    moduloLogin.classList.add('entra-login'), 1000;
  })
}

tastoLoginDesk.addEventListener('click', function() {
  event.preventDefault();
  document.body.style.overflow = 'hidden';
  moduloLogin.removeAttribute('style');
  sfondoModuloLogin.removeAttribute('style');
  muoviLogin();
  
})

 apriLoginMob.addEventListener('click', function() {
  event.preventDefault();
  document.body.style.overflow = 'hidden';
  moduloLogin.removeAttribute('style');
  sfondoModuloLogin.removeAttribute('style');
  muoviLogin();
  
})

sfondoModuloLogin.addEventListener('click', function() {
  document.body.removeAttribute('style');
  sfondoModuloLogin.style.display = 'none';
  moduloLogin.style.display = 'none';
  moduloLogin.classList.remove('entra-login');
})  

tastoRegistraMob.addEventListener('click', function() {
  window.location.href = 'registrati.html';
})



inputCodici.addEventListener('focus', function() {
  inputCodici.classList.add('ricerca-focus');
  inputCodici.classList.remove('ricerca-no-focus');
  inputModelli.classList.add('ricerca-no-focus');
})

inputModelli.addEventListener('focus', function() {
  inputModelli.classList.add('ricerca-focus');
  inputModelli.classList.remove('ricerca-no-focus');
  inputCodici.classList.add('ricerca-no-focus');
})

document.body.addEventListener('click', function(e) {
  if(e.target !== inputCodici && e.target !== inputModelli) {
    inputModelli.classList.remove('ricerca-focus');
    inputCodici.classList.remove('ricerca-focus');
    inputModelli.classList.remove('ricerca-no-focus');
    inputCodici.classList.remove('ricerca-no-focus');
  }
})