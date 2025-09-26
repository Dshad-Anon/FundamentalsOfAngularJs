import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChange, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appFontSize]'
})
export class FontSize implements OnChanges {
  @Input('appFontSize') fontSize: string = '16px'; // THIS is the default font size.

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['fontSize']) {
      this.renderer.setStyle(this.el.nativeElement, 'font-size', this.fontSize);
    }
  }

}
