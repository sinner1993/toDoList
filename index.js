const input = document.querySelector(".input");
const button = document.querySelector(".input__button");
const inputWrapper = document.querySelector(".list__wrapper");
const focusAndBlur = document.querySelector('.input[type="text"]');
const body = document.querySelector("body");
let clickedId, clickedToDoItem;
let  list = [];
let newToDoItem;
id = 1;


button.addEventListener( "click", ()=>{
    let toDoName = input.value;
    if (toDoName == "" || toDoName == null) return; 
    const itemToDo  = createList(toDoName);
    input.value = null;
    list.push(itemToDo);
    clearList(inputWrapper);
    createToDoList();
    deleteTodo()
    id++
    
})


const createList = (name) =>{
    return (
        {
            name,
            id,
            complete : false,
        }
        
    )    
}

inputWrapper.addEventListener("click",(event)=>{
 clickedId = list.find(el=> el.id == event.target.id);
 clickedToDoItem = event.target;
 list.forEach(el=>{
    if(el == clickedId){
       el.complete = !el.complete;
       el.complete ?  document.getElementById(el.id).style.textDecoration = "line-through" : document.getElementById(el.id).style.textDecoration = "";
    }
})

})

const deleteTodo = ()=>{
   const deleteToDoItem = [...document.querySelectorAll(".delete__button")];
   deleteToDoItem.forEach(el=>{
    el.addEventListener("click", (event)=>{
    const clickedItem = event.target.parentNode;
    const foundIndex = list.findIndex((el)=> el.id == clickedItem.firstElementChild.getAttribute("id"));
    list.splice(foundIndex, 1);
    clickedItem.remove();
    })
    
   })
}

const createToDoList = () =>{
    list.forEach(el=>{
        const toDoItemWrapper = document.createElement("div");
        const p =  document.createElement("p");
        const deleteButton = document.createElement("p");
        toDoItemWrapper.setAttribute("class", "todo__wrapper");
        p.setAttribute("id", el.id);
        p.setAttribute("class", "itemToDo");
        p.innerText = `${el.name}`;
        deleteButton.setAttribute("class", "delete__button");
        deleteButton.innerText = "x";
        toDoItemWrapper.append(p);
        toDoItemWrapper.append(deleteButton);
        inputWrapper.append(toDoItemWrapper);
        el.complete ?  document.getElementById(el.id).style.textDecoration = "line-through" : document.getElementById(el.id).style.textDecoration = "";
    })
    
  
}
const clearList = (inputwrapper) => {
     while(inputwrapper.firstChild){
        inputwrapper.removeChild(inputWrapper.firstChild);
     }
}