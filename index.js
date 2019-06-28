const words = ['I', 'want', 'to', 'sleep', 'while', 'study', 'array', 'object', 'today']
words.splice(3, 2)
words.forEach(word => {
    console.log(word)
    alert(word)
})
console.log(words);

// add number 
const numbers = [1, 2, 3]
console.log(numbers.concat([4, 5, 12]))

const numbersSort = [1, 2, 3, 4, 5, 12]
numbersSort.sort()
console.log(numbersSort)

// how to sort a number by count usual
const compareNumeric = (a, b) => {
    if (a > b) return 1
    if (a == b) return 0
    if (a < b) return -1
}
numbersSort.sort(compareNumeric)
console.log(numbersSort)

numbersSort.reverse()
console.log(numbersSort);

const charactersString = 'Zaky, Abdullah, Syahab'
const charactersArray = charactersString.split(', ', 2)

for (let character of charactersArray) {
    console.log(`NAMBAHIN APA YA?? ${character}`)
}

console.log(charactersString.indexOf('Zaky'))

const users = [{
        id: 1,
        name: 'Alpha'
    },
    {
        id: 2,
        name: 'Betty'
    },
    {
        id: 3,
        name: 'Gamma'
    },
    {
        id: 3,
        name: 'Zaky'
    }
]

// Find the one with name
const user = users.find(item => item.name === 'Gamma')
console.log(user)
console.log(user.id) 

const userIndex = users.findIndex(item => item.id === 3)
console.log(userIndex);
console.log(userIndex.name)
