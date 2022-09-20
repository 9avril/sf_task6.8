const btn = document.querySelector('.btn')

btn.addEventListener('click', promptF)

function promptF(evt) {
	let x = prompt('Введите текст для ссылки')
	btn.textContent = x
	evt.preventDefault()
}
