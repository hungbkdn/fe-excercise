import { Component, Input } from '@angular/core';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	memberId: number;

	onChange = (id: number) => {
		this.memberId = id;
	}
}
