const express = require('express');
const fs_module = require('fs');

const app = express();

/**
app.get("/",(req,res) => {
	res.send("Hello World");
});
**/

app.get("/read/:path",(req,res) => {
	var x = 5;
	fs_module.readFile(req.params.path,(err,file) => {
		if(err){
			res.send(err);
		}else{
			res.send(file);
		}
	})
	
});



app.listen(8081, () => {
	console.log("Listening on 8081");
})


