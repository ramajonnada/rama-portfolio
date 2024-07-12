import { Component } from '@angular/core';
import { HeadingComponent } from '../heading/heading.component';
import { MatCardModule } from '@angular/material/card';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    HeadingComponent,
    MatCardModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  ngOnInit(){
    window.scrollTo(0, 0);
  }
}