var $btn = document.getElementById('submit');
var $list = document.getElementById('list');

class User {
	name: string;
	$subList: any;
	$btnDel: any;
	constructor(name: string) {
		this.name = name;
	}
	createSubList = () => {
		$subList = document.createElement('li');
		$subList.className = "list-group-item";
		$subList.innerHTML = `${name}`;
	}
	createDelBtn = () => {
		$btnDel = document.createElement('button');
		$btnDel.className = "btn btn-danger pull-right";
		$btnDel.innerHTML = 'Delete';
	}
	appendToList = () => {
		$subList.appendChild($btnDel);
		$list.appendChild($subList);
	}
	createDeleteEvent = () => {
		$btnDel.addEventListener('click', (e) => {
			let $parrentBtn = e.target.parentNode;
			$list.removeChild($parrentBtn);
		});
	}
}

$btn.addEventListener('click', () => {
	let $newUser = new User(document.getElementById('username').value);
	$newUser.createSubList();
	$newUser.createDelBtn();
	$newUser.appendToList();
	$newUser.createDeleteEvent();
});



// $btn.addEventListener('click', () => {
// 	var $newUser = document.getElementById('username');
// 	var $subList = document.createElement('li');
// 	$subList.innerHTML = `${$newUser.value}`;
// 	var $btnDel = document.createElement('button');
// 	$btnDel.innerHTML = 'Delete';
// 	$subList.appendChild($btnDel);
// 	$list.appendChild($subList);
// 	$btnDel.addEventListener('click', (e) => {
// 		$parrentBtn = $btnDel.parentNode;
// 		$list.removeChild($parrentBtn);
// 	});
// });
