function printFizzBuzz(){
var printable="";
	for(var number=1;number<=100;number++){
		printable+=findFizzBuzz(number)+"<br>";
	}
	document.body.innerHTML=printable;
}
function findFizzBuzz(number){
	var result="";
		if((number%3)==0){
			result+="fizz";
		}
		if((number%5)==0){
			result+="buzz";
		}
		if(result==""){
		result=number;
		}
	return result;
}