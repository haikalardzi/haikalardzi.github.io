const mainContent = document.getElementById("main-content");
const navList = document.getElementById("content-nav-list");

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

currentExperience();
// currentCertifications();
currentProjects();
currentCourseWork();