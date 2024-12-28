const getDice = (qtd, tam) => {
    const result = []
    for (let i = 1; i <= qtd; i++) {
        const random = Math.floor(Math.random() * tam) + 1
        result.push(random)
    }  
    return result.join(", ")
}

console.log(getDice(3,20))

