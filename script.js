const inputField = document.querySelector("#inputF")
const allB = document.querySelectorAll(".b")
let symbole = true
allB.forEach((b) => {
    b.addEventListener("click", (e) => {
        if (e.target.classList[0] == "fa-solid") {
            if (e.target.classList[1] == "fa-divide" && symbole == true) {
                inputField.value += "/"
                symbole = false
            }
            else if (e.target.classList[1] == "fa-xmark" && symbole == true) {
                let xSentax = x
                inputField.value += `${xSentax}`
                symbole = false
            }
            else if (e.target.classList[1] == "fa-minus" && symbole == true) {
                inputField.value += " - "
                symbole = false
            }
            else if (e.target.classList[1] == "fa-plus" && symbole == true) {
                inputField.value += "+"
                symbole = false
            }
            else if (e.target.classList[1] == "fa-equals" && symbole == true) {
                eval = eval(inputValue)
                console.log(eval);
                symbole = false
            }
        } else {
            symbole = true
            inputField.value += e.target.innerText
            inputValue = inputField.value
        }
    })
})
