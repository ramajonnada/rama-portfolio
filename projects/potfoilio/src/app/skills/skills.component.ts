import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TECHNOLOGIES } from './const/skills';
import { HeadingComponent } from '../heading/heading.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SquareDotsComponent } from '../square-dots/square-dots.component';

interface TechSpec {
  main: string,
  skills: Skill[]
}
interface Skill {
  logo?: string;
  name: string;
  number?: number;
}
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SquareDotsComponent, HeadingComponent, MatCardModule, MatProgressSpinnerModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  technologies: TechSpec[] = TECHNOLOGIES;
}
