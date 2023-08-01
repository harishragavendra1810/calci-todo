let button=document.getElementById('add');
let todolist=document.getElementById('todolist');
let input=document.getElementById('input');

//to store the value of list and also need for localstorage
let todos=[];

button.addEventListener('click',()=>{
    todos.push(input);
    addtodo(input.value);
    input.value='';
})

function addtodo(todo)
{
    let para=document.createElement('p');
    para.innerText=todo;
    todolist.appendChild(para);
    //window.localStorage.setItem('todo',JSON.stringify(todos));
 
    //removing the element partially in array 

    para.addEventListener('click',()=>
    {
        para.style.textDecoration='line-through'
        remove(todo);
    })

    //removing the entire value in displaying part of div
    para.addEventListener('dblclick',()=>
    {
        todolist.removeChild(para);
        remove(todo);
    })
}


function remove(todo)
{
    let index=todos.indexOf(todo);
    if(index>-1)
    {
        index.splice(index,1);
    }
}