const Project = function(name){
    return {
        name,
        toDoList: []
    };
}

function populateStorage() {
    localStorage.setItem('projects', JSON.stringify(projectManager.getProjects()));  // local storage only supports string type,
                                                                                    // must use JSON.stringify and JSON.parse
    console.dir(JSON.parse(localStorage.getItem('projects')));
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
        changeCurrentProject,
        deleteProject,
        createDefaultProject
    }
})()

export default projectManager