let trafficLightEl1 = document.querySelector('#trafficLight1')
let trafficLightEl2 = document.querySelector('#trafficLight2')
let trafficLightEl3 = document.querySelector('#trafficLight3')
let trafficLightEl = document.querySelector('#trafficLight')

function makeGreen() {
	trafficLightEl1.style.background = 'green'
	trafficLightEl2.style.background = 'black'
	trafficLightEl3.style.background = 'black'

	trafficLightEl.removeEventListener('click', makeGreen)
	trafficLightEl.addEventListener('click', makeYellow)
}

function makeYellow() {
	trafficLightEl1.style.background = 'black'
	trafficLightEl2.style.background = 'yellow'
	trafficLightEl3.style.background = 'black'

	trafficLightEl.removeEventListener('click', makeYellow)
	trafficLightEl.addEventListener('click', makeRed)
}

function makeRed() {
	trafficLightEl1.style.background = 'black'
	trafficLightEl2.style.background = 'black'
	trafficLightEl3.style.background = 'red'

	trafficLightEl.removeEventListener('click', makeRed)
	trafficLightEl.addEventListener('click', makeGreen)
}

trafficLightEl.addEventListener('click', makeGreen)
