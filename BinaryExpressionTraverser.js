module.exports = {
	IS_BINARY_EXPRESSION:isBinaryExpression,

	GET_OPERATOR : function(node){
		if(isBinaryExpression(node)){
			return node.operator;
		}
	},
	GET_RHS : function(node){
		if(isBinaryExpression(node)){
			return node.right;
		}
	},

	GET_LHS : function(node){
		if(isBinaryExpression(node)){
			return node.left;
		}
	},


}


function isBinaryExpression(node){
		if(node.type == 'BinaryExpression'){
			return true;
		}
		return false;
	}