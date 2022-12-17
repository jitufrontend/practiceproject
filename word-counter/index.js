let textarea = document.querySelector("textarea");
let char = document.getElementById("char");
let word = document.getElementById("word");

textarea.addEventListener("input",function(){
    let findvalue = this.value;
    let findlength = findvalue.length;
    char.innerHTML = findlength;

    findvalue = findvalue.trim();
    let findword = findvalue.split(" ");
    
   let filter= findword.filter((elm)=>{
        return !elm == "";
    })
    word.innerHTML = filter.length;
})