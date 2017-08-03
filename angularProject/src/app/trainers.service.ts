import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class TrainersService {
	memberId: number;
	trainers: Array<string> = [];

  constructor(private http: Http) {
  }
  getData = () => {
    return this.http
      .get('data/trainers.json')
      .map(res => res.json());
  }
	getDetail = (id: number) => {
		for(let i=0; i<this.trainers.length; i++) {
      console.log(this.trainers);
			// if(this.trainers[i]=>id === id)
			// 	return this.trainers[i];
		}
	}

	getAll = () => {
		return this.trainers;
	}

	setMemberId = (memberId: number) => {
		this.memberId = memberId;
	}
}