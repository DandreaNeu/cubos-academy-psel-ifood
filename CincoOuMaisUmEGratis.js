
function solucao(precos) {
    //seu codigo aqui
    
    let produtos = precos.length
    if(produtos>=5){
        
        let menor = 0 
        
        for(let indice=0;indice<precos.length;indice++){
            if(precos[menor]>precos[indice]){
                      menor=indice
                      }
            
        }
        
    precos[menor] = 0
        
     let resultado = 0 
     for(let item of precos){
         resultado = resultado + item
     }
         
        console.log(resultado)
    }  
    else{
        let resultado = 0
       for(let item of precos){
           resultado = resultado+ item     
       }  
        console.log(resultado) 
    }
    
}
