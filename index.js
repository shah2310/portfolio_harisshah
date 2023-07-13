// For toggle
let MenuBtn = document.getElementById("menuBtn");

MenuBtn.addEventListener('click', function(){
    document.querySelector('body').classList.toggle('mobile-toggle');
    this.classList.toggle('fa-xmark');

});

// typing effect

let typed = new Typed('.auto-input', {
    strings: ['Front-End Developer!','Web Designer!', 'UI/UX Designer!', 'Search Engine Optimizer'],
    typeSpeed: 70,
    backSpeed: 90,
    backDelay: 5000,
    loop: true,
})