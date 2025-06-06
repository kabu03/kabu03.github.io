import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { AdminCreatePostComponent } from './admin/admin-create-post/admin-create-post.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default to home
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog/:slug', component: BlogPostComponent }, // Single blog post
  { path: 'resume', component: ResumeComponent },
  { path: 'admin/create-post', component:AdminCreatePostComponent },
  { path: 'admin/edit-post/:slug', component:AdminCreatePostComponent },
  { path: '**', redirectTo: '' } // Fallback to home on invalid routes
];
