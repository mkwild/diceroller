const numberOfDice = document.querySelector("#numDie")
const sizeOfDie = document.querySelector("#dieSize")
const rollButton = document.querySelector("#roll-button")
const reducer = (accumulator, currentValue) => accumulator + currentValue
const sumTotal = document.querySelector("#sum")
const revealButton = document.querySelector("#reveal-button")
const allRolls = document.querySelector("#all-rolls")
const resetButton = document.querySelector("#reset-button")
let dieRolls = []

rollButton.addEventListener('click', function() {

    dieRolls.splice(0, dieRolls.length)
    allRolls.innerHTML = ""

    let numDie = numberOfDice.value
    let numSides = sizeOfDie.value
    let index = 0

    if (numDie > 0) {
        if (numSides > 1) {
            while (index < numDie) {
                dieRolls.push((Math.floor(Math.random()*numSides))+1)
                index++
            }
            sumTotal.innerText = dieRolls.reduce(reducer)
        }
        else {
            sumTotal.innerText = "Number of Sides must be greater than 1"
        }
    }
    else {
        sumTotal.innerText = ""
    }


})

revealButton.addEventListener('click', function() {

    let numSides = sizeOfDie.value
    let dieSize = numSides.length

    for (let index = 0; index < dieRolls.length; index++) {
        allRolls.innerHTML = allRolls.innerHTML + "<li>" + dieRolls[index] + "</li>"
    }

})

resetButton.addEventListener('click', function() {
    
    numberOfDice.value = ""
    sizeOfDie.value ="6"
    dieRolls.splice(0, dieRolls.length)
    allRolls.innerHTML = ""
    sumTotal.innerText = ""

})