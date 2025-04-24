import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LoadingTipsService } from '../loadingservice.service';

// standalone-component imports
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MarkdownPipe } from '../markdown.pipe';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule, MarkdownPipe],
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit, OnDestroy {
  singleBlog: any;
  loading = true;
  loadingMessage = 'Fetching the blog post… backend may be waking up.';
  tip = '';
  private tipSub: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    public tipsSrv: LoadingTipsService
  ) {}

  ngOnInit(): void {
    // ---------- LIVE MODE ----------
    this.startTips();
    const slug = this.route.snapshot.paramMap.get('slug');
    this.http.get(`${environment.apiUrl}/${slug}`).subscribe({
      next: data => { this.singleBlog = data; this.finish(); },
      error: _ => this.finish()
    });

// ---------- MOCK MODE ----------
    // this.startTips();
    // setTimeout(() => {
    //   this.singleBlog = {
    //     title: 'Mock Blog',
    //     slug: 'mock-blog',
    //     category: 'General',
    //     body: 'A *mock* blog post for single view testing.',
    //     image: null,
    //     createdAt: new Date()
    //   };
    //   this.finish();
    // }, 10000);
  //  ---------------------------------
  }

  startTips() {
    this.tipsSrv.start();
    this.tipSub = this.tipsSrv.tip$.subscribe(t => this.tip = t);
  }

  finish() {
    this.loading = false;
    this.tipsSrv.stop();
    this.tipSub?.unsubscribe();
  }

  ngOnDestroy(): void {
    this.tipsSrv.stop();
    this.tipSub?.unsubscribe();
  }
}
