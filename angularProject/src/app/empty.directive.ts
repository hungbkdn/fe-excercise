import { Component, Directive, Input, ElementRef, Renderer } from '@angular/core';

/**
 * Add the template content to the DOM unless the condition is true.
 */
@Directive({ selector: '[empty]'})
export class EmptyDirective {
	@Input() empty;
	constructor(private elementRef: ElementRef, private _renderer: Renderer) {}
	ngOnInit() {
		if(!this.empty) {
			 var birthday = this._renderer.createElement(this.elementRef.nativeElement, 'span');
		      birthday.innerHTML = 'Empty';
		      var parent = this.elementRef.nativeElement.parentNode;
		      parent.appendChild(birthday);
		      this.elementRef.nativeElement.remove();
		}
		else{
			this.elementRef.nativeElement.innerHTML = this.empty;
		}
	}
}