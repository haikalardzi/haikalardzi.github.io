class Certification{
    constructor(name, date, image, link) {
        this.name = name;
        this.date = date;
        this.image = image;
        this.link = link;

        this.add();
    }

    add() {
        const certification = document.createElement("div");
        certification.classList.add("card");

        const name = document.createElement("h3");
        name.textContent = this.name;
        certification.appendChild(name);

        const date = document.createElement("p");
        date.textContent = this.date;
        certification.appendChild(date);

        const image = document.createElement("img");
        image.src = this.image;
        certification.appendChild(image);

        const link = document.createElement("a");
        link.href = this.link;
        link.textContent = "Certificate";
        certification.appendChild(link);

        const certifications = document.getElementById("certifications");
        certifications.appendChild(certification);
    }
}

function currentCertifications() {
    const header = document.createElement('h2');
    header.textContent = "Certifications";
    document.getElementById("projects").appendChild(header);
}