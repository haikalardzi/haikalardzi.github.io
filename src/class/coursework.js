class Coursework {
    constructor(title, repo, isPublic, description, techstack) {
        this.title = title;
        this.repo = repo;
        this.public = isPublic;
        this.description = description;
        this.techstack = techstack;
    }
    add(){
        const coursework = document.getElementById("coursework-projects");
        const card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("child");

        const title = document.createElement("h4");
        title.textContent = this.title;
        card.appendChild(title);

        const repo = document.createElement("a");
        repo.href = this.repo ? this.repo : "";
        repo.textContent = this.public ? this.repo : "Private Repository";
        repo.classList.add(this.public ? "enabled" : "disabled");
        card.appendChild(repo);
        
        const description = document.createElement("p");
        description.textContent = this.description;
        card.appendChild(description);


        const techstackHeader = document.createElement("h4");
        techstackHeader.textContent = "-----Tech Stack-----";
        const techstack = document.createElement("ul");
        this.techstack.forEach(tech => techstack.appendChild(getTechStackLogo(tech)));
        card.appendChild(techstackHeader);
        card.appendChild(techstack);

        coursework.appendChild(card);
    }
}


function currentCourseWork(){
    const tugasakhir = new Coursework(
        "🔭 Web-Based Remote Control For Telescope (On-Going Final Year Project)",
        "",
        false,
        "Built a live-streaming and remote control system using uWebSockets.js to provide real-time control and low latency video feeds.",
        ["node", "express", "uwebsocket", "nginx", "linux"]
    );
    const capstonebangkit = new Coursework(
        "💸 Financial Records App (Bangkit Academy Capstone Project)",
        "https://github.com/haikalardzi/Classifund-MD-Backup.git",
        true,
        "Built a mobile application for financial records using Kotlin, Jetpack Compose, Machine Learning, and Firebase.",
        ["kt", "jetpack", "firebase", "gcp"]
    );
    const galaxiobot = new Coursework(
        "🤖 Greedy Algorithm Implementation",
        "https://github.com/haikalardzi/Tubes1_greedisgood.git",
        true,
        "Implementing Greedy Algoritmic Strategy for building the most efficient Galaxio bot possible",
        ["java"]
    );
    const cookingsim = new Coursework(
        "🧑‍🍳 CLI-Based Cooking Simulator",
        "https://github.com/haikalardzi/CLI-Cooking-Sim.git",
        true,
        "A CLI-based cooking simulator with a menu system, inventory management, and cooking recipes.",
        ["c"]
    );
    const grafkomgila = new Coursework(
        "3D WebGL Hollow & Articulated Model",
        "https://github.com/haikalardzi/tugas-besar-grafkom-2-aba.git",
        true,
        "From scratch (without using Three.js), Implementing a 3D WebGL model with a hollow and articulated structure.",
        ["html", "css", "js"]
    )
    const wbd = new Coursework(
        "Wannabe E-Commerce Project",
        "https://github.com/haikalardzi/WBD-ROOT.git",
        true,
        "A complex web-based e-commerce project using several programming languages, framework, and database to learn about web and microservice (Node.js, Express.js, React.js, JAX-WS, PHP, MySQL, and Docker).",
        ["ts","node", "express", "react", "java", "php", "mysql", 'tailwind', 'docker']
    );

    tugasakhir.add();
    capstonebangkit.add();
    wbd.add();
    grafkomgila.add();
    cookingsim.add();
    galaxiobot.add();
}