// VARIABLES
// =================================================================================================

const customerReviewCard = $("#customer-review-one");
let countStartNum = 10;


const reviewsArray = [{
    review: 'Gabe and his team at We Love All Pets are the best pet sitters you could ask for. They are reliable and trustworthy and they truly care for animals (and their owners).',
    icon: './assets/images/Updated Logo and Thumbnail Icons/Icons copy/png/Woman 1.png',
    name: 'Catherine W.',
    area: ' from The Museum District'
}, {
    review: `My husband and I seriously lucked out when we found Gabe with We Love All Pets! Not only is he the nicest guy (literally THE NICEST), he is extremely knowledgeable about dogs (and I'm sure cats too) and every dog seems to love him.`,
    icon: './assets/images/Updated Logo and Thumbnail Icons/Icons copy/png/Woman 2.png',
    name: 'Kelly B.D.',
    area: ' from Museum District'
}, {
    review: 'Gabriel Kelley has built his company, We Love All Pets into an organization with a solid reputation for premium service. He and his personnel provide a rich giving atmosphere for our pets anytime we need them.',
    icon: './assets/images/Updated Logo and Thumbnail Icons/Icons copy/png/Man 1.png',
    name: 'John K.',
    area: ' from The Heights'
}, {
    review: 'After our former dog sitter moved away we were at a loss for someone to tend to our 17-year-old dog who is on meds and a finicky eater. At the suggestion of our vet we tried We Love All Pets. Gabriel and his crew are kind and patient with our pup and they assure that she has all of her meds and eats while we are away. We are so thankful for our vet’s recommendation.',
    icon: './assets/images/Updated Logo and Thumbnail Icons/Icons copy/png/Woman 1.png',
    name: 'Diane E.',
    area: ' from Museum District'
}, {
    review: 'We’re really happy that we found We Love All Pets! We had never used a pet sitting service before but have used them multiple times now, and will definitely be using them again.',
    icon: './assets/images/Updated Logo and Thumbnail Icons/Icons copy/png/Woman 2.png',
    name: 'Julie and Brad T.',
    area: ' from The Med Center'
}, {
    review: 'The Best The Best The Best!!! I’ve used Gabe for over 7 years now. I am blessed to have found him and his team, as they have always treated my dog Jazz with nothing but the best in love and care.',
    icon: './assets/images/Updated Logo and Thumbnail Icons/Icons copy/png/Woman 1.png',
    name: 'Gwinny T.',
    area: ' from The Galleria'
}, {
    review: '...there was never a moment of concern or worry. The updates I received put my mind at ease, and they made sure to maintain that contact regularly.',
    icon: './assets/images/Updated Logo and Thumbnail Icons/Icons copy/png/Woman 2.png',
    name: 'Michelle D.',
    area: ' from River Oaks'
}, {
    review: 'You can’t go wrong with the team at We Love All Pets. Without a doubt, it is apparent that their primary concern is the well-being of your pet.  Our two Danes, Loki and Thor, absolutely love them.',
    icon: './assets/images/Updated Logo and Thumbnail Icons/Icons copy/png/Man 2.png',
    name: 'James and Lily F.',
    area: ' from Rice Village'
}, {
    review: 'We Love All Pets has been a Lifesaver time and time again. We’ve used Gabriel’s and his team for a few years now and have never been worried about our pup, Cheerio, while in their care.',
    icon: './assets/images/Updated Logo and Thumbnail Icons/Icons copy/png/Woman 1.png',
    name: 'Laura T.',
    area: ' from West University Place'
}, {
    review: 'As a nervous dog mom of a high-needs rescue dog, I always feel safe with them watching and caring for Murray.',
    icon: './assets/images/Updated Logo and Thumbnail Icons/Icons copy/png/Woman 2.png',
    name: 'Jamie A.',
    area: ' from The Heights'
}, {
    review: 'Our Frenchie has had multiple spine surgeries for intervertebral disk disease, so it is always difficult leaving her under the care of someone else as she is very fragile. Gabriel and his team have been absolutely wonderful with our baby...',
    icon: './assets/images/Updated Logo and Thumbnail Icons/Icons copy/png/Man 1.png',
    name: 'Marc E.',
    area: ' from Museum District'
}];




