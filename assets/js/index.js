window.onscroll = () => stickyNav()
let navbar = document.getElementById('navbar')
let sticky = navbar.offsetTop;

stickyNav = () => {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky')
    } else {
        navbar.classList.remove('sticky');
    }
}

let $root = $('html, body');
$('a.menu-section').click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 700);
    return false;
});

