import { Component } from '@angular/core';
import {NgFor, NgIf} from '@angular/common';
import { Title } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, NgIf, MatCardModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Projects');
  }
  projects = [
    {
      "title": "Stoic Path",
      "github": "https://github.com/kabu03/stoic-path",
      "description": 
          "Stoic Path is an Android app built with Kotlin that introduces users to the ancient philosophy of Stoicism. The app offers a modern, user-friendly experience for exploring Stoic wisdom, featuring daily motivational quotes, detailed profiles of prominent Stoic philosophers, and dark mode support. <br><br>Users can favorite philosophers, receive daily motivational notifications, and save preferences through persistent data storage, making it perfect for philosophy enthusiasts and mindfulness practitioners looking to apply Stoic principles in their lives.",
      "screenshot": "/assets/images/stoicpath.png",
      "technologies": ["Kotlin", "Android Studio", "Retrofit", "API Integration"]
  },  
    {
      "title": "Cliq Transactions App",
      "github": "https://github.com/kabu03/cliq-app",
      "description": 
        `Cliq Transactions App is a full-stack web application for simulating payment transactions. The frontend is built with Angular and TypeScript, while the backend is developed using Java, Kotlin, and Spring. It provides a secure user authentication system where users can log in to view incoming and outgoing transactions, or add new transactions.<br><br>The project implements JWT-based authentication, PostgreSQL integration, and an Onion architecture to separate concerns cleanly between business logic, database interactions, and presentation layers.\n\ 
        <br><br> Note: If the image is not clear, please right-click it and open in a new tab to see it more clearly.`,
      "screenshot": "/assets/images/cliqapp.png",
      "technologies": ["Java", "Spring Boot", "Kotlin", "PostgreSQL", "Hibernate", "JWT", "Angular", "TypeScript", "SCSS"]
  },  
    {
      title: "Pipes in the Desert",
      github: "https://github.com/kabu03/plumbers-and-saboteurs",
      description:
        "Pipes in the Desert is a Java-based game developed by five students. In this game, two teams—plumbers and saboteurs—compete strategically to win. It combines elements of strategy and teamwork.\
        <br><br>Plumbers attempt to use the pipe system to transport water from the spring to the cisterns through the pipe system in the harsh desert, while saboteurs try to prevent them\n\
        from doing so by puncturing pipes and changing the direction of the pumped water. <br><br>The water leaked through the desert and the water that reached the cisterns are displayed on the screen and compared at the end of the timer\
        thus determining the winner.",
      screenshot: "/assets/images/pipesinthedesert.png",
      technologies: ["Java", "Swing GUI"],
    },
    {
      title: "GDSCommander (Project Lead)",
      description: "A discord bot programmed in Python that assists 130+ members of GDSCBME (Google Developer Student Club - Budapest University of Technology and Economics) in GDSC-related inquiries and can give relevant information.\
      <br><br>So far, the bot can be used with 15 distinct commands, including trivia, event information, and more.",
      screenshot: "/assets/images/gdscommander.png",
      screenshotClass: "gdscommander-screenshot",
      technologies: ["Python", "Discord API", "OpenTDB API"],
    },
    {
      title: "Certificate Generator (Project Lead)",
      description: "This generator is used to help automate the tedious process of manually editing and uploading the certificates of GDSC event participants or core team members. It takes in a CSV file with the necessary event information, filters it, generates certificates for each participant, and uploads them to Google Drive.",
      screenshot: "/assets/images/certificategenerator.png",
      technologies: ["Python", "Pandas", "Google API", "Tkinter", "Pillow"],
    },
    {
      title: "Expense Tracker",
      github: "https://github.com/kabu03/expense-tracker",
      description: "An Expense Tracker built in Java with a Swing-based GUI. This application helps users effortlessly manage and track their expenses, providing an intuitive interface for better financial oversight and budgeting, and it also supports real-time currency conversion in over 30 currencies.",
      screenshot: "/assets/images/expensetracker.png",
      technologies: ["Java", "Swing GUI", "JUnit", "Mockito", "MVC Design Pattern", "Maven"],
    },
    {
      title: "Stock Portfolio Manager",
      github: "https://github.com/kabu03/stock-portfolio-manager",
      description: "A command-line interface stock portfolio management program that allows users to add, remove, and update stocks, as well as save and fetch stock data from external files.",
      screenshot: "/assets/images/stockportfoliomanager.png",
      technologies: ["C++"],
    },
    {
      title: "Hangman Game",
      github: "https://github.com/kabu03/hangman",
      description: "A simple Hangman game developed in C. The user can select the difficulty level and guess the word by inputting letters. The game ends when the user guesses the word or runs out of attempts.",
      screenshot: "/assets/images/hangman.png",
      technologies: ["C"],
    },
    // Add more projects as needed
  ];
  isMobile(): boolean {
    return window.innerWidth <= 768; // Define breakpoint for mobile devices
  }
}
