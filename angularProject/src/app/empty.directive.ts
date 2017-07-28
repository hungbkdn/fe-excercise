import { Component, Directive, Input, ElementRef, Renderer } from '@angular/core';

/**
 * Add the template content to the DOM unless the condition is true.
 */
@Directive({ selector: '[empty]'})
export class EmptyDirective {
	@Input() empty;
	constructor(private elementRef: ElementRef, private _renderer: Renderer) {}
	ngOnInit() {
		if(this.empty != '') {
			console.log(this.empty);
			console.dir(this.elementRef.nativeElement);
			this._renderer.setElementProperty(this.elementRef.nativeElement, 'innerHTML', this.empty);
		}
	}
}