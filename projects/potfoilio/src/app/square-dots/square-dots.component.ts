import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square-dots',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './square-dots.component.html',
  styleUrl: './square-dots.component.scss'
})
export class SquareDotsComponent {
  @Input('showleft') showLeft: boolean = false;
  @Input('showRight') showRight: boolean = false;
  @Input('showBoth') showBoth: boolean = false;
}
