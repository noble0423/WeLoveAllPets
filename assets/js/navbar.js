// Scroll Effect

// window.addEventListener("resize", function() {
//     if (window.matchMedia("(min-width: 1200px)").matches) {
//         console.log("Screen width is at least 1200px");
//     } else {
//         console.log("Screen less than 1200px");
//     }
// });

$(window).scroll(function() {
    $("nav").toggleClass("scrolled", $(this).scrollTop() > 450); 
    // $(".dropdown-menu").toggleClass("scrolled", $(this).scrollTop() > 855);    
});

