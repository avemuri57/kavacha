module.exports = {
	IS_VARIABLE_DECLARATION: function(block){
			if(block.type == 'VariableDeclaration'){
				return true
			}

			return false;
	},
	GET_KIND: function(block){
		return block.kind
	},
	LHS_VALUE :function(block){
		if(block.type == 'VariableDeclaration'){
		return block.declarations[0]
		}
	},
	RHS_VALUE :function(block){
		return block.declarations[0].init
	},
	IS_ATOMIC : function(block){
		if(block.type == 'VariableDeclaration'){
				console.log(rhsValue(block).type == 'Literal');
			}
		
	}
}


rhsValue = function(block){
		return block.declarations[0].init
	}

lhsValue = function(block){
		if(block.type == 'VariableDeclaration'){
		return block.declarations[0]
		}

	}

