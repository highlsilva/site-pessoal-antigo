
  
  
class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }
  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${ index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();
/*
(function() {
  var updateButton = document.getElementById('btn');
  var cancelButton = document.getElementById('times');
 // var favDialog = document.getElementById('favDialog');

  // O botão Update abre uma Dialog
  updateButton.addEventListener('click', function() {
    favDialog.show( "display: flex");
   
  });

  // O botão cancelButtom fecha uma Dialog
  cancelButton.addEventListener('click', function() {
    favDialog.close(" display: none;");
  });
})();


const button = document.getElementById("btn");
const modal = document.getElementById("dialog");
const buttonClose = document.getElementById("times");

  // O botão Update abre uma Dialog
  button.onclick = function() {
    modal.showModal()
     console.log(buttonClose)
  } 

 // O botão cancelButtom fecha uma Dialog
function closeModal() {
    modal.close()
  }

*/



btn.addEventListener('click', ()=> {
  dialog.classList.toggle('animar');
})

times.addEventListener('click', ()=> {
  dialog.classList.toggle(':not(.animar)');
})