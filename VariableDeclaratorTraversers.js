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
		return block.declarations[0].id.name
	},
	RHS_VALUE :function(block){
		return block.declarations[0].init
	}
}