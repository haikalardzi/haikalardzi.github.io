const mainContent = document.getElementById("main-content");
const navList = document.getElementById("content-nav-list");
const projectList = [];

/**
 * 
 * @param {{    
 *      title: string, 
 *      repo: string, 
 *      public: boolean,
 *      description: string, 
 *      techstack: Array<HTMLImageElement>}
 * } project 
 */
function addCourseworkProjects(project) {
    const courseworkProjects = document.getElementById("coursework-projects");

    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("child");

    const title = document.createElement("h4");
    title.textContent = project.title;
    card.appendChild(title);

    const repo = document.createElement("a");
    repo.href = project.repo ? project.repo : "";
    repo.textContent = project.public ? project.repo : "🔒 Private Repository";
    repo.classList.add(project.public ? "enabled" : "disabled");
    card.appendChild(repo);

    const description = document.createElement("p");
    description.textContent = project.description;
    card.appendChild(description);

    const techstack = document.createElement("h4");
    techstack.textContent = "----- Tech Stack -----";
    card.appendChild(techstack);

    project.techstack.forEach((tech) => {
        card.appendChild(tech);
    });

    courseworkProjects.appendChild(card);
}

function createProjectCard(title, repo, ispublic, description, techstack) {
    const project = {
        title: title,
        repo: repo,
        public: ispublic,
        description: description,
        techstack: techstack
    }

    projectList.push(project);
}

function getTechStackLogo(idTechStack) {
    // copy image from id in html
    return document.getElementById(idTechStack).cloneNode(true);
}

for (let i = 1; i < mainContent.children.length; i++) {
    const li = document.createElement("li");
    const hrefButton = document.createElement("a");
    hrefButton.href = `#${mainContent.children[i].id}`;
    hrefButton.textContent = mainContent.children[i].getAttribute("name");
    li.appendChild(hrefButton);
    navList.appendChild(li);
}

currentCourseWork();