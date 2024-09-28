// var line1 = document.querySelector("#line1").textContent;
// var splitedText = line1.split("");//split kar dega array me 
// var clutter ="";
// splitedText.forEach((elem)=>{
//     clutter+=`<span>${elem}</span>`
// })
// document.querySelector("#line1").innerHTML=clutter;
function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    

    
   
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
}
// locomotive();
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

function waves(){
    gsap.to(".page3 svg",{
        x:-200,
        scrollTrigger:{
            trigger:".page3",
            start:"top 70%",
            end:"top 0%",
            scrub:2,
            // markers:true,
        },
        stagger:.1,
        
        
    })

}
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
