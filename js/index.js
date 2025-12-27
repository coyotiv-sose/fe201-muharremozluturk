// Create buttons with descriptive variable names and add Bootstrap classes

class App {}

const increaseFontSizeButton = document.createElement('button')
increaseFontSizeButton.innerText = 'Increase font size'
increaseFontSizeButton.className = 'btn btn-primary'

const decreaseFontSizeButton = document.createElement('button')
decreaseFontSizeButton.innerText = 'Decrease font size'
decreaseFontSizeButton.className = 'btn btn-secondary'

const resetButton = document.createElement('button')
resetButton.innerText = 'Reset font size'
resetButton.className = 'btn btn-danger'

// Create and initialize the counter display
const counterDisplay = document.createElement('p')
counterDisplay.innerText = '0'

// Create and style the <p> element for text display
const p = document.createElement('p')
p.innerText = 'Hello World!'
p.style.color = 'red'

// Initialize variables for font size and counter
let fontSize = 1
let counter = 0

// Create a function to incerease the font size
function increaseFontSize() {
  fontSize = fontSize + 1
  p.style.fontSize = `${fontSize}em`
}

// Create a function to decerease the font size
function decreaseFontSize() {
  fontSize = fontSize - 1
  p.style.fontSize = `${fontSize}em`
}

// Create a function to reset the font size
function resetFontSize() {
  fontSize = 1
  p.style.fontSize = `1em`
}

// Create a function to increase the counter
function increaseCounter() {
  counter = counter + 1
  counterDisplay.innerText = counter
}

// Create a function to decrease the counter
function decreaseCounter() {
  counter = counter - 1
  counterDisplay.innerText = counter
}

// Create a function to reset the counter
function resetCounter() {
  counter = 0
  counterDisplay.innerText = counter
}

// Append elements to the document body
document.body.appendChild(increaseFontSizeButton)
document.body.appendChild(decreaseFontSizeButton)
document.body.appendChild(resetButton)
document.body.appendChild(p)
document.body.appendChild(counterDisplay)

// Add event listeners
increaseFontSizeButton.addEventListener('click', () => {
  increaseFontSize() // Increase font size
  increaseCounter() // Increase counter
})

decreaseFontSizeButton.addEventListener('click', () => {
  decreaseFontSize() // Decrease font size
  decreaseCounter() // Decrease counter
})

resetButton.addEventListener('click', () => {
  resetFontSize() // Reset font size to default
  resetCounter() // Reset counter to default
})
