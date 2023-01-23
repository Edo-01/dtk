let tastoAreaPersonale = document.querySelector('#tasto-area-personale');
let tastoDatiAccesso = document.querySelector('#tasto-dati-accesso');
let tastoDatiFattura = document.querySelector('#tasto-dati-fattura');
let tastoDatiSpedizione = document.querySelector('#tasto-dati-spedizione');
let tastoArchivioOrdini = document.querySelector('#tasto-archivio-ordini');
let tastoArchivioFatture = document.querySelector('#tasto-archivio-fatture');
let tastoStoricoAcquisti = document.querySelector('#tasto-storico-acquisti');
let tastoAvvisi = document.querySelector('#tasto-avvisi');
let tastonewsletter = document.querySelector('#tasto-newsletter');
let tastoRma = document.querySelector('#tasto-rma');
let tastoCarte = document.querySelector('#tasto-carte');
let tastoModelli = document.querySelector('#tasto-modelli');


let tabArchivioOrdine = document.querySelector('#tab-archivio-ordine');
let tabArchivioFatture = document.querySelector('#tab-archivio-fatture');
let tabIndirizzoSpedizione = document.querySelector('#tab-indirizzo-spedizione');
let tabAvvisi = document.querySelector('#tab-avvisi');
let tabStoricoAcquisti = document.querySelector('#tab-storico-acquisti');
let tabModelli = document.querySelector('#tab-modelli');


let areaPersonale = document.querySelector('#area-personale'); // pagina principale
let righaOrdineArchiviato = document.querySelector('.riga-tabella');
let ordineNumerato = document.querySelector('#ordine-numerato'); // pagina 
let datiDiAcceso = document.querySelector('#dati-di-accesso'); // pagina 
let datiDiFattura = document.querySelector('#dati-di-fatturazione'); // pagina 
let datiDiSpedizione = document.querySelector('#dati-di-spedizione'); // pagina  
let archivioOrdinie = document.querySelector('#archivio-ordini'); // pagina 
let archivioFatture = document.querySelector('#archivio-fatture'); // pagina 
let storicoAcquisti = document.querySelector('#storico-acquisti'); // pagina 
let avvisi = document.querySelector('#avvisi'); // pagina 
let newsletter = document.querySelector('#newsletter'); // pagina 
let rma = document.querySelector('#rma'); // pagina 
let carte = document.querySelector('#carte'); // pagina 
let modelli = document.querySelector('#modelli'); // pagina 

ordineNumerato.style.display = 'none';
datiDiAcceso.style.display = 'none';
datiDiFattura.style.display = 'none';
datiDiSpedizione.style.display = 'none';
archivioOrdinie.style.display = 'none';
archivioFatture.style.display = 'none';
storicoAcquisti.style.display = 'none';
avvisi.style.display = 'none';
newsletter.style.display = 'none';
rma.style.display = 'none';
carte.style.display = 'none';
modelli.style.display = 'none';
// areaPersonale.style.display = 'none';



tastoModelli.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo(0, 0);
    tastoModelli.firstElementChild.classList.add('attivo');
    tastoAreaPersonale.firstElementChild.classList.remove('attivo');
    tastoDatiAccesso.firstElementChild.classList.remove('attivo');
    tastoDatiSpedizione.firstElementChild.classList.remove('attivo');
    tastoArchivioOrdini.firstElementChild.classList.remove('attivo');
    tastoDatiFattura.firstElementChild.classList.remove('attivo');
    tastoArchivioFatture.firstElementChild.classList.remove('attivo');
    tastoStoricoAcquisti.firstElementChild.classList.remove('attivo');
    tastoAvvisi.firstElementChild.classList.remove('attivo');
    tastonewsletter.firstElementChild.classList.remove('attivo');
    tastoRma.firstElementChild.classList.remove('attivo');
    tastoCarte.firstElementChild.classList.remove('attivo');
    ordineNumerato.style.display = 'none';
    datiDiAcceso.style.display = 'none';
    datiDiFattura.style.display = 'none';
    datiDiSpedizione.style.display = 'none';
    archivioOrdinie.style.display = 'none';
    archivioFatture.style.display = 'none';
    areaPersonale.style.display = 'none';
    storicoAcquisti.style.display = 'none';
    avvisi.style.display = 'none';
    newsletter.style.display = 'none';
    rma.style.display = 'none';
    carte.style.display = 'none';
    if (modelli.style.display == 'none') {
        modelli.removeAttribute('style');

    }
})
tabModelli.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo(0, 0);
    tastoModelli.firstElementChild.classList.add('attivo');
    tastoAreaPersonale.firstElementChild.classList.remove('attivo');
    tastoDatiAccesso.firstElementChild.classList.remove('attivo');
    tastoDatiSpedizione.firstElementChild.classList.remove('attivo');
    tastoArchivioOrdini.firstElementChild.classList.remove('attivo');
    tastoDatiFattura.firstElementChild.classList.remove('attivo');
    tastoArchivioFatture.firstElementChild.classList.remove('attivo');
    tastoStoricoAcquisti.firstElementChild.classList.remove('attivo');
    tastoAvvisi.firstElementChild.classList.remove('attivo');
    tastonewsletter.firstElementChild.classList.remove('attivo');
    tastoRma.firstElementChild.classList.remove('attivo');
    tastoCarte.firstElementChild.classList.remove('attivo');
    ordineNumerato.style.display = 'none';
    datiDiAcceso.style.display = 'none';
    datiDiFattura.style.display = 'none';
    datiDiSpedizione.style.display = 'none';
    archivioOrdinie.style.display = 'none';
    archivioFatture.style.display = 'none';
    areaPersonale.style.display = 'none';
    storicoAcquisti.style.display = 'none';
    avvisi.style.display = 'none';
    newsletter.style.display = 'none';
    rma.style.display = 'none';
    carte.style.display = 'none';
    if (modelli.style.display == 'none') {
        modelli.removeAttribute('style');

    }
})



