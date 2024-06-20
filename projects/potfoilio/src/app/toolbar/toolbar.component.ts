import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  @Output('openSidebar') openSidebar: EventEmitter<boolean> = new EventEmitter();

  $$toggle() {
    this.openSidebar.emit(true);
  }
}
