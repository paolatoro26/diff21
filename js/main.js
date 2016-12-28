	
	
	function calcular()
	{
		var numero1=document.getElementById("numero").value;

		var diff1=(parseInt(numero1)-21)*2;
		
		var diff2 =21-parseInt(numero1);

		if(numero1>21)
		{
			salida.innerHTML=diff1;	
		} else{
			salida.innerHTML=diff2;	
		}
	}