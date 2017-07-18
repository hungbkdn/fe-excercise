interface Boss {
	name: string;
	position: string;
	sayBye():void;
	sayBye():string;
}

class ATer {
	level: string = "Undefine";
	fullName: string;
	constructor(fullName: string) {
		this.fullName = fullName;
	}

	greeting() {
		return "Hello, I'm " + this.fullName + ", and I'm working at Asian Tech as " + this.level + "!";
	}
}

class Intern extends ATer {
	level = "Internship";
	constructor(fullName: string) {
		super(fullName);
	}
}

class ASE extends ATer {
	level = "ASE";
	constructor(fullName: string) {
		super(fullName);
	}
}

class subBoss implements Boss {
	constructor() {
		console.log('inside subBoss rightnow');
	}

	sayBye():void {
		console.log('subBoss say Goodbye!');
	}

	sayBye():string {
		return 'subBoss say Goodbye!';
	}
}

function sayHello(boss: Boss) {
	var helloSentence = "Hello, I'm " + boss.position + ", " + boss.name;
	return helloSentence;
}

var intern = new Intern("Nguyen Van A");
var ase = new ASE("Kimono");
var myBoss: Boss = {
	name: "Duong Qua",
	position: "CEO"
}

var subBoss = new subBoss();
var sayBye:string = subBoss.sayBye();
var innerHTML = `${intern.greeting()} <br> ${ase.greeting()} <br> ${sayHello(myBoss)} <br> ${sayBye}`;
var $pTag = document.getElementById('p-tag');
$pTag.innerHTML = innerHTML;
