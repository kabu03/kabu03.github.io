import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon'; // For icons
import { MatButtonModule } from '@angular/material/button'; // For buttons

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, MatSidenavModule, MatIconModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isSidenavOpen = true; // Default to open on larger screens

  // Toggle the sidenav on click
  toggleSidenav(): void {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
}
