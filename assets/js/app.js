// VARIABLES
// =================================================================================================
const customerReviewCard = $("#customer-review-one");
let countStartNum = 5;


const reviewsArray = [{
    review: 'Gabe and his team at We Love All Pets are the best pet sitters you could ask for. They are reliable and trustworthy and they truly care for animals (and their owners) ...',
    icon: './assets/images/Updated Logo and Thumbnail Icons/Icons copy/png/Woman 1.png',
    name: 'Catherine W.',
    area: ' from The Museum District'
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
    area: ' West University Place'
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
}, {
    review: `My husband and I seriously lucked out when we found Gabe with We Love All Pets! Not only is he the nicest guy (literally THE NICEST), he is extremely knowledgeable about dogs (and I'm sure cats too) and every dog seems to love him.`,
    icon: './assets/images/Updated Logo and Thumbnail Icons/Icons copy/png/Woman 2.png',
    name: 'Kelly B.D.',
    area: ' from Museum District'
}, {
    review: 'Gabriel Kelley has built his company, We Love All Pets into an organization with a solid reputation for premium service. He and his personnel provide a rich giving atmosphere for our pets anytime we need them ...',
    icon: './assets/images/Updated Logo and Thumbnail Icons/Icons copy/png/Man 1.png',
    name: 'John K.',
    area: ' from The Heights'
}, {
    review: 'After our former dog sitter moved away we were at a loss for someone to tend to our 17-year-old dog who is on meds and a finicky eater. At the suggestion of our vet we tried We Love All Pets. Gabriel and his crew are kind and patient with our pup and they assure that she has all of her meds and eats while we are away. We are so thankful for our vet’s recommendation.',
    icon: './assets/images/Updated Logo and Thumbnail Icons/Icons copy/png/Woman 1.png',
    name: 'Diane E.',
    area: ' from Museum District'
}];




// APP LOGIC
// =================================================================================================
    // Customer Reviews - Scrolling
    // Testing the Array of Objects w/ a for loop
    // for (let i = 0; i < reviewsArray.length; i++) {
    //     console.log(`review ${i}: ${reviewsArray[i].review}`);
    //     console.log(`name ${i}: ${reviewsArray[i].name}`);
    //     console.log(`area ${i}: ${reviewsArray[i].area}`);
    //     console.log("**************************************************************************");
    // }

    // Testing to see if we can get 1st review array to switch out once
    // console.log(`countStartNum: ${countStartNum}`);
    // countStartNum++;
    // console.log(`countStartNum updated: ${countStartNum}`);

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
                console.log("15 secs have passed, should see a new Customer Review on the screen");
                reviewsRotation.timeUp();
            }
        },

        fadeInText: function() {
            $("#customer-review-one-text").fadeIn("slow");
            $("#customer-review-one-name").fadeIn("slow");
        },

        fadeOutText: function() {
            $("#customer-review-one-text").fadeOut(1000);
            $("#customer-review-one-name").fadeOut(1000);
        },

        loadReviewInfo: function() {

            timer = setInterval(reviewsRotation.countdown, 1000);

            console.log(`loadReviewInfo() hit. currentReview: ${reviewsRotation.currentReview}`)

            reviewsRotation.fadeInText();

            $("#customer-review-one-text").empty();
            $("#customer-review-one-name").empty();
            
            let newReview = $("#customer-review-one-text").text(`" ${reviewsArray[this.currentReview].review} "`);
            let newName = $("#customer-review-one-name").text(`${reviewsArray[this.currentReview].name}`);

            let newAreaSpan = $("<span>")
                .addClass("valued-customer-since text-right text-muted ml-2")
                .attr("id", "customer-review-one-area")
                .text(`${reviewsArray[this.currentReview].area}`);

            newName.append(newAreaSpan);
            
            $("#customer-review-one-text").append(newReview);
            $("#customer-review-one-name").append(newName);
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


    }



// MAIN PROCESS
// =================================================================================================
$(document).ready(function(){

    reviewsRotation.reset();


    // Square Widget Visibility
    $("#book-now-btn").click(function(){
        // console.log("clicked");
        // $(".square-widget").fadeToggle();
        $(".square-widget").toggleClass("square-widget-visible");
    });
});