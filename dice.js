const getDice = (qtd, tam) => {
    const result = []
    for (let i = 1; i <= qtd; i++) {
        const random = Math.floor(Math.random() * tam) + 1
        result.push(random)
    }  
    return result.join("  ")
}

document.getElementById("roll").addEventListener("click", () => {
    const qtd = document.getElementById("field1").value;
    const tam = document.getElementById("field2").value;

    if (isNaN(qtd) || isNaN(tam) || qtd <= 0 || tam <= 0) {
        alert("Por favor, insira valores válidos para a quantidade e os lados.");
        return;
    }

    const result = getDice(qtd, tam);
    document.getElementById("field3").value = result; 
});

