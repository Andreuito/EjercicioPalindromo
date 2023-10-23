let string = "ána"
lowerWord = string.toLowerCase()

stringlist = lowerWord.split('')

var nombre = ''
var nombre2 = ''

lista = ['á', 'é', 'í', 'ó', 'ú']
lista2 = ['a', 'e', 'i', 'o', 'u']

for (let index = 0; index < stringlist.length; index++) {
    let char = stringlist[index] 
    let pos = lista.indexOf(char)

    if (char === 'á' || char === 'é' || char === 'í' || char === 'ó') {
        char = lista2[pos]
    }
    if (char === ' ') {
        nombre += ''
    } else {
        nombre += char
    }
} 

for (index = stringlist.length - 1; index >= 0; index--) {
    let char = stringlist[index]
    let pos = lista.indexOf(char)

    if (char === 'á' || char === 'é' || char === 'í' || char === 'ó' || char === 'ú') {
        nombre2 += lista2[pos]
    }
    else if (char === ' ') {
        nombre2 += ''
    } 
    else {
        nombre2 += char
    }
}

console.log(nombre)
console.log(nombre2)

if (nombre === nombre2) {
    console.log("es palindromo")
} else {
    console.log("no es palindromo")
}