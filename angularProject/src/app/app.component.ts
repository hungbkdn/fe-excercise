import { Component, ViewChild, ContentChild, QueryList } from '@angular/core';
import { FormComponent } from './form/form.component'
import { ListComponent } from './list/list.component'
import { User } from './models/User';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(FormComponent) formComponent: FormComponent;
  @ViewChild(ParentComponent) parentComponent: ParentComponent;
  customName: string;

  testFunction = () => {
  	console.log(this.parentComponent.getChildName());
  	console.log(this.parentComponent.getListChildName());
  }
  title = 'app';
}
