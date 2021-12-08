// TODO: Declare any global variables we need
let container = document.querySelector('.container')
let divButton = document.querySelector('.button-div')
//css styling
divButton.style.width = '100%'
divButton.style.height = '60px'
divButton.style.border = '1px solid black'
divButton.style.textAlign = 'center'
container.append(divButton)
let header = document.querySelector('.header')
header.style.color = "orange"


let heads = document.querySelector('#penny-heads')
let tails = document.querySelector('#penny-tails')
tails.style.display = 'none'

let tailsCount = 0;
let headsCount = 0;
let numOfFlip = 0;

let flip = document.querySelector('.flip-button')
// This is for visuals
flip.style.backgroundImage = 'linear-gradient(220deg, lightblue, white)'

//Code for buttons begin
flip.addEventListener('click', function () {
    numOfFlip++
    let pennyArr = ['heads', 'tails']
    let random = pennyArr[Math.floor(Math.random()*pennyArr.length)]

    if (random == 'tails'){
     heads.style.display = 'none'
     tails.style.display = ''
     document.querySelector('.header').textContent = 'You Flipped Tails!'
     tailsCount++
     document.querySelector('#tails').textContent = `${tailsCount}`
     
   }
   else { 
    heads.style.display = ''
    tails.style.display = 'none'
    document.querySelector('.header').textContent = 'You Flipped Heads!'
    headsCount++
    document.querySelector('#heads').textContent = `${headsCount}`
   }

   let percentTails = Math.round((tailsCount/numOfFlip)*100)
    let percentHeads = Math.round((headsCount/numOfFlip)*100)

  let headPer = document.querySelector('#heads-percent')
  let tailsPer = document.querySelector('#tails-percent')

  headPer.textContent = `${percentHeads}%`
  tailsPer.textContent = `${percentTails}%`
})

let clear = document.querySelector(".clear-button")
clear.style.backgroundImage = 'linear-gradient(220deg, gold, white)'

clear.addEventListener('click', function(){
        
tailsCount = 0;
 headsCount = 0;
 numOfFlip = 0;
    document.querySelector('#heads-percent').textContent = '0%'
    document.querySelector('#tails-percent').textContent = '0%'
    document.querySelector('#heads').textContent = '0'
    document.querySelector('#tails').textContent = '0'

})







