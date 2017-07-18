var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ATer = (function () {
    function ATer(fullName) {
        this.level = "Undefine";
        this.fullName = fullName;
    }
    ATer.prototype.greeting = function () {
        return "Hello, I'm " + this.fullName + ", and I'm working at Asian Tech as " + this.level + "!";
    };
    return ATer;
}());
var Intern = (function (_super) {
    __extends(Intern, _super);
    function Intern(fullName) {
        var _this = _super.call(this, fullName) || this;
        _this.level = "Internship";
        return _this;
    }
    return Intern;
}(ATer));
var ASE = (function (_super) {
    __extends(ASE, _super);
    function ASE(fullName) {
        var _this = _super.call(this, fullName) || this;
        _this.level = "ASE";
        return _this;
    }
    return ASE;
}(ATer));
var subBoss = (function () {
    function subBoss() {
        console.log('inside subBoss rightnow');
    }
    subBoss.prototype.sayBye = function () {
        console.log('subBoss say Goodbye!');
    };
    subBoss.prototype.sayBye = function () {
        return 'subBoss say Goodbye!';
    };
    return subBoss;
}());
function sayHello(boss) {
    var helloSentence = "Hello, I'm " + boss.position + ", " + boss.name;
    return helloSentence;
}
var intern = new Intern("Nguyen Van A");
var ase = new ASE("Kimono");
var myBoss = {
    name: "Duong Qua",
    position: "CEO"
};
var subBoss = new subBoss();
var sayBye = subBoss.sayBye();
var innerHTML = intern.greeting() + " <br> " + ase.greeting() + " <br> " + sayHello(myBoss) + " <br> " + sayBye;
var $pTag = document.getElementById('p-tag');
$pTag.innerHTML = innerHTML;
