var path=require('path');
var fs=require('fs');

var express=require('express')
var app=express()

app.get('/:type',function(req,res){
	var fname=path.join(__dirname,'bar.html');
	fs.readFile(fname, function(err,data){
		data=data.toString().replace('bar',req.params.type); 
	 	res.end(data);
	});
	//res.sendfile();
});

app.listen(1881);