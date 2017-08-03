import { Component, Output, EventEmitter } from '@angular/core'; 
import { TrainersService } from '../trainers.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html'
})
export class ListComponent {
	@Output() sendMemberId: EventEmitter<any> = new EventEmitter();
	trainers: any;

	constructor(private trainerService: TrainersService) {
		this.trainerService.getData().subscribe(
	        (data: any) => {
	          this.trainers=data.data;
	        },
	        err => {
	          console.log("can't get products.");
	        }
      	);;
	}

	getId(memberid: number) {
		this.sendMemberId.emit(memberid);
	}
}
