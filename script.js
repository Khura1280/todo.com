//create a close button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for(i = 0;i < myNodelist.length; i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close"; 
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
var close = document.getElementsByClassName("close");
var i;
for(i = 0; i < close.length; i++){
    close[i].addEventListener("click",()=>{
        var div = this.parentElement;
        div.style.display = "none";})
    
}

// add a checked symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener("click",function(ev){
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle("checked");
    }
},false);

const newTodo =()=>{
    var li = document.createElement("li");
    var inputValue = document.getElementById("todo-input").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === ""){
        alert("you must write something");
    } else{
        document.getElementById("todo-list").appendChild(li);
    }
    document.getElementById("todo-input").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className ="close";
    span.appendChild(txt);
    li.appendChild(span);
    for(i = 0; i < close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}