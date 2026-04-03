const path = require("path");

const  file_path = ("E:\nodejsapis learing\coremodules\fs.js")

console.log("file name",path.basename(file_path));
console.log("folder diractory",path.dirname(file_path));
console.log("file extence",path.extname(file_path));   



//  Join Path  //
console.log("Join Path",__dirname+"\\aync.txt");


console.log("Join Path",path.join(__dirname,"Testingapp.txt"));