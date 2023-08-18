let result=document.getElementById('output');
function calculate(){

	try{
		result.value=eval(result.value);
	}
	catch{
		result.value="Error";
		
	}
	
		
	
	
}
