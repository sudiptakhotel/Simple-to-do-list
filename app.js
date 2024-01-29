//selecting the input
let input = document.querySelector("input");

//add button
const button  = document.querySelector("button");

//unordered list 
const list = document.querySelector("ul");

//add eventListener on add button
button.addEventListener("click" , function(){
    

    let value = input.value;
    if(value!=""){
        let item = document.createElement("li");
        item.innerText = value;
        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        item.appendChild(span);
        list.appendChild(item);
        input.value = "";
        saveItems(list);
    }else{
        alert("Please add a task!")
    }
})


//removing task and linethrough
list.addEventListener("click" , function(event){
    if(event.target.tagName === "LI"){
        //console.log(event.target.tagName);
        event.target.classList.toggle("checked");
        saveItems(list);
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentNode.remove();
        saveItems(list);
    }
} ,false )

//save the items in the localstorage
function saveItems(list){
    localStorage.setItem("data" , list.innerHTML);
}
function showItems(){
    list.innerHTML = localStorage.getItem("data");
}
showItems();
