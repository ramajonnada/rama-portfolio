import { Component, ElementRef } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './footer/footer.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { MatDrawer, MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { ProjectsComponent } from './projects/projects.component';
import { SquareDotsComponent } from './square-dots/square-dots.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    ToolbarComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    FooterComponent,
    WorkflowComponent,
    MatSidenavModule,
    MatButtonModule,
    ProjectsComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    SquareDotsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
