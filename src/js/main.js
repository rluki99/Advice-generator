const adviceId = document.querySelector('.advice-id')
const quote = document.querySelector('.advice')
const diceBtn = document.querySelector('.generator__btn')

const rollQuote = () => {
    fetch(`https://api.adviceslip.com/advice`)
	.then((res) => res.json())
    .then(data => {
        const adviceRes = data.slip.advice
        const idRes = data.slip.id
        quote.textContent = adviceRes
        adviceId.textContent = idRes
    })
}

diceBtn.addEventListener('click', rollQuote)
