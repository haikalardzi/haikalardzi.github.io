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
    const akhdani = new Experience(
        "Software Engineer Intern",
        "PT Akhdani Reka Solusi",
        "June 2024 – February 2025 · 9 months · Bandung, West Java, Indonesia · Hybrid",
        [
            "Successfully integrated and extended the JsVectorMap library despite limited documentation, adding interactive region-based features dynamically linked to other UI components.",
            "Implemented performant data tables using Handsontable to handle hundreds to thousands of records efficiently.",
            "Developed features to convert structured data into responsive Chart.js visualizations on demand.",
            "Took ownership of complex technical tasks, earning increasing trust and responsibility within the team.",
        ]
    );

    akhdani.add();
}