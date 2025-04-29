// calcular média do aluno

let nota1 = Number(prompt('Digite sua nota!'))
let nota2 = Number(prompt('Digite sua nota!'))

let mostrarNota = (nota1 + nota2)/2

if(mostrarNota < 6){
    alert('Você está abaixo da média! Sua média é: ' + mostrarNota)
} else{
    alert('Você está acima da média! Sua média é: ' + mostrarNota)
}