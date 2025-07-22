const randomNumber = Math.floor(Math.random() * 100) + 1
let lives = 15



function guessTheNumber (){
if (lives <= 0){
    alert(You've lost!);
    return;
}
const num = +prompt(Enter the number);

if ( num === randomNumber){
    alert(Наталко, Ви розумничка і вгадала!);
    return;
}else if (num > randomNumber){
    lives--
    alert(Наталко, правильне число менше. У Вас лишилося ${lives} спроб)
    guessTheNumber();
}else {
    lives--
    alert(Наталко, правильне число більше. У Вас лишилося ${lives} спроб)
    guessTheNumber();
}
}
console.log(randomNumber);

guessTheNumber();
