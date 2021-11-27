function todoList() {

    function criaTask() {
        const input = document.querySelector('input')
        const button = document.querySelector('button')

        button.addEventListener('click', () => {
            const inputValue = input.value
            addDom(inputValue)
        })
    }

    function addDom(li) {
        const container = document.querySelector('.container')

        container.innerHTML += `
        <li class="taks">${li}
        <button class="deletar">Deletar</button>
        <button class="buttonFeito">Marcar como lida</button>
        </li>
        `
        clicks()
    }

    function clicks() {
        document.addEventListener('click', e => {
            const el = e.target
            if (el.classList.contains('deletar')) el.parentElement.remove()
            if (el.classList.contains('buttonFeito')) el.parentElement.classList.toggle('feito')
        })
    }

    return {
        criaTask
    }
}

const todo1 = todoList()

todo1.criaTask()