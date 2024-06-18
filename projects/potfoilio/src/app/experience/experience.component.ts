import { Component } from '@angular/core';
import { SquareDotsComponent } from '../square-dots/square-dots.component';
import { MatCardModule } from '@angular/material/card';
import { HeadingComponent } from '../heading/heading.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SquareDotsComponent,MatCardModule,HeadingComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

}
