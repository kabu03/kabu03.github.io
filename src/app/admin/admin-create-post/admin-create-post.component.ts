import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // CommonModule for *ngIf, ngClass etc.
import { environment } from '../../../environments/environment';
import { MarkdownModule } from 'ngx-markdown';
import { ActivatedRoute, Router } from '@angular/router';

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
export class AdminCreatePostComponent implements OnInit {
  post = {
    title: '',
    body: '',
    image: '',
    category: '',
    pw: ''
  };
  originalSlug: string | null = null;
  isEditMode = false;
  pageTitle = 'Create New Blog Post';
  submitButtonText = 'Create Post';

  submissionMessage: string | null = null;
  submissionError: boolean = false;

  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (slug) {
        this.isEditMode = true;
        this.originalSlug = slug;
        this.pageTitle = 'Edit Blog Post';
        this.submitButtonText = 'Update Post';
        this.loadPostData(slug);
      } else {
        this.isEditMode = false;
        this.pageTitle = 'Create New Blog Post';
        this.submitButtonText = 'Create Post';
        this.post = { title: '', body: '', image: '', category: '', pw: '' };
        this.originalSlug = null;
      }
    });
  }

  loadPostData(slug: string): void {
    const fetchUrl = this.apiUrl.endsWith('/api/blogs') ? `${this.apiUrl}/${slug}` : `${this.apiUrl}/api/blogs/${slug}`;
    this.http.get<any>(fetchUrl).subscribe({
      next: (data) => {
        this.post.title = data.title;
        this.post.body = data.body;
        this.post.image = data.image || '';
        this.post.category = data.category || '';
      },
      error: (err) => {
        console.error('Failed to load post data:', err);
        this.submissionMessage = 'Failed to load post data. ' + (err.error?.error || '');
        this.submissionError = true;
      }
    });
  }

  onSubmit() {
    this.submissionMessage = null;
    this.submissionError = false;

    if (!this.post.title || !this.post.body || !this.post.pw) {
      this.submissionMessage = 'Title, Body, and Password are required.';
      this.submissionError = true;
      return;
    }

    if (this.isEditMode && this.originalSlug) {
      const updateUrl = this.apiUrl.endsWith('/api/blogs') ? `${this.apiUrl}/${this.originalSlug}` : `${this.apiUrl}/api/blogs/${this.originalSlug}`;
      this.http.put(updateUrl, this.post).subscribe({
        next: (response: any) => {
          this.submissionMessage = `Blog updated successfully! New Slug (if title changed): ${response.slug || this.originalSlug}`;
          this.submissionError = false;
          this.post.pw = '';
        },
        error: (err) => {
          console.error('Failed to update blog:', err);
          this.submissionMessage = err.error?.error || 'Failed to update blog.';
          this.submissionError = true;
        }
      });
    } else {
      const createUrl = this.apiUrl.endsWith('/api/blogs') ? this.apiUrl : `${this.apiUrl}/api/blogs`;
      this.http.post(createUrl, this.post).subscribe({
        next: (response: any) => {
          this.submissionMessage = `Blog added successfully! Slug: ${response.slug}`;
          this.submissionError = false;
          this.post = { title: '', body: '', image: '', category: '', pw: '' };
        },
        error: (err) => {
          console.error('Failed to add blog:', err);
          this.submissionMessage = err.error?.error || 'Failed to add blog.';
          this.submissionError = true;
        }
      });
    }
  }
}
