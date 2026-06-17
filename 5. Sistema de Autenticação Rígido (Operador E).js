let usuario = prompt("Digite o seu nome de usuário: ");
let senha = prompt("Digite a sua senha: ");
if((usuario === "admin") && (senha === "senai123")){
    alert("Acesso liberado.")
}
else{
    alert("Acesso negado.")
}