

let frecciaCaroselloSx = document.querySelector('#freccia-corosello-sx');
let frecciaCaroselloDx = document.querySelector('#freccia-corosello-dx');

let boxCarosello = document.querySelector('#box-carosello');
let immmaginiCrosello = document.querySelectorAll('#box-carosello img');
let immagineEvidenza = document.querySelector('#immagine-evidenza');

let larghezzaCarosello = boxCarosello.offsetWidth;




frecciaCaroselloDx.addEventListener('click', function() {
    boxCarosello.scrollBy({top:0, left:larghezzaCarosello/5, behavior:'smooth'});
})
frecciaCaroselloSx.addEventListener('click', function() {
    boxCarosello.scrollBy({top:0, left:-larghezzaCarosello/5, behavior:'smooth'});
})

for(let i = 0; i < immmaginiCrosello.length; i++) {
    immmaginiCrosello[i].addEventListener('click', function(){
        immagineEvidenza.src = immmaginiCrosello[i].src;
    })
}



let frecciaCaroselloSxEsteso = document.querySelector('#freccia-corosello-sx-esteso');
let frecciaCaroselloDxEsteso = document.querySelector('#freccia-corosello-dx-esteso');

let boxCaroselloEsteso = document.querySelector('#box-carosello-esteso');
let immmaginiCroselloEsteso = document.querySelectorAll('#box-carosello-esteso img');
let immagineEvidenzaEsteso = document.querySelector('#immagine-evidenza-esteso');

let larghezzaCaroselloEsteso = boxCaroselloEsteso.offsetWidth;


frecciaCaroselloDxEsteso.addEventListener('click', function() {
    boxCaroselloEsteso.scrollBy({top:0, left:larghezzaCaroselloEsteso/10, behavior:'smooth'});
})
frecciaCaroselloSxEsteso.addEventListener('click', function() {
    boxCaroselloEsteso.scrollBy({top:0, left:-larghezzaCaroselloEsteso/10, behavior:'smooth'});
})

for(let i = 0; i < immmaginiCroselloEsteso.length; i++) {
    immmaginiCroselloEsteso[i].addEventListener('click', function(){
        immagineEvidenzaEsteso.src = immmaginiCroselloEsteso[i].src;
    })
}


let tastoAumentaMain = document.querySelectorAll('#tasto-aumenta-main');  
let tastoDiminuisciMain = document.querySelectorAll('#tasto-diminuisci-main');  
let numQuantitaMain = document.querySelectorAll('#num-quantita-main');  // 1
for(let i = 0; i < tastoAumentaMain.length; i++ ) {
    tastoAumentaMain[i].addEventListener('click', function() {
        if(numQuantitaMain[i].value !== '999') {
            numQuantitaMain[i].value++;
            
        }
    })
}   


for(let i = 0; i < tastoDiminuisciMain.length; i++ ) {
    tastoDiminuisciMain[i].addEventListener('click', function() {
        if(numQuantitaMain[i].value !== '1') {
            numQuantitaMain[i].value--;
            
        }
    })
    
} 


 




let tastoAumenta = document.querySelectorAll('#tasto-aumenta');  
let tastoDiminuisci = document.querySelectorAll('#tasto-diminuisci');  
let numQuantita = document.querySelectorAll('#num-quantita');  // 1



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











let divCarrelloDin = document.querySelectorAll('.carrello-dinamico');
let numCarrelloDin = document.querySelectorAll('#num-carrello-din')



for(let i = 0; i < divCarrelloDin.length; i++ ) { // nascondo tutti i carrelli dinamici gialli
    divCarrelloDin[i].style.display = 'none';
}




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
        divCarrelloDin[i].removeAttribute('style');
        numCarrelloDin[i].textContent = numQuantita[i].value;
        
    })
}




let chiudiCaroselloEsteso = document.querySelector('#chiudi-carosello-esteso');
let sezioneCaroselloEsteso = document.querySelector('.zoom-carosello');

sezioneCaroselloEsteso.style.display = 'none';

chiudiCaroselloEsteso.addEventListener('click', function(){
    sezioneCaroselloEsteso.style.display = 'none';

})


 

let veloHoverImg = document.querySelector('#over-text');








immagineEvidenza.addEventListener('mouseover', function (e) {
    
    veloHoverImg.classList.remove('scala-piccolo');
})

veloHoverImg.addEventListener('mouseleave', function(e) {
    
    veloHoverImg.classList.add('scala-piccolo');
})

let openOverView = document.querySelector('#open-overview');

openOverView.addEventListener('click', function(){
    sezioneCaroselloEsteso.removeAttribute('style');
    immagineEvidenzaEsteso.src = immagineEvidenza.src;
    
})





let tastoMostraModelli1 = document.querySelector('.linea-modelli-compatibili h3');
let tastoMostraModelli2 = document.querySelector('.linea-modelli-compatibili img');
let contenutoModelli = document.querySelector('#contenuto-modelli');

contenutoModelli.style.display = 'none';

tastoMostraModelli1.addEventListener('click', function(){
    if(contenutoModelli.style.display == 'none'){
        contenutoModelli.removeAttribute('style');
        tastoMostraModelli2.src = 'img/vai-pos-meno.svg';
        contenutoModelli.previousElementSibling.classList.add('no-border');
    } else {
        contenutoModelli.style.display = 'none';
        tastoMostraModelli2.src = 'img/vai-pos.svg';
        contenutoModelli.previousElementSibling.classList.remove('no-border');
    }
})
tastoMostraModelli2.addEventListener('click', function(){
    if(contenutoModelli.style.display == 'none'){
        contenutoModelli.removeAttribute('style');
        tastoMostraModelli2.src = 'img/vai-pos-meno.svg';
        contenutoModelli.previousElementSibling.classList.add('no-border');
    } else {
        contenutoModelli.style.display = 'none';
        tastoMostraModelli2.src = 'img/vai-pos.svg';
        contenutoModelli.previousElementSibling.classList.remove('no-border');
    }
})



let tastoMostraCodici1 = document.querySelector('.linea-codici-oem h3');
let tastoMostraCodici2 = document.querySelector('.linea-codici-oem img');
let contenutoCodici = document.querySelector('#contenuto-codici');

contenutoCodici.style.display = 'none';

tastoMostraCodici1.addEventListener('click', function(){
    if(contenutoCodici.style.display == 'none'){
        contenutoCodici.removeAttribute('style');
        tastoMostraCodici2.src = 'img/vai-pos-meno.svg';
        contenutoCodici.previousElementSibling.classList.add('no-border');
    } else {
        contenutoCodici.style.display = 'none';
        tastoMostraCodici2.src = 'img/vai-pos.svg';
        contenutoCodici.previousElementSibling.classList.remove('no-border');
    }
})
tastoMostraCodici2.addEventListener('click', function(){
    if(contenutoCodici.style.display == 'none'){
        contenutoCodici.removeAttribute('style');
        tastoMostraCodici2.src = 'img/vai-pos-meno.svg';
        contenutoCodici.previousElementSibling.classList.add('no-border');
    } else {
        contenutoCodici.style.display = 'none';
        tastoMostraCodici2.src = 'img/vai-pos.svg';
        contenutoCodici.previousElementSibling.classList.remove('no-border');
    }
})

