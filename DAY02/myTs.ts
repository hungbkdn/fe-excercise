var $btn = document.getElementById('submit');
var $list = document.getElementById('list');

class User {
	name: string;
	$subList: any;
	$btnDel: any;

	/**
	 * Constructor
	 */
	constructor(name: string) {
		this.name = name;
		this.createSubList();
		this.createDelBtn();
		this.appendToList();
		this.createDeleteEvent();
	}

	/**
	 * This function create <li> tag and insert username into this
	 */
	createSubList = () => {
		$subList = document.createElement('li');
		$subList.className = "list-group-item";
		$subList.innerHTML = `${name}`;
	}

	/**
	 * This function create <button> tag and set its name as Delete
	 */
	createDelBtn = () => {
		$btnDel = document.createElement('button');
		$btnDel.className = "btn btn-danger pull-right";
		$btnDel.innerHTML = 'Delete';
	}

	/**
	 * This function append <button> tag into <li> and append <li> into <ul>
	 */
	appendToList = () => {
		$subList.appendChild($btnDel);
		$list.appendChild($subList);
	}

	/**
	 * This function create event for Delete button each <li> tag
	 */
	createDeleteEvent = () => {
		$btnDel.addEventListener('click', (e) => {
			let $parrentBtn = e.target.parentNode;
			$list.removeChild($parrentBtn);
			alert("Delete Success");
		});
	}
}

$btn.addEventListener('click', () => {
	let $newUser = new User(document.getElementById('username').value);
});
