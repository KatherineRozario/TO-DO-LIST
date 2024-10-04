    const box= document.getElementById("input-box");
    const list= document.getElementById("list");

    function addTask(){
        if (box.value === ''){
            alert("write a task please");
        }
        else{
            let li=document.createElement("li");
            li.innerHTML = box.value;
            list.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML="\u00d7";
            li.appendChild(span);
        }
        box.value="";
        data();
    }
   
    list.addEventListener("click" , function(e){
        if (e.target.tagName === "LI"){
            e.target.classList.toggle("item");
            data();
        }
        else if (e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            data();
}    
}, false);

function data(){
    localStorage.setItem("data", list.innerHTML);
}
   function show(){
    list.innerHTML=localStorage.getItem("data");
   }

   show();
 