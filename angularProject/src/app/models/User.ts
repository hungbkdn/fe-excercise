export class User {
	name: string;
	$list = document.getElementById('listUser');
	$subList: any;
	$btnDel: any;

	constructor(name: string) {
		this.name = name;
		this.createSubList();
		this.appendToList();
	}
	show = () => {
		return this.name;
	}

	createSubList = () => {
  	this.$subList = document.createElement('li');
  	this.$subList.innerHTML = this.name;
  }

  createDelBtn = () => {
  	this.$btnDel = document.createElement('button');
  	this.$btnDel.innerHTML = 'Delete';
  }

  appendToList = () => {
  	this.createDelBtn();
  	this.$subList.appendChild(this.$btnDel);
  	this.$list.appendChild(this.$subList);
  }
}