const inputField = document.querySelector("#input")
const allB = document.querySelectorAll(".b")
let symbole = true
let inputValue = ""
allB.forEach((b) => {
    b.addEventListener("click", (e) => {
        if (e.target.classList[2] == "AC") {
            inputValue = ""
            inputField.value = inputValue
        }
        else if (e.target.classList[2] == "C") {
            inputValue = inputValue.substring(0, inputValue.length - 1)
            inputField.value = inputValue
        }
        else if (e.target.classList[0] == "fa-solid") {
            if (e.target.classList[1] == "fa-divide" && symbole == true) {
                inputValue += "/"
                inputField.value = inputValue
                symbole = false
            }
            else if (e.target.classList[1] == "fa-xmark" && symbole == true) {
                inputValue += "*"
                inputField.value = inputValue
                symbole = false
            }
            else if (e.target.classList[1] == "fa-minus" && symbole == true) {
                inputValue += "-"
                inputField.value = inputValue
                symbole = false
            }
            else if (e.target.classList[1] == "fa-plus" && symbole == true) {
                inputValue += "+"
                inputField.value = inputValue
                symbole = false
            }
            else if (e.target.classList[1] == "fa-equals" && symbole == true) {
                inputValue = eval(inputValue)
                inputField.value = inputValue
                symbole = true
            }
        } else {
            symbole = true
            inputValue += e.target.innerText
            inputField.value = inputValue
        }
    })
})
