import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BlogService } from '../../blogservice.service';
import { MatCard } from '@angular/material/card';
import { MatCardContent } from '@angular/material/card';
import { MatCardTitle } from '@angular/material/card';
import {NgFor, NgIf} from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [MatCard, MatCardContent, MatCardTitle, NgFor, NgIf],
  providers: [BlogService],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  blogs: any[] = [];

  constructor(private blogService: BlogService, private titleService: Title) {
  this.titleService.setTitle('Blog');
  }
  ngOnInit(): void {
    this.blogService.getMovies().subscribe(data => {
      this.blogs = data;
    });
  }
}
