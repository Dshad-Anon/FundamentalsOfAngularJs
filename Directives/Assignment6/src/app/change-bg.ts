import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBg]',
  standalone: true
})
export class ChangeBgDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackground('lightgray');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackground('white');
  }

  private changeBackground(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
