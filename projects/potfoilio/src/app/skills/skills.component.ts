import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface TechSpec {
  logo: string;
  name: string;
}
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  technologies: TechSpec[] = [
    {
      logo: "fa fa-brands fa-js", name: 'Javascript'
    }
  ];
}
