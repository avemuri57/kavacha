module.exports = {
	IS_EXPRESSION_BLOCK : function(block){
		if(block.type == 'ExpressionStatement'){
			return true;
		}
	}
}