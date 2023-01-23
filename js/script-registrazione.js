

let gruppoUno = document.querySelector('#gruppo-1');  //prima schermata
let gruppoDue = document.querySelector('#gruppo-2');  //seconda schermata
let gruppoTre = document.querySelector('#gruppo-3');  //terza schermata

let avantiUno = document.querySelector('#avanti-1'); //tasto continua prima schermata
let avantiDue = document.querySelector('#avanti-2'); //tasto continua seconda schermata
let indietroDue = document.querySelector('#indietro-2'); //tasto indietro seconda schermata
let indietroTre = document.querySelector('#indietro-3'); //tasto indietro terza schermata
let inviaRegistrazione = document.querySelector('#invia-registrazione');  // tasto invia dati form


let cerchioUno = document.querySelector('#cerchio-1');  //primo cercio
let numUno = document.querySelector('#num-1');  //primo numero
let testoUno = document.querySelector('#testo-1');  //primo testo


let cerchioDue = document.querySelector('#cerchio-2');  //secondo cercio
let numDue = document.querySelector('#num-2');  //secondo numero
let testoDue = document.querySelector('#testo-2');  //secondo testo





let form = document.forms.registrazione;  // elemento form totale
let nomeF1 = form.nome;  //  input nome
let cognomeF1 = form.cognome; //  input cognome
let qualificaF1 = form.qualifica; //  input qualifica
let emailF1 = form.email; //  input email
let telefonoF1 = form.telefono; //  input telefono
let cellulareF1 = form.cellulare; //  input cellulare

let ragSocialeF2 = form.ragionesociale;
let partitaIvaF2 = form.partitaiva;
let cFiscaleF2 = form.cfiscale;
let tipoAziendaF2 = form.tipoazienda;
let telAziendaF2 = form.telazienda;

let indirizzoLegF2 = form.indirizzoLeg;
let cittaLegF2 = form.cittaLeg;
let capLegF2 = form.capLeg;
let provinciaLegaleF2 = form.provinciaLegale;

let indirizzoOpF2 = form.indirizzoOp;
let cittaOpF2 = form.cittaOp;
let capOpF2 = form.capOp;
let provinciaOperativaF2 = form.provinciaOperativa;

let consensoPrivacy = form.consensoprivacy;
let sdiCode = form.sdi;  //  input codice sdi
let pec = form.pec // PEC
let civico = form.civicoLeg; //numero civico






let notaErroreIva = document.createElement('p');
notaErroreIva.textContent = 'Il codice inserito non è corretto';

let notaErroreCap = document.createElement('p');
notaErroreCap.textContent = 'Il codice inserito non è corretto';

let notaTesto = document.createElement('p');
notaTesto.textContent = 'Campo obbligatorio';

let notaErroreSdi = document.createElement('p');
notaErroreSdi.textContent = 'Il codice SDI non è corretto';

let notaErroreEmail = document.createElement('p');
notaErroreEmail.textContent = 'La email inserita non è corretta';

let notaErrorePec = document.createElement('p');
notaErrorePec.textContent = 'La email inserita non è corretta';

let notaErroreTel = document.createElement('p');
notaErroreTel.textContent = 'Il numero inserito non è corretto';

let notaErroreCel = document.createElement('p');
notaErroreCel.textContent = 'Il numero inserito non è corretto';


function campo_mancante(campo) {
 campo.before(notaTesto);
 notaTesto.classList.add('campo-mancante');
}


// gruppoDue.style.display = 'none';
gruppoTre.style.display = 'none';

function unisci(par) {
    let arrai = par.value.split(' ');
    let result = arrai.join('');
    par.value = result;
   }

function maiusc(par) {
    par.value = par.value.toUpperCase();
}
function minusc(par) {
    par.value = par.value.toLowerCase();
}


   telefonoF1.addEventListener('blur', function() {  // RIMUOVE GLI SPAZI BIANCHI
   unisci(telefonoF1);
})

