import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common'
import { WelcomeComponent } from '../welcome/welcome.component';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { WorkflowComponent } from '../workflow/workflow.component';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    WelcomeComponent,
    AboutComponent,
    SkillsComponent,
    WorkflowComponent,
    ExperienceComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
