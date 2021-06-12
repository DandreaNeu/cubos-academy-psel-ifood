function solucao(obj) {
	//seu codigo aqui
    
    if(obj.temIngresso==false){
        console.log("ACESSO NEGADO")
    }else{
        if(obj.idade<obj.censura && obj.estaComPais==false){
            console.log("ACESSO NEGADO")
        }else{
            if(obj.temCarteirinha  || obj.idade<18){
                console.log("MEIA")
            }else{
                console.log("INTEIRA")     
            }  
        }
    }
}