let body=document.getElementsByTagName("body")[0]
body.style.backgroundColor="silver"
body.style.margin="0"

let title=document.getElementById("title")
title.style.color="green"

let fruitTitle=document.querySelectorAll("h3")
fruitTitle.forEach(item=>
    item.innerHTML=item.textContent.toUpperCase()
    )

let fruits=document.getElementById("fruList")

let newFruit=document.createElement("li")
newFruit.innerHTML="Oranges"
fruits.appendChild(newFruit)

let vegetables=document.getElementById("vegList")
let newVeg=document.createElement("li")
newVeg.innerHTML="Cabbages"
vegetables.appendChild(newVeg)

let image=document.createElement("img")
image.src="crop.png"
body.appendChild(image)
body.style.position="relative"
image.style.position="absolute"
image.style.width="37%"
image.style.top="0"
image.style.left="0"
image.style.opacity="0.7"
body.style.padding="5% 0 0 40%"
body.style.fontSize="20px"


let newContainer=document.createElement("article")

body.children.innerHTML.forEach(item=>
       console.log(item)
    // newContainer.appendChild(item) 
//    body.appendChild(newContainer)
    )
//    newContainer.appendChild(item) 
//    body.appendChild(newContainer)

//    console.log(newContainer)

