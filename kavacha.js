const esprima = require('esprima');
const fs = require('fs');

var fsExample = fs.readFileSync("./example/fs/server.js","utf-8");

esprima.parseModule(fsExample,{},function(node){
	console.log(node.type)
});
