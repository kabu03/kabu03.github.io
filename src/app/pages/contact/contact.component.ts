import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Contact Me');
  }
}
