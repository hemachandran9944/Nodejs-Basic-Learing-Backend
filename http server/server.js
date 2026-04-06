
const small_httpserver   =   require ('http');
const  file_system       =   require('fs');


        //*Creact Server Method*//

const server = small_httpserver.createServer((req, res ) =>{

    if (req.url == "/") {
        res.writeHead(200, { "content-type": "text/plain" });
        res.end(`Home Page`);
        
    }else if (req.url == "/nodejs") {
        res.writeHead(200, { "content-type": "text/plain" });
        res.end(`nodejs Page`);
       
    }else if (req.url == "/sample") {
        const Read_Stream  =   file_system.createReadStream('./hema.mp4');
        res.writeHead(200, { "Content-Type": "video/mp4" });
        Read_Stream.pipe(res); 
              
        
    }else{
        res.writeHead(404, { "content-type": "application/json" });
        res.end(`404 Page Not Found`);

    }
   
});        


server.listen (8000, () => {
    console.log("Listen 8000 Port Number")

});










