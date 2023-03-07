
let imgProdottoPiccola = document.querySelectorAll('.apri-big');
let imgBig = document.querySelectorAll('.img-big');

let prodottoCarrello = document.querySelectorAll('.prodotto-carrello');
let prodttoCart = document.querySelectorAll('.cart');


for(let i = 0; i < prodottoCarrello.length; i++) {
    imgBig[i].style.display = 'none';
    imgProdottoPiccola[i].addEventListener('click', function(e) {
        imgBig[i].removeAttribute('style');
        e.stopPropagation();
    })
    imgBig[i].addEventListener('click',function(e){
        e.stopPropagation();
    })
 
    
}


for(let i = 0; i < prodottoCarrello.length; i++) {
    imgBig[i].style.display = 'none';
    imgProdottoPiccola[i].addEventListener('mouseover', function(e) {
        imgBig[i].removeAttribute('style');
        e.stopPropagation();
    })
    imgBig[i].addEventListener('click',function(e){
        e.stopPropagation();
    })
 
    
}

for(let i = 0; i < prodottoCarrello.length; i++) {
    
    imgBig[i].addEventListener('mouseout',function(){
        imgBig[i].style.display = 'none';
    })
 
    
}










document.body.addEventListener('click', function() {   // PER CHIUDERE IL POPUP
    for(let i = 0; i < prodottoCarrello.length; i++) {
        imgBig[i].style.display = 'none';
    }
})


let apriOem = document.querySelectorAll('.apri-oem');
let apriModelli = document.querySelectorAll('.apri-modelli');
let popOem = document.querySelectorAll('.pop-oem');
let popModelli = document.querySelectorAll('.pop-modelli');



window.addEventListener('resize', function(){
    console.log(window.innerWidth);
})





if(window.innerWidth > 1000) {
    for(let i = 0; i < prodottoCarrello.length; i++) {
        popOem[i].style.display = 'none';
        
        apriOem[i].addEventListener('mouseover', function() {
            popOem[i].removeAttribute('style');
            
        })
        apriOem[i].addEventListener('mouseleave', function() {
            popOem[i].style.display = 'none';
            
        })
        
    }
    for(let i = 0; i < prodottoCarrello.length; i++) {
        popModelli[i].style.display = 'none';
        
        apriModelli[i].addEventListener('mouseover', function() {
            popModelli[i].removeAttribute('style');
            
        })
        apriModelli[i].addEventListener('mouseleave', function() {
            popModelli[i].style.display = 'none';
            
        })
       
       
    
    }  
}


if(window.innerWidth < 1000) {
    for(let i = 0; i < prodottoCarrello.length; i++) {
        popOem[i].style.display = 'none';
        
        apriOem[i].addEventListener('click', function(e) {
            popOem[i].removeAttribute('style');
            e.stopPropagation();
        })
        popOem[i].addEventListener('click',function(e){
            e.stopPropagation();
        })
       
    
    }    
    
    document.body.addEventListener('click', function() {   // PER CHIUDERE IL POPUP
        for(let i = 0; i < prodottoCarrello.length; i++) {
            popOem[i].style.display = 'none';
           
        }
    })
    
    
    for(let i = 0; i < prodottoCarrello.length; i++) {
        popModelli[i].style.display = 'none';
        
        apriModelli[i].addEventListener('click', function(e) {
            popModelli[i].removeAttribute('style');
            e.stopPropagation();
        })
        popModelli[i].addEventListener('click',function(e){
            e.stopPropagation();
        })
       
    
    }   
    
    document.body.addEventListener('click', function() {   // PER CHIUDERE IL POPUP
        for(let i = 0; i < prodottoCarrello.length; i++) {
            popModelli[i].style.display = 'none';
           
        }
    })
    
}







let tastoAumenta = document.querySelectorAll('#tasto-aumenta');  
let tastoDiminuisci = document.querySelectorAll('#tasto-diminuisci');  
let numQuantita = document.querySelectorAll('#num-quantita');  // 1