// APP LOGIC
// =================================================================================================

// Variable to hold our setInterval
let timer;

const reviewsRotation = {

    reviews: reviewsArray,
    currentReview: 0,
    counter: countStartNum,

    countdown: function() {
        reviewsRotation.counter--;
        console.log(`time remaining ${reviewsRotation.counter}`);

        if (reviewsRotation.counter === 1) {
            reviewsRotation.fadeOutText();
        }

        else if (reviewsRotation.counter === 0) {
            reviewsRotation.timeUp();
        }
    },

    fadeInText: function() {
        // Customer Review One
        $("#customer-review-one-text").fadeIn("slow");
        $("#customer-review-one-name").fadeIn("slow");
        $("#customer-review-one-image").fadeIn("slow");
        $("#customer-review-one-dash").fadeIn("slow");

        // Customer Review Two
        $("#customer-review-two-text").fadeIn("slow");
        $("#customer-review-two-name").fadeIn("slow");
        $("#customer-review-two-image").fadeIn("slow");
        $("#customer-review-two-dash").fadeIn("slow");

        // Customer Review Three
        $("#customer-review-three-text").fadeIn("slow");
        $("#customer-review-three-name").fadeIn("slow");
        $("#customer-review-three-image").fadeIn("slow");
        $("#customer-review-three-dash").fadeIn("slow");

        // Customer Review Four
        $("#customer-review-four-text").fadeIn("slow");
        $("#customer-review-four-name").fadeIn("slow");
        $("#customer-review-four-image").fadeIn("slow");
        $("#customer-review-four-dash").fadeIn("slow");
    },

    fadeOutText: function() {
        // Customer Review One
        $("#customer-review-one-text").fadeOut(1000);
        $("#customer-review-one-name").fadeOut(1000);
        $("#customer-review-one-image").fadeOut(1000);
        $("#customer-review-one-dash").fadeOut(1000);

        // Customer Review Two 
        $("#customer-review-two-text").fadeOut(1000);
        $("#customer-review-two-name").fadeOut(1000);
        $("#customer-review-two-image").fadeOut(1000);
        $("#customer-review-two-dash").fadeOut(1000);

        // Customer Review Three 
        $("#customer-review-three-text").fadeOut(1000);
        $("#customer-review-three-name").fadeOut(1000);
        $("#customer-review-three-image").fadeOut(1000);
        $("#customer-review-three-dash").fadeOut(1000);

        // Customer Review Four 
        $("#customer-review-four-text").fadeOut(1000);
        $("#customer-review-four-name").fadeOut(1000);
        $("#customer-review-four-image").fadeOut(1000);
        $("#customer-review-four-dash").fadeOut(1000);
    },

    loadReviewInfo: function() {

        timer = setInterval(reviewsRotation.countdown, 1000);

        reviewsRotation.fadeInText();

        // Customer Review One
        
        // console.log(`loadReviewInfo() hit. currentReview: ${reviewsRotation.currentReview}`)

        $("#customer-review-one").empty();

        let newCustomerOneReview = $("#customer-review-one")
            .html(
                `<p class="text-uppercase ml-3 text-dark word-on-street" id="customer-review-one-title"><i class="far fa-comment fa-lg mr-2"></i><span class="word-on-the-street-title">The Word on the Street</span></p>

                <p class="page-breaker-text mx-5 mt-3" id="customer-review-one-text">"${reviewsArray[this.currentReview].review}"</p>

                <p class="page-breaker-text mt-n2 mr-5 text-right"><img id="customer-review-one-image" src="${reviewsArray[this.currentReview].icon}" alt="Highly-rated customer review icon - Pet Care Houston"><span id="customer-review-one-dash"> - </span><span class="customerName" id="customer-review-one-name">${reviewsArray[this.currentReview].name}<small><span class="valued-customer-since text-right text-muted ml-2" id="customer-review-one-area">${reviewsArray[this.currentReview].area}</span></small></span></p>`);

        $("#customer-review-one").append(newCustomerOneReview);

        // Customer Review Two
        if (reviewsRotation.currentReview === 10) {
            reviewsRotation.currentReview = -1;
        }

        // console.log("Review Two CurrentReview", reviewsRotation.currentReview);

        $("#customer-review-two").empty();

        let newCustomerTwoReview = $("#customer-review-two")
            .html(
                `<p class="text-uppercase ml-3 text-dark word-on-street" id="customer-review-two-title"><i class="far fa-comment fa-lg mr-2"></i><span class="word-on-the-street-title">The Word on the Street</span></p>

                <p class="page-breaker-text mx-5 mt-3" id="customer-review-two-text">"${reviewsArray[this.currentReview +1].review}"</p>

                <p class="page-breaker-text mt-n2 mr-5 text-right"><img id="customer-review-two-image" src="${reviewsArray[this.currentReview +1].icon}" alt="Highly-rated customer review icon - Pet Care Houston"><span id="customer-review-two-dash"> - </span><span class="customerName" id="customer-review-two-name">${reviewsArray[this.currentReview +1].name}<small><span class="valued-customer-since text-right text-muted ml-2" id="customer-review-two-area">${reviewsArray[this.currentReview +1].area}</span></small></span></p>`);

        $("#customer-review-two").append(newCustomerTwoReview);

        // Conditional Code for Customer Review Three and Four
        if (reviewsRotation.currentReview === 8) {

            // Customer Review 3

            // console.log("if === 8 stmt hit: Review Three CurrentReview", reviewsRotation.currentReview);

            $("#customer-review-three").empty();
    
            let newCustomerThreeReview = $("#customer-review-three")
                .html(
                    `<p class="text-uppercase ml-3 text-dark word-on-street" id="customer-review-three-title"><i class="far fa-comment fa-lg mr-2"></i><span class="word-on-the-street-title">The Word on the Street</span></p>
    
                    <p class="page-breaker-text mx-5 mt-3" id="customer-review-three-text">"${reviewsArray[this.currentReview +2].review}"</p>
    
                    <p class="page-breaker-text mt-n2 mr-5 text-right"><img id="customer-review-three-image" src="${reviewsArray[this.currentReview +2].icon}" alt="Highly-rated customer review icon - Pet Care Houston"><span id="customer-review-three-dash"> - </span><span class="customerName" id="customer-review-three-name">${reviewsArray[this.currentReview +2].name}<small><span class="valued-customer-since text-right text-muted ml-2" id="customer-review-three-area">${reviewsArray[this.currentReview +2].area}</span></small></span></p>`);
    
            $("#customer-review-three").append(newCustomerThreeReview);
            
            // Customer Review Four

            // console.log("if === 8 stmt hit:  Review Four CurrentReview", reviewsRotation.currentReview);

            $("#customer-review-four").empty();
    
            let newCustomerFourReview = $("#customer-review-four")
                .html(
                    `<p class="text-uppercase ml-3 text-dark word-on-street" id="customer-review-four-title"><i class="far fa-comment fa-lg mr-2"></i><span class="word-on-the-street-title">The Word on the Street</span></p>
    
                    <p class="page-breaker-text mx-5 mt-3" id="customer-review-four-text">"${reviewsArray[this.currentReview -8].review}"</p>
    
                    <p class="page-breaker-text mt-n2 mr-5 text-right"><img id="customer-review-four-image" src="${reviewsArray[this.currentReview -8].icon}" alt="Highly-rated customer review icon - Pet Care Houston"><span id="customer-review-four-dash"> - </span><span class="customerName" id="customer-review-four-name">${reviewsArray[this.currentReview -8].name}<small><span class="valued-customer-since text-right text-muted ml-2" id="customer-review-four-area">${reviewsArray[this.currentReview -8].area}</span></small></span></p>`);
    
            $("#customer-review-four").append(newCustomerFourReview);
        }

        else if (reviewsRotation.currentReview === 9) {

            // Customer Review Three

            // console.log("else/if === 9 stmt hit - Review Three CurrentReview", reviewsRotation.currentReview);

            $("#customer-review-three").empty();
    
            let newCustomerThreeReview = $("#customer-review-three")
                .html(
                    `<p class="text-uppercase ml-3 text-dark word-on-street" id="customer-review-three-title"><i class="far fa-comment fa-lg mr-2"></i><span class="word-on-the-street-title">The Word on the Street</span></p>
    
                    <p class="page-breaker-text mx-5 mt-3" id="customer-review-three-text">"${reviewsArray[this.currentReview -9].review}"</p>
    
                    <p class="page-breaker-text mt-n2 mr-5 text-right"><img id="customer-review-three-image" src="${reviewsArray[this.currentReview -9].icon}" alt="Highly-rated customer review icon - Pet Care Houston"><span id="customer-review-three-dash"> - </span><span class="customerName" id="customer-review-three-name">${reviewsArray[this.currentReview -9].name}<small><span class="valued-customer-since text-right text-muted ml-2" id="customer-review-three-area">${reviewsArray[this.currentReview -9].area}</span></small></span></p>`);
    
            $("#customer-review-three").append(newCustomerThreeReview);

            // Customer Review Four

            // console.log("else/if === 9 stmt hit - Review Four CurrentReview", reviewsRotation.currentReview);

            $("#customer-review-four").empty();
    
            let newCustomerFourReview = $("#customer-review-four")
                .html(
                    `<p class="text-uppercase ml-3 text-dark word-on-street" id="customer-review-four-title"><i class="far fa-comment fa-lg mr-2"></i><span class="word-on-the-street-title">The Word on the Street</span></p>
    
                    <p class="page-breaker-text mx-5 mt-3" id="customer-review-four-text">"${reviewsArray[this.currentReview -8].review}"</p>
    
                    <p class="page-breaker-text mt-n2 mr-5 text-right"><img id="customer-review-four-image" src="${reviewsArray[this.currentReview -8].icon}" alt="Highly-rated customer review icon - Pet Care Houston"><span id="customer-review-four-dash"> - </span><span class="customerName" id="customer-review-four-name">${reviewsArray[this.currentReview -8].name}<small><span class="valued-customer-since text-right text-muted ml-2" id="customer-review-four-area">${reviewsArray[this.currentReview -8].area}</span></small></span></p>`);
    
            $("#customer-review-four").append(newCustomerFourReview);
        }

        else if (reviewsRotation.currentReview === -1) {

            // Customer Review Three

            // console.log("else/if === -1 stmt hit - Review Three CurrentReview", reviewsRotation.currentReview);

            $("#customer-review-three").empty();
    
            let newCustomerThreeReview = $("#customer-review-three")
                .html(
                    `<p class="text-uppercase ml-3 text-dark word-on-street" id="customer-review-three-title"><i class="far fa-comment fa-lg mr-2"></i><span class="word-on-the-street-title">The Word on the Street</span></p>
    
                    <p class="page-breaker-text mx-5 mt-3" id="customer-review-three-text">"${reviewsArray[this.currentReview +2].review}"</p>
    
                    <p class="page-breaker-text mt-n2 mr-5 text-right"><img id="customer-review-three-image" src="${reviewsArray[this.currentReview +2].icon}" alt="Highly-rated customer review icon - Pet Care Houston"><span id="customer-review-three-dash"> - </span><span class="customerName" id="customer-review-three-name">${reviewsArray[this.currentReview +2].name}<small><span class="valued-customer-since text-right text-muted ml-2" id="customer-review-three-area">${reviewsArray[this.currentReview +2].area}</span></small></span></p>`);
    
            $("#customer-review-three").append(newCustomerThreeReview);

            // Customer Review Four

            // console.log("else/if === -1 stmt hit - Review Four CurrentReview", reviewsRotation.currentReview);

            $("#customer-review-four").empty();
    
            let newCustomerFourReview = $("#customer-review-four")
                .html(
                    `<p class="text-uppercase ml-3 text-dark word-on-street" id="customer-review-four-title"><i class="far fa-comment fa-lg mr-2"></i><span class="word-on-the-street-title">The Word on the Street</span></p>
    
                    <p class="page-breaker-text mx-5 mt-3" id="customer-review-four-text">"${reviewsArray[this.currentReview +3].review}"</p>
    
                    <p class="page-breaker-text mt-n2 mr-5 text-right"><img id="customer-review-four-image" src="${reviewsArray[this.currentReview +3].icon}" alt="Highly-rated customer review icon - Pet Care Houston"><span id="customer-review-four-dash"> - </span><span class="customerName" id="customer-review-four-name">${reviewsArray[this.currentReview +3].name}<small><span class="valued-customer-since text-right text-muted ml-2" id="customer-review-four-area">${reviewsArray[this.currentReview +3].area}</span></small></span></p>`);
    
            $("#customer-review-four").append(newCustomerFourReview);
        }
        
        else {

            // Customer Review Three

            // console.log("else stmt hit - Review Three CurrentReview", reviewsRotation.currentReview);

            $("#customer-review-three").empty();
    
            let newCustomerThreeReview = $("#customer-review-three")
                .html(
                    `<p class="text-uppercase ml-3 text-dark word-on-street" id="customer-review-three-title"><i class="far fa-comment fa-lg mr-2"></i><span class="word-on-the-street-title">The Word on the Street</span></p>
    
                    <p class="page-breaker-text mx-5 mt-3" id="customer-review-three-text">"${reviewsArray[this.currentReview +2].review}"</p>
    
                    <p class="page-breaker-text mt-n2 mr-5 text-right"><img id="customer-review-three-image" src="${reviewsArray[this.currentReview +2].icon}" alt="Highly-rated customer review icon - Pet Care Houston"><span id="customer-review-three-dash"> - </span><span class="customerName" id="customer-review-three-name">${reviewsArray[this.currentReview +2].name}<small><span class="valued-customer-since text-right text-muted ml-2" id="customer-review-three-area">${reviewsArray[this.currentReview +2].area}</span></small></span></p>`);
    
            $("#customer-review-three").append(newCustomerThreeReview);

            // Customer Review Four

            // console.log("else stmt hit - Review Four CurrentReview", reviewsRotation.currentReview);

            $("#customer-review-four").empty();
    
            let newCustomerFourReview = $("#customer-review-four")
                .html(
                    `<p class="text-uppercase ml-3 text-dark word-on-street" id="customer-review-four-title"><i class="far fa-comment fa-lg mr-2"></i><span class="word-on-the-street-title">The Word on the Street</span></p>
    
                    <p class="page-breaker-text mx-5 mt-3" id="customer-review-four-text">"${reviewsArray[this.currentReview +3].review}"</p>
    
                    <p class="page-breaker-text mt-n2 mr-5 text-right"><img id="customer-review-four-image" src="${reviewsArray[this.currentReview +3].icon}" alt="Highly-rated customer review icon - Pet Care Houston"><span id="customer-review-four-dash"> - </span><span class="customerName" id="customer-review-four-name">${reviewsArray[this.currentReview +3].name}<small><span class="valued-customer-since text-right text-muted ml-2" id="customer-review-four-area">${reviewsArray[this.currentReview +3].area}</span></small></span></p>`);
    
            $("#customer-review-four").append(newCustomerFourReview);
        }
    },

    nextReview: function() {
        reviewsRotation.counter = countStartNum;
        reviewsRotation.currentReview++;
        reviewsRotation.loadReviewInfo();
    },

    timeUp: function() {
        clearInterval(timer);

        if (reviewsRotation.currentReview === reviewsArray.length -1) {
            reviewsRotation.reset();
        }
        else {
            reviewsRotation.nextReview();
        }
    },

    reset: function() {
        this.currentReview = 0;
        this.counter = countStartNum;
        this.loadReviewInfo();
    }


};



// MAIN PROCESS
// =================================================================================================
$(document).ready(function(){

    // Start Rotating Quotes on index.html
    reviewsRotation.reset();

    // Square Widget Visibility
    $("#book-now-btn").click(function(){
        $(".square-widget").toggleClass("square-widget-visible");
    });
});