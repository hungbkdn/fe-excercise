//this function will show undefine 
function whoAmI(me) {
	var myName = "undefine";
	if ( me == "hihi" ) {
		let myName = "Ronaldo";
	} 
	{
		let myName = "Messi";
		{
			let myName = "Rooney";
		}
	}
	return myName;
}

//arrow function
var showMyName = name => {
	return name;
}

//for..of
var randomArray = ["hung", 22, "quang tri"];
var innerHTMLSub = '';
for(var item of randomArray) {
	innerHTMLSub += `${item} <br>`;
}

//default parameter
function showMyAge(age:number = 22) {
	return age;
}

//use whoAmI function above
var innerHTML = whoAmI("test");
var myName = showMyName("Hung");
var multiLine = `1 One
				2 Two
				3 Three
				4 Four
				5 Five`;
var $pTag = document.getElementById('p-tag');
$pTag.innerHTML = `Result: ${innerHTML}`;
$pTag.innerHTML = `Show My Name: ${myName}`;
$pTag.innerHTML = innerHTMLSub;
$pTag.innerHTML = showMyAge();
console.log(multiLine);
