import { Component, Output, EventEmitter } from '@angular/core'; 
import { TrainersService } from '../trainers.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html'
})
export class ListComponent {
	@Output() sendMemberId: EventEmitter<any> = new EventEmitter();
	trainers: any;
	//$trainerService: TrainersService;
	constructor(private trainerService: TrainersService) {
		this.trainers = trainerService.getAll();
	}

	getId(memberid: number) {
		this.sendMemberId.emit(memberid);
	}
}
