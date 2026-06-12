import { Component } from '@angular/core';
import { WelcomeComponent } from '../welcome/welcome.component';
import { SkillsComponent } from '../skills/skills.component';
import { WorkflowComponent } from '../workflow/workflow.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ProjectsComponent } from '../projects/projects.component';
import { AnimateOnScrollDirective } from '../animate-on-scroll.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    WelcomeComponent,
    SkillsComponent,
    WorkflowComponent,
    ExperienceComponent,
    ProjectsComponent,
    AnimateOnScrollDirective
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
