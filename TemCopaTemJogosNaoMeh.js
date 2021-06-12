
function solucao(ano) {
	//seu codigo aqui
    
    let resultado = ano - 2018
    let resto = resultado % 4
    if(resto==0)
        console.log("COPA");
    else{
       resultado = ano - 2020
        resto = resultado % 4
        if(resto==0)
            console.log("JOGOS")
         else{
             console.log("MEH")
         } 
    }
   
    
}