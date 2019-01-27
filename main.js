/*$(document).ready(function() {
    $(".card").delay(6000).show(1000);
});*/

/*$('.card').click( function(){
  $('.front, .back').toggleClass('back front');
});*/

/*var usedImages = {};
var usedImagesCount = 0;

function pickimg(){
var imagenumber = 3;
var randomnumber = Math.random();
var rand1 = Math.round( (imagenumber-1) * randomnumber) + 1;
images = new Array();
images[1] = "3.jpg";
images[2] = "4.jpg";
images[3] = "2.jpg";
var image = images[rand1];
if (!usedImages[rand1]){
        document.randimg.src = images[rand1];
        usedImages[rand1] = true;
        usedImagesCount++;
        if (usedImagesCount === images.length){
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        pickimg();
    }
}*/

// Turning images
var images = [];

(function() {
  generateCards()
})();

var cards = document.querySelectorAll('.card');

Array.from(cards).forEach(function(card) {
  card.addEventListener('click', function() {
    Array.from(card.querySelectorAll('.back, .front')).forEach(function(el) {
      ['back', 'front'].forEach(function(s) {
        el.classList.toggle(s)
      });
    });
  });
});

//Displaing different images on click
function cardImg(index) {
	var cardNewImg = randomIntFromInterval(2,10);
  if (images[index] !== undefined) 
  {
    images[index] = -1;
  }
	/*if (images.filter(function(element){
		return element == cardNewImg
	})) {
		if (cardNewImg==3) {
			cardNewImg
		} cardNewImg++
	}*/ 	
	while (images.indexOf(cardNewImg)!= -1){
		cardNewImg = randomIntFromInterval(2,11); 
	}  
	images[index] = cardNewImg;
}

function generateCards() {
  for (var i = 0; i < 3; i++) {
    cardImg(i);
  }
}

function getCard(index) {
  if(!images[index].valid) {
    cardImg(index)
  }
  document["randimg"+(index + 1)].src = "https://lp.rustaro.ru/wp-content/uploads/transformation/cards/" + images[index]+".jpg";
}

function randomIntFromInterval(min,max)
{
  return Math.floor(Math.random()*(max-min+1)+min);
}
function showStuff(id) {
    var x = document.getElementsByClassName('hidden');
	var i;
	for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
	}
	document.getElementById(id).style.display = 'block';
}