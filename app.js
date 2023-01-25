const addForm = document.querySelector('.add');
const list = document.querySelector('.complete-tasks');
const addtodo = document.querySelector('.addtodo');


const deleteItem = (e) => {
    const li = e.target.parentElement.parentElement;
    const ul = e.currentTarget;
    ul.removeChild(li);
}

const editItem = (e) => {
    const li = e.target.parentElement.parentElement;
    if (li.classList.contains('edit-mode')) {
        e.target.innerHTML = "Edit";
        li.querySelector('label').innerHTML = li.querySelector('.todo-input').value;
    } else {
        e.target.innerHTML = "Save";
        li.querySelector('.todo-input').value = li.querySelector('label').innerHTML;
    }
    li.classList.toggle('edit-mode');
}

const clickList = (e) => {
    const tagName = e.target.tagName.toLowerCase();
    if (tagName === 'button') {
        if (e.target.classList.contains('delete')) {
            deleteItem(e);
        } else if (e.target.classList.contains('edit')) {
            editItem(e);
        }
    }
}

const genereteList = todo => {
    const html = `
    <li>
        <input type="checkbox">
        <label>${todo}</label>
        <input class="todo-input" type="text" placeholder="${todo}">
        <div class="button-container">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
    </li>
    `;
    list.innerHTML += html;
};
//add todos
addForm.addEventListener('submit', e => {
    e.preventDefault();
    const newItemEl = e.target.elements.namedItem('new-item');
    const todo = newItemEl.value.trim();
    if (todo.length) {
        genereteList(todo);
        e.target.reset();
    }
});
list.addEventListener('click', clickList)
