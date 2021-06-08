//count
$(".count").each(function () {
    $(this)
        .prop("Counter", 0)
        .animate(
            {
                Counter: $(this).text(),
            },
            {
                duration: 4000,
                easing: "swing",
                step: function (now) {
                    $(this).text(Math.ceil(now));
                },
            }
        );
});

//testimonial
$(document).ready(function () {
    $(".testimonial").owlCarousel({
        loop: true,
        nav: false,
        margin: 0,
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 800,
    });
});

//Clients-slider
$(document).ready(function () {
    $(".clients-slider").owlCarousel({
        loop: true,
        nav: false,
        margin: 40,
        items: 5,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 800,
        responsive: {
            0: {
                items: 1,
            },
            428: {
                items: 3,
            },
            768: {
                items: 5,
            },
        },
    });
});

/* Onscroll */
window.onscroll = function () {
    myFunction();
};
var header = document.getElementById("mobileMenu");
var sticky = header.offsetTop;
console.log(sticky);
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

/* toggle */
function toggle() {
    var mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("active");
}
