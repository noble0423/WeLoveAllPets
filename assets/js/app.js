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

        // console.log(`loadReviewInfo() hit. currentReview: ${reviewsRotation.currentReview}`)

        reviewsRotation.fadeInText();

        // Customer Review One
        $("#customer-review-one-text").empty();
        $("#customer-review-one-name").empty();
        
        let newReviewOne = $("#customer-review-one-text").text(`" ${reviewsArray[this.currentReview].review} "`);
        let newNameOne = $("#customer-review-one-name").text(`${reviewsArray[this.currentReview].name}`);

        $("#customer-review-one-image").attr("src", `${reviewsArray[this.currentReview].icon}`);

        let newAreaSpanOne = $("<span>")
            .addClass("valued-customer-since text-right text-muted ml-2")
            .attr("id", "customer-review-one-area")
            .text(`${reviewsArray[this.currentReview].area}`);

        newNameOne.append(newAreaSpanOne);
        
        $("#customer-review-one-text").append(newReviewOne);
        $("#customer-review-one-name").append(newNameOne);

        // Customer Review Two
        if (reviewsRotation.currentReview === 10) {
            reviewsRotation.currentReview = -1;
        }
        
        $("#customer-review-two-text").empty();
        $("#customer-review-two-name").empty();

        // console.log("Review Two CurrentReview", reviewsRotation.currentReview);
        
        let newReviewTwo = $("#customer-review-two-text").text(`" ${reviewsArray[this.currentReview +1].review} "`);
        let newNameTwo = $("#customer-review-two-name").text(`${reviewsArray[this.currentReview +1].name}`);

        $("#customer-review-two-image").attr("src", `${reviewsArray[this.currentReview +1].icon}`);

        let newAreaSpanTwo = $("<span>")
            .addClass("valued-customer-since text-right text-muted ml-2")
            .attr("id", "customer-review-two-area")
            .text(`${reviewsArray[this.currentReview +1].area}`);

        newNameTwo.append(newAreaSpanTwo);
        
        $("#customer-review-two-text").append(newReviewTwo);
        $("#customer-review-two-name").append(newNameTwo);

        // Conditional Code for Customer Review Three and Four
        if (reviewsRotation.currentReview === 8) {
            
            // Customer Review Four
            $("#customer-review-four-text").empty();
            $("#customer-review-four-name").empty();

            // console.log("Review Four CurrentReview", reviewsRotation.currentReview);
            
            let newReviewFour = $("#customer-review-four-text").text(`" ${reviewsArray[this.currentReview -8].review} "`);
            let newNameFour = $("#customer-review-four-name").text(`${reviewsArray[this.currentReview -8].name}`);

            $("#customer-review-four-image").attr("src", `${reviewsArray[this.currentReview -8].icon}`);

            let newAreaSpanFour = $("<span>")
                .addClass("valued-customer-since text-right text-muted ml-2")
                .attr("id", "customer-review-four-area")
                .text(`${reviewsArray[this.currentReview -8].area}`);

            newNameFour.append(newAreaSpanFour);
            
            $("#customer-review-four-text").append(newReviewFour);
            $("#customer-review-four-name").append(newNameFour);
        }

        else if (reviewsRotation.currentReview === 9) {

            // Customer Review Three
            $("#customer-review-three-text").empty();
            $("#customer-review-three-name").empty();

            // console.log("Review Three CurrentReview", reviewsRotation.currentReview);
            
            let newReviewThree = $("#customer-review-three-text").text(`" ${reviewsArray[this.currentReview -9].review} "`);
            let newNameThree = $("#customer-review-three-name").text(`${reviewsArray[this.currentReview -9].name}`);

            $("#customer-review-three-image").attr("src", `${reviewsArray[this.currentReview -9].icon}`);

            let newAreaSpanThree = $("<span>")
                .addClass("valued-customer-since text-right text-muted ml-2")
                .attr("id", "customer-review-three-area")
                .text(`${reviewsArray[this.currentReview -9].area}`);

            newNameThree.append(newAreaSpanThree);
            
            $("#customer-review-three-text").append(newReviewThree);
            $("#customer-review-three-name").append(newNameThree); 

            // Customer Review Four
            $("#customer-review-four-text").empty();
            $("#customer-review-four-name").empty();

            // console.log("Review Four CurrentReview", reviewsRotation.currentReview);
            
            let newReviewFour = $("#customer-review-four-text").text(`" ${reviewsArray[this.currentReview -8].review} "`);
            let newNameFour = $("#customer-review-four-name").text(`${reviewsArray[this.currentReview -8].name}`);

            $("#customer-review-four-image").attr("src", `${reviewsArray[this.currentReview -8].icon}`);

            let newAreaSpanFour = $("<span>")
                .addClass("valued-customer-since text-right text-muted ml-2")
                .attr("id", "customer-review-four-area")
                .text(`${reviewsArray[this.currentReview -8].area}`);

            newNameFour.append(newAreaSpanFour);
            
            $("#customer-review-four-text").append(newReviewFour);
            $("#customer-review-four-name").append(newNameFour);
        }

        else if (reviewsRotation.currentReview === -1) {

            // Customer Review Three
            $("#customer-review-three-text").empty();
            $("#customer-review-three-name").empty();

            // console.log("Review Three CurrentReview", reviewsRotation.currentReview);
            
            let newReviewThree = $("#customer-review-three-text").text(`" ${reviewsArray[this.currentReview +2].review} "`);
            let newNameThree = $("#customer-review-three-name").text(`${reviewsArray[this.currentReview +2].name}`);

            $("#customer-review-three-image").attr("src", `${reviewsArray[this.currentReview +2].icon}`);

            let newAreaSpanThree = $("<span>")
                .addClass("valued-customer-since text-right text-muted ml-2")
                .attr("id", "customer-review-three-area")
                .text(`${reviewsArray[this.currentReview +2].area}`);

            newNameThree.append(newAreaSpanThree);
            
            $("#customer-review-three-text").append(newReviewThree);
            $("#customer-review-three-name").append(newNameThree); 

            // Customer Review Four
            $("#customer-review-four-text").empty();
            $("#customer-review-four-name").empty();

            // console.log("Review Four CurrentReview", reviewsRotation.currentReview);
            
            let newReviewFour = $("#customer-review-four-text").text(`" ${reviewsArray[this.currentReview +3].review} "`);
            let newNameFour = $("#customer-review-four-name").text(`${reviewsArray[this.currentReview +3].name}`);

            $("#customer-review-four-image").attr("src", `${reviewsArray[this.currentReview +3].icon}`);

            let newAreaSpanFour = $("<span>")
                .addClass("valued-customer-since text-right text-muted ml-2")
                .attr("id", "customer-review-four-area")
                .text(`${reviewsArray[this.currentReview +3].area}`);

            newNameFour.append(newAreaSpanFour);
            
            $("#customer-review-four-text").append(newReviewFour);
            $("#customer-review-four-name").append(newNameFour);
        }
        
        else {

            // Customer Review Three
            $("#customer-review-three-text").empty();
            $("#customer-review-three-name").empty();

            // console.log("Review Three CurrentReview", reviewsRotation.currentReview);
            
            let newReviewThree = $("#customer-review-three-text").text(`" ${reviewsArray[this.currentReview +2].review} "`);
            let newNameThree = $("#customer-review-three-name").text(`${reviewsArray[this.currentReview +2].name}`);

            $("#customer-review-three-image").attr("src", `${reviewsArray[this.currentReview +2].icon}`);

            let newAreaSpanThree = $("<span>")
                .addClass("valued-customer-since text-right text-muted ml-2")
                .attr("id", "customer-review-three-area")
                .text(`${reviewsArray[this.currentReview +2].area}`);

            newNameThree.append(newAreaSpanThree);
            
            $("#customer-review-three-text").append(newReviewThree);
            $("#customer-review-three-name").append(newNameThree);

            // Customer Review Four
            $("#customer-review-four-text").empty();
            $("#customer-review-four-name").empty();

            // console.log("Review Four CurrentReview", reviewsRotation.currentReview);
            
            let newReviewFour = $("#customer-review-four-text").text(`" ${reviewsArray[this.currentReview +3].review} "`);
            let newNameFour = $("#customer-review-four-name").text(`${reviewsArray[this.currentReview +3].name}`);

            $("#customer-review-four-image").attr("src", `${reviewsArray[this.currentReview +3].icon}`);

            let newAreaSpanFour = $("<span>")
                .addClass("valued-customer-since text-right text-muted ml-2")
                .attr("id", "customer-review-four-area")
                .text(`${reviewsArray[this.currentReview +3].area}`);

            newNameFour.append(newAreaSpanFour);
            
            $("#customer-review-four-text").append(newReviewFour);
            $("#customer-review-four-name").append(newNameFour);
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