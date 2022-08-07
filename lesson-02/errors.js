'use strict'

try{
	console.log('start code');
	throw new Error('test error');
}catch(err){
	console.log('error happend');
}finally{
	console.log('finally code');
}

console.log('---------------');

try{
	console.log('start code');
	setTimeout(function(){

		try{
			throw new Error('nested test error');
		}catch(err){
			console.log('nested error happend--->'+ err);
		}

	}, 1000);

}catch(err){
	console.log('error happend--->'+ err);
}finally{
	console.log('finally code');
}


console.log('2 ---------------');

try{
	var data = {'age':20};
	var user = JSON.parse(data);
	
	if(!user.name){
		
		throw new SyntaxError('parse error');
	}

}catch(err){
	console.log('error happend ---> '+ err);
}finally{
	console.log('finally code');
}







