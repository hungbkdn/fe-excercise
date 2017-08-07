import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
	public myForm: FormGroup; // our model driven form
	asianTechMentor:Array<{name: string, birthday: string, team: string, joined: string}> = [];
	// register(form: NgForm) {
	// 	this.asianTechMentor.push(form.value['personal']['name'], form.value['personal']['birthday'], form.value['company']['team'], form.value['company']['joined']);
	// 	console.log(this.asianTechMentor);
	// }
	constructor(private _fb: FormBuilder) { } // form builder simplify form initialization
	ngOnInit() {
		this.myForm = new FormGroup({
			personal: new FormGroup({
				name: new FormControl('', <any>Validators.required),
				birthday: new FormControl('')
			}),
			company: new FormGroup({
				team: new FormControl('', <any>Validators.required),
				joined: new FormControl('')
			})
		});
	}
	register(myForm: FormGroup) {
		this.asianTechMentor.push(this.myForm.value['personal']['name'], this.myForm.value['personal']['birthday'], this.myForm.value['company']['team'], this.myForm.value['company']['joined']);
		console.log(this.asianTechMentor);
	}
}
