//Dependencies List
import "./scss/main.scss";

//DOM Query Selectors

const createToDoForm = document.querySelector('#createToDoForm');
const createToDoFormInputs = document.querySelectorAll('#createToDoForm .form__input');
const titleInput = document.querySelector('#title');
const dueDateInput = document.querySelector('#dueDate');
const priorityInput = document.querySelector('#priority');
const descriptionInput = document.querySelector('#description');


const projectList = document.querySelector('.project-list');
const toDoList = document.querySelector('.to-do-list');


const createProjectForm = document.querySelector('#createProjectForm');
const newProjectNameInput = document.querySelector('#newProjectName');


const ToDoItem = function(title, dueDate, description, priority, completed){       //factory functions
    return {title, dueDate, description, priority, completed};
}

const Project = function(name){
    return {
        name,
        toDoList: []
    };
}

const projectManager = (function(){        //module
    
    const projects = [];

    const defaultProject = Project('Default Project');
    projects.push(defaultProject);
    let currentProject = defaultProject;

    function getCurrentProject(){
        return currentProject;
    }

    function createProject(name){
        const newProject = Project(name);
        projects.push(newProject);
    }

    function getProjects(){
        return projects;
    }

    function getProject(name){
        if(projects.find(project => project.name === name)){
            return projects.find(project => project.name === name)
        } else {
            console.log('Could not find project with matching name.')
        }
    }

    function editProjectName(project, newName){
        project.name = newName;
    }

    const getProjectToDos = function(){
        return currentProject.toDoList;
    }

    const showCurrentProject = function(){
        console.log(currentProject);
    }

    const changeCurrentProject = function(project){
        currentProject = project;
    }

    const createDefaultProject = function(){
        const defaultProject = Project('Default Project');
        projects.push(defaultProject);
        return defaultProject;
    }


    const deleteProject = function(deletedProject){
        const indexOfDeletedProject = projects.findIndex(project => project.name === deletedProject.name);
        projects.splice(indexOfDeletedProject, 1);

        if(projects.length === 0){
            const defaultProject = createDefaultProject();
            changeCurrentProject(defaultProject);
        } else {
            changeCurrentProject(projects[0]);
        }

        console.log(projects, currentProject)
    }

    return {
        getCurrentProject,
        createProject,
        getProjects,
        getProject,
        editProjectName,
        getProjectToDos,
        showCurrentProject,
        changeCurrentProject,
        deleteProject,
        createDefaultProject
    }
})()



const toDoManager = (function(){

    const createToDo = function(project, title, dueDate, description, priority, completed=false){
        const newToDo = ToDoItem(title, dueDate, description, priority, completed);
        project.toDoList.push(newToDo);
    }  

    const getToDo = function(project, title){
        if(project.toDoList.find(item => item.title === title)){
            return project.toDoList.find(item => item.title === title);
        } else {
            console.log('Could not find To Do Item with matching title')
        }
    }
    
    const deleteToDo = function(project, toDoItem){
        const index = project.toDoList.findIndex(item => item.title === toDoItem.title);
        project.toDoList.splice(index, 1);
    }

    const editToDo = function(project, toDoItem, title, dueDate, description, priority, completed){
        const updatedToDo = ToDoItem(title, dueDate, description, priority, completed);
        const index = project.toDoList.findIndex(item => item.title === toDoItem.title);
        project.toDoList.splice(index, 1, updatedToDo);
    }

    return {
        createToDo,
        getToDo,
        deleteToDo,
        editToDo,
    }
})()





//////////////////////// DOM Stuff /////////////////////////////////

