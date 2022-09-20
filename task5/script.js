const inp = document.querySelector('input')
const duplicate = document.querySelector('#duplicateField')
const btn = document.querySelector('#btn')

inp.addEventListener('keyup', function (e) {
	duplicate.textContent = e.target.value
})

btn.addEventListener('click', event => {
	event.preventDefault()
	console.log(inp.value)
	inp.value = ' '
	duplicate.innerHTML = ' '
})
