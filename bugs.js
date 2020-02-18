

var firstName = "Robert";
var nickName = "Bob";
var petName = "Fluffy";
var petType = "Turtle";

if(firstName == "Robert"){
    console.log("Hi Robert");
}
if(firstName == "Bob"){
    console.log("Hi Bob");
}
if(nickName != "Robert"){
    console.log("Hello Stranger");
}
if(petType == "Dog"){
    console.log("Time to play fetch");
}
if(petType == "Cat"){
    console.log("Time to play with a laser pointer");
}
else if(petType != "Cat"){
    console.log("Time to play with my pet");
}