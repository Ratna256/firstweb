var randomNumber1 =Math.floor(Math.random()*6)+1;

var randomDiceImage = "Dice"+ randomNumber1 +".png";

var randomImageSrc ="images/"+ randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSrc);

var randomNum2 =Math.floor(Math.random()*6)+1;

var randomImgScr = "images/Dice"+randomNum2+".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImgScr);

if(randomNumber1>randomNum2){
    document.querySelector("h1").innerHTML="Player 1 Won";
}
else if(randomNumber1==randomNum2){
    document.querySelector("h1").innerHTML="Draw";
}
else{
    document.querySelector("h1").innerHTML="Player 2 won";
}