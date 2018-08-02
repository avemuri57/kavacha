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
		
	},
	GET_FS_IDENTIFIER : function(block){
		
		if(IS_VARIABLE_DECLARATION(block) &&  block.declarations[0].init && block.declarations[0].init.callee && block.declarations[0].init.callee.name == 'require' && block.declarations[0].init.arguments[0].value == 'fs'){
			return block.declarations[0].id.name;
		}
	},

	GET_REQUIRE_IDENTIFIER : function(block, identifier){
	
		if(IS_VARIABLE_DECLARATION(block) &&  block.declarations[0].init && block.declarations[0].init.callee && block.declarations[0].init.callee.name == 'require' && block.declarations[0].init.arguments[0].value == identifier){
			return block.declarations[0].id.name;
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

IS_VARIABLE_DECLARATION =  function(block){
			if(block.type == 'VariableDeclaration'){
				return true
			}

			return false;
	}

