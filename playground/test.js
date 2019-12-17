const arr = ['a', 'b', 'c']

const varibale = 'a'

const newArr = arr.filter((o) => {
    return o !== varibale
})

console.log(newArr)