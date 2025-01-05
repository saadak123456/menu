let x = document.querySelector("#btnMenu")
let y = document.querySelector("#btnClose")
let z = document.querySelector("#links")

x.addEventListener("click", function(){
    z.style.display = "flex"
    x.style.display = "none"
    y.style.display = "flex"
})

y.addEventListener("click", function(){
    x.style.display = "flex"
    y.style.display = "none"
    z.style.display = "none"
     
})