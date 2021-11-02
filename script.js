"use strict"

function showDogs(){

    for (let i=0;i<dogs.length;i++){
    
        let card = document.createElement("div") //Creates div
        card.classList.add("card")
        document.getElementById("cardholder").appendChild(card)
        document.body.appendChild(card)

        let dogName = document.createElement("h1") //Creates dogName in h1
        card.appendChild(dogName)
        dogName.style.backgroundColor = "yellow"
        
        document.body.style.backgroundColor = "yellow" //Changes background colour
        card.style.backgroundColor = "cyan" //Changes colour of the card
        let dogBreed = document.createElement("h2")
        card.appendChild(dogBreed)
    
        let dogPicture = document.createElement("img")
        dogPicture.classList.add("dogpicture")
        card.appendChild(dogPicture)
        dogPicture.src = dogs[i].picture
        dogPicture.style.width = 500 + "px"
        dogPicture.style.height = "auto"
    
        let dogAge = document.createElement("p")
        card.appendChild(dogAge)
        dogAge.style.fontWeight = "bold"
    
        card.style.padding = 300 + "px"
        card.style.margin = 400 + "px"
        card.style.borderRadius = 100 + "px"
    
        let button = document.createElement("button")
        button.classList.add ("button")
        card.appendChild(button)
    
        card.style.fontFamily = "Helvetica"
        dogName.innerHTML = dogs[i].name
        dogBreed.innerHTML = dogs[i].Breed
        dogPicture.innerHTML = dogs[i].picture
        dogAge.innerHTML = dogs[i].age

        button.innerHTML = "Adopt Now"
    }
}

class Dog {
    constructor (name, Breed, picture, age){ //Makes an instance of a class
        this.name = name
        this.Breed = Breed
        this.picture = picture
        this.age = age
    }
}

function setupDogs(){
    Dog.push(new Dog("Luffy", "Poodle", "https://toppng.com//public/uploads/preview/minature-poodle-toy-poodles-the-ultimate-toy-poodle-manual-toy-poodles-11563223838495aqiwsxy.png", "7 months"))
    Dog.push(new Dog("Zoro", "Chihuahua", "https://icon2.cleanpng.com/20180402/wge/kisspng-chihuahua-great-dane-dachshund-poodle-puppy-chihuahua-5ac20d4e822574.7068207815226668305331.jpg", "2 years old"))
    Dog.push (new Dog("Sora", "French Bulldog", "https://www.pikpng.com/pngl/m/50-505811_bulldog-puppy-no-background-french-bulldog-transparent-background.png", "6 months"))
    Dog.push (new Dog("Knox", "Shih Tzu", "https://toppng.com/uploads/preview/shih-tzu-shih-tzu-stock-11562983707akabdyxags.png", "1 Year old"))
    Dog.push (new Dog("Yuna", "Husky", "https://toppng.com//public/uploads/preview/husky-png-transparent-images-siberian-husky-puppy-11563390263ta7cgu4vna.png", "2 Months"))
    Dog.push (new Dog("Yukio", "Shiba Inu", "https://icon2.cleanpng.com/20171220/cbq/look-to-the-front-of-the-shiba-inu-5a3a5805d9e041.9250407715137730618924.jpg", "7 months"))
}

setupDogs()
showDogs() 



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