import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SquareDotsComponent } from '../square-dots/square-dots.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    MatButtonModule,
    SquareDotsComponent
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

}
