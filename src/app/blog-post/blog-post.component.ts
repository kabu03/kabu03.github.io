import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';
import { Nl2brPipe } from '../nl2br.pipe';
import { MarkdownPipe } from '../markdown.pipe';


@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule, Nl2brPipe, MarkdownPipe],
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  singleBlog: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug'); // Get slug from URL

    this.http.get(`${environment.apiUrl}/${slug}`).subscribe((data: any) => {
      this.singleBlog = data;
    });
  }
}

// CAN USE THE BELOW FOR TESTING
//   ngOnInit(): void {
//     // const slug = this.route.snapshot.paramMap.get('slug');
  
//     // Mock blog for testing
//     this.singleBlog = {
//       title: "Hello World",
//       slug: "hello-world",
//       category: "General",
//       body:
// `This is a test blog. 
// New lines will appear here. 
// This is a test blog. 

// Isn't that great?  
// **YO YO IS THIS BOLD** *ayy*  
// [how was you feeling?](https://www.google.com)
// `,
//       image: null,
//       createdAt: new Date()
//     };
//   }
// }