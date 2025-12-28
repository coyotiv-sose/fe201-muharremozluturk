// Create buttons with descriptive variable names and add Bootstrap classes

class App {
  counter = 0
  fontSize = 1

  incrementCounter() {
    this.counter++
  }
  decrementCounter() {
    this.counter--
  }
  resetCounter() {
    this.counter = 0
  }
  increaseFontSize() {
    this.fontSize++
  }
  decreaseFontSize() {
    this.fontSize--
  }
  resetFontSize() {
    this.fontSize = 1
  }

  template = `
  <button id="increaseFontSizeButton" class="btn btn-primary">Increase font size</button>
  <button id="decreaseFontSizeButton" class="btn btn-secondary">Decrease font size</button>
  <button id="resetButton" class="btn btn-danger">Reset font size</button>
  <p id="textDisplay" style="color: red; font-size: 1em;">Hello World!</p>
  <p id="counterDisplay">0</p>
  `
  render() {
    document.querySelector('#app').innerHTML = this.template
    this.bindEvents()
  }

  bindEvents() {
    const increaseFontSizeButton = document.getElementById('increaseFontSizeButton')
    const decreaseFontSizeButton = document.getElementById('decreaseFontSizeButton')
    const resetButton = document.getElementById('resetButton')

    increaseFontSizeButton.addEventListener('click', () => {
      this.increaseFontSize()
      this.incrementCounter()
      this.updateUI()
    })

    decreaseFontSizeButton.addEventListener('click', () => {
      this.decreaseFontSize()
      this.decrementCounter()
      this.updateUI()
    })

    resetButton.addEventListener('click', () => {
      this.resetFontSize()
      this.resetCounter()
      this.updateUI()
    })
  }

  updateUI() {
    textDisplay.style.fontSize = `${this.fontSize}em`
    counterDisplay.innerText = this.counter
  }

  constructor() {
    this.render()
  }
}

new App()
