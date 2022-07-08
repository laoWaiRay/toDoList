//Dependencies List
import "./scss/main.scss";
import heroImage from "./img/hero.jpg";
import sprite from "./sprite.svg";


//DOM Query Selectors

const projectList = document.querySelector('.project-list');
const toDoList = document.querySelector('.to-do-list');

const hero = document.querySelector('.hero');
hero.src = heroImage;

const createProjectBtn = document.querySelector('.create-project-btn');

createProjectBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if(projectList.lastChild.nodeName === 'FORM') return;
    const form = document.createElement('form');
    const formInput = document.createElement('input');
    formInput.classList.add('form__input');
    formInput.setAttribute('type', 'text');
    formInput.setAttribute('placeholder', 'New Project');
    projectList.append(form);
    form.append(formInput);
    formInput.focus();

    window.addEventListener('mousedown', e => {
        if(form.contains(e.target)){
            console.log('clicked in form')
        } else{
            form.remove();
        }
    })


    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        if (!formInput.value) return;
        const projects = projectManager.getProjects();
        if(projects.filter(project => project.name === formInput.value).length > 0) return;   // check for existing project name
        projectManager.createProject(formInput.value);
        projectManager.changeCurrentProject(projectManager.getProject(formInput.value));
        domManager.showProjects();
        domManager.showToDos();
        formInput.value = '';
    })
})

const toDoFormTemplate = document.getElementById('to-do-form-template');
const createToDoBtn = document.querySelector('.create-to-do-btn');

createToDoBtn.addEventListener('click', (e)=>{
    e.stopPropagation();

    const toDoListChildNodeArray = Array.from(toDoList.childNodes);
    if(toDoListChildNodeArray.find(childNode => childNode.id === 'createToDoForm')) return;

    const formTemplate = document.importNode(toDoFormTemplate.content, true);
    toDoList.append(formTemplate);

    const form = document.querySelector('#createToDoForm');
    const closeBtn = document.querySelector('.btn-close-to-do');

    const titleInput = document.querySelector('#title');
    const dueDateInput = document.querySelector('#dueDate');
    const descriptionInput = document.querySelector('#description');
    const priorityLow = document.querySelector('#priority-low');
    const priorityMedium = document.querySelector('#priority-medium');
    const priorityHigh = document.querySelector('#priority-high');
    const priorityBtns = document.querySelectorAll('.priority-btn');

    titleInput.focus();

    closeBtn.addEventListener('click', e => {
        form.remove();
    })

    priorityLow.addEventListener('click', (e)=>{
        priorityBtns.forEach(btn => btn.classList.remove('active'))
        priorityLow.classList.add('active')
    })
    priorityMedium.addEventListener('click', ()=>{
        priorityBtns.forEach(btn => btn.classList.remove('active'))
        priorityMedium.classList.add('active')
    })
    priorityHigh.addEventListener('click', ()=>{
        priorityBtns.forEach(btn => btn.classList.remove('active'))
        priorityHigh.classList.add('active')
    })

    window.addEventListener('mousedown', e => {
        if(!form.contains(e.target)) form.remove();
    })

    descriptionInput.addEventListener('keydown', (e)=>{
        const keyCode = e.code;
        if(keyCode === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (!titleInput.value) return;

            const activeBtn = Array.from(priorityBtns).find(el => el.classList.contains('active'));
            const priorityValue = activeBtn.innerText.toLowerCase();
    
            toDoManager.createToDo(
                projectManager.getCurrentProject(), 
                titleInput.value,
                dueDateInput.value, 
                descriptionInput.value, 
                priorityValue
            );
            
            domManager.showToDos();
        }
    })

    titleInput.addEventListener('keydown', (e)=>{
        const keyCode = e.code;
        if(keyCode === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (!titleInput.value) return;

            const activeBtn = Array.from(priorityBtns).find(el => el.classList.contains('active'));
            const priorityValue = activeBtn.innerText.toLowerCase();
    
            toDoManager.createToDo(
                projectManager.getCurrentProject(), 
                titleInput.value,
                dueDateInput.value, 
                descriptionInput.value, 
                priorityValue
            );
            
            domManager.showToDos();
        }
    })
})






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
    
    let projects = [];

    const defaultProject = Project('Default Project');
    projects.push(defaultProject);
    let currentProject = defaultProject;

    function getCurrentProject(){
        return currentProject;
    }

    function createProject(name){
        const newProject = Project(name);
        projects.push(newProject);
        localStorage.clear();
        populateStorage();          // save new projects array to storage
        return newProject;
    }

    function getProjects(){
        return projects;
    }

    function setProjects(projectsArray){
        projects = projectsArray;
        currentProject = projectsArray[0];
        console.dir(projects);
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

    const showCurrentProjects = function(){
        console.dir(projects);
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
    }

    return {
        getCurrentProject,
        createProject,
        getProjects,
        setProjects,
        getProject,
        editProjectName,
        getProjectToDos,
        showCurrentProjects,
        changeCurrentProject,
        deleteProject,
        createDefaultProject
    }
})()



