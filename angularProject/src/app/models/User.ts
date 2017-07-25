import {ElementRef,Renderer2} from '@angular/core';

export class User {
	name: string;
	$list = document.getElementById('listUser');
	$subList: any;
	$btnDel: any;

	constructor(name: string) {
		this.name = name;
		// this.createSubList();
		// this.appendToList();
	  	this.$btnDel = document.createElement('button');
	  	this.$btnDel.innerHTML = 'Delete';
	}
	show = () => {
		return this.name;
	}

	// createSubList = () => {
 //  	this.$subList = document.createElement('li');
 //  	this.$subList.innerHTML = this.name;
 //  }

 //  createDelBtn = () => {
 //  	this.$btnDel = document.createElement('button');
 //  	this.$btnDel.innerHTML = 'Delete';
 //  }

  appendToList = () => {
  	// this.createDelBtn();
  	return this.$btnDel;
  }
}