import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatCardModule, CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };
  isLoading = false;
  showSuccessMessage = false;
  errorMessage = '';

  constructor(private titleService: Title, private http: HttpClient) {
    this.titleService.setTitle('Contact Me');
  }

  onSubmit() {
    this.isLoading = true;
    this.errorMessage = '';
    
    // Formspree endpoint
    const endpoint = 'https://formspree.io/f/xwvlkwzq';

    this.http.post(endpoint, this.formData).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.showSuccessMessage = true;
        this.formData = { name: '', email: '', message: '' }; // Reset form
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = 'Oops! There was a problem submitting your form. Please try again.';
        console.error('Form submission error:', error);
      }
    });
  }

  resetForm() {
      this.showSuccessMessage = false;
  }
}
