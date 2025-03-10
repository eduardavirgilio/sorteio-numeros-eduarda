//pegar os elementos do html
const sliderMinimo = document.querySelector('.sorteio-numeros__slider-minimo');
const sliderMaximo = document.querySelector('.sorteio-numeros__slider-maximo');
const botaoSorteio = document.querySelector('.sorteio-numeros__button');
const tamanhoMinimo = document.querySelector('.sorteio-numeros__tamanho-minimo');
const tamanhoMaximo = document.querySelector('.sorteio-numeros__tamanho-maximo');
const resultadoSorteio = document.querySelector('.sorteio-numeros__resultado');
const numeroSorteado = document.querySelector('.sorteio-numeros__saida');

//armazena o numero atual gerado
let novoNumero = '';

//armazena o historico de numeros em um array
let historicoNumeros = [];

//exibe inicialmente o valor do slider minimo
tamanhoMinimo.innerHTML = sliderMinimo.value;

console.log(tamanhoMinimo)

//exibe inicialmente o valor do slider maximo
tamanhoMaximo.innerHTML = sliderMaximo.value;

//atualiza o valor exibido - slider minimo
sliderMinimo.addEventListener('input', (e) => {
    tamanhoMinimo.innerHTML = e.target.value;
})

//atualiza o valor exibido - slider maximo
sliderMaximo.addEventListener('input', (e) => {
    tamanhoMaximo.innerHTML = e.target.value;
})

const sortearNumero = () => {
    let numero = '';
    let numeroMinimo = parseInt(sliderMinimo.value);
    let numeroMaximo = parseInt(sliderMaximo.value);

    // Gera um número aleatório entre o mínimo e o máximo
    numero = Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1)) + numeroMinimo;

    console.log(numero);
    //remove a classe 'hide' para exibir o container da senha gerada
    resultadoSorteio.classList.remove('hide');
    //insere a senha gerada no elemento html
    numeroSorteado.innerHTML = numero;
    //armazena o numero atual na variavel global
    novoNumero = numero;

    //historico

    historicoNumeros.unshift(numero);

    if (historicoNumeros.length > 5) {
       
        historicoNumeros.pop();
    }

        //atualiza a lista de historico na interface
        const historico = document.querySelector('.sorteio-numeros__historico');
        if (historico) {
        //remove a classe hide para exibir o historico
        historico.style.display = 'block';

        historico.querySelector('.sorteio-numeros__lista-historico').innerHTML = historicoNumeros
        .map(numeros => `<li class = "sorteio-numeros__item-lista">${numeros}</li>`)
        .join('');

    }
};

botaoSorteio.addEventListener('click', () => {
    console.log('clicou')
    sortearNumero();
});

const botaoLimpar = document.querySelector('.sorteio-numeros__button--clear');

const limparDados = () => {
 // Limpa o histórico de senhas
 historicoNumeros = [];
 novoNumero = '';

 // Reseta o slider para o valor inicial
 sliderMinimo.value = 1;
 sliderMinimo.innerHTML = '1';
 sliderMaximo.value = 1;
 sliderMaximo.innerHTML = '1';
}

botaoLimpar.addEventListener('click', limparDados);