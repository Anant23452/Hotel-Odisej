


function smoothScroll() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}









function textsplit(){
    var allh1 =document.querySelectorAll(".page2 h1")
allh1.forEach((elem)=>{
    var clutter =""
    var h1text =elem.textContent;
    var splittedText =h1text.split("");
    splittedText.forEach((el)=>{
        clutter+=`<span>${el}</span>`;
    })
    elem.innerHTML=clutter
    console.log(clutter);

})
gsap.to(".page2 h1 span",{
    color:"#E3E3C4",
    stagger:.2,
    scrollTrigger:{
        trigger:".page2 h1",
        scroller:'body',
        // markers:true,
        start:"top center",
        end :"top 10%",
        scrub:2,
    }
})
}
textsplit();


waves();
function page3svg(){
    var page3h =document.querySelectorAll(".page3 h1");
page3h.forEach((elem)=>{
    var clutter="";
    var h1t=elem.textContent;
    var splitted1=h1t.split("");
    splitted1.forEach((e)=>{
        clutter+=`<span>${e}</span>`;
    })
    console.log(clutter);
    elem.innerHTML=clutter;
})
gsap.to(".page3 h1 span",{
    scrollTrigger:{
        trigger:".page3 h1",
        start:"top 70%",
        end:"top 10%",
        scrub:2,
        // markers:true,
    },
    stagger:.2,
    color:"#E3E3C4",
})
}
page3svg();

var page2svg = document.querySelector(".page2svg").addEventListener("click",()=>{
    alert("clicked");
})

 var add =document.querySelector(".row");
function stut(){
    add.addEventListener("mousemove",()=>{
        console.log("mousemove");
    gsap.to(".row-l",{
        x:340,
        stagger:.2,
        
        ease:Power2.easeInOut2
        
    })
    })
    
    add.addEventListener("mouseleave",()=>{
        gsap.to(".row-l",{
            x:0,
            scale:1,
            ease:Power2.easeInOut2
        })
    })
}
// stut();
function all(){
    document.querySelectorAll(".row").forEach(function(elem){
        elem.addEventListener("mousemove",()=>{
            console.log(elem);
            gsap.to(elem.querySelector(".row-l"),{
                x:340,
                stagger:.2,
                ease:Power2.easeInOut2
            })
        })
        elem.addEventListener("mouseleave",()=>{
            gsap.to(elem.querySelector(".row-l"),{
                x:0,
                scale:1,
                ease:Power2.easeInOut2
            })
        })
    })
    
}
all();

function waves(){
    gsap.to(".page3 svg",{
        x:-200,
        // scale:1.4,
        scrollTrigger:{
            trigger:".page3",
            start:"top 70%",
            end:"top 0%",
            scrub:2,
            // markers:true,
            // scroller: ".main" // Add this line to specify the scroller
        },
        stagger:.1,
    });
    gsap.to(".side-s , .side-p",{
        x:-200,
        ease:Power2.easeInOut2,
        scrollTrigger:{
            trigger:".page6",
            start:"top 70%",
            end:"top -30%",
            scrub:2,
            // markers:true,
        },
        stagger:.1,
        
        
    })

}
waves();

var tl=gsap.timeline()
tl.from(".left-1, .right-img ",{
    opacity:0,
    scale:.9,
    y:50,
    
    ease:Power2.easeInOut2,
    scrollTrigger:{
        trigger:".page4",
        start:"top 60%",
        end:"top 50%",
        scrub:2,
        // markers:true,
    }
},"tl")

tl.from(".left-img",{
    opacity:0,
    scale:.9,
    y:50,
    stagger:3,
    ease:Power2.easeInOut2,
    scrollTrigger:{
        trigger:".page4",
        start:"top 60%",
        end:"top 50%",
        scrub:2,
        // markers:true,
    }
},"tl")

gsap.from(".page-7-two-left-img", {
    opacity: 0,
    scale: 0.9,
    y: 50,
    ease: Power2.easeInOut,
    scrollTrigger: {
        trigger: ".page7",
        start: "top 60%",
        end: "top 50%",
        scrub: 2,
        // markers: true,
    }
});

gsap.from("nav",{
    y:-100,
    ease:Power2.easeInOut,
    duration:1,
    
})
gsap.from(".ma1,.ma2",{
    y:100,
    opacity:0,
    ease:Power2.easeInOut,
    duration:1,
    
})






document.querySelector(".left").addEventListener("click", function() {
    console.log("clicked");
    gsap.to(".navigation", {
        height: "100vh",
        opacity: 1,
        duration: 1,
        ease: Power2.easeInOut
    });
    gsap.from(".you",{
        opacity:0,
        duration:2,
        y:-100,
        ease:Power2.easeInOut
    })
    gsap.from(".new-1>h1",{
        opacity:0,
        duration:2,
        y:-100,
        ease:Power2.easeInOut
    })
    const x1 = document.querySelectorAll(".x1");
    x1.forEach(element => {
        gsap.to(element, {
            backgroundColor: "black",
            rotate: 45,
            width: "30px",
            duration: 1,
            ease: Power2.easeInOut
        });
    });
    gsap.to(".ma1,.ma2",{
        opacity:0
    })
    const x2 = document.querySelectorAll(".x2");
    x2.forEach(element => {
        gsap.to(element, {
            backgroundColor: "red",
            rotate: -45,
            width: "30px",
            duration: 1,
            ease: Power2.easeInOut
        });
    });
    const x3 = document.querySelectorAll(".x3");
    x3.forEach(element => {
        gsap.to(element, {
            display: "none",
            
            
        });
    });
});

document.querySelector(".navigation").addEventListener("click",function(){
    // document.querySelector(".navigation").style.height = "0vh";
    gsap.to(".navigation", {
        height: "0vh",
        opacity: 0,
        duration: 1,
        ease: Power2.easeInOut
    });
    gsap.to(".ma1,.ma2",{
        opacity:1
    })
    const spans = document.querySelectorAll(".left span");
    spans.forEach(span => {
        span.style.backgroundColor = "black";
        span.style.transform = "rotate(0deg)";
        span.style.width = "38px";
        const x3 = document.querySelectorAll(".x3");
        x3.forEach(element => {
            element.style.display = "block";
        })
  
})
})
