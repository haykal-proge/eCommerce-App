function split(name){
    return name.split(' ');
}
var validLogin = false;

var name = "Admin";

if (name === "Admin") {
  validLogin = true;
}


if (validLogin === true) {
  console.log("Welcome " + name);
} else {
  console.log("Invalid Login");
}
export {split};