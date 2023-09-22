// print all even numbers from 0 - 10

// function printEvenNumbers (val) {
//     for (let i=0; i <=val; i++){
//         if(i % 2 === 0) {
//             console.log(i)
//         }
//     }
// }

// printEvenNumbers(30)


//meters to cm
//function defintion
// function metersToCms (value) {
//     return value*100
// }

//5 meter = ? cms
//invoke function

// console.log(metersToCms(5))
// console.log(metersToCms(10))
// console.log(metersToCms(7))

//Calculate the sum of numbers within an array
// function arrSum (arr) {
//     return arr.reduce((el, acc) => acc + el, 0 )
// }

// const array1 = [3, 4, 5, 10, 9, 6]

// console.log(arrSum(array1))

// const array1 = ['a', 'b', 'c'];

// function arrSum2 (arr) {
//     let sum = 0
//     for (const element of arr) {
//         sum += element
//     }
//     // for (i=0; i < arr.length; i++) {
//     //     sum += arr[i]
//     // }
//     return sum
// }
// console.log(arrSum2(array1))


// const obj1 = {key1: 'value1', key2: 'value2', key3: 'value3'}

// function loopObj (obj) {
//     for (const key in obj) {
//         console.log('key', key)
//         console.log('value', obj[key])
//     }
// }
// loopObj(obj1)


// Create a function that filters out negative numbers
// const array1 = [3, 4, -10, 5, 10, -90, 9, 6, -3, -4, -2]

// function filterNegativeNumbers (arr) {
//     // return arr.filter(num => num >=0)
//     let newArr = []
//     for (const num of arr) {
//         if(num >= 0) {
//             newArr.push(num)
//         }
//     }
//     return newArr
// }
// console.log(filterNegativeNumbers(array1))



//Return a Boolean if a number is divisible by 10
// const num1 = 38
// function divByTen (num) {
//     if(num % 10 === 0){
//         return true
//     }else {
//         return false
//     }
// }

// console.log(divByTen(num1))

//Return the number of vowels in an array

const wordArr = ["c", "A", "n", "O", "E", "I", "U"]

function numOfVowels(arr) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    for (const letter of arr) {
        if (vowels.includes(letter.toLowerCase())) {
            count++
        }
    }
    return count
}

console.log(numOfVowels(wordArr))


