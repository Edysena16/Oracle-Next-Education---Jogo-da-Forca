//Palavras que serão armazenadas
var palavras = [
  'AGUIA',
  'PATO',
  'OVELHA',
  'JAVALI',
  'CAPIVARA',
  'TARTARUGA',
  'GOLFINHO',
  'BALEIA',
  'COELHO',
  'RATO',
  'GATO',
  'CACHORRO',
  'GALINHA'
]
const palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)]
var erros = 0
var acertos = 0
var tentativas = []
//var letrasCorretas = []
//var letrasIncorretas = []

var caixaDeTexto = document.querySelector('.text-input')
var botaoAdicionarPalavra = document.querySelector('#nova-palavra')
botaoAdicionarPalavra.addEventListener('click', function () {
  validaNovaPalavra()
})

var botaoIniciar = document.querySelector('#iniciar-jogo')
botaoIniciar.addEventListener('click', function () {
  caixaDeTexto.value = 'Jogo iniciado! Não é possível adicionar'
  caixaDeTexto.disabled = true
  botaoAdicionarPalavra.disabled = true
  desenhaForca()
  desenhaTracos()
  document.onkeypress = validaTeclaPressionada
})

//valida nova palavra
function validaNovaPalavra() {
  if (!caixaDeTexto.value.match(/^[A-Z]*$/g)) {
    alert('Apenas letras maiúsculas, sem caracteres especiais ou números')
  } else if (caixaDeTexto.value.length > 14) {
    alert('Máximo 14 caracteres')
  } else if (caixaDeTexto.value.length < 4) {
    alert('Mínimo 04 caracteres')
  } else if (palavras.includes(caixaDeTexto.value)) {
    alert('Esta palavra já existe. Tente uma diferente')
  } else {
    adicionaNovaPalavra()
  }
}

function adicionaNovaPalavra() {
  palavras.push(caixaDeTexto.value)
  console.log(palavras)
  caixaDeTexto.value = 'Palavra adicionada! Comece o jogo'
  caixaDeTexto.disabled = true
  botaoAdicionarPalavra.disabled = true
}

function validaTeclaPressionada() {
  if (event.key.match(/[A-Z]/g)) {
    verificaTeclaPressionada()
  } else {
    alert('Utilize letra maiúscula, sem caracteres especiais ou números')
  }
}

//verificar tecla press

function verificaTeclaPressionada() {
  if (palavraSecreta.includes(event.key)) {
    desenhaLetraCorreta()
  } else {
    if (!tentativas.includes(event.key)) {
      tentativas.push(event.key)
      desenhaLetraErrada()
      desenhaBoneco(erros)
    }
  }
  verificaFimDeJogo()
}

function verificaFimDeJogo() {
  if (erros == 7) {
    desenhaGameOver()
    document.onkeypress = null
  } else if (acertos == palavraSecreta.length) {
    desenhaParabens()
    document.onkeypress = null
  }
}