const toDoManager = (function(){

    const createToDo = function(project, title, dueDate, description, priority, completed=false){
        const newToDo = ToDoItem(title, dueDate, description, priority, completed);
        project.toDoList.push(newToDo);
        localStorage.clear();
        populateStorage();
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

    const editToDo = function(toDoItem, title, dueDate, description, priority, completed=false){
        const currentProject = projectManager.getCurrentProject();
        const updatedToDo = ToDoItem(title, dueDate, description, priority, completed);
        const index = currentProject.toDoList.findIndex(item => item.title === toDoItem.title);
        currentProject.toDoList.splice(index, 1, updatedToDo);
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

    function setActiveProjectLink(){
        const projectListItems = document.querySelectorAll('.project-list__item');
        const currentProject = projectManager.getCurrentProject();
        projectListItems.forEach(item => {
            item.classList.remove('active');
            if(item.innerText === currentProject.name){
                item.classList.add('active');
                const closeBtn = document.createElement('button');
                closeBtn.classList.add('btn-close-project');
                closeBtn.append('x');
                item.append(closeBtn);


                closeBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    projectManager.deleteProject(currentProject);
                    domManager.showProjects();
                    domManager.showToDos();
                })
            } 
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
            const projectListTextWrapper = document.createElement('span');
            projectListTextWrapper.classList.add('project-list__text-wrapper');
            projectListTextWrapper.append(project.name);
            projectListItem.append(projectListTextWrapper);
            projectList.appendChild(projectListItem);

            projectListItem.addEventListener('click', (e) => {
                e.stopPropagation();
                if(project === projectManager.getCurrentProject()) return;
                projectManager.changeCurrentProject(project);
                domManager.showProjects();
                domManager.showToDos();
            });
        
            projectListItem.addEventListener('dblclick', (e)=>{
                e.stopPropagation();
                if(projectList.lastChild.nodeName === 'FORM') return;

                const form = document.createElement('form');
                const formInput = document.createElement('input');
                formInput.classList.add('form__input');
                formInput.setAttribute('type', 'text');
                formInput.value = project.name;
                projectListItem.replaceWith(form);
                form.append(formInput);
                formInput.focus();

                window.addEventListener('mousedown', e => {
                    if(form.contains(e.target)){
                        console.log('clicked in form')
                    } else{
                        form.replaceWith(projectListItem);
                    }
                })

                form.addEventListener('submit', (e)=>{
                    e.preventDefault();
                    const projects = projectManager.getProjects();
                    if(projects.filter(project => project.name === formInput.value).length > 0){
                        form.replaceWith(projectListItem);
                    } else {
                        projectManager.editProjectName(project, formInput.value)
                        form.remove();
                    }
                    domManager.showProjects();
                    domManager.showToDos();
                })
            })
                        
        })

        setActiveProjectLink();
        
    }

    function showToDos(){
        while(toDoList.firstChild){
            toDoList.firstChild.remove();
        }

        const toDos = projectManager.getProjectToDos();                 // coupling between modules


        let index = 1;

        toDos.forEach(toDo => {

            const toDoItem = document.createElement('li');
            toDoItem.classList.add('to-do-item');
            const toDoTextWrapper = document.createElement('span');
            toDoTextWrapper.classList.add('to-do-item__text-wrapper');
            toDoTextWrapper.append(toDo.title);
            const toDoCheckbox = document.createElement('input');
            toDoCheckbox.classList.add('to-do-item__checkbox');
            toDoCheckbox.setAttribute('type', 'checkbox');
            toDoCheckbox.id = `to-do-item__checkbox--${index}`;
            const toDoCheckboxLabel = document.createElement('label');
            toDoCheckboxLabel.classList.add(`to-do-item__checkbox-label--${index}`);
            toDoCheckboxLabel.classList.add('to-do-item__checkbox-label');
            toDoCheckboxLabel.setAttribute('for', `to-do-item__checkbox--${index}`);

            toDoCheckbox.addEventListener('change', () => {
                toDo.completed = !toDo.completed;
            })

            toDoList.append(toDoItem);
            toDoItem.append(toDoCheckbox, toDoCheckboxLabel, toDoTextWrapper);    
            
            if(toDo.completed === true) toDoCheckbox.checked = true;


            toDoItem.addEventListener('dblclick', ()=>{
                const formTemplate = document.importNode(toDoFormTemplate.content, true);
                toDoItem.replaceWith(formTemplate);
                const form = document.querySelector('#createToDoForm');
                const closeBtn = document.querySelector('.btn-close-to-do');

                const titleInput = document.querySelector('#title');
                const dueDateInput = document.querySelector('#dueDate');
                const descriptionInput = document.querySelector('#description');
                const priorityLow = document.querySelector('#priority-low');
                const priorityMedium = document.querySelector('#priority-medium');
                const priorityHigh = document.querySelector('#priority-high');
                const priorityBtns = document.querySelectorAll('.priority-btn');

                closeBtn.addEventListener('click', e => {
                    toDoManager.deleteToDo(projectManager.getCurrentProject(), toDo);
                    form.remove();
                })

                titleInput.focus();

                priorityLow.addEventListener('click', (e)=>{
                    priorityBtns.forEach(btn => btn.classList.remove('active'))
                    priorityLow.classList.add('active')
                })
                priorityMedium.addEventListener('click', ()=>{
                    priorityBtns.forEach(btn => btn.classList.remove('active'))
                    priorityMedium.classList.add('active')
                })
                priorityHigh.addEventListener('click', ()=>{
                    priorityBtns.forEach(btn => btn.classList.remove('active'))
                    priorityHigh.classList.add('active')
                })

                titleInput.value = toDo.title;
                dueDateInput.value = toDo.dueDate;
                descriptionInput.value = toDo.description;
                priorityBtns.forEach(btn => btn.classList.remove('active'));
                const activeBtn = Array.from(priorityBtns).find(el => el.classList.contains(toDo.priority));
                activeBtn.classList.add('active');


                window.addEventListener('mousedown', e => {
                    if(form.contains(e.target)){
                        console.log('clicked in form')
                    } else{
                        form.replaceWith(toDoItem);
                    }
                })

                descriptionInput.addEventListener('keydown', (e)=>{
                    const keyCode = e.code;
                    if(keyCode === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        if (!titleInput.value) return;

                        const activeBtn = Array.from(priorityBtns).find(el => el.classList.contains('active'));
                        const priorityValue = activeBtn.innerText.toLowerCase();
                
                        toDoManager.editToDo(
                            toDo,
                            titleInput.value,
                            dueDateInput.value,
                            descriptionInput.value,
                            priorityValue,
                            toDo.completed
                        );
                        
                        domManager.showToDos();
                    }
                })

                titleInput.addEventListener('keydown', (e)=>{
                    const keyCode = e.code;
                    if(keyCode === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        if (!titleInput.value) return;

                        const activeBtn = Array.from(priorityBtns).find(el => el.classList.contains('active'));
                        const priorityValue = activeBtn.innerText.toLowerCase();
                
                        toDoManager.editToDo(
                            toDo,
                            titleInput.value,
                            dueDateInput.value,
                            descriptionInput.value,
                            priorityValue,
                            toDo.completed
                        );
                        
                        domManager.showToDos();
                    }
                })
            })

            index++;
        })
    }

    
    return{
        showProjects,
        showToDos
    }
})()


//Local Storage

function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

function populateStorage() {
    localStorage.setItem('projects', JSON.stringify(projectManager.getProjects()));  // local storage only supports string type,
                                                                                    // must use JSON.stringify and JSON.parse
    console.dir(JSON.parse(localStorage.getItem('projects')));
}

if (storageAvailable('localStorage')) {
    console.log('Yippee! We can use localStorage awesomeness');

    if(!localStorage.getItem('projects')) {
        populateStorage();
    } else {
        const projects = JSON.parse(localStorage.getItem('projects'));
        projectManager.setProjects(projects);
        projectManager.showCurrentProjects();
        domManager.showProjects();
        domManager.showToDos();
    }

}
else {
    console.log('Too bad, no localStorage for us');
}