tastoCarte.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo(0, 0);
    tastoCarte.firstElementChild.classList.add('attivo');
    tastoAreaPersonale.firstElementChild.classList.remove('attivo');
    tastoDatiAccesso.firstElementChild.classList.remove('attivo');
    tastoDatiSpedizione.firstElementChild.classList.remove('attivo');
    tastoArchivioOrdini.firstElementChild.classList.remove('attivo');
    tastoDatiFattura.firstElementChild.classList.remove('attivo');
    tastoArchivioFatture.firstElementChild.classList.remove('attivo');
    tastoStoricoAcquisti.firstElementChild.classList.remove('attivo');
    tastoAvvisi.firstElementChild.classList.remove('attivo');
    tastonewsletter.firstElementChild.classList.remove('attivo');
    tastoRma.firstElementChild.classList.remove('attivo');
    tastoModelli.firstElementChild.classList.remove('attivo');
    ordineNumerato.style.display = 'none';
    datiDiAcceso.style.display = 'none';
    datiDiFattura.style.display = 'none';
    datiDiSpedizione.style.display = 'none';
    archivioOrdinie.style.display = 'none';
    archivioFatture.style.display = 'none';
    areaPersonale.style.display = 'none';
    storicoAcquisti.style.display = 'none';
    avvisi.style.display = 'none';
    newsletter.style.display = 'none';
    rma.style.display = 'none';
    modelli.style.display = 'none';
    if (carte.style.display == 'none') {
        carte.removeAttribute('style');

    }
})

tastoRma.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo(0, 0);
    tastoRma.firstElementChild.classList.add('attivo');
    tastoAreaPersonale.firstElementChild.classList.remove('attivo');
    tastoDatiAccesso.firstElementChild.classList.remove('attivo');
    tastoDatiSpedizione.firstElementChild.classList.remove('attivo');
    tastoArchivioOrdini.firstElementChild.classList.remove('attivo');
    tastoDatiFattura.firstElementChild.classList.remove('attivo');
    tastoArchivioFatture.firstElementChild.classList.remove('attivo');
    tastoStoricoAcquisti.firstElementChild.classList.remove('attivo');
    tastoAvvisi.firstElementChild.classList.remove('attivo');
    tastonewsletter.firstElementChild.classList.remove('attivo');
    tastoCarte.firstElementChild.classList.remove('attivo');
    tastoModelli.firstElementChild.classList.remove('attivo');
    ordineNumerato.style.display = 'none';
    datiDiAcceso.style.display = 'none';
    datiDiFattura.style.display = 'none';
    datiDiSpedizione.style.display = 'none';
    archivioOrdinie.style.display = 'none';
    archivioFatture.style.display = 'none';
    areaPersonale.style.display = 'none';
    storicoAcquisti.style.display = 'none';
    avvisi.style.display = 'none';
    newsletter.style.display = 'none';
    carte.style.display = 'none';
    modelli.style.display = 'none';
    if (rma.style.display == 'none') {
        rma.removeAttribute('style');

    }
})

tastonewsletter.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo(0, 0);
    tastonewsletter.firstElementChild.classList.add('attivo');
    tastoAreaPersonale.firstElementChild.classList.remove('attivo');
    tastoDatiAccesso.firstElementChild.classList.remove('attivo');
    tastoDatiSpedizione.firstElementChild.classList.remove('attivo');
    tastoArchivioOrdini.firstElementChild.classList.remove('attivo');
    tastoDatiFattura.firstElementChild.classList.remove('attivo');
    tastoArchivioFatture.firstElementChild.classList.remove('attivo');
    tastoStoricoAcquisti.firstElementChild.classList.remove('attivo');
    tastoAvvisi.firstElementChild.classList.remove('attivo');
    tastoRma.firstElementChild.classList.remove('attivo');
    tastoCarte.firstElementChild.classList.remove('attivo');
    tastoModelli.firstElementChild.classList.remove('attivo');
    ordineNumerato.style.display = 'none';
    datiDiAcceso.style.display = 'none';
    datiDiFattura.style.display = 'none';
    datiDiSpedizione.style.display = 'none';
    archivioOrdinie.style.display = 'none';
    archivioFatture.style.display = 'none';
    areaPersonale.style.display = 'none';
    storicoAcquisti.style.display = 'none';
    avvisi.style.display = 'none';
    rma.style.display = 'none';
    carte.style.display = 'none';
    modelli.style.display = 'none';
    if (newsletter.style.display == 'none') {
        newsletter.removeAttribute('style');

    }
})

