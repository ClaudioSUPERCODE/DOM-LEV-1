
// LEV-1_2

// const example = document.getElementsByClassName("example")

// console.log("Hello")

// let myFunction = () => {
//     for (let index = 0; index < example.length; index++) {
//         example[index].style.backgroundColor = "black"
//         example[4].style.color = "white"
//         console.log("xxx")
//     }
// }

// LEV-1_5

// const clickMe = document.getElementById("clickMe")
// let number = 0



// clickMe.addEventListener("click", () => {
//     clickMe.innerHTML = "Click me: " + number++
// })

// LEV-1_6

const mySelect = document.getElementById("my-select")
const output = document.getElementById("option-selected")

mySelect.addEventListener("change", (event) => {
    console.log(event.target.value)
    output.innerHTML = "Sie haben ausgewählt "+ event.target.value
})


