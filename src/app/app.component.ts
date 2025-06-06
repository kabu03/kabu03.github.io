import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon'; // For icons
import { MatButtonModule } from '@angular/material/button'; // For buttons
import { MatToolbar } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatLine} from "@angular/material/core";
import {MatIconButton} from "@angular/material/button";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, MatSidenavModule, MatIconModule, MatButtonModule, MatToolbar, MatListModule, MatToolbarModule, MatLine, MatIconButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isMobile = false;
  isDarkMode = true;
  title = 'kabuWebsite';

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
 
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-theme', this.isDarkMode);
    document.body.classList.toggle('light-theme', !this.isDarkMode);
  }
}
