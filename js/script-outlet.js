let paginazione = document.querySelector('#paginazione');
let tendina = document.querySelector('#tendina');  // di default style:dispaly:none
let containerMostra = document.querySelector('#container-mostra');  
let numeroMostrato = document.querySelector('.numero-mostrato');  // elemento p che mostra il numero selezionato
let valore5 = document.querySelector('#valore-5');  
let valore10 = document.querySelector('#valore-10');  
let valore15 = document.querySelector('#valore-15');  
let valore20 = document.querySelector('#valore-20');  

let schedaProdotto = document.querySelectorAll('.box-product');

let tastoAumenta = document.querySelectorAll('#tasto-aumenta');  
let tastoDiminuisci = document.querySelectorAll('#tasto-diminuisci');  
let numQuantita = document.querySelectorAll('#num-quantita');  // 1




let numTotProdotti = document.querySelector('#tot-num-prodotti');
numTotProdotti.textContent = `(${schedaProdotto.length})`;


 



for(let i = 0; i < tastoAumenta.length; i++ ) {
    tastoAumenta[i].addEventListener('click', function() {
        if(numQuantita[i].value !== '999') {
            numQuantita[i].value++;
            
        }
    })
}   


for(let i = 0; i < tastoDiminuisci.length; i++ ) {
    tastoDiminuisci[i].addEventListener('click', function() {
        if(numQuantita[i].value !== '1') {
            numQuantita[i].value--;
            
        }
    })
    
} 
 
let numCarrelloDin = document.querySelectorAll('#num-carrello-din')


for(let i = 0; i < numQuantita.length; i++ ) {
    numQuantita[i].value = 1;
    numQuantita[i].addEventListener('change', function(){
        if(numQuantita[i].value < 1){
            numQuantita[i].value = 1;
        }
        if(numQuantita[i].value > 999){
            numQuantita[i].value = 999;
        }
    })
}


let addCarOut = document.querySelectorAll('#add-car-out');


for(let i = 0; i < addCarOut.length; i++){
    addCarOut[i].addEventListener('click', function(e){
        e.preventDefault();
       
        numCarrelloDin[i].textContent = numQuantita[i].value;
        
    })
}



numeroMostrato.textContent = '5';



// for(let i = 0; i < schedaProdotto.length; i++) {
//     schedaProdotto[i].style.display = 'none';
// }

tendina.style.display = 'none';


for(let i = 0; i < 5; i++) {
    schedaProdotto[i].style.display = 'block';
}

containerMostra.addEventListener('click', function(e) {
    e.stopPropagation();
    tendina.style.display = 'block';
   
    
})

document.body.addEventListener('click', function(e) {
 

 if(e.target !== containerMostra ) {
    tendina.style.display = 'none';
 }
      

})

valore5.addEventListener('click', function(e) {
    e.stopPropagation();
    numeroMostrato.textContent = '5';
    tendina.style.display = 'none';
    for(let i = 0; i < schedaProdotto.length; i++) {
        schedaProdotto[i].style.display = 'none';
    }
    for(let i = 0; i < 5; i++) {
        schedaProdotto[i].style.display = 'block';
    }
   
})

valore10.addEventListener('click', function(e) {
    e.stopPropagation();
    numeroMostrato.textContent = '10';
    tendina.style.display = 'none';
    for(let i = 0; i < schedaProdotto.length; i++) {
        schedaProdotto[i].style.display = 'none';
    }
    for(let i = 0; i < 10; i++) {
        schedaProdotto[i].style.display = 'block';
    }
   
})
valore15.addEventListener('click', function(e) {
    e.stopPropagation();
    numeroMostrato.textContent = '15';
    tendina.style.display = 'none';
    for(let i = 0; i < schedaProdotto.length; i++) {
        schedaProdotto[i].style.display = 'none';
    }
    for(let i = 0; i < 15; i++) {
        schedaProdotto[i].style.display = 'block';
    }
})
valore20.addEventListener('click', function(e) {
    e.stopPropagation();
    numeroMostrato.textContent = '20';
    tendina.style.display = 'none';
    for(let i = 0; i < schedaProdotto.length; i++) {
        schedaProdotto[i].style.display = 'none';
    }
    for(let i = 0; i < 20; i++) {
        schedaProdotto[i].style.display = 'block';
    }
})

let tornaSu = document.querySelectorAll('.torna-su');
let section2 = document.querySelector('#section-2')
let bottoneScopriOfferta = document.querySelector('#button-scopri-offerta');





// bottoneScopriOfferta.addEventListener('click', function(e) {
// e.preventDefault();
//     section2.scrollIntoView({behavior:'smooth'});
// })    


// for(let i = 0; i < tornaSu.length; i++){
//     window.addEventListener('scroll', function() {
  
//         if(window.pageYOffset > 1000) {
//             tornaSu[i].classList.add('torna-su-big');
//         }  else {
//             tornaSu[i].classList.remove('torna-su-big');
//         }
    
//     }) 
//     tornaSu[i].addEventListener('click', function() {
//         section2.scrollIntoView({behavior:'smooth'});
//     })
// }

  

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

let avvisoDisponibile = document.querySelectorAll('.riga-cella-non-disponibile .riga-cella-2');

for(let i = 0; i < avvisoDisponibile.length; i++){
    avvisoDisponibile[i].addEventListener('click', function(e){
      alert('Ti avviseremo non appena il prodotto sarà nuovamente disponibile');
    })
}
