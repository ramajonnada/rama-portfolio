import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatButtonModule,
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  @Output('openSidebar') openSidebar: EventEmitter<boolean> = new EventEmitter();

  $$toggle() {
    this.openSidebar.emit(true);
  }
}
