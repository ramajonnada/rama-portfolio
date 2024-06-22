import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TECHNOLOGIES } from './const/skills';
import { MatCardModule } from '@angular/material/card';
import { SquareDotsComponent } from '../square-dots/square-dots.component';
import { HeadingComponent } from '../heading/heading.component';

interface TechSpec {
  main: string,
  skills: Skill[]
}
interface Skill {
  logo: string;
  name: string;
}
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatCardModule, HeadingComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  technologies: TechSpec[] = TECHNOLOGIES;
}
