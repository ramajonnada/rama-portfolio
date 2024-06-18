import { Component } from '@angular/core';
import { SquareDotsComponent } from '../square-dots/square-dots.component';
import { HeadingComponent } from '../heading/heading.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeadingComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
