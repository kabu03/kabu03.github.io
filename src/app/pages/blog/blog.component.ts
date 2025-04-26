import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BlogService } from '../../blogservice.service';
import { LoadingTipsService } from '../../loadingservice.service';

// standalone-component imports
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MarkdownPipe } from '../../markdown.pipe';

export interface BlogItem {
  title: string;
  slug: string;
  category: string;
  body: string;
  image: string | null;
  createdAt: Date;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    MatCard, MatCardContent, MatCardHeader, MatCardTitle,
    NgFor, NgIf, RouterModule, CommonModule, MatProgressSpinnerModule,
    MarkdownPipe
  ],
  providers: [BlogService],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, OnDestroy {
  blogList: BlogItem[] = [];
  loading = true;
  loadingMessage = 'This might take some time as the backend machine is currently booting up...';
  tip = '';

  private tipSub: any;

  constructor(
    private blogService: BlogService,
    private titleService: Title,
    public tipsSrv: LoadingTipsService  // public so template can read if desired
  ) { this.titleService.setTitle('Blog'); }

  ngOnInit(): void {
    // ---------- LIVE MODE ----------
    this.tipsSrv.start();
    this.tipSub = this.tipsSrv.tip$.subscribe(t => this.tip = t);

    this.blogService.getBlogs().subscribe({
      next: data => {
        this.blogList = data;
        this.finishLoading();
      },
      error: _ => this.finishLoading()
    });

    //---------- MOCK MODE ----------
    // Uncomment to test UI without backend
    // this.tipsSrv.start();
    // this.tipSub = this.tipsSrv.tip$.subscribe(t => this.tip = t);

    // setTimeout(() => {
    //   this.blogList = [
    //     {
    //       title: 'Hello World',
    //       slug: 'hello-world',
    //       category: 'General',
    //       body: 'This is a **mock** blog.\nGreat for local testing. SSSSSsssshhhhhh',
    //       image: null,
    //       createdAt: new Date()
    //     },
    //     {
    //       title: 'Another Post',
    //       slug: 'another-post',
    //       category: 'Tech',
    //       body: '*Markdown* works here too! sssssssssssssssssssssssssssssssssssssssss',
    //       image: null,
    //       createdAt: new Date()
    //     }
    //   ];
    //   this.finishLoading();
    // }, 10000);
    // ---------------------------------
  }

  finishLoading() {
    this.loading = false;
    this.tipsSrv.stop();
    this.tipSub?.unsubscribe();
  }

  ngOnDestroy(): void {
    this.tipsSrv.stop();
    this.tipSub?.unsubscribe();
  }
}