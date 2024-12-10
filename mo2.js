


// function testerHauteurDiv() {
//     var divElement = document.querySelector('.parallax-one'); // Remplacez 'nom-du-div' par l'ID de votre div spécifié
//     var navElement = document.getElementsByTagName('header')[0]; // Remplacez 'nav' si vous utilisez une autre balise pour votre navigation
  
//     var hauteurDiv = divElement.offsetHeight;
//     var hauteurFenetre = window.innerHeight;
  
//     if (hauteurDiv === hauteurFenetre) {
//       navElement.style.background = 'transparent';
//     } else {
//       navElement.style.background = 'var(--body-color)'; // Remplacez 'votre-couleur-de-fond' par la couleur de fond souhaitée
//     }
//   }
  
//   // Exécutez la fonction lors du chargement de la page ou lorsque vous souhaitez tester la hauteur du div
//   testerHauteurDiv();

  function testerPositionInitiale() {
    var navElem = document.getElementsByTagName('header'); // Remplacez 'nav' si vous utilisez une autre balise pour votre navigation
    // var title = document.querySelector('.title1')
    var eleNav = document.querySelector('.nav__link')

    function detecterScroll() {
      if (window.pageYOffset === 0) {
        navElem.style.backgroundColor = 'transparent';
        // title.style.color = '#25338D' ;
        eleNav.style.color = 'white' ;

      } else {
        
        navElem.style.backgroundColor = 'var(--body-color)'; // Remplacez 'votre-couleur-de-fond' par la couleur de fond souhaitée
        //t.style.backgroundColor = '#25338D'; // Remplacez 'votre-couleur-de-fond' par la couleur de fond souhaitée
        
        // eleNav.style.color = '#25338D' ;
    }
    navElem.style.transition = 'background 1s';
    }
  
    window.addEventListener('scroll', detecterScroll);
  }
  
  // Exécutez la fonction lors du chargement de la page
  testerPositionInitiale();