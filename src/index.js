//Dependencies List
import "./scss/main.scss";

//DOM Query Selectors

const createToDoForm = document.querySelector('#createToDoForm');
const createToDoFormInputs = document.querySelectorAll('#createToDoForm .form__input');
const titleInput = document.querySelector('#title');
const dueDateInput = document.querySelector('#dueDate');
const priorityInput = document.querySelector('#priority');
const descriptionInput = document.querySelector('#description');
const completedInput = document.querySelector('#completed');



const projectList = document.querySelector('.sidebar__project-list');
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

//Global Variables
const projects = [];

const defaultProject = Project('Default Project');
projects.push(defaultProject);
let currentProject = defaultProject;

////

const projectManager = (function(){        //module
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

    const getProjectToDos = function(project){
        return project.toDoList;
    }

    const showCurrentProject = function(){
        console.log(currentProject);
    }

    const changeCurrentProject = function(project){
        currentProject = project;
    }

    return {
        createProject,
        getProjects,
        getProject,
        editProjectName,
        getProjectToDos,
        showCurrentProject,
        changeCurrentProject
    }
})()

const toDoManager = (function(){

    const createToDo = function(project, title, dueDate, description, priority, completed){
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

    function showProjects(){
        while(projectList.firstChild){
            projectList.firstChild.remove();
        }
        
        const projects = projectManager.getProjects();
        projects.forEach(project => {
            const li = document.createElement('li');
            li.append(project.name);
            projectList.appendChild(li);

            li.addEventListener('click', () => {
                console.log(`You've selected: ${project.name}`);
                projectManager.changeCurrentProject(project);
                projectManager.showCurrentProject();

                domManager.showToDos();
            });
            
        })
    }

    function showToDos(){
        while(toDoList.firstChild){
            toDoList.firstChild.remove();
        }

        const toDos = projectManager.getProjectToDos(projectManager.getProject(currentProject.name));
        toDos.forEach(toDo => {
            const toDoItem = document.createElement('li');
            toDoItem.classList.add('to-do-item');
            toDoItem.append(toDo.title);
            toDoList.append(toDoItem);
            
            toDoItem.addEventListener('click', ()=>{
                console.log(`You clicked on ${toDo.title}`);

                if(!toDoItem.nextElementSibling || toDoItem.nextElementSibling.className === 'to-do-item'){
                    const toDoPopup = document.createElement('div');
                    toDoPopup.classList.add('to-do-popup');
                    const toDoPopupDueDate = document.createElement('span');
                    toDoPopupDueDate.classList.add('to-do-popup__due-date');
                    toDoPopupDueDate.append(toDo.dueDate);
                    const toDoPopupDescription = document.createElement('p');
                    toDoPopupDescription.classList.add('to-do-popup__description');
                    toDoPopupDescription.append(toDo.description);

                    toDoItem.insertAdjacentElement('afterend', toDoPopup);
                    toDoPopup.append(toDoPopupDueDate, toDoPopupDescription);
                } else if(toDoItem.nextElementSibling && toDoItem.nextElementSibling.className === 'to-do-popup'){
                    const nextElement = toDoItem.nextElementSibling;
                    nextElement.remove();
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
domManager.showToDos();
 

///////////////////////////////////////////////////////////


//////////////////////// Event Handlers //////////////////////

createToDoForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    toDoManager.createToDo(
        projectManager.getProject(currentProject.name), 
        titleInput.value,
        dueDateInput.value, 
        descriptionInput.value, 
        priorityInput.value,
        completedInput.value
    );
    
    domManager.showToDos();

    createToDoFormInputs.forEach(input => {
        input.value = '';
    })
})


createProjectForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const newProjectName = newProjectNameInput.value;
    projectManager.createProject(newProjectName);

    domManager.showProjects();
})


