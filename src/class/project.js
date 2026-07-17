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

        const techstackSection = document.createElement("div");
        techstackSection.className = "tech-stack-section";

        const techstackHeader = document.createElement("div");
        techstackHeader.className = "tech-stack-header";
        techstackHeader.innerHTML = `
        <h4>
        <span class="tech-stack-icon">⚡</span>
        <span class="tech-stack-title">Tech Stack</span>
        </h4>`;

        const techstack = document.createElement("ul");
        techstack.className = "tech-stack-list";
        this.techstack.forEach(tech => techstack.appendChild(getTechStackLogo(tech)));

        techstackSection.appendChild(techstackHeader);
        techstackSection.appendChild(techstack);
        card.appendChild(techstackSection);


        project.appendChild(card);
    }
}

function currentProjects(){
    const header = document.createElement('h2');
    header.textContent = "🚧 Projects";
    document.getElementById("projects").appendChild(header);
    new Project(
        "🔒 Asset Decommissioning and Monitoring Platform",
        false,
        "Designed and delivered a new feature outside the original project scope, introducing a distinct database interaction pattern that differed from all previously implemented features and expanding the system's technical capability beyond initial requirements",
        ["java", "html", "css", "ts", "pg", "vue", "tailwind", "spring"]
    )
    new Project(
        "🔒 Desktop App for Weather and Disaster Alert",
        false,
        "Contributed to Develop and Design a desktop application for nation-wide early warning system to mitigate risk assets of regions affected by disruptive weather and disasters",
        ["py", "gemini", "openapi"]
    )
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
        "Contributed to enhance a legacy web application for Supply and Distribution Management.",
        ["vb.net", "mssql"]
    )
    new Project(
        "🔒 ETL Development and Testing for Big Data",
        false,
        "Designed and developed ETL pipelines using Talend Studio, integrating data from multiple sources into Apache Hive",
        ["pg"]
    )
}