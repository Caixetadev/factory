const seila = {
    oi() {
        console.log(`Olá, ${this.name}`)
    }
}

const proto = {...seila}

function contador(name) {
    const obj = Object.create(proto)
    obj.name = name
    return obj
}

const cs = contador('Rafael')
const cs2 = contador('Jose')

console.log(cs, cs2)