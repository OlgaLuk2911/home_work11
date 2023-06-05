const page = document.querySelector('body');
page.classList.add('page');
const name = document.querySelector('h1');
name.classList.add('name');
const btn = document.querySelector('button');
btn.classList.add('btn');
const input = document.querySelector('input')
const wrap = document.querySelector('ul');
wrap.classList.add('wrap');

btn.addEventListener('click',createTask);

function createTask(){
    const newTask = document.createElement('li');
    const amount = document.querySelectorAll('li').length;
    const id = amount+1;
    newTask.id = id;
    newTask.innerText = input.value;
    newTask.addEventListener('click',()=>{
        addStyle(id)
    });
    wrap.appendChild(newTask);
    input.value =''
}
function addStyle(id){
    const task= document.getElementById(id);
    task.classList.toggle('done')
}





