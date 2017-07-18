//this function will show undefine 
function whoAmI(me) {
    var myName = "undefine";
    if (me == "hihi") {
        var myName_1 = "Ronaldo";
    }
    {
        var myName_2 = "Messi";
        {
            var myName_3 = "Rooney";
        }
    }
    return myName;
}
//arrow function
var showMyName = function (name) {
    return name;
};
//for..of
var randomArray = ["hung", 22, "quang tri"];
var innerHTMLSub = '';
for (var _i = 0, randomArray_1 = randomArray; _i < randomArray_1.length; _i++) {
    var item = randomArray_1[_i];
    innerHTMLSub += item + " <br>";
}
//default parameter
function showMyAge(age) {
    if (age === void 0) { age = 22; }
    return age;
}
//use whoAmI function above
var innerHTML = whoAmI("test");
var myName = showMyName("Hung");
var multiLine = "1 One\n\t\t\t\t2 Two\n\t\t\t\t3 Three\n\t\t\t\t4 Four\n\t\t\t\t5 Five";
var $pTag = document.getElementById('p-tag');
$pTag.innerHTML = "Result: " + innerHTML;
$pTag.innerHTML = "Show My Name: " + myName;
$pTag.innerHTML = innerHTMLSub;
$pTag.innerHTML = showMyAge();
console.log(multiLine);
