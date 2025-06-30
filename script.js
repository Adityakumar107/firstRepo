let plusKaro = document.querySelector(".plus")
let minusKaro = document.querySelector(".minus")
let quantity = document.querySelector(".Plus-minus")
let itemShow = document.querySelector(".box")
let addtocartBtn = document.querySelector("#btn")
let removetocartBtn = document.querySelector("#btn2")
var counter = 1
plusKaro.addEventListener("click",()=>{
     counter++
     quantity.innerHTML = counter
     
})

minusKaro.addEventListener("click",()=>{
       if(counter > 1){
        counter--
        quantity.innerHTML = counter
    }
    else{
        counter = 1
    }

})
addtocartBtn.addEventListener("click",()=>{
    itemShow.innerHTML=1
    itemShow.innerHTML=counter
    itemShow.style.opacity = 1
})
removetocartBtn.addEventListener("click",()=>{
itemShow.style.opacity = 0
})
