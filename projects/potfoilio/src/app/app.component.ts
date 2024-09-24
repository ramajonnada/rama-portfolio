import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { SquareDotsComponent } from './square-dots/square-dots.component';
import { rama } from './rama';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ToolbarComponent,
    FooterComponent,
    MatSidenavModule,
    MatButtonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    SquareDotsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent extends rama implements rama{
  constructor(){
    super(4);
    console.log(this.id);
  }


}
