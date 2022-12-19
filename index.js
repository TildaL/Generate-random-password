const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

//const buttonEl = document.getElementById('button')

let passwordOne = document.getElementById('pswOne')
let passwordTwo = document.getElementById('pswTwo')

function getRandomCharacter () {
    let randomCharacter = Math.floor(Math.random()*characters.length)
    return characters[randomCharacter]
}
let passwordLength = 15

function generateRandomPassword() {
    let randomPassword = ''
    for (let i=0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()
    }
    return randomPassword
}



button.addEventListener('click', function(){
    passwordOne.textContent = generateRandomPassword()
    passwordTwo.textContent = generateRandomPassword()
})


console.log(getRandomCharacter())

console.log(generateRandomPassword())

