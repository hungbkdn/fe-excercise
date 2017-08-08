import { Component, Output, EventEmitter, Input } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MemberService } from '../member.service'

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
	@Output() addMember: EventEmitter<any> = new EventEmitter();
	@Input() id: number;
	public myForm: FormGroup; // our model driven form
	memberService: MemberService;
	// register(form: NgForm) {
	// 	this.asianTechMentor.push(form.value['personal']['name'], form.value['personal']['birthday'], form.value['company']['team'], form.value['company']['joined']);
	// 	console.log(this.asianTechMentor);
	// }
	constructor(private _fb: FormBuilder, memberService: MemberService) {
		this.myForm = this._fb.group({
			personal: new FormGroup({
				name: new FormControl('', <any>[Validators.required]),
				birthday: new FormControl()
			}),
			company: new FormGroup({
				team: new FormControl('', <any>[Validators.required]),
				joined: new FormControl()
			}),
			skill: new FormControl()
		});
		this.memberService = new MemberService;
	} // form builder simplify form initialization
	ngOnInit() {
		this.myForm.controls['company']['controls']['team'].valueChanges.subscribe(
			(val: any) => {
				this.myForm.setControl('skill', new FormControl('', [Validators.required, this.checkSkill]))
				// this.myForm.controls['skill'].setValidator()
			}
		);
	}

	ngDoCheck() {
		let asianTechMentor = this.memberService.getMembers();
		Object.keys(asianTechMentor).forEach(key => {
		    if (asianTechMentor.hasOwnProperty(key)) {    
		        let value = asianTechMentor[key];
		        if(value['id'] == this.id) {
		        	this.myForm.controls['personal']['controls']['name'].setValue(value['name']);
		        	this.myForm.controls['personal']['controls']['birthday'].setValue(value['birthday']);
		        	this.myForm.controls['company']['controls']['team'].setValue(value['team']);
		        	this.myForm.controls['company']['controls']['joined'].setValue(value['joined']);
		        	this.myForm.controls['skill'].setValue(value['skill']);
		        }
		    }
		});
		// let formValue = this.memberService.getDetail(this.id);
		// console.log(formValue);
	}

	checkSkill = (input: FormControl) => {
		if(input.value.indexOf(this.myForm.controls['company']['controls']['team'].value) >= 0) {
			return null;
		} else {
			return {invalid: true};
		}
	}
	register(myForm: FormGroup) {
		this.memberService.addMember(
			this.myForm.value['personal']['name'],
			this.myForm.value['personal']['birthday'],
			this.myForm.value['company']['team'],
			this.myForm.value['company']['joined'],
			this.myForm.value['skill']
		);
		this.myForm.controls['personal']['controls']['name'].setValue('');
    	this.myForm.controls['personal']['controls']['birthday'].setValue('');
    	this.myForm.controls['company']['controls']['team'].setValue('');
    	this.myForm.controls['company']['controls']['joined'].setValue('');
    	this.myForm.controls['skill'].setValue('');
		this.addMember.emit(this.memberService.getMembers());
	}
}
