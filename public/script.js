
window.onload = function(){ 

var barMenue = document.getElementById("menu-bar-id");  //الفاعل 
var HomeMenu = document.getElementById("links-id");   //المفعول
barMenue.onclick = function burgerMenu(){
    if(HomeMenu.style.display == "none")
      {
          HomeMenu.style.display = "block"
      }
      else{
          HomeMenu.style.display = "none"
      }
}


  // ---- Swiper Auto Play -----
// var swiper = new Swiper("mySwiper", {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 2000,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: "swiper-pagination",
//     clickable: true,
//   },
//   // navigation: {
//   //   nextEl: ".swiper-button-next",
//   //   prevEl: ".swiper-button-prev",
//   // },
// });

// 
};