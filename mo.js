/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close'),
    socialU = document.getElementById('U')
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
        socialU.classList.add('undispaly')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
        socialU.classList.remove('undisplay')
    })
}

function addAlert () {
    alert("L'application n'est pas encore créée")
} 


  
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
        //when we click on each nav__link we remove the show-menu class
        navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))










// const op2 = document.querySelector(".op2")
// const op2Desc = document.querySelector(".op2_desc")

// op2.addEventListener("click", () => {
//       if (op2Desc.classList.contains("undisplay")) {
        
//            op2.classList.add("undisplay")
//            op2Desc.classList.remove("undisplay")
//       }
// })

// op2Desc.addEventListener("click", () => {
//   if (op2.classList.contains("undisplay")) {
    
//     op2Desc.classList.add("undisplay")
//     op2.classList.remove("undisplay")
//   }
// })


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
    var navElement = document.getElementsByTagName('header')[0]; // Remplacez 'nav' si vous utilisez une autre balise pour votre navigation
    // var title = document.querySelector('.title1')
    var eleNav = document.querySelector('.nav__link')

    function detecterScroll() {
      if (window.pageYOffset === 0) {
        navElement.style.background = 'transparent';
        // title.style.color = '#25338D' ;
        eleNav.style.color = 'white' ;

      } else {
        
        navElement.style.background = 'var(--body-color)'; // Remplacez 'votre-couleur-de-fond' par la couleur de fond souhaitée
        
        eleNav.style.color = '#25338D' ;
    }
    navElement.style.transition = 'background 1s';
    }
  
    window.addEventListener('scroll', detecterScroll);
  }
  
  // Exécutez la fonction lors du chargement de la page
  testerPositionInitiale();

  /*==================== SERVICES MODAL ====================*/
const   modalViews = document.querySelectorAll('.service__modal'),
modalCloses = document.querySelectorAll('.service__modal--close'),
modalBtns = document.querySelectorAll('.service__button')

let modal = function(modalClick){
modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn,i) =>{
modalBtn.addEventListener('click', () =>{
    modal(i)
})
})

modalCloses.forEach((modalClose) =>{
modalClose.addEventListener('click', () =>{
    modalViews.forEach((modalView) => {
        modalView.classList.remove('active-modal')
    })
})
})