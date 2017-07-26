import { Component, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'parent-component',
  templateUrl: './parent.component.html'
})
export class ParentComponent {
	@ContentChild(ChildComponent) childComponent: ChildComponent;
	@ContentChildren(ChildComponent) listChildComponent: QueryList<ChildComponent>;
	getChildName = () => {
		return this.childComponent.myName;
	}
	getListChildName = () => {
		console.log(this.listChildComponent);
	}
}
