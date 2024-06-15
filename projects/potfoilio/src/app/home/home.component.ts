import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
