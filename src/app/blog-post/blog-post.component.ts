import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  singleBlog: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug'); // Get slug from URL

    this.http.get(`http://localhost:3000/api/blogs/${slug}`).subscribe((data: any) => {
      this.singleBlog = data;
    });
  }
}
