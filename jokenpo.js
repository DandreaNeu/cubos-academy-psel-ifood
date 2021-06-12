
function solucao(joao, andre) {
    // Escreva seu codigo aqui
    
    if(joao=="PEDRA" && andre=="TESOURA")
        console.log("JOAO");
    if(joao=="PAPEL" && andre=="PEDRA")
        console.log("JOAO");
    if(joao=="TESOURA" && andre=="PAPEL")
        console.log("JOAO");
    
    if(andre=="PEDRA" && joao=="TESOURA")
        console.log("ANDRE");
    if(andre=="PAPEL" && joao=="PEDRA")
        console.log("ANDRE");
    if(andre=="TESOURA" && joao=="PAPEL")
        console.log("ANDRE");
    
    if(andre==joao)
        console.log("EMPATE")
    
    
}

