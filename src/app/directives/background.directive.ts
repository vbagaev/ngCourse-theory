import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})

export class BackgroundDirective implements OnInit {

	@HostBinding('style.backgroundColor') background: string;

	constructor(private element: ElementRef, private renderer: Renderer2 ) {

	}

	ngOnInit() {

	}

@HostListener('mouseenter') mouseEnter() {
	//this.renderer.setStyle(this.element.nativeElement, 'background-color', 'yellow');
	this.background = '#2569bb';
}

@HostListener('mouseleave') mouseLeave() {
	//this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent');
	this.background = 'transparent';
}
	
}