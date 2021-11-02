"use strict"

let dogs=[]

dogs.push({Name:"Luffy", Breed:"Poodle", Picture:"", Age: "3"})
dogs.push({Name:"Zoro", Breed:"Chihuahua", Picture:"", Age: "6"})
dogs.push({Name:"Sora", Breed:"French Bulldog", Picture:"", Age: "2"})
dogs.push({Name:"Knox", Breed:"Shih Tzu", Picture:"", Age: "7"})
dogs.push({Name:"Yuna", Breed:"Husky", Picture:"", Age: "9"})
dogs.push({Name:"Yuki", Breed:"Shiba Inu", Picture:"", Age: "4"})

for (let i=0; i<dogs.length; i++){

    let card = document.createElement("div") //Creates div
    document.body.appendChild(card)
    let dogName = document.createElement("h1") //Creates dogName in h1
    card.appendChild(dogName)
    dogName.style.backgroundColor = "beige"
    
    document.body.style.backgroundColor = "white" //Changes background colour
    card.style.backgroundColor = "cyan" //Changes colour of the card
    let dogBreed = document.createElement("h2")
    card.appendChild(dogBreed)

    let dogPicture = document.createElement("img")
    card.appendChild(dogPicture)
    dogPicture.src = dogs[i].Picture
    dogPicture.style.width = 500 + "px"
    dogPicture.style.height = "auto"

    let dogAge = document.createElement("p")
    card.appendChild(dogAge)
    dogAge.style.fontWeight = "bold"

    card.style.padding = 300 + "px"
    card.style.margin = 400 + "px"
    card.style.borderRadius = 100 + "px"

    let button = document.createElement("button")
    card.appendChild(button)

    card.style.fontFamily = "Helvetica"
    dogName.innerHTML = dogs[i].Name
    dogBreed.innerHTML = dogs[i].Breed
    dogPicture.innerHTML = dogs[i].Picture
    dogAge.innerHTML = dogs[i].Age
    button.innerHTML = "Adopt Now"
}



// "use strict"

// let dogs=[]

// dogs.push({Name:"Luffy", Breed:"Poodle", Picture:"", Age: "3"})
// dogs.push({Name:"Zoro", Breed:"Chihuahua", Picture:"", Age: "6"})
// dogs.push({Name:"Sora", Breed:"French Bulldog", Picture:"", Age: "2"})
// dogs.push({Name:"Knox", Breed:"Shih Tzu", Picture:"", Age: "7"})
// dogs.push({Name:"Yuna", Breed:"Husky", Picture:"", Age: "9"})
// dogs.push({Name:"Yuki", Breed:"Shiba Inu", Picture:"", Age: "4"})

// for (let i=0; i<dogs.length; i++){

//     let card = document.createElement("div") //Creates div
//     document.body.appendChild(card)
//     let dogName = document.createElement("h1") //Creates dogName in h1
//     card.appendChild(dogName)
//     dogName.style.backgroundColor = "beige"
    
//     document.body.style.backgroundColor = "white" //Changes background colour
//     card.style.backgroundColor = "cyan" //Changes colour of the card
//     let dogBreed = document.createElement("h2")
//     card.appendChild(dogBreed)

//     let dogPicture = document.createElement("img")
//     card.appendChild(dogPicture)
//     dogPicture.src = dogs[i].Picture
//     dogPicture.style.width = 500 + "px"
//     dogPicture.style.height = "auto"

//     let dogAge = document.createElement("p")
//     card.appendChild(dogAge)
//     dogAge.style.fontWeight = "bold"

//     card.style.padding = 300 + "px"
//     card.style.margin = 400 + "px"
//     card.style.borderRadius = 100 + "px"

//     let button = document.createElement("button")
//     card.appendChild(button)

//     card.style.fontFamily = "Helvetica"
//     dogName.innerHTML = dogs[i].Name
//     dogBreed.innerHTML = dogs[i].Breed
//     dogPicture.innerHTML = dogs[i].Picture
//     dogAge.innerHTML = dogs[i].Age
//     button.innerHTML = "Adopt Now"

//     class Dog{

//         constructor(name,age,gender,sexuality)
//     {
//         this.Name = name;
//         this.Breed = gender;
//         this.age = age;
//         this.sexuality = sexuality;
//     } 
// }

// let ID = new Dog("Rahid",19, "Male","");
// console.log(ID);

// let ID2 = new Dog("Louis",22, "Male", "");
// console.log(ID2);

// let ID3 = new Dog("Britney",20, "Female" , "");
// console.log(ID3);

// let ID4 = new Dog("Saied",20, "Male", "");
// console.log(ID4);

        

//     }
// }