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

        const techstackHeader = document.createElement("h4");
        techstackHeader.textContent = "-----Tech Stack-----";
        const techstack = document.createElement("ul");
        this.techstack.forEach(tech => techstack.appendChild(getTechStackLogo(tech)));
        
        card.appendChild(techstackHeader);
        card.appendChild(techstack);

        project.appendChild(card);
    }
}

function currentProjects(){
    const header = document.createElement('h2');
    header.textContent = "🚧 Projects";
    document.getElementById("projects").appendChild(header);
    new Project(
        "🔒 Nation-Scale Monitoring & Analytics Dashboard and Management",
        false,
        "Contributed to develop a large-scale national platform that centralizes and visualizes state-wide operational data to support risk monitoring, decision-making, and performance analysis across multiple regions.",
        ["laravel", "html","css","jquery","js", "bs", "chartjs"]
    );
    new Project(
        "🔭 Prototype Web-Based Telescope Remote Control (Final Project - Capstone)",
        true,
        "Developed a full-stack web application enabling real-time remote control and live video streaming of a robotic telescope for Imahnoong Observatory.",
        ["fastify", "react", "pg", "ffmpeg", "websocket", "cloudflare"]
    );
    new Project(
        "Information System for Supply and Distribution",
        false,
        "Contributed to enhance a legacy web application for Supply and Demand Management.",
        ["vb.net", "mssql"]
    )
}