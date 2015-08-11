value = 42;
 
if (value >= 53) {
	value += 42;
} else {
	value -= 13;
}

value += "11";

var array = [];
for(var i=0; i < value.length; i++) {
	array[i] = value.charAt(i);
}

array.shift();
array.pop();

console.log(array);

var newVariable = [];
for(var counter=array.length-1; counter >= 0; counter--){
	newVariable += array[counter];
}
//7
value = parseInt(value);
newVariable = parseInt(newVariable);

//8
value = value + newVariable; 
console.log(value);

//9
if(value < 60){
	value = 14;
}else if (value == 2930){
	value = 27; 
}
else {value = 2
}; 

console.log(value + " step9"); 

//10 
i = 10
while (i > 0){
	value++; 
	i--;
}

//11
function step11(val){
	value = val.toString(); 
if(value.length>1){
	value = value.slice(1); 
}
return val;
value = val;
}

step11(value); 
console.log(value); 
