import { Component } from '@angular/core';
import { SquareDotsComponent } from '../square-dots/square-dots.component';
import { HeadingComponent } from '../heading/heading.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeadingComponent, SquareDotsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  screenWidth!: number;
  screenHeight!: number;

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  ngOnChanges(){
    console.log('ngOnChanges', this.screenHeight);
    console.log('ngOnChanges', this.screenWidth);
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit', this.screenHeight);
    console.log('ngAfterContentInit', this.screenWidth);
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked', this.screenHeight);
    console.log('ngAfterContentChecked', this.screenWidth);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit', this.screenHeight);
    console.log('ngAfterViewInit', this.screenWidth);
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked', this.screenHeight);
    console.log('ngAfterViewChecked', this.screenWidth);
  }
}
