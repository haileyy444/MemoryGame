const gameContainer = document.getElementById("game");
let clickCount = 0;
let cardsUp = 0;
let clickOne = null;
let clickTwo = null; 
//IDK if i honestly had to do this but I did up here anyway just in case it gets confused what im talking about later

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    newDiv.classList.add("flipped");

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);
    
    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  event.target.classList.remove("flipped");
  const clickedCard = event.target;
  console.log("you just clicked", clickedCard);

  // let clickOne = event.target; //save the first click
  // let clickTwo = event.target2; //save the second click and compare
  
  //save click 1 and 2
  if(!clickOne)
    {
        clickOne = clickedCard;
        console.log("Click 1 color is " + clickOne.className);
    }
  else if (!clickTwo && clickedCard !== clickOne)
  {
    clickTwo = clickedCard;
    console.log("Click 2 color is " + clickTwo.className);
  }

//Once card 1 and 2 have been saved, compare
if (clickedCard === clickOne)
  {
    // console.log("Double clicked card"); // this doesnt work but keeps happening constantly6. But without it the code breaks at if(clickOne.classname == clickTwo....)
    return; //if you click on the same card twice, 
    
  }
else{
  if(clickOne.className == clickTwo.className)
  {
    //keep cards up
    cardsUp++//save cards up ++ variable so if (cardsup = 5 then you win screen)
    console.log("Match");
    clickOne = null;
    clickTwo = null;
  
    if(cardsUp == 5)
    {
      console.log("You Win")
    } 
  
  }
  else
  {
    console.log("Try Again");
    setTimeout(() => {
      clickOne.classList.add("flipped");
      clickTwo.classList.add("flipped");
      clickOne = null;
      clickTwo = null;
    }, 500);
  }
 }
}

// when the DOM loads
createDivsForColors(shuffledColors);
