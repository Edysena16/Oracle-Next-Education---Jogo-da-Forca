var tela = document.querySelector('canvas')
var pincel = tela.getContext('2d')
pincel.lineWidth = 3
pincel.font = '39px Arial'
pincel.strokeStyle = 'white'
pincel.fillStyle = 'white'

function desenhaParabens() {
  pincel.fillText('Você venceu', 670, 60)
  pincel.fillText('Parabéns!', 670, 120)
}

function desenhaGameOver() {
  pincel.fillText('Game Over! A palavra era:', 670, 60)
  pincel.fillText(palavraSecreta, 670, 120)
}

function desenhaLetraErrada() {
  for (var i = 0; i < 7; i++) {
    if (tentativas[i] == event.key) {
      pincel.fillText(event.key, 670 + 50 * i, 220)
      erros++
    }
  }
}

function desenhaLetraCorreta() {
  for (var i = 0; i < palavraSecreta.length; i++) {
    if (palavraSecreta[i] == event.key) {
      pincel.fillText(event.key, 235 + 69 * i, 455)
      acertos++
    }
  }
}

function desenhaTracos() {
  for (var i = 0; i < palavraSecreta.length; i++) {
    pincel.moveTo(220 + 70 * i, 460)
    pincel.lineTo(270 + 70 * i, 460)
    pincel.stroke()
  }
}

function desenhaForca() {
  pincel.beginPath()
  pincel.moveTo(20, 460)
  pincel.lineTo(95, 440)
  pincel.lineTo(170, 460)
  pincel.closePath()
  pincel.stroke()

  pincel.beginPath()
  pincel.moveTo(95, 440)
  pincel.lineTo(95, 10)
  pincel.stroke()

  pincel.beginPath()
  pincel.moveTo(92, 10)
  pincel.lineTo(400, 10)
  pincel.stroke()

  pincel.beginPath()
  pincel.moveTo(400, 7)
  pincel.lineTo(400, 50)
  pincel.stroke()
}

function desenhaCabeca() {
  pincel.beginPath()
  pincel.arc(400, 87, 35, 0, 2 * Math.PI)
  pincel.stroke()
}

function desenhaCorpo() {
  pincel.beginPath()
  pincel.moveTo(400, 124)
  pincel.lineTo(400, 280)
  pincel.stroke()
}

function desenhaPernaDireita() {
  pincel.beginPath()
  pincel.moveTo(400, 279)
  pincel.lineTo(460, 360)
  pincel.stroke()
}

function desenhaPernaEsquerda() {
  pincel.beginPath()
  pincel.moveTo(400, 280)
  pincel.lineTo(340, 360)
  pincel.stroke()
}

function desenhaBracoDireito() {
  pincel.beginPath()
  pincel.moveTo(400, 180)
  pincel.lineTo(470, 120)
  pincel.stroke()
}

function desenhaBracoEsquerdo() {
  pincel.beginPath()
  pincel.moveTo(400, 180)
  pincel.lineTo(330, 120)
  pincel.stroke()
}

function desenhaOlhos() {
  pincel.fillText('x x', 375, 85)
}

function desenhaBoneco(erros) {
  switch (erros) {
    case 1:
      desenhaCabeca()
      break
    case 2:
      desenhaCorpo()
      break
    case 3:
      desenhaPernaDireita()
      break
    case 4:
      desenhaPernaEsquerda()
      break
    case 5:
      desenhaBracoDireito()
      break
    case 6:
      desenhaBracoEsquerdo()
      break
    case 7:
      desenhaOlhos()
      break
  }
}

/*
function stickman() {
  desenhaCabeca()
  desenhaCorpo()
  desenhaBracoD()
  desenhaBracoE()
  desenhaPernaD()
  desenhaPernaE()
}
function desenhaBase() {
  ctx.beginPath()
  ctx.moveTo(100, 320)
  //ctx.lineTo(200, 210)
  ctx.lineTo(50, 350)
  ctx.lineTo(150, 350)
  ctx.lineTo(100, 320)
  ctx.lineTo(95, 20)
  ctx.lineTo(200, 20)
  ctx.lineTo(200, 50)
  ctx.stroke()
}
function desenhaCabeca() {
  ctx.beginPath()
  ctx.arc(200, 50, 23, 0, Math.PI * 2)
  ctx.fill()
  ctx.font = '14px verdana serif'
  ctx.fillStyle = 'black'
  ctx.fillText('X X', 188, 50)
}

function desenhaCorpo() {
  ctx.beginPath()
  ctx.moveTo(200, 70)
  //ctx.lineTo(200, 210)
  ctx.lineTo(200, 200)
  ctx.stroke()
}

function desenhaBracoD() {
  ctx.beginPath()
  ctx.moveTo(200, 70)
  //ctx.moveTo(130, 115)
  //ctx.lineTo(200, 210)
  ctx.lineTo(150, 130)
  ctx.stroke()
}
function desenhaBracoE() {
  ctx.beginPath()
  ctx.moveTo(200, 70)
  ctx.lineTo(250, 130)
  ctx.stroke()
}
function desenhaPernaD() {
  ctx.beginPath()
  ctx.moveTo(200, 200)
  ctx.lineTo(150, 250)
  ctx.stroke()
}
function desenhaPernaE() {
  ctx.beginPath()
  ctx.moveTo(200, 200)
  ctx.lineTo(250, 250)
  ctx.stroke()
}


//desenhaCabeca()
//desenhaCorpo()
//desenhaBracoD()
//desenhaBracoE()
//desenhaPernaD()
//desenhaPernaE()
//stickman()
//desenhaBase()
*/