tastoAvvisi.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo(0, 0);
    tastoAvvisi.firstElementChild.classList.add('attivo');
    tastoAreaPersonale.firstElementChild.classList.remove('attivo');
    tastoDatiAccesso.firstElementChild.classList.remove('attivo');
    tastoDatiSpedizione.firstElementChild.classList.remove('attivo');
    tastoArchivioOrdini.firstElementChild.classList.remove('attivo');
    tastoDatiFattura.firstElementChild.classList.remove('attivo');
    tastoArchivioFatture.firstElementChild.classList.remove('attivo');
    tastoStoricoAcquisti.firstElementChild.classList.remove('attivo');
    tastonewsletter.firstElementChild.classList.remove('attivo');
    tastoRma.firstElementChild.classList.remove('attivo');
    tastoCarte.firstElementChild.classList.remove('attivo');
    tastoModelli.firstElementChild.classList.remove('attivo');
    ordineNumerato.style.display = 'none';
    datiDiAcceso.style.display = 'none';
    datiDiFattura.style.display = 'none';
    datiDiSpedizione.style.display = 'none';
    archivioOrdinie.style.display = 'none';
    archivioFatture.style.display = 'none';
    areaPersonale.style.display = 'none';
    storicoAcquisti.style.display = 'none';
    newsletter.style.display = 'none';
    rma.style.display = 'none';
    carte.style.display = 'none';
    modelli.style.display = 'none';
    if (avvisi.style.display == 'none') {
        avvisi.removeAttribute('style');

    }
})
tabAvvisi.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo(0, 0);
    tastoAvvisi.firstElementChild.classList.add('attivo');
    tastoAreaPersonale.firstElementChild.classList.remove('attivo');
    tastoDatiAccesso.firstElementChild.classList.remove('attivo');
    tastoDatiSpedizione.firstElementChild.classList.remove('attivo');
    tastoArchivioOrdini.firstElementChild.classList.remove('attivo');
    tastoDatiFattura.firstElementChild.classList.remove('attivo');
    tastoArchivioFatture.firstElementChild.classList.remove('attivo');
    tastoStoricoAcquisti.firstElementChild.classList.remove('attivo');
    tastonewsletter.firstElementChild.classList.remove('attivo');
    tastoRma.firstElementChild.classList.remove('attivo');
    tastoCarte.firstElementChild.classList.remove('attivo');
    tastoModelli.firstElementChild.classList.remove('attivo');
    ordineNumerato.style.display = 'none';
    datiDiAcceso.style.display = 'none';
    datiDiFattura.style.display = 'none';
    datiDiSpedizione.style.display = 'none';
    archivioOrdinie.style.display = 'none';
    archivioFatture.style.display = 'none';
    areaPersonale.style.display = 'none';
    storicoAcquisti.style.display = 'none';
    newsletter.style.display = 'none';
    rma.style.display = 'none';
    carte.style.display = 'none';
    modelli.style.display = 'none';
    if (avvisi.style.display == 'none') {
        avvisi.removeAttribute('style');

    }
})






