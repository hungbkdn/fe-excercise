import { Component, Input, DoCheck } from '@angular/core'; 
import { TrainersService } from '../trainers.service';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent {
	@Input() id: number;
	trainer: any;
	trainers: any;
	constructor(private trainerService: TrainersService) {
		
	}

	ngOnChanges() {
		this.trainerService.getData().subscribe(
	        (data: any) => {
	          this.trainers=data.data;
	        },
	        err => {
	          console.log("can't get products.");
	        }
      	);
      	for(var member of this.trainers) {
      		if(member.id == this.id) {
      			this.trainer = member;
      		}
      	}
  	}
}
