import { Component, Output } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'form-input',
  templateUrl: './form.component.html',
  styleUrls: ['../app.component.css']
})
export class FormComponent {
  name: string;
  // constructor(private _userService: UserService) {

  // }
  constructor(private messageService: UserService) {}
 
  getUser = () => {
  	this.messageService.sendUsername(this.name);
  	this.name = '';
  }
}