tastoStoricoAcquisti.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo(0, 0);
    tastoStoricoAcquisti.firstElementChild.classList.add('attivo');
    tastoAreaPersonale.firstElementChild.classList.remove('attivo');
    tastoDatiAccesso.firstElementChild.classList.remove('attivo');
    tastoDatiSpedizione.firstElementChild.classList.remove('attivo');
    tastoArchivioOrdini.firstElementChild.classList.remove('attivo');
    tastoDatiFattura.firstElementChild.classList.remove('attivo');
    tastoArchivioFatture.firstElementChild.classList.remove('attivo');
    tastoAvvisi.firstElementChild.classList.remove('attivo');
    tastonewsletter.firstElementChild.classList.remove('attivo');
    tastoRma.firstElementChild.classList.remove('attivo');
    tastoCarte.firstElementChild.classList.remove('attivo');
    tastoModelli.firstElementChild.classList.remove('attivo');
    ordineNumerato.style.display = 'none';
    datiDiAcceso.style.display = 'none';
    datiDiFattura.style.display = 'none';
    datiDiSpedizione.style.display = 'none';
    archivioOrdinie.style.display = 'none';
    archivioFatture.style.display = 'none';
    areaPersonale.style.display = 'none';
    avvisi.style.display = 'none';
    newsletter.style.display = 'none';
    rma.style.display = 'none';
    carte.style.display = 'none';
    modelli.style.display = 'none';
    if (storicoAcquisti.style.display == 'none') {
        storicoAcquisti.removeAttribute('style');

    }
})
tabStoricoAcquisti.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo(0, 0);
    tastoStoricoAcquisti.firstElementChild.classList.add('attivo');
    tastoAreaPersonale.firstElementChild.classList.remove('attivo');
    tastoDatiAccesso.firstElementChild.classList.remove('attivo');
    tastoDatiSpedizione.firstElementChild.classList.remove('attivo');
    tastoArchivioOrdini.firstElementChild.classList.remove('attivo');
    tastoDatiFattura.firstElementChild.classList.remove('attivo');
    tastoArchivioFatture.firstElementChild.classList.remove('attivo');
    tastoAvvisi.firstElementChild.classList.remove('attivo');
    tastonewsletter.firstElementChild.classList.remove('attivo');
    tastoRma.firstElementChild.classList.remove('attivo');
    tastoCarte.firstElementChild.classList.remove('attivo');
    tastoModelli.firstElementChild.classList.remove('attivo');
    ordineNumerato.style.display = 'none';
    datiDiAcceso.style.display = 'none';
    datiDiFattura.style.display = 'none';
    datiDiSpedizione.style.display = 'none';
    archivioOrdinie.style.display = 'none';
    archivioFatture.style.display = 'none';
    areaPersonale.style.display = 'none';
    avvisi.style.display = 'none';
    newsletter.style.display = 'none';
    rma.style.display = 'none';
    carte.style.display = 'none';
    modelli.style.display = 'none';
    if (storicoAcquisti.style.display == 'none') {
        storicoAcquisti.removeAttribute('style');

    }
})







tastoArchivioFatture.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo(0, 0);
    tastoArchivioFatture.firstElementChild.classList.add('attivo');
    tastoAreaPersonale.firstElementChild.classList.remove('attivo');
    tastoDatiAccesso.firstElementChild.classList.remove('attivo');
    tastoDatiSpedizione.firstElementChild.classList.remove('attivo');
    tastoArchivioOrdini.firstElementChild.classList.remove('attivo');
    tastoDatiFattura.firstElementChild.classList.remove('attivo');
    tastoStoricoAcquisti.firstElementChild.classList.remove('attivo');
    tastoAvvisi.firstElementChild.classList.remove('attivo');
    tastonewsletter.firstElementChild.classList.remove('attivo');
    tastoRma.firstElementChild.classList.remove('attivo');
    tastoCarte.firstElementChild.classList.remove('attivo');
    tastoModelli.firstElementChild.classList.remove('attivo');
    ordineNumerato.style.display = 'none';
    datiDiAcceso.style.display = 'none';
    areaPersonale.style.display = 'none';
    datiDiSpedizione.style.display = 'none';
    archivioOrdinie.style.display = 'none';
    datiDiFattura.style.display = 'none';
    storicoAcquisti.style.display = 'none';
    avvisi.style.display = 'none';
    newsletter.style.display = 'none';
    rma.style.display = 'none';
    carte.style.display = 'none';
    modelli.style.display = 'none';
    if (archivioFatture.style.display == 'none') {
        archivioFatture.removeAttribute('style');

    }
})
tabArchivioFatture.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo(0, 0);
    tastoArchivioFatture.firstElementChild.classList.add('attivo');
    tastoAreaPersonale.firstElementChild.classList.remove('attivo');
    tastoDatiAccesso.firstElementChild.classList.remove('attivo');
    tastoDatiSpedizione.firstElementChild.classList.remove('attivo');
    tastoArchivioOrdini.firstElementChild.classList.remove('attivo');
    tastoDatiFattura.firstElementChild.classList.remove('attivo');
    tastoStoricoAcquisti.firstElementChild.classList.remove('attivo');
    tastoAvvisi.firstElementChild.classList.remove('attivo');
    tastonewsletter.firstElementChild.classList.remove('attivo');
    tastoRma.firstElementChild.classList.remove('attivo');
    tastoCarte.firstElementChild.classList.remove('attivo');
    tastoModelli.firstElementChild.classList.remove('attivo');
    ordineNumerato.style.display = 'none';
    datiDiAcceso.style.display = 'none';
    areaPersonale.style.display = 'none';
    datiDiSpedizione.style.display = 'none';
    archivioOrdinie.style.display = 'none';
    datiDiFattura.style.display = 'none';
    storicoAcquisti.style.display = 'none';
    avvisi.style.display = 'none';
    newsletter.style.display = 'none';
    rma.style.display = 'none';
    carte.style.display = 'none';
    modelli.style.display = 'none';
    if (archivioFatture.style.display == 'none') {
        archivioFatture.removeAttribute('style');

    }
})





