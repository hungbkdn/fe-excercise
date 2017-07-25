import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { User } from './models/User';

@Injectable()

export class UserService {

    private subject = new Subject<string>();
    listUser: string[] = [];
    $listUser: User[] = [];
    // currentUser = Observable<string>;
    // constructor() {
    // 	currentUser = this.userName.asObservable();
    // }
    // changeUser(user: string) {
    //     this.userName = user;
    // }

    // getUser() {
    // 	return this.userName;
    // }

    sendUsername(userName: string) {
        //this.subject.next(userName);
        this.listUser.push(userName);
        this.makeArrUser();
    }
 	
 	makeArrUser = () => {
 		for(var usr of this.listUser) {
 			console.log(usr);
 			this.$listUser.push(new User(usr));
 		}
 	}

    getUser(): User[] {
        //return this.subject.asObservable();
        //console.log("hisdsadas");
        //console.log(this.$listUser);
        return this.$listUser;
    }

    deleteUser = (i: number) => {
    	this.$listUser.splice(i, 1);
    }

}