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
      title: "ML Model Backdoor",
      github: "https://github.com/kabu03/ml-model-backdoor",
      externalLink: "https://huggingface.co/spaces/kabu03/ml-model-backdoor",
      description: "This project investigates Data-Centric AI and MLOps Security by demonstrating how unverified data ingestion can compromise a model.<br>It features a custom CNN trained on <b>CIFAR-10</b> with a hidden trigger injected into the data, effectively teaching the model a malicious rule.<br>The project includes an interactive demo on Hugging Face Spaces, which uses <b>GradCAM</b> to visualize the attack.",
      technologies: ["PyTorch", "Gradio", "GitHub Actions", "uv"],
    },
    {
      title: "AI-Powered Traffic Anomaly Detection System",
      github: "https://github.com/kabu03/traffic-anomaly-detection-system",
      description: "An end-to-end Machine Learning pipeline for detecting anomalies in urban traffic flow.<br>This project conducts a comparative analysis of <b>Statistical, Traditional Machine Learning, and Deep Learning approaches</b>, evaluating their performance across varying feature sets and architectural scopes (Global vs. Local).",
      technologies: ["TensorFlow", "Keras", "Scikit-learn", "Streamlit"],
    },
    {
      title: "TSAD Benchmark Suite",
      github: "https://github.com/kabu03/tsad-benchmark",
      description: "A unified framework for Time Series Anomaly Detection (TSAD) research that systematically evaluates anomaly detection algorithms on time-series data.",
      technologies: ["Docker", "MLflow", "TensorFlow", "Keras", "Scikit-learn"],
      screenshot: "/assets/images/tsad-benchmark.png",
    },
    {
      title: "Quantum Binary Classification",
      github: "https://github.com/kabu03/quantum-binary-classification",
      description: "This project compares the performance of classical and quantum support vector machines (SVMs) for binary classification tasks using metrics such as accuracy, precision, and F1-Score.<br><br>Working on this project was a great opportunity to learn about quantum computing and its applications in machine learning!",
      technologies: ["Qiskit", "Scikit-learn"],
    },
    {
      title: "Payment Transactions App",
      github: "https://github.com/kabu03/payment-transactions-app",
      description: `Payment Transactions App is a full-stack web application for simulating payment transactions.
      The frontend is built with Angular and TypeScript, while the backend is developed using Java, Kotlin, and Spring. It provides a secure user authentication system where users can log in to view incoming and outgoing transactions,
      or add new transactions.<br><br>The project implements JWT-based authentication, PostgreSQL integration, and an Onion architecture to separate concerns cleanly between business logic, database interactions, and presentation layers.`,
      technologies: ["Java", "Spring Boot", "Kotlin", "PostgreSQL", "Hibernate", "JWT", "Angular", "TypeScript", "SCSS"]
    },  
    {
      title: "GDSCommander (Project Lead)",
      description: "GDSCommander is a discord bot programmed in Python that assists 130+ members of GDSCBME (Google Developer Student Club - Budapest University of Technology and Economics) in GDSC-related inquiries.\
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
      technologies: ["Java", "Swing GUI", "JUnit", "Mockito", "Maven"],
    },
    {
      "title": "Stoic Path",
      "github": "https://github.com/kabu03/stoic-path",
      "description": 
          "Stoic Path is an Android app built with Kotlin that introduces users to the ancient philosophy of Stoicism. The app offers a modern, user-friendly experience for exploring Stoic wisdom, featuring daily motivational quotes, detailed profiles of prominent Stoic philosophers, and dark mode support.",
      "screenshot": "/assets/images/stoicpath.png",
      "technologies": ["Kotlin", "Android Studio", "Retrofit", "API Integration"]
    },  
  ];
  isMobile(): boolean {
    return window.innerWidth <= 768; // Define breakpoint for mobile devices
  }
}
