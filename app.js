var COINS = 100
var BGX = new Audio ('Bgx/backsound.mp3')
var SFXSPIN = new Audio ('Sfx/Kuru-Spin (mp3cut.net).mp3')
var POPUP = document.getElementById('popup')
var TIPEPOPUP = document.getElementById('tipe')

function popup() {
    POPUP.style.display='none'
}

function PGone() {
    setTimeout(function(){POPUP.style.display='none'}, 4000)
}
popup()

function Coins() {
    document.getElementById('coin').innerHTML = COINS
}
Coins()

function coinspin() {
    COINS -= 1
    document.getElementById('coin').innerHTML = COINS
    if ( COINS == 0) {
        document.getElementById('Spin-btn').style.visibility="hidden"
    }
}

function spin() {
    
    var wheel = document.getElementById('wheel')
    var rotationTime = Math.random() * 2 + 2
    var spinBtn = document.getElementById('Spin-btn')

    wheel.style.transitionDuration = rotationTime + 's'
    wheel.classList.toggle('rotate')
    spinBtn.style.display="none"

    setTimeout(function(){ wheel.style.transitionDuration = '0.5s'}, rotationTime * 1000)
    setTimeout(function(){ spinBtn.style.display='inline-block'}, 2000)

    luckySpin()
    coinspin()
    Coins()
    sfx()
}

function luckySpin() {
    const data = ~~(Math.random() * 4000)

    document.getElementById('kode').innerHTML = data

    if ( data > 1000 && data < 2000) {
        COINS += 10
        POPUP.style.display='flex'
        TIPEPOPUP.innerHTML='YOUR BIG COIN 10+'
        PGone()
    }

}

//SFX SOUNDTRACK BG MUSIC
function sfx() {
    //Playing Sfx
    SFXSPIN.play()
}

//BGX
function bgx() {

    //Playing Bgx
    BGX.play()
}