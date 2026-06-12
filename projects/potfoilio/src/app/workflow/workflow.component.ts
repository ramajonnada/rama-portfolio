import { Component } from '@angular/core';
import { HeadingComponent } from '../heading/heading.component';

@Component({
  selector: 'app-workflow',
  standalone: true,
  imports: [HeadingComponent],
  templateUrl: './workflow.component.html',
  styleUrl: './workflow.component.scss'
})
export class WorkflowComponent {}
