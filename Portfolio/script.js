var typed = new Typed('#element', {
    strings: ['about creating user-friendly, innovative digital experiences. And In web development adept in front-end. Explore my portfolio!'],
    typeSpeed: 100,
});

function openWhatsApp() {
    // Replace the phone number and message with your desired values
    var phoneNumber = '8521962221'; // Phone number including country code
    var message = 'Hello, this is a pre-filled message!'; // Message to be sent

    // Encode message for URL
    var encodedMessage = encodeURIComponent(message);

    // Construct WhatsApp URL
    var url = 'whatsapp://send?phone=' + phoneNumber + '&text=' + encodedMessage;

    // Open WhatsApp
    window.location.href = url;
};
// slide-up script
$('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
});

$('.navbar .menu li a').click(function () {
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
});

// toggle menu/navbar script
$('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});


// function scrollToTop() {
//     // Scroll to the top of the page
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth' // This makes the scrolling smooth
//     });
// }

// window.addEventListener('scroll', function() {
//     var navbar = document.getElementById('navbar'); // Get the navbar element

//     // Change navbar color when scrolling down
//     if (window.scrollY > 50) { // Change 50 to your desired scroll position
//         navbar.style.backgroundColor = 'Black';
//     } else {
//         navbar.style.backgroundColor = 'Transparant'; // Reset to original color
//     }
// })


