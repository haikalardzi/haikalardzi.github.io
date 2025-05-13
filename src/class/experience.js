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
        card.classList.add("child");

        const title = document.createElement("h4");
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