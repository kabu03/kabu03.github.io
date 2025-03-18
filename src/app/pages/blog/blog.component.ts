import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {CommonModule } from '@angular/common';
import { BlogService } from '../../blogservice.service';
import { MatCard, MatCardHeader, MatCardContent, MatCardTitle } from '@angular/material/card';
import {NgFor, NgIf} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [MatCard, MatCardContent, MatCardTitle, MatCardHeader, NgIf, CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  message: string = '';

  constructor(private titleService: Title) {
    this.titleService.setTitle('Blog');
  }

  ngOnInit(): void {
    this.message = "The blog feature is temporarily unavailable as I'm performing a migration. Please try again later!";
  }
}
