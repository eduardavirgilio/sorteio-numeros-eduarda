//pegar os elementos do html
const sliderMinimo = document.querySelector ('.sorteio-numeros__slider-minimo')
const sliderMaximo = document.querySelector ('.sorteio-numeros__slider-maximo')
const botaoSorteio = document.querySelector ('.sorteio-numeros__button')
const tamanhoMinimo = document.querySelector ('.sorteio-numeros__tamanho-minimo')
const tamanhoMaximo = document.querySelector ('.sorteio-numeros__tamanho-maximo')
const resultadoSorteio = document.querySelector ('.sorteio-numeros__resultado')
const numeroSorteado = document.querySelector ('.sorteio-numeros__saida')

//armazena o numero atual gerado
let novoNumero = '';

//armazena o historico de numeros em um array
let historicoNumeros = [];

//exibe inicialmente o valor do slider minimo
tamanhoMinimo.innerHTML = sliderMinimo.value;

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

};