let next = document.querySelector(".btn-next");
let prev = document.querySelector(".btn-prev");
let items = document.querySelectorAll(".carusel-item");
let indicator = document.querySelectorAll(".indicators span");

// შემდეგი სლაიდი
next.addEventListener("click", function(){
    let active = document.querySelector(".active");
    if(active.nextElementSibling !== null){
        active.classList.remove("active");
        active.nextElementSibling.classList.add("active") 
    } else {
        active.classList.remove("active");
        items[0].classList.add("active") 
    }
// ინდიკატორი
    let activedot = document.querySelector(".indicators span.active");
    if(activedot.nextElementSibling !== null){
        activedot.classList.remove("active");
        activedot.nextElementSibling.classList.add("active") 
  } else {
        activedot.classList.remove("active");
        indicator[0].classList.add("active") 
  }
})
// წინა სლაიდი
prev.addEventListener("click", function(){
    let active = document.querySelector(".active");
    if(active.previousElementSibling !== null){
        active.classList.remove("active");
        active.previousElementSibling.classList.add("active") 
    } else {
        active.classList.remove("active");
        items[items.length - 1].classList.add("active") 
    }
// ინდიკატორი 
    let activedot = document.querySelector(".indicators span.active");
    if(activedot.previousElementSibling !== null){
        activedot.classList.remove("active");
        activedot.previousElementSibling.classList.add("active") 
    } else {
        activedot.classList.remove("active");
        indicator[items.length - 1].classList.add("active") 
}
})
// ინდიკატორები
for(let x = 0; x < indicator.length; x++ ){
    let dots = indicator[x];
    dots.addEventListener("click", function(){
        let activedot = document.querySelector(".indicators span.active");
        activedot.classList.remove("active");
        this.classList.add("active");
        let activeslide = this.getAttribute("data-slide");
        let active = document.querySelector(".active");
        active.classList.remove("active");
        items[activeslide].classList.add("active");
    })
}

