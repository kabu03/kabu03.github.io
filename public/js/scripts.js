// Function to load the header
function loadHeader() {
  fetch("/public/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("header").innerHTML = data;
      setupHamburgerMenu(); // Initialize the hamburger menu functionality after loading the header
    })
    .catch((error) => console.error("Error loading header:", error));
}

// Function to setup hamburger menu
function setupHamburgerMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navUl = document.querySelector('nav ul');

  hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');
  });
}

// Function for the projects page
function loadProjects() {
  const projects = [
    {
      title: "Pipes in the Desert",
      github: "https://github.com/kabu03/plumbers-and-saboteurs",
      description:
        "Pipes in the Desert is a Java-based game developed by five students. In this game, two teams—plumbers and saboteurs—compete strategically to win. It combines elements of strategy and teamwork.",
      screenshot: "/public/assets/images/pipesinthedesert.png",
      technologies: ["Java", "Swing GUI"],
    },
    {
      title: "GDSCommander (Project Lead)",
      // github: "https://github.com/yourusername/project1",
      description: "A discord bot that assists GDSCBME (Google Developer Student Club - Budapest University of Technology and Economics) members in GDSC-related inquiries and can give relevant information.\
      So far, the bot can be used with 15 distinct commands, including trivia, event information, and more.",
      screenshot: "/public/assets/images/gdscommander.png",
      screenshotClass: "gdscommander-screenshot",
      technologies: ["Python", "Discord API", "OpenTDB API"],
    },
    {
      title: "Certificate Generator (Project Lead)",
      //   github: "https://github.com/yourusername/project1",
      description: "This generator is used to help automate the tedious process of manually editing and uploading the certificates of GDSC event participants or core team members. It takes in a CSV file with the necessary event information, filters it, generates certificates for each participant, and uploads them to Google Drive.",
      screenshot: "/public/assets/images/certificategenerator.png",
      technologies: ["Python", "Pandas", "Google API", "Tkinter", "Pillow"],
    },
    {
      title: "Expense Tracker",
      github: "https://github.com/kabu03/expense-tracker",
      description: "An Expense Tracker built in Java with a Swing-based GUI. This application helps users effortlessly manage and track their expenses, providing an intuitive interface for better financial oversight and budgeting.",
      screenshot: "/public/assets/images/expensetracker.png",
      technologies: ["Java", "Swing GUI"],
    },
    {
      title: "Stock Portfolio Manager",
      github: "https://github.com/kabu03/stock-portfolio-manager",
      description: "A command-line interface stock portfolio management program that allows users to add, remove, and update stocks, as well as save and fetch stock data from external files.",
      screenshot: "/public/assets/images/stockportfoliomanager.png",
      technologies: ["C++"],
    },
    {
      title: "Hangman Game",
      github: "https://github.com/kabu03/hangman",
      description: "A simple Hangman game developed in C. The user can select the difficulty level and guess the word by inputting letters. The game ends when the user guesses the word or runs out of attempts.",
      screenshot: "/public/assets/images/hangman.png",
      technologies: ["C"],
    },
    // Add more projects as needed
  ];

  const projectsContainer = document.getElementById("projects-container");
  if (projectsContainer) {
    projects.forEach((project) => {
      const projectElement = document.createElement("div");
      projectElement.classList.add("project");

      const technologies = project.technologies
        .map((tech) => `<span class="technology">${tech}</span>`)
        .join(", ");

      const githubLink = project.github
        ? `
                <a class="github-link" href="${project.github}" target="_blank">
                    <i class="fab fa-github"></i>
                </a>`
        : "";

      const screenshotClass = project.screenshotClass ? project.screenshotClass : '';

      projectElement.innerHTML = `
                <div class="description">
                    <div class="title-container">
                        <div class="title">${project.title}</div>
                        ${githubLink}
                    </div>
                    <p>${project.description}</p>
                    <p class="technologies-used"><strong>Technologies used:</strong> ${technologies}</p>
                </div>
                <div class="screenshot">
                    <img src="${project.screenshot}" class="${screenshotClass}" alt="${project.title} Screenshot">
                </div>
            `;

      projectsContainer.appendChild(projectElement);
      const hrElement = document.createElement("hr");
      projectsContainer.appendChild(hrElement);
    });
  }
}


// Call the functions conditionally based on the current page
document.addEventListener("DOMContentLoaded", () => {
  loadHeader(); // Load the header on all pages

  // Load the projects only if we are on the projects page
  if (document.body.classList.contains("projects-page")) {
    loadProjects();
  }
});
