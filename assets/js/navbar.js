// Scroll Effect
// let doneScrolling;

$(window).scroll(function() {
    // window.clearTimeout(doneScrolling);
    $("nav").toggleClass("scrolled", $(this).scrollTop() > 855); 
    $(".dropdown-menu").toggleClass("scrolled", $(this).scrollTop() > 855); 

    // doneScrolling = setTimeout(function() {

    //     // // Run the callback
    //     // callback();
    //     $("nav").toggleClass("scrolled");
    // }, 4000);    
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

// const scrollStop = function() {
	// Make sure a valid callback was provided
	// if (!callback || typeof callback !== 'function') return;

    // NAV BAR IS INITIALLY TRANSPARENT
    // NEED A BOOLEAN = DONESCROLLING
        // INITIALLY SET TO TRUE
    // SCROLL EVENT LISTENER IS LISTENING

            // SET A 1 SEC DELAY
                // CHECK DONESCROLLING...IF DONESCROLLING === FALSE
                    // SET DONESCROLLING BACK TO TRUE


                     // IF USER IS SCROLLING:
            // SET DONESCROLLING === FALSE
                //  NAVBAR STAYS TRANSPRENT (DO NOT TOGGLE)


	// Listen for scroll events
// 	window.addEventListener('scroll', function (event) {
//         console.log("scrolling");
// 		// Clear our timeout throughout the scroll
// 		window.clearTimeout(isScrolling);

// 		// Set a timeout to run after scrolling ends
// 		isScrolling = setTimeout(function() {

// 			// Run the callback
//             $("nav").toggleClass("scrolled");

// 		}, 2500);

// 	}, false);

// };

// $(document).ready(function() {
//     scrollStop();
//     // scrollStop(function () {
//     //     console.log("Scrolling has stopped");
//     //     isScrolling = setTimeout(function() {
//     //         $("nav").toggleClass("scrolled");
//     //     }, 66);
        
//     // });
// });