cellulareF1.addEventListener('blur', function() {  // RIMUOVE GLI SPAZI BIANCHI
    unisci(cellulareF1);
 })

 emailF1.addEventListener('blur', function() { // mette minuscolo
    minusc(emailF1);
 })
 pec.addEventListener('blur', function() { // mette minuscolo
    minusc(pec);
 })
 nomeF1.addEventListener('blur', function() { // mette maiuscolo
    maiusc(nomeF1);
 })
 cognomeF1.addEventListener('blur', function() { // mette maiuscolo
    maiusc(cognomeF1);
 })
 ragSocialeF2.addEventListener('blur', function() { // mette maiuscolo
    maiusc(ragSocialeF2);
 })
 cFiscaleF2.addEventListener('blur', function() { // mette maiuscolo
    maiusc(cFiscaleF2);
 })
 sdiCode.addEventListener('blur', function() { // mette maiuscolo
    maiusc(sdiCode);
 })
 indirizzoLegF2.addEventListener('blur', function() { // mette maiuscolo
    maiusc(indirizzoLegF2);
 })
 cittaLegF2.addEventListener('blur', function() { // mette maiuscolo
    maiusc(cittaLegF2);
 })
 cittaLegF2.addEventListener('blur', function() { // mette maiuscolo
    maiusc(cittaLegF2);
 })

