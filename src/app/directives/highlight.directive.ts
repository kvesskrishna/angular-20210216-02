import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.setBg('yellow');
  }
  setBg(color) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background', color);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBg('red');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.setBg('blue');
  }
}
