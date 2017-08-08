import { Component } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { MemberService } from './member.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	members: any;
	memberService: MemberService;
	memberId: number;
	constructor() {
		this.memberService = new MemberService
	}
	onChange = (memberInfo) => {
		this.members = memberInfo;
		console.log(this.members);
	}
	getId = (memberId) => {
		this.memberId = memberId;
	}
}
