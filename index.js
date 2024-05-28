const queue = []
let objectQueue = {}

const generatorButton = document.querySelector("#generator")
const numbers = document.querySelector("#number")
const numberToDelete = document.querySelector("#number_to_delete")
const delbtn = document.querySelector("#delete")
const showLengthBtn = document.querySelector("#showLength")
const lengthH2 = document.querySelector("#length")

generatorButton.addEventListener("click", () => {
    const getRandomNumber = (min, max) => {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min)) + min
    }
    const randomNumber = getRandomNumber(0, 100)
    // console.log(randomNumber)

    add(randomNumber, queue)
    objectQueue = Object.assign({}, queue)
    // console.log(objectQueue)
    // console.log(queue)
    numbers.innerHTML = queue
});

delbtn.addEventListener("click", () => {
    delbtn.addEventListener("click", () => {
        const number = parseInt(numberToDelete.value);
        if (isNaN(number)) return;
        const originalLength = queue.length;
        const occurrences = queue.reduce((acc, currentNumberInarray) => currentNumberInarray === number ? acc + 1 : acc, 0);
        if (occurrences > 1) {
            alert("The number appears more than once in the queue. Please specify which occurrence to delete.");
        } else {
            const newQueue = queue.filter(currentNumberInarray => currentNumberInarray !== number);
            if (newQueue.length === originalLength) {
                alert("The number you're trying to delete is not in the queue.");
            } else {
                objectQueue = Object.assign({}, newQueue);
                console.log(objectQueue);
                numbers.innerHTML = newQueue;
            }
        }
    });

})

showLengthBtn.addEventListener("click", () => {
    lengthH2.innerHTML = queue.length
})

function add(number, array) {
    array.splice(findLocation(number, array), 0, number);
    return array
}

function findLocation(number, array, start, end) {
    start = start || 0;
    end = end || array.length
    for (let i = start; i < end; i++) {
        if (array[i] > number)
            return i;
    }
    return end;
}

const quantity = 15;

for (let i = 1; i <= quantity; i++) {
    const firefly = document.createElement('div');
    firefly.classList.add('firefly');
    document.body.appendChild(firefly);
}
