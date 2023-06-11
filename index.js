const observer =  new IntersectionObserver((entries) => {
    entries.forEach(entry => {
         if (entry.isIntersecting){
            entry.target.classList.add('show');
         }
    });

});

const hiddenElments = document.querySelectorAll('.hidden');
hiddenElments.forEach(el => observer.observe(el))

// var typed = new Typed('.typed', {
//     strings: ['<p style="padding:0px; margin:0px;">I love to code and build things. I am a competitive programmer.</p>',
//                 '<p style="padding:0px; margin:0px;">I have passion for learning new things and solving problems.</p>',
//                 '<p style="padding:0px; margin:0px;">I have passion for learning new things and solving problems.</p>'
//             ],
//     typeSpeed: 70,

// });