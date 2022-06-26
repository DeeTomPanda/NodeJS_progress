const express=require('express');
const path=require('path');
const port=3000;

const app=express();

app.listen(port,()=>
	        {
			console.log("App running on port 3000");
		});

app.get('/',(req,res)=>
	    {
		res.send("At Root Doc");
	    });

app.get('/about',(req,res)=>
	         {
                    res.sendFile(path.resolve(__dirname,'about.html'));
	         });

app.get('/help',(req,res)=>
	        {
		   res.sendFile(path.resolve(__dirname,'help.html'));
		});

