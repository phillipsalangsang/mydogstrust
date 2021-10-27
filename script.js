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

for(let i=0;i<dogs.length;i++){

    let card = document.createElement("div")
    document.body.appendChild(card)
    card.classList.add("card")
    let dogName=document.createElement("h1")
    card.appendChild(dogName)

    let dogName=document.createElement("h2")
    card.appendChild(dogName)
    
    dogName.innerHTML=dogs[i].name

    dogName.innerHTML=dogs[i].name

}

