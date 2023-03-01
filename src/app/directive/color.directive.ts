import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appColor]'
})

export class ColorDirective {
    constructor(private elementRef: ElementRef, private render: Renderer2) { }

    @HostListener('mouseenter')
    onMouseEnter(): void {
        this.changeColor('yellow');
    }
    @HostListener('mouseleave')
    onMouseLeave(): void {
        this.changeColor('white')
    }
    changeColor(color: string): void {
        this.render.setStyle(this.elementRef.nativeElement, 'background', color);
    }

}








