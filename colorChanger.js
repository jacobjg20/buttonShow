var changer;
var counter = 0;
//var running = true;
document.getElementById('buttonStart').onclick = function(){
    this.innerHTML = "";
    changer  = setInterval(changeButton, 400);
};

function changeButton(){
  var number = randomHexNumber();
  document.getElementById("buttonStart").style.backgroundColor = "#" + number;
  document.getElementById("buttonStart").style.top = randomNumber(88) + "%";
  document.getElementById("buttonStart").style.right = randomNumber(98) + "%";
  document.getElementById("buttonStart").style.height = randomNumber(50) + "%";
  document.getElementById("buttonStart").style.width = randomNumber(50) + "%";
  adder();
}

function randomHexNumber(){
  var randomNumber = "";
  let hexSymbols = "0123456789abcdef";
  let hexSymbolsArray = hexSymbols.split("");
  for(let i=0; i < 6; i++){
      randomNumber += hexSymbolsArray[Math.round(Math.random() * 15)];
  }
  return randomNumber;
}

function randomNumber(max){
  let randomNumber = Math.round(Math.random() * max);
  return randomNumber;
}

function adder(){
    counter++;
    var string = counter.toString();
    console.log(string);
    document.getElementById("display").innerHTML = string;
}
