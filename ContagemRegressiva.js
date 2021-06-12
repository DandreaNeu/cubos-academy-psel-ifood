function solucao(numero) {
	//seu codigo aqui
    
    while(numero>=0){
          
        console.log(numero)
        numero--
          }
    if(numero<0)
        console.log("KABUM")
    
}

function processData(input) {
	solucao(parseInt(input, 10));
} 