tastoAreaPersonale.addEventListener('click', function(e){
e.preventDefault();
window.scrollTo(0,0);
tastoAreaPersonale.firstElementChild.classList.add('attivo');
tastoDatiAccesso.firstElementChild.classList.remove('attivo');
tastoDatiFattura.firstElementChild.classList.remove('attivo');
tastoDatiSpedizione.firstElementChild.classList.remove('attivo');
tastoArchivioOrdini.firstElementChild.classList.remove('attivo');
tastoArchivioFatture.firstElementChild.classList.remove('attivo');
tastoStoricoAcquisti.firstElementChild.classList.remove('attivo');
tastoAvvisi.firstElementChild.classList.remove('attivo');
tastonewsletter.firstElementChild.classList.remove('attivo');
tastoRma.firstElementChild.classList.remove('attivo');
tastoCarte.firstElementChild.classList.remove('attivo');
tastoModelli.firstElementChild.classList.remove('attivo');
ordineNumerato.style.display = 'none';
datiDiAcceso.style.display = 'none';
datiDiFattura.style.display = 'none';
datiDiSpedizione.style.display = 'none';
archivioOrdinie.style.display = 'none';
archivioFatture.style.display = 'none';
storicoAcquisti.style.display = 'none';
avvisi.style.display = 'none';
newsletter.style.display = 'none';
rma.style.display = 'none';
carte.style.display = 'none';
modelli.style.display = 'none';
    if(areaPersonale.style.display == 'none') {
        areaPersonale.removeAttribute('style');
        
    }
})



tastoDatiAccesso.addEventListener('click', function(e){
    e.preventDefault();
    window.scrollTo(0,0);
    tastoDatiAccesso.firstElementChild.classList.add('attivo');
    tastoAreaPersonale.firstElementChild.classList.remove('attivo');
    tastoDatiFattura.firstElementChild.classList.remove('attivo');
    tastoDatiSpedizione.firstElementChild.classList.remove('attivo');
    tastoArchivioOrdini.firstElementChild.classList.remove('attivo');
    tastoArchivioFatture.firstElementChild.classList.remove('attivo');
    tastoStoricoAcquisti.firstElementChild.classList.remove('attivo');
    tastoAvvisi.firstElementChild.classList.remove('attivo');
    tastonewsletter.firstElementChild.classList.remove('attivo');
    tastoRma.firstElementChild.classList.remove('attivo');
    tastoCarte.firstElementChild.classList.remove('attivo');
    tastoModelli.firstElementChild.classList.remove('attivo');
    ordineNumerato.style.display = 'none';
    areaPersonale.style.display = 'none';
    datiDiFattura.style.display = 'none';
    datiDiSpedizione.style.display = 'none';
    archivioOrdinie.style.display = 'none';
    archivioFatture.style.display = 'none';
    storicoAcquisti.style.display = 'none';
    avvisi.style.display = 'none';
    newsletter.style.display = 'none';
    rma.style.display = 'none';
    carte.style.display = 'none';
    modelli.style.display = 'none';
        if(datiDiAcceso.style.display == 'none') {
            datiDiAcceso.removeAttribute('style');
            
        }
        
    })



tastoDatiFattura.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo(0, 0);
    tastoDatiFattura.firstElementChild.classList.add('attivo');
    tastoAreaPersonale.firstElementChild.classList.remove('attivo');
    tastoDatiAccesso.firstElementChild.classList.remove('attivo');
    tastoDatiSpedizione.firstElementChild.classList.remove('attivo');
    tastoArchivioOrdini.firstElementChild.classList.remove('attivo');
    tastoArchivioFatture.firstElementChild.classList.remove('attivo');
    tastoStoricoAcquisti.firstElementChild.classList.remove('attivo');
    tastoAvvisi.firstElementChild.classList.remove('attivo');
    tastonewsletter.firstElementChild.classList.remove('attivo');
    tastoRma.firstElementChild.classList.remove('attivo');
    tastoCarte.firstElementChild.classList.remove('attivo');
    tastoModelli.firstElementChild.classList.remove('attivo');
    ordineNumerato.style.display = 'none';
    datiDiAcceso.style.display = 'none';
    areaPersonale.style.display = 'none';
    datiDiSpedizione.style.display = 'none';
    archivioOrdinie.style.display = 'none';
    archivioFatture.style.display = 'none';
    storicoAcquisti.style.display = 'none';
    avvisi.style.display = 'none';
    newsletter.style.display = 'none';
    rma.style.display = 'none';
    carte.style.display = 'none';
    modelli.style.display = 'none';
    if (datiDiFattura.style.display == 'none') {
        datiDiFattura.removeAttribute('style');

    }
})



