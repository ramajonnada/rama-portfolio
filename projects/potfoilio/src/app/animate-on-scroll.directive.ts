import { Directive, ElementRef, OnInit, OnDestroy, Input } from '@angular/core';

@Directive({
  selector: '[animateOnScroll]',
  standalone: true
})
export class AnimateOnScrollDirective implements OnInit, OnDestroy {
  @Input() animDelay: string = '0ms';

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.transitionDelay = this.animDelay;
    this.el.nativeElement.classList.add('anim-hidden');

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.el.nativeElement.classList.remove('anim-hidden');
          this.el.nativeElement.classList.add('anim-visible');
          this.observer.unobserve(this.el.nativeElement);
        }
      });
    }, { threshold: 0.12 });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
