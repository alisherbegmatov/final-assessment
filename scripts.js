// INPUTS
const inputSize = document.querySelector('#input-size')
const selectFont = document.querySelector('#select-font')
const inputColor = document.querySelector('#input-color')
const enterText = document.querySelector('#enter-text')
const inputBGColor = document.querySelector('#input-bg-color')

// OUTPUTS
const display = document.querySelector('#display')
const showSize = document.querySelector('#show-size')
const showFont = document.querySelector('#show-font')
const showColor = document.querySelector('#show-color')
const showBGColor = document.querySelector('#show-bg-color')

// LISTENERS
inputSize.addEventListener('input', handleInput)
selectFont.addEventListener('input', handleInput)
inputColor.addEventListener('input', handleInput)
enterText.addEventListener('input', handleInput)
inputBGColor.addEventListener('input', handleInput)

// FUNCTION IN LISTENER
function handleInput() {
  const fontSize = inputSize.value
  const fontFamily = selectFont.value
  const color = inputColor.value
  const backgroundColor = inputBGColor.value
  const text = enterText.value

  display.style.fontSize = fontSize + 'px'
  display.style.fontFamily = fontFamily
  display.style.color = color
  display.style.backgroundColor = backgroundColor
  display.textContent = text

  showSize.innerHTML = fontSize
  showFont.innerHTML = fontFamily
  showColor.innerHTML = color
  showBGColor.innerHTML = backgroundColor

}
