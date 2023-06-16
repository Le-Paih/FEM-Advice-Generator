const adviceId = document.querySelector('.advice-id');
const adviceText = document.querySelector('.span-quote');
const adviceBtn = document.querySelector('.dice');
const url = 'https://api.adviceslip.com/advice'

async function getAdvice() {
    const res = await fetch(url);
    const {slip: {id, advice}} = await res.json();
    adviceId.innerText = id;
    adviceText.innerText = advice;
}
getAdvice();
adviceBtn.addEventListener('click', getAdvice)