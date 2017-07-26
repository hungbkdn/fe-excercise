import {ElementRef} from '@angular/core';

export class User {
	name: string;
	$list = document.getElementById('listUser');
	$subList: any;
	$btnDel: any;

	constructor(name: string) {
		this.name = name;
		this.$subList = document.createElement('li');
		this.$subList.innerHTML = this.name;
  	this.$btnDel = document.createElement('button');
  	this.$btnDel.innerHTML = 'Delete';
  	this.$btnDel.addEventListener('click', function(e) {
  		this.$subList.parentElement.removeChild(this.$subList);
  	})
  	this.$subList.appendChild(this.$btnDel);
	}
	show = () => {
		return this.name;
	}

  appendToList = () => {
  	// this.createDelBtn();
  	return this.$subList;
  }
}