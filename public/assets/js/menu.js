// import { getAuth, signOut  } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

class MobileNavbar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link, index)=>{
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.4}s`);
        });
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init(){
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);
mobileNavbar.init();

// function desconectar(){
//     const auth = getAuth();
// signOut(auth).then(() => {
//   alert('desconetado com sucesso');
// }).catch((erro) => {
//     alert('algo de errado não está certo');
// });
// }
// const sair = document.getElementById("sair");

// sair.addEventListener("click", (error) => {
//     desconectar();
// })