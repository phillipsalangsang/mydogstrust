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
    Dog.push(new Dog("Fluffy", "Poodle", "https://1.bp.blogspot.com/-HGHeu9tMAVk/X38fEMeFTAI/AAAAAAAABpU/DlZnIO_c7q8b98uUYSX02wEsgOpib7xzQCLcBGAsYHQ/s616/toy-poodle-puppy-price-in-india.png", "7 months"))
    Dog.push(new Dog("Otto", "Chihuahua", "https://i.pinimg.com/originals/cc/66/5b/cc665b8cc5fd3a0f416c37c437f10a9d.jpg", "2 years old"))
    Dog.push (new Dog("Alfie", "French Bulldog", "https://www.lovelyhomefenchbulldogs.com/wp-content/uploads/2020/10/e31d4008-3462-43d4-a45d-cf05aa3421d0.jpg", "6 months"))
    Dog.push (new Dog("Ruby", "Pomeranian", "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F03%2F12%2Fpomeranian-white-puppy-921029690-2000.jpg", "3 months"))
    Dog.push (new Dog("Sparkie", "Golden Retriever", "https://i.pinimg.com/originals/59/df/de/59dfde6234ce23109248065208283059.jpg", "1 year old"))
    Dog.push (new Dog("Koko", "Jack Russell", "https://i.pinimg.com/originals/b5/ae/79/b5ae797a411df740484ededb704a33cd.jpg", "3 months"))
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