function calcularGorjeta(){
    let ValorTotal = document.querySelector("#number").value
    valorGorjeta = ValorTotal * 0.1 
    document.querySelector("#resultado").innerHTML = "Gorjeta : R$ " + valorGorjeta
}
document.querySelector("#btCalcular").addEventListener("click" , function(){
calcularGorjeta()
})