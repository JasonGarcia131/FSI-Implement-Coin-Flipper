// TODO: Declare any global variables we need
// This is for the page layout
let container = document.querySelector('.container')
let divButton = document.querySelector('.button-div')
divButton.style.width = '100%'
divButton.style.height = '60px'
divButton.style.border = '1px solid black'
divButton.style.textAlign = 'center'
container.append(divButton)
let header = document.querySelector('.header')
header.style.color = "orange"

let flip = document.querySelector('.flip-button')
// This is for visuals
flip.style.backgroundColor = 'linear-gradiant(to left, blue, white)'





let heads = document.querySelector('#penny-heads')
let tails = document.querySelector('#penny-tails')
tails.style.display = 'none'

let tailsCount = 0;
let headsCount = 0;
let numOfFlip = 0;
flip.addEventListener('click', function () {
    numOfFlip++
let pennyArr = ['heads', 'tails']
let random = pennyArr[Math.floor(Math.random()*pennyArr.length)]
console.log(random)

    if (random == 'tails'){
     heads.style.display = 'none'
     tails.style.display = ''
     tailsCount++
     console.log(tailsCount)
     document.querySelector('#tails').textContent = `${tailsCount}`
     
   }
   else { 
    heads.style.display = ''
    tails.style.display = 'none'
    headsCount++
    console.log(headsCount)
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

clear.addEventListener('click', function(){
    
    
    tailsCount = 0;
 headsCount = 0;
 numOfFlip = 0;
    document.querySelector('#heads-percent').textContent = '0%'
    document.querySelector('#tails-percent').textContent = '0%'
    document.querySelector('#heads').textContent = '0'
    document.querySelector('#tails').textContent = '0'


})







    // TODO: Add event listener and handler for flip and clear buttons


    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

