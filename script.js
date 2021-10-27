"use strict"

let dogs=[]

dogs.push({name:"Fluffy",Breed:"Poodle",age:5 ,picture:""})
dogs.push({name:"Otto",Breed:"Chihuahua",age:2,picture:""})
dogs.push({name:"Alfie",Breed:"French Bulldog",age:8,picture:""})
dogs.push({name:"Knox",Breed:"Husky",age:1,picture:""})
dogs.push({name:"Yuna",Breed:"Shih tzu",age:4,picture:""})
dogs.push({name:"Alfie",Breed:"Shiba Inu",age:3,picture:""})

//6 dogs - on 300*400 pixel cards (with nice padding and margins, and a nice background colour)
// An image for each dog
// Display Breed
// Add an age property for every dog
// add an 'Adopt Now' button on each dog

for (let i=0; i<dogs.length; i++){

    let card = document.createElement("div")
    document.body.appendChild(card)
    
    let dogName = document.createElement("h1")
    card.appendChild(dogName)
    document.body.style.backgroundColor = "yellow" //Changes background colour
    card.style.backgroundColor = "blue" //Changes colour of the card
    
    let dogBreed = document.createElement("h2")
    card.appendChild(dogBreed)
    
    let dogPicture = document.createElement("img")
    card.appendChild(dogPicture)
    dogPicture.src = dogs[i].Picture
    
    let dogAge = document.createElement("p")
    card.appendChild(dogAge)
    card.style.padding = 300 + "px"
    card.style.margin = 400 + "px"
    dogName.innerHTML = dogs[i].Name
    dogBreed.innerHTML = dogs[i].Breed
    dogPicture.innerHTML = dogs[i].Picture
    dogAge.innerHTML = dogs[i].Age
}

