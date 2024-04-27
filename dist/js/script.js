import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

library.add(faCamera)

const camera = icon({ prefix: 'fas', iconName: 'camera' })

// Navbar Fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }


}


// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle("hidden");
})


