
let codiciEstesi = document.querySelectorAll('.col-estesa');
let colCompatibili = document.querySelectorAll('.col-compatibili');
let colOem = document.querySelectorAll('.col-oem');

let ultimaRigaTab = document.querySelectorAll('.col-compatibili');
let ultimaRigaTabDue = document.querySelectorAll('.col-oem');


for(let i = 0; i < codiciEstesi.length; i++) {
    codiciEstesi[i].style.display = 'none';
   
    codiciEstesi[i].addEventListener('click', function() {
       
        codiciEstesi[i].style.display = 'none';
        colOem[i].removeAttribute('style');
            colCompatibili[i].removeAttribute('style');
    })
   
    
}

for(let i = 0; i < ultimaRigaTab.length; i++) {
    ultimaRigaTab[i].addEventListener('click', function() {
        
            codiciEstesi[i].removeAttribute('style');
            colOem[i].style.display = 'none';
            colCompatibili[i].style.display = 'none';
      
       
    })
   
}


for(let i = 0; i < ultimaRigaTabDue.length; i++) {
    ultimaRigaTabDue[i].addEventListener('click', function() {
        
            codiciEstesi[i].removeAttribute('style');
            colOem[i].style.display = 'none';
            colCompatibili[i].style.display = 'none';
      
       
    })
   
}

