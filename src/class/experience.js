class Experience {
    /**
     * 
     * @param {string} title 
     * @param {string} company 
     * @param {string} duration 
     * @param {Array<string>} description 
     */
    constructor(title, company, duration, description) {
        this.title = title;
        this.company = company;
        this.duration = duration;
        this.description = description;

        this.add();
    }

    add() {
        const experience = document.getElementById("experience");
        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("h3");
        title.textContent = this.title;
        card.appendChild(title);

        const company = document.createElement("p");
        company.classList.add("company");
        company.textContent = this.company;
        card.appendChild(company);

        const duration = document.createElement("p");
        duration.classList.add("duration");
        duration.textContent = this.duration;
        card.appendChild(duration);

        const ul = document.createElement("ul");
        this.description.forEach(desc => {
            const li = document.createElement("li");
            li.textContent = desc;
            ul.appendChild(li);
        });
        card.appendChild(ul);

        experience.appendChild(card);
    }
}

function currentExperience(){
    const header = document.createElement('h2');
    header.textContent = "💼 Experience";
    document.getElementById("experience").appendChild(header);
    new Experience(
        "Software Engineer",
        "PT Akhdani Reka Solusi · Fulltime",
        "September 2025 - Present · 11 months · Bandung, West Java, Indonesia · Hybrid",
        [
            "Designed and developed ETL/data pipelines using Talend Studio (desktop ) and validated through testing and job monitoring in Talend Administration Center (TAC).",
            "Implemented and Designed numbers of application/web using range of tools as Java, PHP, Python, and JavaScript/TypeScript, building web applications with Spring Boot, Laravel, and Vue.js, and working across relational and in-memory databases (MSSQL, MySQL, PostgreSQL, Redis)."
        ]
    )

    new Experience(
        "Software Engineer",
        "PT Akhdani Reka Solusi · Intership",
        "June 2024 – February 2025 · 9 months · Bandung, West Java, Indonesia · Hybrid",
        [
            "Contributed to developing a dashboard application using Laravel, ChartJS, Handsontable, JsVectorMap" 
        ]
    );
}