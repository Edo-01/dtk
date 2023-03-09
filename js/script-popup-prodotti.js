let sfondoPopUp = document.querySelector('.sfondo-popup-outlet');
sfondoPopUp.style.display = 'none';

let popUpInfo = document.querySelector('.popup-more-info');
popUpInfo.style.display = 'none';

let popUpkit = document.querySelector('.popup-articoli-kit');
popUpkit.style.display = 'none';

let popUpSconto = document.querySelector('.popup-sconto-scatola');
popUpSconto.style.display = 'none';

let bottonInfoDisp = document.querySelectorAll('.info-disp');
let bottonArticoliKit = document.querySelectorAll('.bottone-articoli-kit');
let bottonSconto = document.querySelectorAll('.bottone-sconto-scatola');

for(let i = 0; i < bottonInfoDisp.length; i++){
    bottonInfoDisp[i].addEventListener('click', function(e){
        sfondoPopUp.removeAttribute('style');
        popUpInfo.removeAttribute('style');
        document.body.style.overflow = 'hidden';
        e.stopPropagation();
    })
}
for(let i = 0; i < bottonArticoliKit.length; i++){
    bottonArticoliKit[i].addEventListener('click', function(e){
        sfondoPopUp.removeAttribute('style');
        popUpkit.removeAttribute('style');
        document.body.style.overflow = 'hidden';
        e.stopPropagation();
    })
}
for(let i = 0; i < bottonSconto.length; i++){
    bottonSconto[i].addEventListener('click', function(e){
        sfondoPopUp.removeAttribute('style');
        popUpSconto.removeAttribute('style');
        document.body.style.overflow = 'hidden';
        e.stopPropagation();
    })
}


popUpInfo.addEventListener('click', function(e) {   // CREO EVENTO DI CLICK AL POPUP SOLAMENTE PER ESCLUDERE LA PROPAGAZIONE DELL EVENTO CLICK DI CHUSURA DEL BODY
    e.stopPropagation();
})
popUpkit.addEventListener('click', function(e) {   // CREO EVENTO DI CLICK AL POPUP SOLAMENTE PER ESCLUDERE LA PROPAGAZIONE DELL EVENTO CLICK DI CHUSURA DEL BODY
    e.stopPropagation();
})
popUpSconto.addEventListener('click', function(e) {   // CREO EVENTO DI CLICK AL POPUP SOLAMENTE PER ESCLUDERE LA PROPAGAZIONE DELL EVENTO CLICK DI CHUSURA DEL BODY
    e.stopPropagation();
})


let chiudiPop = document.querySelectorAll('.chiudi-pop');

for(let i = 0; i < chiudiPop.length; i++){
    chiudiPop[i].addEventListener('click', function(){
        
        sfondoPopUp.style.display = 'none';
        popUpInfo.style.display = 'none';
        popUpkit.style.display = 'none';
        popUpSconto.style.display = 'none';
        document.body.removeAttribute('style');
    })
}


document.body.addEventListener('click', function() {   // PER CHIUDERE IL POPUP
    sfondoPopUp.style.display = 'none';
    popUpInfo.style.display = 'none';
    popUpkit.style.display = 'none';
    popUpSconto.style.display = 'none';
    document.body.removeAttribute('style');
    
})

let avvisoDisponibile = document.querySelectorAll('.campanella-non-disponibile');

for(let i = 0; i < avvisoDisponibile.length; i++){
    avvisoDisponibile[i].addEventListener('click', function(e){
      alert('Ti avviseremo non appena il prodotto sarà nuovamente disponibile');
    })
}
