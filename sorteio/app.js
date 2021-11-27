const minimo = document.querySelector('#entre').value
const maximo = document.querySelector('#entre2').value

function createRaffle(min, max) {

    function start() {
        addDom()
    }

    function numberRandom() {
        const number = Math.round(Math.random() * (max - min) + min)
        return number
    }

    function addDom() {
        const container = document.querySelector('.containerNumeroSorteado')
        const button = document.querySelector('button')
        const app = document.querySelector('.App')
        const quantidade = document.querySelector('#quantidade')
        
        button.addEventListener('click', () => {
            app.innerHTML = ''
            if (quantidade.value > 1) {
                for(let i = 0; i < quantidade.value; i++) {
                    const numbers = numberRandom()
                    container.innerHTML += `<h1>${numbers}</h1>`
                }
                return
            }
            const number = numberRandom()
            container.innerHTML = `
            <h1>${number}</h1>
            `
        })
    }

    return {
        start
    }
}

const raffle = createRaffle(minimo, maximo)

raffle.start()