avantiDue.addEventListener('click', function(e) {  // qui serve un controllo sugli input parziali IMPORTANTE
    if((nomeF1.value == '') || (nomeF1.value == undefined)) {
        e.preventDefault();
        campo_mancante(nomeF1);
        nomeF1.focus();
    } else if((cognomeF1.value == '') || (cognomeF1.value == undefined)) {
        e.preventDefault();
        campo_mancante(cognomeF1);
        cognomeF1.focus();
    } else if((emailF1.value == '') || (emailF1.value == undefined)) {
        e.preventDefault();
        campo_mancante(emailF1);
        emailF1.focus();
    } else if((telefonoF1.value == '') || (telefonoF1.value == undefined)) {
        e.preventDefault();
        campo_mancante(telefonoF1);
        telefonoF1.focus();
    } else if((cellulareF1.value == '') || (cellulareF1.value == undefined)) {
        e.preventDefault();
        campo_mancante(cellulareF1);
        cellulareF1.focus(); 
     }  
     else if((ragSocialeF2.value == '') || (ragSocialeF2.value == undefined)) {  //OK
        e.preventDefault();
        campo_mancante(ragSocialeF2);
        ragSocialeF2.focus();
    } else if((partitaIvaF2.value == '') || (partitaIvaF2.value == undefined)) { //OK
        e.preventDefault();
        campo_mancante(partitaIvaF2);
        partitaIvaF2.focus();
    }  else if((cFiscaleF2.value == '') || (cFiscaleF2.value == undefined)) { //OK
        e.preventDefault();
        campo_mancante(cFiscaleF2);
        cFiscaleF2.focus();
    } else if (!/^[a-zA-Z0-9]{7}$/.test(sdiCode.value) && sdiCode.value !== '' ) {  
        e.preventDefault();
        sdiCode.before(notaErroreSdi);
        notaErroreSdi.classList.add('campo-mancante');
        if(notaTesto || notaErroreIva || notaErroreCap || notaErroreEmail || notaErrorePec || notaErroreTel || notaErroreCel) {
            notaTesto.remove();
            notaErroreIva.remove();
            notaErroreCap.remove();
            notaErroreEmail.remove();
            notaErrorePec.remove();
            notaErroreTel.remove();
            notaErroreCel.remove();
        }
    } else if (!/^[A-z0-9\.\+_-]+@[A-z0-9\._-]+\.[A-z]{2,6}$/.test(pec.value) && pec.value !== '' ) {    //pec check
        e.preventDefault();
        pec.before(notaErrorePec);
        notaErrorePec.classList.add('campo-mancante');
        if(notaTesto || notaErroreIva || notaErroreCap || notaErroreEmail || notaErroreSdi || notaErroreTel || notaErroreCel) {
            notaTesto.remove();
            notaErroreIva.remove();
            notaErroreCap.remove();
            notaErroreEmail.remove();
            notaErroreSdi.remove();
            notaErroreTel.remove();
            notaErroreCel.remove();
        }
    }  else if((indirizzoLegF2.value == '') || (indirizzoLegF2.value == undefined)) {   //OK
        e.preventDefault();
        campo_mancante(indirizzoLegF2);
        indirizzoLegF2.focus();
    } else if((cittaLegF2.value == '') || (cittaLegF2.value == undefined)) {   //OK
        e.preventDefault();
        campo_mancante(cittaLegF2);
        cittaLegF2.focus();
    } else if((capLegF2.value == '') || (capLegF2.value == undefined)) {  //OK
        e.preventDefault();
        campo_mancante(capLegF2);
        capLegF2.focus();
    } else if((provinciaLegaleF2.value == '') || (provinciaLegaleF2.value == undefined)) { //OK
        e.preventDefault();
        campo_mancante(provinciaLegaleF2);
        provinciaLegaleF2.focus();
    }  else {  
        if (!/^[A-z0-9\.\+_-]+@[A-z0-9\._-]+\.[A-z]{2,6}$/.test(emailF1.value)) {   
            e.preventDefault();
            emailF1.before(notaErroreEmail);
            notaErroreEmail.classList.add('campo-mancante');
            if(notaTesto || notaErroreIva || notaErroreCap || notaErroreSdi || notaErrorePec || notaErroreTel || notaErroreCel) {
                notaTesto.remove();
                notaErroreIva.remove();
                notaErroreCap.remove();
                notaErroreSdi.remove();
                notaErrorePec.remove();
                notaErroreTel.remove();
                notaErroreCel.remove();
            }
        }  else if(!/^\d+$/.test(telefonoF1.value)) {     // controllo telefono 
            e.preventDefault();
            telefonoF1.before(notaErroreTel);
            notaErroreTel.classList.add('campo-mancante');
            if(notaTesto || notaErroreCap  || notaErroreSdi || notaErroreEmail || notaErrorePec || notaErroreIva || notaErroreCel) {
                notaTesto.remove();
                notaErroreCap.remove();
                notaErroreSdi.remove();
                notaErroreEmail.remove();
                notaErrorePec.remove();
                notaErroreIva.remove();
                notaErroreCel.remove();
            }
        } else if(!/^3\d+$/.test(cellulareF1.value) ) {    // controllo cellulare 
            e.preventDefault();
            cellulareF1.before(notaErroreCel);
            notaErroreCel.classList.add('campo-mancante');
            if(notaTesto || notaErroreCap  || notaErroreSdi || notaErroreEmail || notaErrorePec || notaErroreIva || notaErroreTel) {
                notaTesto.remove();
                notaErroreCap.remove();
                notaErroreSdi.remove();
                notaErroreEmail.remove();
                notaErrorePec.remove();
                notaErroreIva.remove();
                notaErroreTel.remove();
            }
        }  else if(!/^[0-9]{11}$/.test(partitaIvaF2.value)) {   
            e.preventDefault();
            partitaIvaF2.before(notaErroreIva);
            notaErroreIva.classList.add('campo-mancante');
            if(notaTesto || notaErroreCap  || notaErroreSdi || notaErroreEmail || notaErrorePec || notaErroreTel || notaErroreCel) {
                notaTesto.remove();
                notaErroreCap.remove();
                notaErroreSdi.remove();
                notaErroreEmail.remove();
                notaErrorePec.remove();
                notaErroreTel.remove();
                notaErroreCel.remove();
            }
        }  else if (!/^[0-9]{5}$/.test(capLegF2.value)) {
            e.preventDefault();
            capLegF2.before(notaErroreCap);
            notaErroreCap.classList.add('campo-mancante');
            if(notaTesto || notaErroreIva || notaErroreSdi || notaErroreEmail || notaErrorePec || notaErroreTel || notaErroreCel) {
                notaTesto.remove();
                notaErroreIva.remove();
                notaErroreSdi.remove();
                notaErroreEmail.remove();
                notaErrorePec.remove();
                notaErroreTel.remove();
                notaErroreCel.remove();
            }
        } else {
        e.preventDefault();
        
        gruppoDue.style.display = 'none';
        gruppoTre.removeAttribute('style');
        cerchioDue.classList.add('cerchio-active');
        cerchioDue.classList.remove('cerchio-deactive');
        numDue.classList.add('active');
        numDue.classList.remove('deactive');
        testoDue.classList.add('active');
        testoDue.classList.remove('deactive');
        if(notaTesto || notaErroreIva || notaErroreCap || notaErroreSdi ||  notaErroreEmail || notaErrorePec || notaErroreTel) {
            notaTesto.remove();
            notaErroreIva.remove();
            notaErroreCap.remove();
            notaErroreSdi.remove(); 
            notaErroreEmail.remove();
            notaErrorePec.remove();
            notaErroreTel.remove();
            notaErroreCel.remove();
        } 
        window.scroll({top: 0, left: 0, behavior: 'smooth'});  
    }
               
      
    }
})




