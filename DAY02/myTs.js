var $btn = document.getElementById('submit');
var $list = document.getElementById('list');
var User = (function () {
    /**
     * Constructor
     */
    function User(name) {
        /**
         * This function create <li> tag and insert username into this
         */
        this.createSubList = function () {
            $subList = document.createElement('li');
            $subList.className = "list-group-item";
            $subList.innerHTML = "" + name;
        };
        /**
         * This function create <button> tag and set its name as Delete
         */
        this.createDelBtn = function () {
            $btnDel = document.createElement('button');
            $btnDel.className = "btn btn-danger pull-right";
            $btnDel.innerHTML = 'Delete';
        };
        /**
         * This function append <button> tag into <li> and append <li> into <ul>
         */
        this.appendToList = function () {
            $subList.appendChild($btnDel);
            $list.appendChild($subList);
        };
        /**
         * This function create event for Delete button each <li> tag
         */
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
    alert("Delete success");
});
