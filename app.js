alert('boas vindas ao jogo do numero secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * 5000 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;


while (chute != numeroSecreto) {
    chute = prompt(`escolha um numero entre 1 em ${numeroMaximo}`);
    
    if (chute == numeroSecreto) {
        break;
       
    } else {
        if (chute > numeroSecreto) {
            alert(`o numero secreto e menor que ${chute}`);
        } else {
            alert(`o numero secreto e maior que ${chute}`); 
            
        }
        
        tentativas++;
    }
}
let palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa`;
alert(`isso ai! voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

