

let formRicercaAvanzataMob = document.querySelector('#form-ricerca-avanzata');
let mostraRicercaAv = document.querySelector('#mostra-ricerca-av');
let contenitoreRicercaAv = document.querySelector('#contenitore-mostra-ricerca-av');
let ricercaAvanzataMob = document.querySelector('.ricerca-avanzata-mob');

let imgChiudi = document.createElement('img');
imgChiudi.src = 'img/chiudi.svg';
imgChiudi.className = 'mostra-ricerca-av';




contenitoreRicercaAv.addEventListener('click', function(e) {
    e.stopPropagation();
        if(formRicercaAvanzataMob.className) {
            formRicercaAvanzataMob.classList.remove('form-ricerca-avanzata');
            mostraRicercaAv.style.display = 'none';
           ricercaAvanzataMob.prepend(imgChiudi);
        } 
       
              
 
}) 


imgChiudi.addEventListener('click', function(e) {
    
    e.stopPropagation();
        
            formRicercaAvanzataMob.classList.add('form-ricerca-avanzata');
            mostraRicercaAv.src = 'img/ico-cerca.svg';
            imgChiudi.remove();
            mostraRicercaAv.removeAttribute('style');
        

}) 
document.body.addEventListener('click', function(e) {
    if(e.target !== formRicercaAvanzataMob) {
        formRicercaAvanzataMob.classList.add('form-ricerca-avanzata');
        mostraRicercaAv.src = 'img/ico-cerca.svg';
        imgChiudi.remove();
        mostraRicercaAv.removeAttribute('style');
    
    }
      
      
  });



  





    


    





let images = new Array(
    'img/slider-2.png',
    'img/slider-3.png',
    'img/slider-1.png'
  );

  
  let slider = setInterval(function() {
    document.querySelector('.slide').setAttribute('style', 'background-image: url("' + images[0] + '");transition-duration: 500ms;');
   

    images.splice(images.length, 0, images[0]);
    images.splice(0, 1);
   
   
  }, 4000);

  



  let tornaSu = document.querySelectorAll('.torna-su');
  let section1Torna = document.querySelector('#section-1-torna')
  
  
  
  
  
  
  
  for(let i = 0; i < tornaSu.length; i++){
      window.addEventListener('scroll', function() {
    
          if(window.pageYOffset > 450) {
              tornaSu[i].classList.add('torna-su-big');
          }  else {
              tornaSu[i].classList.remove('torna-su-big');
          }
      
      }) 
      tornaSu[i].addEventListener('click', function() {
       
        window.scrollTo({top:0,left:0, behavior:'smooth'});
      })
  }
  