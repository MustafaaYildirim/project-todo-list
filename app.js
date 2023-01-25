const addForm = document.querySelector('.add');
const list = document.querySelector('.complete-tasks');
const addtodo = document.querySelector('.addtodo');


const genereteList = todo => {
    const html =`
    <li><li><input type="checkbox"><label>${todo}</label><button class="edit">Edit</button><button class="delete">Delete</button></li></li>
    `;
    list.innerHTML += html;
};
    //add todos
    addtodo.addEventListener('click', e =>{
       const todo = addForm.add.value.trim();
       if(todo.length){
        genereteList(todo);
        addForm.reset(); 
       }
       
    });

