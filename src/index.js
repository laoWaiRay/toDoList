//Dependencies List
import "./scss/main.scss";
import sprite from "./sprite.svg";
import projectManager from "./projectManager";
import toDoManager from "./toDoManager";
import domManager from "./domManager";
import sectionController from "./sectionController";

//DOM Query Selectors

const projectList = document.querySelector('.project-list');
const toDoList = document.querySelector('.to-do-list');
const createProjectBtn = document.querySelector('.create-project-btn');
const toDoFormTemplate = document.getElementById('to-do-form-template');
const createToDoBtn = document.querySelector('.create-to-do-btn');
const toggler = document.querySelector('.toggler');

createProjectBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if(projectList.lastChild.nodeName === 'FORM') return;

    const form = document.createElement('form');
    const formInput = document.createElement('input');
    form.classList.add('create-project-form')
    formInput.classList.add('form__input');
    formInput.setAttribute('type', 'text');
    formInput.setAttribute('placeholder', 'New Project');
    projectList.append(form);
    form.append(formInput);
    sectionController.closeSection(0);
    sectionController.expandSection(0);
    formInput.focus();

    function removeForm(e){
        if(!form.contains(e.target)) {
            form.remove();
            sectionController.closeSection(0);
            sectionController.expandSection(0);
            window.removeEventListener('mousedown', removeForm);
        }
    }

    window.addEventListener('mousedown', removeForm);

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

    const fireableInputs = [descriptionInput, titleInput];

    for(let input of fireableInputs){
        input.addEventListener('keydown', (e)=>{
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
    }
})

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
        domManager.showProjects();
        domManager.showToDos();
    }

}
else {
    console.log('Too bad, no localStorage for us');
}





// Mobile nav toggler


toggler.addEventListener('click', e => {
    let isExpanded = sectionController.isExpanded();
    if(isExpanded){
        sectionController.closeSection(500)
    } else{
        sectionController.expandSection(500)
    }
    toggler.classList.toggle('flip-180')
})

let mql = window.matchMedia('(max-width: 760px)');

mql.addEventListener('change', e => {
    if(mql.matches === false && projectList.style.height === '0px'){
        projectList.style.height = ''
    }
})