indietroTre.addEventListener('click', function(e) {
    e.preventDefault();
    gruppoTre.style.display = 'none';
    gruppoDue.removeAttribute('style');
    cerchioDue.classList.add('cerchio-deactive');
    cerchioDue.classList.remove('cerchio-active');
    numDue.classList.add('deactive');
    numDue.classList.remove('active');
    testoDue.classList.add('deactive');
    testoDue.classList.remove('active');
    window.scroll({top: 0, left: 0, behavior: 'smooth'}); 
    
})






inviaRegistrazione.addEventListener('click', function(e) {
e.preventDefault();





if((nomeF1.value == '') || (nomeF1.value == undefined)) {
   
    campo_mancante(nomeF1);
    nomeF1.focus();
} else if((cognomeF1.value == '') || (cognomeF1.value == undefined)) {
    
    campo_mancante(cognomeF1);
    cognomeF1.focus();
} else if((emailF1.value == '') || (emailF1.value == undefined)) {
    
    campo_mancante(emailF1);
    emailF1.focus();
} else if((telefonoF1.value == '') || (telefonoF1.value == undefined)) {
    
    campo_mancante(telefonoF1);
    telefonoF1.focus();
} else if((cellulareF1.value == '') || (cellulareF1.value == undefined)) {
   
    campo_mancante(cellulareF1);
    cellulareF1.focus();  
 } else if((ragSocialeF2.value == '') || (ragSocialeF2.value == undefined)) {
       
        campo_mancante(ragSocialeF2);
        ragSocialeF2.focus();
    } else if((partitaIvaF2.value == '') || (partitaIvaF2.value == undefined)) {
        
        campo_mancante(partitaIvaF2);
        partitaIvaF2.focus();
    } else if((cFiscaleF2.value == '') || (cFiscaleF2.value == undefined)) {
        
        campo_mancante(cFiscaleF2);
        cFiscaleF2.focus();
    } else if((indirizzoLegF2.value == '') || (indirizzoLegF2.value == undefined)) {
       
        campo_mancante(indirizzoLegF2);
        indirizzoLegF2.focus();
    } else if((cittaLegF2.value == '') || (cittaLegF2.value == undefined)) {
        
        campo_mancante(cittaLegF2);
        cittaLegF2.focus();
    } else if((capLegF2.value == '') || (capLegF2.value == undefined)) {
        
        campo_mancante(capLegF2);
        capLegF2.focus();
    } else if((provinciaLegaleF2.value == '') || (provinciaLegaleF2.value == undefined)) {
     
        campo_mancante(provinciaLegaleF2);
        provinciaLegaleF2.focus();
    }  else if((consensoPrivacy.checked == false)) {
        
        campo_mancante(consensoPrivacy);
        consensoPrivacy.focus();  

} else  {

  
    
    
    let avviso = document.createElement('div');
avviso.innerHTML = '<h3>Registrazione inviata con successo</h3>';
avviso.classList.add('popup-reg-inviata');
document.body.append(avviso);
    creaPopup().then(
        function() { setTimeout(() => {
            avviso.remove();
            form.submit();          // INVIO DATI
            window.location.href = 'index.html';
          }, "2800")
           }
      );


}

   
})


  async function creaPopup() {
    let avviso = document.createElement('div');
    avviso.innerHTML = '<div class="popup-reg-inviata"><h3>Registrazione inviata con successo.</h3></div>';
    avviso.classList.add('sfondo-popup-reg');
    document.body.append(avviso);
  }

