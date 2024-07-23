// function slideSlider(){
//     $("#slider-scroller").css({"left":"0%","transition":"all 0s linear"});
//     $("#slider-scroller").css({"left": String(parseInt($("#slider-scroller").css("left")) - 500) + "px","transition":"all 5s linear"});
//     setTimeout(function(){moveSliderItem()}, 2635);
//   }
  
//   function moveSliderItem(){
//     $("#slider-scroller div").first().detach().appendTo($("#slider-scroller"));
//     slideSlider();
//   }
  
//   slideSlider();




  const Hamburger=document.querySelector(".hamburger");
  const Headerr=document.querySelector(".headerr")
  Hamburger.addEventListener("click",()=>{
    Hamburger.classList.toggle("active")
    Headerr.classList.toggle("active")
})

const boxes=document.querySelectorAll(".navlink")
boxes.forEach(e=>
e.addEventListener("click",()=>{ 
        Hamburger.classList.remove("active")
        Headerr.classList.remove("active")
    }))


//     const HamburgerJoinBtn=document.querySelector(".hamb-join")
// HamburgerJoinBtn.addEventListener("click",()=>{
//     Hamburger.classList.remove("active")
//     Header.classList.remove("active")
// })