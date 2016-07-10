const remote = require('electron').remote
const main = remote.require('./main.js')

let count = document.getElementById('count')

function addCount(delta) {
	count.textContent = Number(count.textContent) + delta
}


let incButton = document.createElement('button')
incButton.textContent = 'Increment'

incButton.addEventListener('click', () => {
	addCount(1)
	console.log(count)
}, false)

let decButton = document.createElement('button')
decButton.textContent = 'Decrement'

decButton.addEventListener('click', () => {
	addCount(-1)
	console.log(count)
}, false)


document.body.appendChild(incButton)
document.body.appendChild(decButton)