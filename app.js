//


var http = require('http');
var fs = require('fs');

var server = http.createServer(function(reg,res){


  if(reg.url == '/'){
    fs.readFile('index.html',function(err,data){


      res.write(data);
  
      res.end('mesaj bitti');
  
  
    });
  }
  
  if(reg.url == '/login'){
    fs.readFile('login.html',function(err,data){


      res.write(data);

      res.write('deneme');
  
      res.end('mesaj bitti');
  
  
    });
  }


  console.log(reg.url);

 

  

});

server.listen(8000);