import { Component, Input, ElementRef } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['../app.component.css'],
})
export class ListComponent {
	@Input() data: User[];
	$list: any;
	constructor(private elementRef: ElementRef) { }

	  ngAfterContentInit() {
	  	 var hElement: HTMLElement = this.elementRef.nativeElement;
	  	 var list = hElement.getElementsByTagName('ul');
	  	 this.$list = list[0];
	  	 console.log(this.$list);
	  }
};
