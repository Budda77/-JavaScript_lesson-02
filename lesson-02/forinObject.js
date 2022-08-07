'use strict'

let menu = {
		width : 300,
		height : 150,
		title : 'custom menu'
}

for(var key in menu){
	console.log('Key - ' + key + ' - Value - '+ menu[key]);
}

let counter =0;

for(let key in menu){
	
	counter++;
}

console.log('object menu has ' + counter + ' property');

let codes = {
		'45': 'data 1',
		'3': 'data 2',
		'17': 'data 3'
}

for(let code in codes){
	console.log(code);
}






