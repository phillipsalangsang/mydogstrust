let dogs=[] //creates the dogs array

function showDogs() //functions used to create the cards
{
    console.log(dogs)

    for(let i=0;i<dogs.length;i++)   //takes the length of the dogs array which changes depending on how many dogs i have created and then runs the code inside it that many times
    {
        //creates card ------
        let card = document.createElement("div")
        card.classList.add("card")          //gives the variable card a class which can be called in css
        document.getElementById("cardHolder").appendChild(card).style.padding = 50 + "px"; //adds padding to the div

        //creates dog name
        let dogName=document.createElement("h1")
        card.appendChild(dogName)
        dogName.innerHTML=dogs[i].name

        //create dog breed
        let dogBreed=document.createElement("h2")
        card.appendChild(dogBreed)
        dogBreed.innerHTML=dogs[i].breed

        //create dog age
        let dogAge=document.createElement("h3")
        card.appendChild(dogAge)
        dogAge.innerHTML=dogs[i].age

        //create dog image
        let dogPic=document.createElement("img")
        card.appendChild(dogPic)
        dogPic.src=dogs[i].picture
        dogPic.classList.add("dogpic")

        //create adopt button
        let adopt=document.createElement("button")
        adopt.innerHTML = "Adopt Now"
        card.appendChild(adopt)
        adopt.classList.add("adoptbutton")
        adopt.onclick = function clicked()
        {
            alert("sorry this dog has been adopted already")
        }
    }
}

function setupDogs() //fucntion to setup the dog instances and info
{
    dogs.push(new Dogs(this.name, this.breed,this.age))
    dogs.push(new Dogs("Luffy", "Chihuahua", "3" , "/IMG/chihuahua.jpg"))             
    dogs.push(new Dogs("Zoro", "French Bulldog", "4" , "/IMG/frenchbull.png"))       
    dogs.push(new Dogs("Sora", "Poodle", "5" , "/IMG/poodle.png"))                   
    dogs.push(new Dogs("Knox", "Shih Tzu", "2" , "/IMG/tzu.png"))   
    dogs.push(new Dogs("Yuna", "Husky", "2" , "/IMG/husky.png"))          
    dogs.push(new Dogs("Yuki", "Shiba Inu", "7" , "/IMG/shiba.jpg"))    
}

class Dogs{ //class for all the dog instances
   
   //properties
    name
    breed
    age 
    picture

    constructor(name,breed,age,picture)
    {
        this.name=name
        this.breed=breed
        this.age=age
        this.picture=picture
    }

    
}

setupDogs() //runs the function creating the dog instances
showDogs()  //runs the function creating the cards so the dogs will actually show