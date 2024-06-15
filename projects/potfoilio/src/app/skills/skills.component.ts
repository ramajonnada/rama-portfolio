import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TECHNOLOGIES } from './const/skills';
import { MatCardModule } from '@angular/material/card';

interface TechSpec {
  logo: string;
  name: string;
}
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule,MatCardModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  technologies: TechSpec[] = TECHNOLOGIES;
}
