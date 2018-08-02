const esprima = require('esprima');
const fs = require('fs');
const { IS_API_NODE, API_PATH, API_BODY } = require('./httpTraversers');
const { RHS_VALUE, LHS_VALUE ,IS_ATOMIC ,IS_VARIABLE_DECLARATION, GET_FS_IDENTIFIER, GET_REQUIRE_IDENTIFIER} = require('./VariableDeclaratorTraversers.js');
const { IS_EXPRESSION_BLOCK } = require('./ExpressionTraverser');
const { IS_BINARY_EXPRESSION , GET_LHS} = require('./BinaryExpressionTraverser');
const { GET_ARGS } = require('./CallExpressionTraverser.js');

var fsExample = fs.readFileSync("./example/fs/server.js","utf-8");

var ast = esprima.parseModule(fsExample,{},function(node,metadata){});



var binary_expr = RHS_VALUE(ast.body[0]);
//var call_fxn = ast.body[5].expression
let block = ast.body

let appId;
for(var i = 0;i<block.length;i++){

		if(IS_VARIABLE_DECLARATION(block[i]) && GET_REQUIRE_IDENTIFIER(block[i],"express")){
			appId = GET_REQUIRE_IDENTIFIER(block[i],"express")
		}
	 
}

for(var i = 0; i < block.length;i++){

	if(IS_VARIABLE_DECLARATION(block[i])){
		
		console.log(block[i]);
	}
		
}


// && node.init && node.init.callee && node.init.callee.name == 'require'


function IS_VAR_DECL_NODE(node){
	if(node.type == 'VariableDeclarator'){
		return true;
	}
	return false;
}




function isRequireVarDecl(node,identifier){

	if(node.type == 'VariableDeclarator' && node.init.callee.name == 'require' && node.init.arguments[0].value === identifier){
		return true;
	}
	return false;
}



function getAppName(node){

	if(node.type == 'VariableDeclarator' &&  node.init && node.init.callee && node.init.callee.name == 'express'){
		return node.id.name;
	}

}

