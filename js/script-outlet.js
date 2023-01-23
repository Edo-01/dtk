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


for(let i = 0; i < tastoDiminuisci.length; i++ ) {
    tastoDiminuisci[i].addEventListener('click', function() {
        if(numQuantita[i].textContent !== '1') {
            numQuantita[i].textContent--;
            
        }
    })
    
} 










numeroMostrato.textContent = '5';



for(let i = 0; i < schedaProdotto.length; i++) {
    schedaProdotto[i].style.display = 'none';
}

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

let tornaSu = document.querySelector('#torna-su');
let section2 = document.querySelector('#section-2')
let bottoneScopriOfferta = document.querySelector('#button-scopri-offerta');





bottoneScopriOfferta.addEventListener('click', function(e) {
e.preventDefault();
    section2.scrollIntoView({behavior:'smooth'});
})    




window.addEventListener('scroll', function() {
  
    if(window.pageYOffset > 1000) {
        tornaSu.classList.add('torna-su-big');
    }  else {
        tornaSu.classList.remove('torna-su-big');
    }

})   


tornaSu.addEventListener('click', function() {
    section2.scrollIntoView({behavior:'smooth'});
})