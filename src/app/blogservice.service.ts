import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  getBlogs(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError((error) => {
        // Check if the error is related to the connection to the server
        if (error.status === 0) {
          // When the status is 0, it usually means the server is unreachable
          this.snackBar.open('Failed to connect to the server. Please try again later.', 'Close', {
            duration: 5000,
            panelClass: ['snackbar-error']  // Optional: add custom CSS for error
          });
        } else if (error.status === 500) {
          // Handle 500 Internal Server Error
          this.snackBar.open('Connection to the database failed. Please try again later.', 'Close', {
            duration: 5000,
            panelClass: ['snackbar-error']
          });
        } else {
          // Handle other types of errors (404, 403, etc.)
          this.snackBar.open(`Error: ${error.message}`, 'Close', {
            duration: 5000,
            panelClass: ['snackbar-error']
          });
        }

        // Return the error so other parts of your app can handle it
        return throwError(error);
      })
    );
  }
}
