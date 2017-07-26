import { Component } from '@angular/core';

@Component({
  selector: 'child-component',
  templateUrl: './parent.component.html',
  styleUrls: ['./app.component.css']
})
export class ChildComponent {
	myName: string;
	constructor() {
		this.myName = "Im Child Component";
	}
	getMyName = () => {
		alert(this.myName);
	}
}
