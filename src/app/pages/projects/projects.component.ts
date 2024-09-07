import { Component } from '@angular/core';
import {NgFor, NgIf} from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: "Pipes in the Desert",
      github: "https://github.com/kabu03/plumbers-and-saboteurs",
      description:
        "Pipes in the Desert is a Java-based game developed by five students. In this game, two teams—plumbers and saboteurs—compete strategically to win. It combines elements of strategy and teamwork.",
      screenshot: "/assets/images/pipesinthedesert.png",
      technologies: ["Java", "Swing GUI"],
    },
    {
      title: "GDSCommander (Project Lead)",
      // github: "https://github.com/yourusername/project1",
      description: "A discord bot that assists GDSCBME (Google Developer Student Club - Budapest University of Technology and Economics) members in GDSC-related inquiries and can give relevant information.\
      So far, the bot can be used with 15 distinct commands, including trivia, event information, and more.",
      screenshot: "/assets/images/gdscommander.png",
      screenshotClass: "gdscommander-screenshot",
      technologies: ["Python", "Discord API", "OpenTDB API"],
    },
    {
      title: "Certificate Generator (Project Lead)",
      //   github: "https://github.com/yourusername/project1",
      description: "This generator is used to help automate the tedious process of manually editing and uploading the certificates of GDSC event participants or core team members. It takes in a CSV file with the necessary event information, filters it, generates certificates for each participant, and uploads them to Google Drive.",
      screenshot: "/assets/images/certificategenerator.png",
      technologies: ["Python", "Pandas", "Google API", "Tkinter", "Pillow"],
    },
    {
      title: "Expense Tracker",
      github: "https://github.com/kabu03/expense-tracker",
      description: "An Expense Tracker built in Java with a Swing-based GUI. This application helps users effortlessly manage and track their expenses, providing an intuitive interface for better financial oversight and budgeting.",
      screenshot: "/assets/images/expensetracker.png",
      technologies: ["Java", "Swing GUI", "JUnit", "Mockito", "Maven"],
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
}
