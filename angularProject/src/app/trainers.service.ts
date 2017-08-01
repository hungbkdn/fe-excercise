import { Injectable } from '@angular/core';

@Injectable()
export class TrainersService {
	memberId: number;
	trainers = [
  	{id: 1, avatar: '', name: 'Vy', birthday: '', team: 'FE', isShow: false}, 
  	{id: 2, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qmMkORAiXx_o2M5RMwIvin5wC0OMwXnZLEBAl_B0pc5gxI2Y', name: 'Kien', birthday: '01/01/1990', team: 'Ruby', isShow: false},
  	{id: 3, avatar: '', name: 'Nguyen', birthday: '', team: 'FE', isShow: false}
  	];
  	getDetail = (id: number) => {
  		for(let i=0; i<this.trainers.length; i++) {
  			if(this.trainers[i].id == id)
  				return this.trainers[i];
  		}
  	}

  	getAll = () => {
  		return this.trainers;
  	}

  	setMemberId = (memberId: number) => {
  		this.memberId = memberId;
  	}
}