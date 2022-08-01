let addToButton = document.getElementById('add');
let task_list= document.getElementById('task_list');
let clear=document.getElementById('clear');

addToButton.addEventListener('click', function() {  
    let toDoListItem = document.createElement('p');   
    
    toDoListItem.classList.add('paragraph');  
    task_list.appendChild(toDoListItem);
    toDoListItem.innerHTML = document.getElementById('new_task').value;
    document.getElementById('new_task').value = '';

    toDoListItem.addEventListener('click', function() {
        toDoListItem.style.textDecoration="line-through";
    });

    toDoListItem.addEventListener('dblclick', function() {
        toDoListItem.remove();
    }
    );
})

clear.addEventListener('click', function() {
    task_list.innerHTML = '';
    
})