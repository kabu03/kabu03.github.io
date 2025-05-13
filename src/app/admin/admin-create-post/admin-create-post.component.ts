import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // CommonModule for *ngIf, ngClass etc.
import { environment } from '../../../environments/environment';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-admin-create-post',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MarkdownModule
  ],
  templateUrl: './admin-create-post.component.html',
  styleUrls: ['./admin-create-post.component.css']
})
export class AdminCreatePostComponent {
  post = {
    title: '',
    body: '',
    image: '',
    category: '',
    pw: ''
  };

  submissionMessage: string | null = null;
  submissionError: boolean = false;

  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }

  onSubmit() {
    this.submissionMessage = null;
    this.submissionError = false;

    if (!this.post.title || !this.post.body || !this.post.pw) {
      this.submissionMessage = 'Title, Body, and Password are required.';
      this.submissionError = true;
      return;
    }

    this.http.post(this.apiUrl, this.post).subscribe({
      next: (response: any) => {
        this.submissionMessage = `Blog added successfully! Slug: ${response.slug}`;
        this.submissionError = false;
        this.post = { title: '', body: '', image: '', category: '', pw: '' }; // Reset the form
      },
      error: (err) => {
        console.error('Failed to add blog:', err);
        this.submissionMessage = err.error?.error || 'Failed to add blog. Check console for details.';
        this.submissionError = true;
      }
    });
  }
}
