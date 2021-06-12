function solucao(produtos) {
	//seu codigo aqui
    let objeto = {totalTop: 0, percentual: 0}
    let valorTotal = 0
    
    for (let produto of produtos){
        if(produto["preco"] > 10000 ){
            objeto.totalTop = objeto.totalTop + produto["preco"]
            valorTotal = valorTotal + produto["preco"]
        }else{
           valorTotal = valorTotal + produto["preco"]
        }
    }
    
    objeto.percentual = objeto.totalTop/valorTotal
    
    console.log(objeto)
}
