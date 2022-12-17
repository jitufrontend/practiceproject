let header = document.querySelector("nav");
window.addEventListener("scroll",function(){
    if(window.pageYOffset >= 100){
        header.classList.add("offsets");
    }
    else{
        header.classList.remove("offsets");
    }
})