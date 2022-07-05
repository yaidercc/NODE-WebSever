 const http = require("http");

 http.createServer((request, response) => {
     console.log(request);
     //el content type es el tipo de archivo que va a tener la peticion 
     //  response.writeHead(200, {
     //      'content-type': 'text/plain'
     //  });
    //  response.setHeader("Content-Disposition", "attachment; filename=lista.csv");
    //  response.writeHead(200, {
    //      'content-type': 'application/csv'
    //  });
     response.write('Hola Mundo');
    //  response.write('1, Fernando\n');
    //  response.write('2, Yaider\n');
    //  response.write('3, Maria\n');
    //  response.write('4, Juan\n');
    //  response.write('5, Pedro\n');
     response.end();
 }).listen(9010);

 console.log("Escuchando el puerto", 9010);