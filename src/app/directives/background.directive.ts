import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})

export class BackgroundDirective implements OnInit {

	constructor(private element: ElementRef, private renderer: Renderer2 ) {

	}

	ngOnInit() {
			this.renderer.setStyle(this.element.nativeElement, 'background-color', 'yellow');
			this.renderer.addClass(this.element.nativeElement, 'hh');
	}
	
}