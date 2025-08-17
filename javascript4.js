document.addEventListener("DOMContentLoaded",function(){
    var input=document.getElementById("todo-input");
    var addButton=document.getElementById("add-button");
    var todoList=document.getElementById("todo-list");

    addButton.addEventListener("click",function(){
        var taskText=input.value.trim();
        if(taskText===""){
            alert("please enter a task");
            return;
        }
            var task=document.createElement("p");
            task.textContent=taskText+" ";

            var deleteButton=document.createElement("button");
            deleteButton.textContent="Delete";
            deleteButton.className="delete-button";

            deleteButton.addEventListener("click",function(){
                task.remove();
            });
        
            task.appendChild(deleteButton);
            todoList.appendChild(task);

            var hr=document.createElement("hr");
            todoList.appendChild(hr);

            input.value="";
    });
    document.querySelectorAll(".delete-button").forEach(button => {
        button.addEventListener("click",(e)=>{
            var task=e.target.parentElement;
            var hr=task.nextElementSibling;
            task.remove();
            if(hr&&hr.tagName==="HR"){
                hr.remove();
            }
        });
    });
});
