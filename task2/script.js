const consoleLog = document.querySelector('#consoleLog')

consoleLog.addEventListener('click', () => {
	alert('Метод для вывода сообщения в консоль.')
})

const alertExm = document.querySelector('#alert')

alertExm.addEventListener('click', () => {
	alert('Функция для вывода информации на экран пользователя.')
})

const promptExm = document.querySelector('#prompt')

promptExm.addEventListener('click', () => {
	let prom = prompt(
		'Функция, которая запрашивает у пользователя определенную информацию. Назовите свое имя : '
	)
	alert(`Приятно познакомиться, ${prom}.`)
})
