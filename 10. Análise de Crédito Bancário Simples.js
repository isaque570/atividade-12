let salario = Number(prompt("Digite seu salário bruto: "));
let parcelas = Number(prompt("Digite o valor das parcelas desejadas: "));
let porcentagem = salario * 0.30
if(parcelas<porcentagem){
    alert("Aprovado")
}
else{
    alert("Negado")
}