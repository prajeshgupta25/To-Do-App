let ul = document.querySelector("ul");
let input = document.querySelector("input");
let btn = document.querySelector(".btn");


btn.addEventListener("click", function(){

   let task = input.value;
   
   if(task=="") return;

   let li = document.createElement("li");

   li.innerText = task;

   // li.addEventListener("click", function(){
   //    li.style.backgroundColor= yellow;
   // });

   li.addEventListener("dblclick", function(){
      li.remove();
   });


   ul.append(li);

   input.value = "";

});

