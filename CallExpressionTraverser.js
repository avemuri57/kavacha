module.exports = {
	IS_CALL_EXPRESSION : function(node){

	if(node.type == 'CallExpression'){
			return true;
		}

	},

	GET_CALLEE : function(node){
			return node.callee.name;
	},

	GET_ARGS : function(node){
			return node.arguments;
	},

}


