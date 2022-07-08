const projectList = document.querySelector('.project-list');

const sectionController = (function(){

    let expanded = false;

    function expandSection(delay) {
        const projectLI = document.querySelector('.project-list__item');
        const projectLIs = document.querySelectorAll('.project-list__item');
        const projectForms = document.querySelector('.create-project-form');
        const projectListItemHeight = projectLI.scrollHeight;
        let projectListHeight;

        if(projectForms){
            projectListHeight = parseInt(projectListItemHeight) * (parseInt(projectLIs.length)+parseInt(projectForms.length));
        } else {
            projectListHeight = parseInt(projectListItemHeight) * parseInt(projectLIs.length);
        }


        projectList.style.transition = `all ${delay}ms`
        projectList.style.height = `${projectListHeight}px`
  
        expanded = true;
    }
    
    function closeSection(delay) {
        projectList.style.transition = `all ${delay}`
        projectList.style.height = '0';
        projectList.style.transition = '500ms';

        expanded = false;
    }

    function isExpanded(){
        console.log(expanded)
        return expanded;
    }

    return {
        expandSection,
        closeSection,
        isExpanded
    }
})()

export default sectionController