var $btn = document.getElementById('submit');
var $list = document.getElementById('list');
var User = (function () {
    function User(name) {
        this.createSubList = function () {
            $subList = document.createElement('li');
            $subList.className = "list-group-item";
            $subList.innerHTML = "" + name;
        };
        this.createDelBtn = function () {
            $btnDel = document.createElement('button');
            $btnDel.className = "btn btn-danger pull-right";
            $btnDel.innerHTML = 'Delete';
        };
        this.appendToList = function () {
            $subList.appendChild($btnDel);
            $list.appendChild($subList);
        };
        this.createDeleteEvent = function () {
            $btnDel.addEventListener('click', function (e) {
                var $parrentBtn = e.target.parentNode;
                $list.removeChild($parrentBtn);
            });
        };
        this.name = name;
    }
    return User;
}());
$btn.addEventListener('click', function () {
    var $newUser = new User(document.getElementById('username').value);
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
