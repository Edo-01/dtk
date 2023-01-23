

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










let tastoAumenta = document.querySelectorAll('#tasto-aumenta');  
let tastoDiminuisci = document.querySelectorAll('#tasto-diminuisci');  
let numQuantita = document.querySelectorAll('#num-quantita');  // 1


for(let i = 0; i < numQuantita.length; i++ ) {
    numQuantita[i].textContent = 1;
}



for(let i = 0; i < tastoAumenta.length; i++ ) {
    tastoAumenta[i].addEventListener('click', function() {
        if(numQuantita[i].textContent !== '100') {
            numQuantita[i].textContent++;
            
        }
    })
}   


for (let i = 0; i < tastoDiminuisci.length; i++) {
    tastoDiminuisci[i].addEventListener('click', function () {
        if (numQuantita[i].textContent !== '1') {
            numQuantita[i].textContent--;

        }
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