import { Component, Input, DoCheck } from '@angular/core'; 
import { TrainersService } from '../trainers.service';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent {
	@Input() id: number;
	trainer: any;
	constructor(private trainerService: TrainersService) {
	}

	ngDoCheck() {
    	this.trainer = this.trainerService.getDetail(this.id);
  	}
}
