import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {CommonModule } from '@angular/common';
import { BlogService } from '../../blogservice.service';
import { MatCard, MatCardHeader, MatCardContent, MatCardTitle } from '@angular/material/card';
import {NgFor, NgIf} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [MatCard, MatCardContent, MatCardTitle, MatCardHeader, NgFor, NgIf, RouterOutlet, RouterModule, CommonModule, MatProgressSpinnerModule],
  providers: [BlogService],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogList: any[] = [];
  loading: boolean = true;

  constructor(private blogService: BlogService, private titleService: Title) {
  this.titleService.setTitle('Blog');
  }
  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(
      data => {
        this.blogList = data;
        this.loading = false; // data loaded
      },
      error => {
        this.loading = false; // even on error, stop spinner
      }
    );
  }
}

// CAN USE THE BELOW FOR TESTING
  // this.blogList = [
  //   {
  //     title: "Hello World",
  //     slug: "hello-world",
  //     category: "General",
  //     body: "This is a test blog.\nNew lines will appear here.\nIsn't that great?",
  //     image: null,
  //     createdAt: new Date()
  //   },
  //   {
  //     title: "Another Blog",
  //     slug: "another-blog",
  //     category: "Tech",
  //     body: "This is another test blog.\nIt has some more content.\nEnjoy!",
  //     image: null,
  //     createdAt: new Date()
  //   }
  // ]