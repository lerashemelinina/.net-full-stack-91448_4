// Importing our module:
var myModule = require("./my-module.js"); // ./ means same directory as current file.

// Using the Module's properties: 
console.log(myModule.myText);
console.log(myModule.myObj.firstName 
    + " " + myModule.myObj.lastName);

// Using the Module's function: 
myModule.myFunc();