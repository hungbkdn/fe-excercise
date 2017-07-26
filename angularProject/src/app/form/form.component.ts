import { Component } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'form-input',
  templateUrl: './form.component.html',
  styleUrls: ['../app.component.css']
})
export class FormComponent {
  name: string;
  userList: User[] = [];

  getUser = () => {
    this.userList.push(new User(this.name));
    this.name = '';
  }
}
