
//SCRIPT PARA CREAR UN DEGRADADO VARIABLE
//COPYRIGHT DESARROLLOWEB.COM 
//
//Se puede utilizar siempre que se mantengan los creditos. Gracias.


//VARIABLES PARA CONFIGURAR EL DEGRADADO. Configurar desde aqui

//color que se presenta al principio
color_inicio = new Array(0,51,102)

//color al que se tiende
//color_fin = new Array(255,99,0)
color_fin = new Array(155,99,0)

//los pasos que se utilizaran para pasar de un color al otro 
//pasos = 50
pasos = 500
//comportamiento 1=bucle_infinito 2=una_pasada_de_inicio_a_fin 3=una_pasada_de_inicio_a_fin_a_inicio 4=bucle_infinito_con_interrupcion
comportamiento = 1



//VARIABLES INTERNAS Y PROGRAMACION.
//No tocar a no ser que se sepa lo que se hace
hexadecimal = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F")
var iteracion = 0
var color_actual = new Array(3)
//calculo el incremento en los que se tiene que hacer el degradado, para el numero de pasos determinado
diferencia = new Array(3)
for (i=0;i<3;i++) 
	diferencia[i] = (color_fin[i] - color_inicio[i]) / pasos

function convierteHexadecimal(num){
	//alert (num)
	var hexaDec = Math.floor(num/16)
	var hexaUni = num - (hexaDec * 16)
	return hexadecimal[hexaDec] + hexadecimal[hexaUni]
}

function degradado(){
	iteracion += 1
	//miro si estoy en el inicio > fin o en el fin > inicio
	if (iteracion < pasos) {
		//estoy al principo
		for (i=0;i<3;i++)
			color_actual[i] = (iteracion * diferencia[i]) + color_inicio[i]
	}else{
		//estoy volviendo
		for (i=0;i<3;i++)
			color_actual[i] = color_fin[i] - ((iteracion - pasos) * diferencia[i])
	}
	
	document.body.style.backgroundColor = convierteHexadecimal(Math.round(color_actual[0])) + convierteHexadecimal(Math.round(color_actual[1])) + convierteHexadecimal(Math.round(color_actual[2]))
	
	// llamo a degradado() con un retardo
	switch (comportamiento){
		case 1:
			if (iteracion == pasos * 2)
				iteracion = 0
			setTimeout("degradado()",1)
			break;
		case 2:
			if(iteracion < pasos)
				setTimeout("degradado()",1)
			break;
		case 3:
			if(iteracion < pasos * 2)
				setTimeout("degradado()",1)
			break;
		case 4:
			if (iteracion == pasos * 2){
				iteracion = 0
				setTimeout("degradado()",10000)
			}else{
				setTimeout("degradado()",1)
			}
			break;
	}
}

degradado()
