const http= require("http")
const add=require('./date1')
const hostname='127.0.0.1'
const port= '8089'
 
var a=100, b=10;
 
 
const server= http.createServer((req,res)=>
{
	res.writeHead(200,{'Content-Type':'text/html'})
	res.write("<h2>Addition is:</h2>"+ add.add(a,b))
	res.write("<br>")
	res.end("Program Ended!!!\n")
})
 
 server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});