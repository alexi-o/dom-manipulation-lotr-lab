console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1
  // create a section tag with an id of middle-earth
  // inside, add each land as an article tag
function makeMiddleEarth() {
  var middleEarth = document.createElement("section");
  middleEarth.setAttribute("id", "middle-earth");
  for (i = 0; i < lands.length; i++){
    var landsNames = document.createElement("article");
    landsNames.innerHTML = "<h1>" + lands[i];
    middleEarth.appendChild(landsNames);
    document.body.appendChild(middleEarth);
}
};
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body

makeMiddleEarth();

// Part 2
var hobbitList = document.createElement("ul");

function makeHobbits() {
    for (i = 0; i < hobbits.length; i++) {
      var hobbitsNames = document.createElement("li");
      hobbitsNames.innerHTML = hobbits[i];
      hobbitsNames.setAttribute("class", "hobbits");
      hobbitList.appendChild(hobbitsNames);
    }
    var shire = document.querySelector("article");
    shire.appendChild(hobbitList);
  }
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit

makeHobbits();
// Part 3

function keepItSecretKeepItSafe() {
  var ringDiv = document.createElement("div");
  ringDiv.setAttribute("id", "the-ring");
  ringDiv.setAttribute("class", "magic-imbued-jewelry");
  ringDiv.addEventListener('click', function() {
    nazgulScreech();
  })
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  var ringFrodo = document.querySelector("li");
  ringFrodo.appendChild(ringDiv);
}

  keepItSecretKeepItSafe();

// Part 4

var rivendell = document.querySelectorAll("h1")[1];
var buddyList = document.createElement("ul");

function makeBuddies() {
  var asideTag = document.createElement("aside");

    for (i = 0; i < buddies.length; i++) {
      var buddyNames = document.createElement('li');
      buddyNames.innerHTML = buddies[i];
      buddyList.appendChild(buddyNames);
    }
  
  asideTag.appendChild(buddyList);  
  rivendell.appendChild(asideTag);
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
}
makeBuddies();
// Part 5

function beautifulStranger() {
  var aragorn = document.querySelectorAll("li")[7];
  aragorn.innerHTML = "Aragorn";
  // change the 'Strider' textnode to 'Aragorn'
}
beautifulStranger();

// Part 6
function leaveTheShire() {
  rivendell.appendChild(hobbitList);
  // assemble the hobbits and move them to Rivendell
}
leaveTheShire();

// Part 7
var fellowship = document.createElement('div');
  fellowship.appendChild(buddyList);
  fellowship.appendChild(hobbitList);
  rivendell.appendChild(fellowship);

var forge = fellowship.querySelectorAll('li');

function forgeTheFellowShip() {
  for (var i=0; i<forge.length; i++){
    alert((forge[i].innerText) + " has joined the fellowship!");
 }
  // create a new div called 'the-fellowship' within rivendell
  // after each character is added make an alert that they have joined your party
 
  // add each hobbit and buddy one at a time to 'the-fellowship'
}

forgeTheFellowShip();
// Part 8


function theBalrog() {
  var gandalfWhite = document.querySelectorAll("li")[0];
    gandalfWhite.innerHTML = "Gandalf the White";
    gandalfWhite.style.background = "white";
    gandalfWhite.style.border ="thick solid grey";
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}
theBalrog();

// Part 9

function hornOfGondor() {
  alert("The horn of Gondor has been blown!!");
  var deadBean = document.querySelectorAll("li")[4];
    deadBean.style.textDecoration = "line-through";
    deadBean.remove();
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}

hornOfGondor();
// Part 10
var mordor = document.querySelectorAll("h1")[2];
var mountDoom = document.createElement('div');
mountDoom.setAttribute("id", "mount-doom");

function itsDangerousToGoAlone(){
  var frodoModor = document.querySelectorAll("li")[4];
  var samModor = document.querySelectorAll("li")[5];
  mordor.appendChild(frodoModor);
  mordor.appendChild(samModor);
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}
itsDangerousToGoAlone();

// Part 11

function weWantsIt() {
    var gollum = document.createElement('div');
    mordor.appendChild(gollum);
    gollum.appendChild(ringDiv);
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
