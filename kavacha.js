var argv = require('minimist')(process.argv.slice(2));

var argLength = Object.keys(argv).length;

if(argLength==1){
	console.log("Welcome to Kavacha");//Welcome Page
}else{

	console.dir(argv);
}

