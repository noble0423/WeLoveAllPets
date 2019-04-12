// Scroll Effect
$(window).scroll(function() {
    $("nav").toggleClass("scrolled", $(this).scrollTop() > 980); 
});



// const navToggleOnScroll = function() {
//     console.log("function fire");
// }

// $(window).on("scroll", function() {
//     $("nav").toggleClass("scrolled");
//     console.log("scrolling");
// });

// let userIsScrolling = false;
// console.log("userIsScrolling = " + userIsScrolling);

// $(window).on("scroll", function() {
//     userIsScrolling = true;
//     console.log("userIsScrolling = " + userIsScrolling);
//     // $("nav").toggleClass("scrolled");
//     // console.log("scrolling");
//     if (userIsScrolling === false) {
//         $("nav").toggleClass("scrolled");
//         console.log("scrolling");
//         userIsScrollling = false;
//     }
// });

/*!
 * Run a callback function after scrolling has stopped
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Function} callback The function to run after scrolling
 */

// Setup scrolling variable
// let isScrolling;

// const scrollStop = function(callback) {
// 	// Make sure a valid callback was provided
// 	if (!callback || typeof callback !== 'function') return;



// 	// Listen for scroll events
// 	window.addEventListener('scroll', function (event) {

// 		// Clear our timeout throughout the scroll
// 		window.clearTimeout(isScrolling);

// 		// Set a timeout to run after scrolling ends
// 		isScrolling = setTimeout(function() {

// 			// Run the callback
// 			callback();

// 		}, 66);

// 	}, false);

// };

// $(document).ready(function() {
//     scrollStop(function () {
//         console.log("Scrolling has stopped");
//         isScrolling = setTimeout(function() {
//             $("nav").toggleClass("scrolled");
//         }, 66);
        
//     });
// });


