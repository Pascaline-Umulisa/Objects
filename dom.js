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
body.style.padding="5% 0 0 0"
body.style.fontSize="20px"
// body.style.backgroundImage='crop.png'

let container=document.querySelector("article")
container.style.margin="0 0 0 45%"
// container.style.backgroundImage="url(fruits.png)"
container.style.backgroundRepeat="no-repeat"
container.style.backgroundSize="cover"
container.style.backgroundBlendMode="darken"
container.style.width="30%"
container.style.padding="2%"
container.style.borderRadius="15px"
container.style.boxShadow="1px 1px 30px green"


