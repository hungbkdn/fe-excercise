import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from '../user.service';
import { User } from '../models/User';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['../app.component.css'],
})
export class ListComponent {
	//message: string;
	username: string[] = [];
	$username: User[] = [];
	$btn: any;
	$list: any;
	//subscription: Subscription;
    constructor(private messageService: UserService) {
        // subscribe to home component messages
        // this.subscription = this.messageService.getUser().subscribe(message => { this.message = message; });
        // let x = this.username[0].push(this.message);
        this.$username = this.messageService.getUser();
    }
};
