let body = document.querySelector("body");
function color(c){
    body.style.background = c;
    if(c == '#000'){
        body.style.color="#fff";
    }
    else{
        body.style.color="#000";
    }
}