tastoDatiSpedizione.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo(0, 0);
    tastoDatiSpedizione.firstElementChild.classList.add('attivo');
    tastoAreaPersonale.firstElementChild.classList.remove('attivo');
    tastoDatiAccesso.firstElementChild.classList.remove('attivo');
    tastoDatiFattura.firstElementChild.classList.remove('attivo');
    tastoArchivioOrdini.firstElementChild.classList.remove('attivo');
    tastoArchivioFatture.firstElementChild.classList.remove('attivo');
    tastoStoricoAcquisti.firstElementChild.classList.remove('attivo');
    tastoAvvisi.firstElementChild.classList.remove('attivo');
    tastonewsletter.firstElementChild.classList.remove('attivo');
    tastoRma.firstElementChild.classList.remove('attivo');
    tastoCarte.firstElementChild.classList.remove('attivo');
    tastoModelli.firstElementChild.classList.remove('attivo');
    ordineNumerato.style.display = 'none';
    datiDiAcceso.style.display = 'none';
    areaPersonale.style.display = 'none';
    datiDiFattura.style.display = 'none';
    archivioOrdinie.style.display = 'none';
    archivioFatture.style.display = 'none';
    storicoAcquisti.style.display = 'none';
    avvisi.style.display = 'none';
    newsletter.style.display = 'none';
    rma.style.display = 'none';
    carte.style.display = 'none';
    modelli.style.display = 'none';
    if (datiDiSpedizione.style.display == 'none') {
        datiDiSpedizione.removeAttribute('style');

    }
})
tabIndirizzoSpedizione.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo(0, 0);
    tastoDatiSpedizione.firstElementChild.classList.add('attivo');
    tastoAreaPersonale.firstElementChild.classList.remove('attivo');
    tastoDatiAccesso.firstElementChild.classList.remove('attivo');
    tastoDatiFattura.firstElementChild.classList.remove('attivo');
    tastoArchivioOrdini.firstElementChild.classList.remove('attivo');
    tastoArchivioFatture.firstElementChild.classList.remove('attivo');
    tastoStoricoAcquisti.firstElementChild.classList.remove('attivo');
    tastoAvvisi.firstElementChild.classList.remove('attivo');
    tastonewsletter.firstElementChild.classList.remove('attivo');
    tastoRma.firstElementChild.classList.remove('attivo');
    tastoCarte.firstElementChild.classList.remove('attivo');
    tastoModelli.firstElementChild.classList.remove('attivo');
    ordineNumerato.style.display = 'none';
    datiDiAcceso.style.display = 'none';
    areaPersonale.style.display = 'none';
    datiDiFattura.style.display = 'none';
    archivioOrdinie.style.display = 'none';
    archivioFatture.style.display = 'none';
    storicoAcquisti.style.display = 'none';
    avvisi.style.display = 'none';
    newsletter.style.display = 'none';
    rma.style.display = 'none';
    carte.style.display = 'none';
    modelli.style.display = 'none';
    if (datiDiSpedizione.style.display == 'none') {
        datiDiSpedizione.removeAttribute('style');

    }
})







tastoArchivioOrdini.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo(0, 0);
    tastoArchivioOrdini.firstElementChild.classList.add('attivo');
    tastoAreaPersonale.firstElementChild.classList.remove('attivo');
    tastoDatiAccesso.firstElementChild.classList.remove('attivo');
    tastoDatiFattura.firstElementChild.classList.remove('attivo');
    tastoDatiSpedizione.firstElementChild.classList.remove('attivo');
    tastoArchivioFatture.firstElementChild.classList.remove('attivo');
    tastoStoricoAcquisti.firstElementChild.classList.remove('attivo');
    tastoAvvisi.firstElementChild.classList.remove('attivo');
    tastonewsletter.firstElementChild.classList.remove('attivo');
    tastoRma.firstElementChild.classList.remove('attivo');
    tastoCarte.firstElementChild.classList.remove('attivo');
    tastoModelli.firstElementChild.classList.remove('attivo');
    ordineNumerato.style.display = 'none';
    datiDiAcceso.style.display = 'none';
    areaPersonale.style.display = 'none';
    datiDiFattura.style.display = 'none';
    datiDiSpedizione.style.display = 'none';
    archivioFatture.style.display = 'none';
    storicoAcquisti.style.display = 'none';
    avvisi.style.display = 'none';
    newsletter.style.display = 'none';
    rma.style.display = 'none';
    carte.style.display = 'none';
    modelli.style.display = 'none';
    if (archivioOrdinie.style.display == 'none') {
        archivioOrdinie.removeAttribute('style');

    }
})
tabArchivioOrdine.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo(0, 0);
    tastoArchivioOrdini.firstElementChild.classList.add('attivo');
    tastoAreaPersonale.firstElementChild.classList.remove('attivo');
    tastoDatiAccesso.firstElementChild.classList.remove('attivo');
    tastoDatiFattura.firstElementChild.classList.remove('attivo');
    tastoDatiSpedizione.firstElementChild.classList.remove('attivo');
    tastoArchivioFatture.firstElementChild.classList.remove('attivo');
    tastoStoricoAcquisti.firstElementChild.classList.remove('attivo');
    tastoAvvisi.firstElementChild.classList.remove('attivo');
    tastonewsletter.firstElementChild.classList.remove('attivo');
    tastoRma.firstElementChild.classList.remove('attivo');
    tastoCarte.firstElementChild.classList.remove('attivo');
    tastoModelli.firstElementChild.classList.remove('attivo');
    ordineNumerato.style.display = 'none';
    datiDiAcceso.style.display = 'none';
    areaPersonale.style.display = 'none';
    datiDiFattura.style.display = 'none';
    datiDiSpedizione.style.display = 'none';
    archivioFatture.style.display = 'none';
    storicoAcquisti.style.display = 'none';
    avvisi.style.display = 'none';
    newsletter.style.display = 'none';
    rma.style.display = 'none';
    carte.style.display = 'none';
    modelli.style.display = 'none';
    if (archivioOrdinie.style.display == 'none') {
        archivioOrdinie.removeAttribute('style');

    }
})






