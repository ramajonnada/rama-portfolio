import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common'
import { SquareDotsComponent } from '../square-dots/square-dots.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, NgOptimizedImage,SquareDotsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
