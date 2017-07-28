import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // styleRuby = {
  // 	color: 'red'
  // }
  // styleFE = {
  // 	color: 'yellow'
  // }
  trainers = [
  	{name: 'Vy', birthday: '', team: 'FE', isShow: false}, 
  	{name: 'Kien', birthday: '01/01/1990', team: 'Ruby', isShow: false},
  	{name: 'Nguyen', birthday: '', team: 'FE', isShow: false}
  ];
}
