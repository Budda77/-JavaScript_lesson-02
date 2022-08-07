'user strict'

//task 1
console.log('task 1');
console.log('');

let user = {};

user.name = 'Pylyp';
user.sername = 'Shevchenko';

console.log(user);

user.name = 'Sergiy';
console.log(user.name);

delete user.name;
console.log(user);

// task 2 
console.log('\ntask 2 ');
console.log('');

let employeeSalaries = {
		employee1: 200,
		employee2: 300,
		employee3: 400,
		employee4: 500,
		employee5: 150,
		employee6: 250,
		employee7: 100
		
};

let summ =0;

for(let key in employeeSalaries){
	
	summ = summ + employeeSalaries[key];

}
console.log('Total summ of employee salaries is: ' + summ);


//task 3 
console.log('\ntask 3');
console.log('');

function mathOperation(num1, num2, operation){
	let result = 0;

	try{

		if(typeof num1 != 'number' || typeof num2 != 'number'){
			throw new Error('The input numbers were wrong.');
		}

		switch(operation){
		case '+': {
			result = num1 + num2; break;
		}
		case '-': {
			result = num1 - num2; break;
		}
		case '*': {
			result = num1 * num2; break;
		}
		case '/': {
			
			if(num2 == 0){
				throw new Error(' Can not divide by 0.');
			}else{				
				result = num1 / num2; 			
			}	
		break;
		}
		default: {
			console.log('enter correct operator. '); 
		}
		}
		
	} catch(err){
		console.log('Please input correct data.\n' + err);
	}
	

	return result;

}

console.log('Sum operation:')
let result = mathOperation(13, 85, '+');
console.log(result);

console.log('Subtract operation:')
result = mathOperation(57, 46, '-');
console.log(result);

console.log('Multiply operation:')
result = mathOperation(17, 23, '*');
console.log(result);

console.log('Divide operation:')
result = mathOperation(468, 12, '/');
console.log(result);

console.log('\nInstance of wrong data:')
console.log('\nerror 1');
result = mathOperation('A', 'bc', '+');
console.log(result);

console.log('\nerror 2');
result = mathOperation(246, 0, '/');
console.log(result);


console.log('\nerror 3');
result = mathOperation(56, 8, 'abc');
console.log(result);