let valoreSingolo = document.querySelectorAll('.valore-singolo');
let valoreTotale = document.querySelectorAll('.valore-totale');


// for(let i = 0; i < numQuantita.length; i++ ) {
//     numQuantita[i].textContent = 1;
    
// }






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






let cestino = document.querySelectorAll('.cestino');
let listCorpo = document.querySelector('.list-corpo');
let nProdotti = prodttoCart.length;
let paragrafo = document.createElement('p');

paragrafo.classList.add('carrello-vuoto');
paragrafo.textContent = 'Non hai prodotti nel carrello';


for(let i = 0; i < cestino.length; i++) {
    cestino[i].addEventListener('click', function() {
        prodottoCarrello[i].remove();
        nProdotti--;
        console.log(nProdotti);
        if(nProdotti == 0) {
            
listCorpo.append(paragrafo);
        }
    })
    
}

// let tabPagamenti = document.querySelectorAll('.tab-pagamenti');


// let titoloTab = document.querySelectorAll('.tab-pagamenti h4');
// let dettaglio = document.createElement('p');

// dettaglio.classList.add('p-metodo-select');
// let primaRiga = document.querySelector('.prima-riga');
// primaRiga.append(dettaglio);


// for(let i = 0; i< tabPagamenti.length; i++) {
//     tabPagamenti[i].addEventListener('click', function() {
        
//         for(let i = 0; i< tabPagamenti.length; i++) {
//             tabPagamenti[i].classList.remove('selezionata');
//         }

//         tabPagamenti[i].classList.add('selezionata');
      
//         dettaglio.innerHTML = `Hai selezionato: <span class="bolding">${titoloTab[i].textContent}</span>`
//     })
// }

 

let contextElement = document.querySelectorAll('.context-info');
let bottConfirm = document.querySelectorAll('.confirm');
let bottCancel = document.querySelectorAll('.cancel');
let descriz = document.querySelectorAll('.context-info p');

for(let i = 0; i< contextElement.length; i++) {
    contextElement[i].style.display = 'none';
    
}    


for(let i = 0; i< contextElement.length; i++) {
    bottConfirm[i].addEventListener('mouseover', function(){
contextElement[i].removeAttribute('style');
descriz[i].textContent = 'Conferma';
    })

}    
for(let i = 0; i< contextElement.length; i++) {
    bottConfirm[i].addEventListener('mouseout', function(){
        contextElement[i].style.display = 'none';

    })

}    

for(let i = 0; i< contextElement.length; i++) {
    bottCancel[i].addEventListener('mouseover', function(){
contextElement[i].removeAttribute('style');
descriz[i].textContent = 'Rimuovi';
    })

}    
for(let i = 0; i< contextElement.length; i++) {
    bottCancel[i].addEventListener('mouseout', function(){
        contextElement[i].style.display = 'none';

    })

}    




let backOrderBlock = document.querySelectorAll('.back-order-block');
let backOrder = document.querySelectorAll('.back-order');
let containerBackOrder = document.querySelector('#container-back-order');
let quantitaSez = backOrder.length; //num
let rigaData = document.querySelectorAll('.riga-data');
let numblocchi = backOrderBlock.length;
let backOrderVuoto = document.createElement('p');
containerBackOrder.append(backOrderVuoto);
backOrderVuoto.classList.add('carrello-vuoto');


console.log(quantitaSez);


// backOrderBlock[1].childElementCount        se > 1    -> ha i prodotti figli.        se backOrderBlock[1].childElementCount == 1      -> non ha prodotti

// containerBackOrder.childElementCount        se > 0    -> ha i prodotti figli.        se containerBackOrder.childElementCount == 0      -> non ha prodotti


