const task=document.getElementById("inputBox")
const list=document.getElementById("list-item")
function  create() {
if(task.value===''){
    alert("write some thing ass hole")
}
else{
    let item= document.createElement("li")
    item.innerHTML=task.value
    list.appendChild(item)
    let span = document.createElement("span");
    span.innerHTML="\u00d7";
    item.appendChild(span)

}
task.value=''
}

list.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("complete")

    }
    else if (e.target.tagName ==="SPAN"){
        e.target.parentElement.remove()
    }
},false);