righaOrdineArchiviato.addEventListener('click', function(){
    areaPersonale.style.display = 'none';
    datiDiAcceso.style.display = 'none';
    datiDiFattura.style.display = 'none';
    datiDiSpedizione.style.display = 'none';
    archivioOrdinie.style.display = 'none';
    archivioFatture.style.display = 'none';
    storicoAcquisti.style.display = 'none';
    avvisi.style.display = 'none';
    newsletter.style.display = 'none';
    rma.style.display = 'none';
    carte.style.display = 'none';
    modelli.style.display = 'none';
    window.scrollTo(0,0);
    if(ordineNumerato.style.display == 'none') {
        ordineNumerato.removeAttribute('style');
        
    }
})









let tastoCambiaPsw = document.querySelector('#tasto-cambia-psw');
let bloccoNuovaPsw = document.querySelector('#blocco-nuova-psw');

bloccoNuovaPsw.style.display = 'none';
tastoCambiaPsw.addEventListener('click', function(){
    if(bloccoNuovaPsw.style.display == 'none') {
        bloccoNuovaPsw.removeAttribute('style');
    } else {
        bloccoNuovaPsw.style.display = 'none';
    }
    
})

let muoviDx = document.querySelector('#muovi-dx');
let muoviSx = document.querySelector('#muovi-sx');
let carosello = document.querySelector('#carosello');
let elementiCarosello = document.querySelectorAll('.tab-preferito');


if(elementiCarosello.length < 5) {
    muoviDx.style.display = 'none'; 
    muoviSx.style.display = 'none'; 
}



muoviDx.addEventListener('click', function(){
    carosello.scrollBy({top:0, left:100,behavior:'smooth'});
})
muoviSx.addEventListener('click', function(){
    carosello.scrollBy({top:0, left:-100,behavior:'smooth'});
})

let marcaPreferiti = document.querySelector('#marca-preferiti');  //select
let modelloPreferito = document.querySelector('#modello-preferito');
console.log(modelloPreferito.value);
let numerazioneTab = 0;



let cancellaPreferito = document.querySelectorAll('.cancella-preferito');

let addPreferito = document.querySelector('#add-preferito');

let card ;



addPreferito.addEventListener('click', function(e){
    numerazioneTab++;
    
    e.preventDefault();
    let indiceSelezionato = marcaPreferiti.selectedIndex;
    let valoreSelezionato = marcaPreferiti.options[indiceSelezionato];
    let testoMarcaSelezionato = valoreSelezionato.text;
    if (testoMarcaSelezionato == 'Tutte le marche') {
        testoMarcaSelezionato = '---';
    }
    let testoModelloSelezionato = modelloPreferito.value;
    if (testoModelloSelezionato == '') {
        testoModelloSelezionato = '---';
    }
    
    card = document.createElement('div');
    card.classList.add('tab-preferito');
    
    card.innerHTML = `<div class="pref-row-1">
    <div class="pref-titolo">
      <h3>Marca:</h3>
    </div>
    <div class="pref-test">
      <p>${testoMarcaSelezionato}</p>
    </div>
  </div>
  <div class="pref-row-2">
    <div class="pref-titolo">
      <h3>Modello:</h3>
    </div>
    <div class="pref-test">
      <p>${testoModelloSelezionato}</p>
    </div>
  </div>
  <div class="pref-row-3">
    <div class="tab-botton">
      <img src="img/ico-test-1.svg" alt="">
    </div>
    <div class="tab-botton cancella-preferiti">
      <img src="img/ico-test-2.svg" alt="">
    </div>
  </div>`;
    carosello.prepend(card);
    carosello.scrollBy({top:0, left:-100,behavior:'smooth'});
if(numerazioneTab > 3) {
    muoviDx.removeAttribute('style');
    muoviSx.removeAttribute('style');
}



})

