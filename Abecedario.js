function solucao(letra, palavras) {
	//seu codigo aqui
    let quantErro = 0
    
    for(let palavra of palavras){
        if(palavra[0] != letra){
            quantErro++
           }
    }
    
    console.log(quantErro)
}