for (let i = 0; i < bottCancel.length; i++) {
    bottCancel[i].addEventListener('click', function () {
        backOrder[i].remove();
       
        for (let i = 0; i < backOrderBlock.length; i++) {
            
            backOrderBlock[i].dataset.num = backOrderBlock[i].childElementCount;
            
            if( backOrderBlock[i].dataset.num == 1) {
                console.log('zeio');
                rigaData[i].remove();
                numblocchi--;
            }
            
        
        }
       
        if(numblocchi == 0){
            backOrderVuoto.textContent = 'Non hai ordini precedenti';
        }
    })
  
}



console.log(listCorpo);



// for(let i = 0; i< backOrderBlock.length; i++){
//     console.log(backOrderBlock[i]);
//     if(backOrderBlock[i].childElementCount < 2){
//         alert('vuoto');
//     }
// }

let moduloSped = document.querySelector('#modulo-log-sped');
let sfondoModuloSped = document.querySelector('#sfondo-modulo-spedizione');
let tastoApriPopSped = document.querySelector('#tasto-apri-pop-sped');
let chiudiPopSped = document.querySelector('.chiudi-pop-sped');

sfondoModuloSped.style.display = 'none';
moduloSped.style.display = 'none';

tastoApriPopSped.addEventListener('click', function(e){
    e.stopPropagation();
    sfondoModuloSped.removeAttribute('style');
    moduloSped.removeAttribute('style');
    document.body.style.overflow = 'hidden';
})
moduloSped.addEventListener('click', function(e){
    e.stopPropagation();
})
document.body.addEventListener('click', function() {   // PER CHIUDERE IL POPUP da body
    sfondoModuloSped.style.display = 'none';
moduloSped.style.display = 'none'; 
document.body.removeAttribute('style');
    
})
chiudiPopSped.addEventListener('click', function(){
    sfondoModuloSped.style.display = 'none';
moduloSped.style.display = 'none'; 
document.body.removeAttribute('style');
})

let optionElement = document.querySelector('#testing');

let contextSped = document.querySelector('#context-sped');

contextSped.style.display = 'none';

tastoApriPopSped.addEventListener('mouseover', function(){
    contextSped.removeAttribute('style');
})
tastoApriPopSped.addEventListener('mouseleave', function(){
    contextSped.style.display = 'none';
})





let tipoInvio = document.querySelectorAll('.tipo-invio');
let tipoInvioImg = document.querySelectorAll('.tipo-invio img');

tipoInvio[0].addEventListener('click', function () {
    tipoInvio[0].classList.add('testo-tab-active');
    tipoInvioImg[0].style.transform = 'scale(1.2)';
    tipoInvioImg[1].removeAttribute('style');
    tipoInvioImg[2].removeAttribute('style');
    if (tipoInvio[1].classList.contains('testo-tab-active')) {
        tipoInvio[1].classList.remove('testo-tab-active');
    }
    if (tipoInvio[2].classList.contains('testo-tab-active')) {
        tipoInvio[2].classList.remove('testo-tab-active');
    }
})
tipoInvio[1].addEventListener('click', function () {
    tipoInvio[1].classList.add('testo-tab-active');
    tipoInvioImg[1].style.transform = 'scale(1.2)';
    tipoInvioImg[0].removeAttribute('style');
    tipoInvioImg[2].removeAttribute('style');
    if (tipoInvio[0].classList.contains('testo-tab-active')) {
        tipoInvio[0].classList.remove('testo-tab-active');
    }
    if (tipoInvio[2].classList.contains('testo-tab-active')) {
        tipoInvio[2].classList.remove('testo-tab-active');
    }
})
tipoInvio[2].addEventListener('click', function () {
    tipoInvio[2].classList.add('testo-tab-active');
    tipoInvioImg[2].style.transform = 'scale(1.2)';
    tipoInvioImg[0].removeAttribute('style');
    tipoInvioImg[1].removeAttribute('style');
    if (tipoInvio[1].classList.contains('testo-tab-active')) {
        tipoInvio[1].classList.remove('testo-tab-active');
    }
    if (tipoInvio[0].classList.contains('testo-tab-active')) {
        tipoInvio[0].classList.remove('testo-tab-active');
    }
})



