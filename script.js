var active = 3;
var mncircles = document.querySelectorAll(".mn-circle");
var smcircles = document.querySelectorAll(".sm-circle");
var sec = document.querySelectorAll(".second");

gsap.to(mncircles[active - 1], {
    opacity: .7
});
gsap.to(smcircles[active - 1], {
    opacity: 1
});
gsap.to(sec[active - 1], {
    opacity: 1,
    x: 135,
    scale: 1.6
});

mncircles.forEach(function (val, index) {
    val.addEventListener('click', function () {
        gsap.to("#circle", {
            rotate: (3 - (index + 1)) * 10
        });
        greyout();

        gsap.to(this, {
            opacity: .7
        })
        gsap.to(smcircles[index], {
            opacity: 1
        })
        gsap.to(sec[index], {
            opacity: 1,
            x: 135,
            scale: 1.6
        })
    })
});

function greyout() {
    gsap.to(mncircles, {
        opacity: .08
    })
    gsap.to(smcircles, {
        opacity: .2
    })
    gsap.to(sec, {
        opacity: .2,
        scale: 1,
        x: 0
    })
}

gsap.to("#circle", {
    rotate: 0,
    ease: Expo.easeInOut,
    duration: 2
});