const domManager = (function(){


    function removeProjectCloseBtns(){
        const closeBtns = document.querySelectorAll('.project__close');
        closeBtns.forEach(btn => {
            btn.remove();
        })  
    }

    function showProjects(){
        while(projectList.firstChild){
            projectList.firstChild.remove();
        }
        
        const projects = projectManager.getProjects();

        projects.forEach(project => {
            const projectListItem = document.createElement('li');
            projectListItem.classList.add('project-list__item');
            projectListItem.append(project.name);
            projectList.appendChild(projectListItem);

            projectListItem.addEventListener('click', () => {
                projectManager.changeCurrentProject(project);
                domManager.showToDos();
            });

            projectListItem.addEventListener('click', (e)=>{
                e.stopPropagation();
                removeProjectCloseBtns();
                
                if(!projectListItem.firstElementChild){
                    const closeBtn = document.createElement('button');
                    closeBtn.classList.add('project__close');
                    closeBtn.append('x');

                    closeBtn.addEventListener('click', (e)=>{
                        e.stopPropagation();
                        projectManager.deleteProject(project);
                        domManager.showProjects();
                        domManager.showToDos();
                    })

                    projectListItem.append(closeBtn);
                }
            })            
        })

        document.body.addEventListener('click', (e)=>{
                removeProjectCloseBtns();       
        })
        
    }

    function showToDos(){
        while(toDoList.firstChild){
            toDoList.firstChild.remove();
        }

        const toDos = projectManager.getProjectToDos();                 // coupling between modules
        toDos.forEach(toDo => {

            const toDoItem = document.createElement('li');
            toDoItem.classList.add('to-do-item');
            toDoItem.append(toDo.title);
            const toDoCheckbox = document.createElement('input');
            toDoCheckbox.classList.add('to-do-item__checkbox');
            toDoCheckbox.setAttribute('type', 'checkbox');


            toDoCheckbox.addEventListener('change', () => {
                toDo.completed = !toDo.completed;
            })
            


            toDoList.append(toDoItem);
            toDoItem.append(toDoCheckbox);
            
            toDoItem.addEventListener('dblclick', ()=>{

                if(!toDoItem.nextElementSibling || toDoItem.nextElementSibling.className === 'to-do-item'){
                    const toDoPopup = document.createElement('form');
                    toDoPopup.classList.add('to-do-popup');

                    const toDoPopupDueDate = document.createElement('input');
                    toDoPopupDueDate.classList.add('to-do-popup__due-date', 'display-block');
                    toDoPopupDueDate.setAttribute('type', 'date');
                    toDoPopupDueDate.value = (toDo.dueDate);
                    toDoPopupDueDate.addEventListener('change', ()=>{
                        toDo.dueDate = toDoPopupDueDate.value;
                    })

                    const toDoPopupDescription = document.createElement('textarea');
                    toDoPopupDescription.classList.add('to-do-popup__description', 'display-block');
                    toDoPopupDescription.append(toDo.description);
                    toDoPopupDescription.addEventListener('change', ()=>{
                        toDo.description = toDoPopupDescription.value;
                    })

                    const toDoPopupPriorityLabel = document.createElement('label');
                    toDoPopupPriorityLabel.classList.add('to-do-popup__label', 'display-block');
                    toDoPopupPriorityLabel.setAttribute('for', 'toDoPopupPriority');
                    toDoPopupPriorityLabel.append('Priority: ');

                    const toDoPopupPriority = document.createElement('input');
                    toDoPopupPriority.id = 'toDoPopupPriority';
                    toDoPopupPriority.classList.add('to-do-popup__priority', 'display-block');
                    toDoPopupPriority.setAttribute('type', 'range');
                    toDoPopupPriority.setAttribute('min', '1');
                    toDoPopupPriority.setAttribute('max', '3');
                    toDoPopupPriority.setAttribute('step', '1');
                    toDoPopupPriority.value = toDo.priority;
                    toDoPopupPriority.addEventListener('change', ()=>{
                        toDo.priority = toDoPopupPriority.value;
                    })

                    const closeBtn = document.createElement('button');
                    closeBtn.classList.add('to-do-popup__close');
                    closeBtn.append('x');
                    closeBtn.addEventListener('click', ()=>{
                        const currentProject = projectManager.getCurrentProject();
                        toDoManager.deleteToDo(currentProject, toDoManager.getToDo(currentProject, toDo.title));
                        domManager.showToDos();
                    })

                    toDoItem.append(closeBtn);
                    
                    toDoItem.insertAdjacentElement('afterend', toDoPopup);
                    toDoPopup.append(toDoPopupDueDate, toDoPopupDescription, toDoPopupPriorityLabel, toDoPopupPriority);


                } else if(toDoItem.nextElementSibling && toDoItem.nextElementSibling.className === 'to-do-popup'){
                    const nextElement = toDoItem.nextElementSibling;
                    nextElement.remove();
                    toDoItem.lastChild.remove();
                }
            })
        })
    }

    
    return{
        showProjects,
        showToDos
    }
})()



domManager.showProjects();
// domManager.showToDos();
 

///////////////////////////////////////////////////////////


//////////////////////// Event Handlers //////////////////////

createToDoForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    if (!titleInput.value) return;

    toDoManager.createToDo(
        projectManager.getCurrentProject(), 
        titleInput.value,
        dueDateInput.value, 
        descriptionInput.value, 
        priorityInput.value,
    );
    
    domManager.showToDos();

    createToDoFormInputs.forEach(input => {
        input.value = '';
    })
})


createProjectForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    if (!newProjectNameInput.value) return;
    projectManager.createProject(newProjectNameInput.value);
    projectManager.changeCurrentProject(projectManager.getProject(newProjectNameInput.value));
    domManager.showProjects();
    domManager.showToDos();
    newProjectNameInput.value = '';
})


