import { Injectable } from '@angular/core';

@Injectable()
export class MemberService {
	asianTechMentor: Array<{id: number, name: string, birthday: string, team: string, joined: string, skill: string}> = [];
	id: number;
	constructor() {
		this.id = 0;
	}
	addMember = (name: string, birthday: string, team: string, joined: string, skill: string) => {
		this.id = this.id + 1;
		return this.asianTechMentor.push({'id': this.id, 'name': name, 'birthday': birthday, 'team': team, 'joined': joined, 'skill': skill});
	}

	getMembers = () => {
		console.log(this.asianTechMentor);
		return this.asianTechMentor;
	}

	getDetail = (id) => {
		Object.keys(this.asianTechMentor).forEach(key => {
		    if (this.asianTechMentor.hasOwnProperty(key)) {    
		        var value = this.asianTechMentor[key];
		        if(value['id'] == id) {
		        	return value;
		        }
		    }
		});

	}
}