let cancellaPreferiti = document.querySelectorAll('.cancella-preferiti');
console.log(card)
for(let i = 0; i < cancellaPreferiti.length; i++) {
    cancellaPreferiti[i].addEventListener('click', function(){
        console.log(cancellaPreferiti);
        
    })
}



let primaRiga = document.querySelector('#prima-riga');
let aggiungiRiga = document.querySelector('#aggiungi-riga');







aggiungiRiga.addEventListener('click', function(){
    let baseRiga = document.createElement('div');
    baseRiga.classList.add('riga-tabella');
    baseRiga.classList.add('riga-tabella-storico');
    baseRiga.classList.add('no-pointer');
    primaRiga.after(baseRiga);

    let rigaDati = document.createElement('div');
    rigaDati.classList.add('riga-dati');
    rigaDati.classList.add('dati-storico');
    baseRiga.prepend(rigaDati);

    let inputUno = document.createElement('input');
    inputUno.classList.add('dato-rma-uno');
    inputUno.type = 'text';
    rigaDati.append(inputUno);

    let inputDue = document.createElement('input');
    inputDue.classList.add('dato-rma-due');
    inputDue.type = 'number';
    rigaDati.append(inputDue);

    let inputTre = document.createElement('input');
    inputTre.classList.add('dato-rma-tre');
    inputTre.type = 'text';
    rigaDati.append(inputTre);

    let inputQuattro = document.createElement('input');
    inputQuattro.classList.add('dato-rma-quattro');
    inputQuattro.type = 'datetime-local';
    rigaDati.append(inputQuattro);

    let inputCinque = document.createElement('select');
    inputCinque.classList.add('dato-rma-cinque');
    rigaDati.append(inputCinque);

    let optionUno = document.createElement('option');
    optionUno.textContent = '-Scegli-';
    inputCinque.append(optionUno);
    let optionDue = document.createElement('option');
    optionDue.textContent = 'Riparazione';
    inputCinque.append(optionDue);
    let optionTre = document.createElement('option');
    optionTre.textContent = 'Sostituzione';
    inputCinque.append(optionTre);
    let optionQuattro = document.createElement('option');
    optionQuattro.textContent = 'Altro';
    inputCinque.append(optionQuattro);

    let inputSei = document.createElement('input');
    inputSei.classList.add('dato-rma-uno');
    inputSei.type = 'text';
    rigaDati.append(inputSei);

    let cestino = document.createElement('img');
    cestino.src = 'img/cestino-blu.svg';
    rigaDati.append(cestino);
    cestino.id = 'bottone-cancella';

    let bottoneCancella = document.querySelectorAll('#bottone-cancella');



for(let i = 0; i < bottoneCancella.length; i++){
    bottoneCancella[i].addEventListener('click', function(){
        baseRiga.remove();
    })
}

})


let dettagliAvvisi = document.querySelectorAll('.dettagli-avvisi');
let tendinaAvvisi = document.querySelectorAll('.tendina-avvisi');
let tastoCestinoAvvisi = document.querySelectorAll('.bott-cestino-avvisi');
let rigaAvvisi = document.querySelectorAll('.riga-tabella-avvisi');

let checkAvviso = document.querySelectorAll('.checkbox');

let numSelect = document.querySelector('#num-select');

let tastoCancSel = document.querySelector('.tasto-selez');

let counterCheck = 0;



for(let i = 0; i < tendinaAvvisi.length; i++) {
    dettagliAvvisi[i].style.display = 'none';

    tendinaAvvisi[i].addEventListener('click', function(){
       if(dettagliAvvisi[i].style.display == 'none') {
        dettagliAvvisi[i].removeAttribute('style');
        tendinaAvvisi[i].classList.add('ruota');
       } else {
        dettagliAvvisi[i].style.display = 'none';
        tendinaAvvisi[i].classList.remove('ruota');
       }
    })
}


for(let i = 0; i < rigaAvvisi.length; i++) {
    tastoCestinoAvvisi[i].addEventListener('click', function(){
        rigaAvvisi[i].remove();
        if(counterCheck > 0) {
            counterCheck--;
            numSelect.textContent = counterCheck;
        }
        
    })
}

for(let i = 0; i < checkAvviso.length; i++) {

checkAvviso[i].addEventListener('click', function(){
    if(checkAvviso[i].checked) {
        counterCheck++;
    } else {
        counterCheck--;
    }
    numSelect.textContent = counterCheck;
})
     
} 

tastoCancSel.addEventListener('click', function(){
    for(let i = 0; i < rigaAvvisi.length; i++) {
        if(checkAvviso[i].checked) {
            rigaAvvisi[i].remove();
            if(counterCheck > 0) {
                counterCheck--;
                numSelect.textContent = counterCheck;
            }
        }
    }
})


