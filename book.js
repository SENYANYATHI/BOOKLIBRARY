searchform =document.querySelector('.search-form');
document.querySelector('#search-button').onclick =() =>{
  searchform.classList.toggle('active');
}

let loginform =document.querySelector('.login-form-container');

document.querySelector('#login-button').onclick = () =>{
   loginform.classList.toggle('active');
}

document.querySelector('#close-login-button').onclick = () =>{
    loginform.classList.remove('active');
}
let shoppingform =document.querySelector('.shopping-cart-cointaner');

document.querySelector('#shopping-button').onclick = () => {
    shoppingform.classList.toggle('active');
}
document.querySelector('#close-shopping-cart').onclick = () => {
    shoppingform.classList.remove('active');
}
windows.onscroll = () =>{
    searchform.classList.remove('active');
  
    if (window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    } else{
        document.querySelector(' .header .header-2').classList.remove('active');
    }
}
windows.onscroll = () =>{
    
    if (window.onload > 80){
        document.querySelector('.header .header-2').classList.add('active');
    } else{
        document.querySelector(' .header .header-2').classList.remove('active');
    }

}
var swiper = new swiper (".book.slider",{
    loop: true,
    centeredslides: true,
    autoplay: {
        delay: 9500,
        disableoninteraction: false,
    },
    breakpoints: {
        0: {
            slidesperview: 1,
        },
        768: {
            slidesperview: 2,
        },
        1024: {
            slidesperview: 3,
        },
    },
});
var swiper = new(".featured-slider",{
    spacebetween: 10,
    loop: true,
    centeredslides: true,
    autoplay: {
        delay: 9500,
        disableoninteraction: false,
    },
    navigation: {
        nextel: ".swiper-button-next",
        prevel: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesperview: 1,
        },
        450: {
            slidesperview: 2,
        },
        768: {
            slidesperview: 3,
        },
        1024: {
            slidesperview: 4,
        },
    },
});
var swiper = new(".arrrivals-slider",{
    spacebetween: 10,
    loop: true,
    centeredslides: true,
    autoplay: {
        delay: 9500,
        disableoninteraction: false,
    },
    navigation: {
 
    breakpoints: {
        0: {
            slidesperview: 1,
        },
       
        768: {
            slidesperview: 2,
        },
        1024: {
            slidesperview: 3,
        },
    },
},
});

var swiper = new(".reviews-slider",{
    spacebetween: 10,
    grapcursor:true,
    loop: true,
    centeredslides: true,
    autoplay: {
        delay: 9500,
        disableoninteraction: false,
    },
    navigation: {
 
    breakpoints: {
        0: {
            slidesperview: 1,
        },
       
        768: {
            slidesperview: 2,
        },
        1024: {
            slidesperview: 3,
        },
    },
},
});


