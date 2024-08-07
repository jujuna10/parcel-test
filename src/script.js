const p = document.getElementById("p")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")

plus.addEventListener("click",() => {
    p.textContent = Number(p.textContent) + 1
})
minus.addEventListener("click",() => {
    p.textContent = Number(p.textContent) - 1
})