var crsr = document.querySelector("#cursor");
var crsrblur = document.querySelector("#cursor-b")
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+30+"px"
    crsr.style.top = dets.y+"px"
        crsrblur.style.left = dets.x-200+"px"
    crsrblur.style.top = dets.y-200+"px"
});

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    });
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95c11e"
        crsr.style.backgroundColor = "#95c11e"
    });

})






gsap.to("#nav", {
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        top: "top -11%",
        scrub: 1,
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -50vh",
        end: "top -80vh",
        scrub: 2,
    }

})

gsap.from("#about-us img, #about-us-text", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger :0.4,
    scrollTrigger: {
        trigger :"#about-us",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    }
})


gsap.from(".cards", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger :0.1,
    scrollTrigger: {
        trigger :".cards",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    }
})
