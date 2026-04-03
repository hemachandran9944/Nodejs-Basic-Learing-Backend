const file_system  = require('fs')


            /*writeFileSync- Method*/

try {
    file_system.writeFileSync('Testingapp.txt','Hemachandran');
    console.log("create File success!")
    
} catch (error) {
    console.log(err.message);
    
}


            /*ReadFileSync- Method*/


try {
    const readfile = file_system.readFileSync("Testingapp.txt",{
        encoding:"utf-8"
    } );
    console.log("Successfulley read file",readfile);
} catch (error) {
    console.log(error.message);
    
}            

