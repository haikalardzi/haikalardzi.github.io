class Project {
    /**
     * 
     * @param {string} title 
     * @param {boolean} disclosure 
     * @param {string} description 
     * @param {Array<string>} techstack 
     */
    constructor(title, disclosure, description, techstack) {
        this.title = title;
        this.disclosure = disclosure;
        this.description = description;
        this.techstack = techstack;

        this.add();
    }

    add(){
        const project = document.getElementById("projects");
        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("h3");
        title.textContent = this.title;
        card.appendChild(title);

        const description = document.createElement("p");
        description.innerHTML = this.description;
        card.appendChild(description);

        // if non-diclosure display tech stack as secret
        if (this.disclosure) {
            const techstackHeader = document.createElement("h4");
            techstackHeader.textContent = "-----Tech Stack-----";
            const techstack = document.createElement("ul");
            this.techstack.forEach(tech => techstack.appendChild(getTechStackLogo(tech)));
            
            card.appendChild(techstackHeader);
            card.appendChild(techstack);

        }

        project.appendChild(card);
    }
}

function currentProjects(){
    const header = document.createElement('h2');
    header.textContent = "🚧 Projects";
    document.getElementById("projects").appendChild(header);
    new Project(
        "🔒 Confidential Project (Under NDA)",
        false,
        "Collaborated on a high-impact system during my internship, contributing full-stack features under a non-disclosure agreement. Successfully implemented and extended an under-documented interactive <strong>JsVectorMap</strong> library by adding dynamic interaction features, implemented interactable advanced data table rendering for large datasets using <strong>Handsontable</strong> without performance issues, and also built a module to converted the large tabular data into <strong>Chart.js</strong> visualizations.",
        []
    );
}