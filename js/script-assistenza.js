let bloccoRisposta = document.querySelectorAll('.risposta');
let containerDomanda = document.querySelectorAll('.container-domanda');
let frecciaDomanda = document.querySelectorAll('.domanda img');

for(let i = 0; i < bloccoRisposta.length; i++) {
    bloccoRisposta[i].style.display = 'none';   // di default nascondo le risposte a tutte le domande
}


for(let i = 0; i < containerDomanda.length; i++) {
    containerDomanda[i].addEventListener('click', function() {
        if(bloccoRisposta[i].style.display) {// se è nascosto
            bloccoRisposta[i].removeAttribute('style');
            frecciaDomanda[i].classList.add('domanda-attiva');
            frecciaDomanda[i].classList.remove('domanda-non-attiva');
            containerDomanda[i].style.backgroundColor = '#0088CC15';
            
        } else {
            bloccoRisposta[i].style.display = 'none';
            frecciaDomanda[i].classList.remove('domanda-attiva');
            frecciaDomanda[i].classList.add('domanda-non-attiva');
            containerDomanda[i].removeAttribute('style');
        }
    })
}


