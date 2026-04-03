const Testing_filesystem = require('fs');


try {
    Testing_filesystem.writeFileSync('Testing.txt',"This Hemachandran Im Nodejs Developer");
    console.log("File Success Creact");
    
} catch (error) {
    console.log(err.message);
    
}



