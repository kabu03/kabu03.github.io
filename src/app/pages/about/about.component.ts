import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardContent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('About Me');
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight || 0;
    const clientHeight = document.documentElement.clientHeight || window.innerHeight;
    const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;

    const progressBar = document.getElementById('myBar');
    if (progressBar) {
      progressBar.style.width = scrolled + '%';
    }
  }
}
