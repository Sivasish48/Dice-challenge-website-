let randomNumber1=Math.floor(Math.random()*6)+1;

let randomImage1="dice"+ randomNumber1 + ".png";

let randomSourceOfImage1= "images/"+ randomImage1;

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomSourceOfImage1);

let randomNumber2= Math.floor(Math.random()*6)+1;

let randomImage2="dice"+ randomNumber2 + ".png";

let randomSourceOfImage2 = "images/"+ randomImage2;

let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomSourceOfImage2) ;

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 wins🚩";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML= "Player2 wins🚩";
} else{
    document.querySelector("h1").innerHTML="Draw!";
}