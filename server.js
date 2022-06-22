const http=require('http');
const port='8080';

const server=http.createServer((req,res)=>
	{
		if(req.url==`/about`)
			console.log(`running at /about`);
		else if(req.url==`/help`)
			console.log(`running at /help`);
		else
			console.log(`running at /`);
                res.writeHead(200);
	        res.end("Hello from 8080!!");
        });

server.listen(port,()=>
	{
		console.log(`Server running at http://localhost:${port}`);
	});

