

module.exports = {

//Returns a Boolean based on whether the node is a node where a API endpoint is defined
	IS_API_NODE: function(node, method){
		if(IS_EXPR_STATEMENT_NODE(node) && node.expression.callee && node.expression.callee.object && node.expression.callee.object.name == 'app' && node.expression.callee.property.name == method){
			return true;
		}
		return false
	},

// Returns the API endpoint path of a given express endpoint
	API_PATH : function(node,method){
		if(IS_EXPR_STATEMENT_NODE(node) && node.expression.callee && node.expression.callee.object && node.expression.callee.object.name == 'app' && node.expression.callee.property.name == method){
			return node.expression.arguments[0].value;
		}
		return
	},

	API_REQUEST_IDENTIFIER : function(node, method){
		if(IS_EXPR_STATEMENT_NODE(node) && node.expression.callee && node.expression.callee.object && node.expression.callee.object.name == 'app' && node.expression.callee.property.name == method){
			return node.expression.arguments[1].params[0].name;
		}
		return
	},

	API_RESPONSE_IDENTIFIER : function(node, method){
		if(IS_EXPR_STATEMENT_NODE(node) && node.expression.callee && node.expression.callee.object && node.expression.callee.object.name == 'app' && node.expression.callee.property.name == method){
			return node.expression.arguments[1].params[1].name;
		}
		return
	},

	API_BODY: function(node,method){
		if(IS_EXPR_STATEMENT_NODE(node) && node.expression.callee && node.expression.callee.object && node.expression.callee.object.name == 'app' && node.expression.callee.property.name == method){
			return node.expression.arguments[1].body.body;
		}
		return
	}

	


}

function IS_EXPR_STATEMENT_NODE(node){
	if(node.type == 'ExpressionStatement'){
		return true;
	}

	return false;
}	

