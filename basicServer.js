const http = require('http');
 http.createServer((req,resp)=>{
  resp.write('hellow i am dj ...')
  resp.end()
 }).listen(4500)



 // after save & open crome and search localhost:4500 then we got o/p