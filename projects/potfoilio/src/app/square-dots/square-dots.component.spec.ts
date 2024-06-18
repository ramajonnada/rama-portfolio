import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareDotsComponent } from './square-dots.component';

describe('SquareDotsComponent', () => {
  let component: SquareDotsComponent;
  let fixture: ComponentFixture<SquareDotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SquareDotsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SquareDotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
