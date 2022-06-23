const http=require('http');
const fs=require('fs');
const port='8080';

const about=fs.readFileSync('about.html');
const help=fs.readFileSync('help.html');

const server=http.createServer((req,res)=>
	{
		if(req.url==`/about`)
			res.end(about);
		else if(req.url==`/help`)
			res.end(help);
		else
			res.end("Hello from 8080!!");
        });

server.listen(port,()=>
	{
		console.log(`Server running at http://localhost:${port}`);
	});

