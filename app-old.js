const http = require('http');

/**
 * req: solicitud al webserver (cliente)
 * res: respuesta (servidor)
 */
http.createServer((req,res)=>{
    console.log(req);

    res.setHeader('Content-Disposition','attachment; filename=lista.csv')
    res.writeHead(200,{'Content-Type':'application/csv'})
    
    // const persona={
    //     id:1,
    //     nombre:"yaider"
    // }
    
    res.write('id, nombre\n');
    res.write('1, yaider\n');
    res.write('2, sebastian\n');
    res.write('3, carlos\n');
    res.write('4, camilo\n');
    res.end();
})
.listen(9090)

console.log("escuchando en el puerto: 9090"); 