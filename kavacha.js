const esprima = require('esprima');
const fs = require('fs');
const { IS_API_NODE, API_PATH, API_BODY } = require('./httpTraversers');
const { RHS_VALUE } = require('./VariableDeclaratorTraversers.js');
const { IS_BINARY_EXPRESSION , GET_LHS} = require('./BinaryExpressionTraverser')
var fsExample = fs.readFileSync("./example/basic.js","utf-8");




var ast = esprima.parseModule(fsExample,{},function(node,metadata){});



var binary_expr = RHS_VALUE(ast.body[0])
console.log(GET_LHS(binary_expr))
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

