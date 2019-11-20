//defining the variables

var myMap;

var canvas;
//putting the API key to connect my MapBox account
var mappa = new Mappa('MapboxGL',
  'pk.eyJ1IjoiZWNyaWEiLCJhIjoiY2sydWE2empjMTJyNjNubzNkNWkyMWprdyJ9.ML6v7mpIHFiTavudfjtu1w');
var position;

//keeping all the map options in a single oblject
var options = {
  lat: 0,
  lng: 0,
  zoom: 15,
  style: 'mapbox://styles/ecria/ck2ygeqk1006q1cmp7kk9z39f',
}


function preload() {
  position = getCurrentPosition();
  console.log(position); //verify it's getting the position

  cherry = loadImage("./assets/cherry.png"); //load the image for the pointer
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  myMap = mappa.tileMap(options);
  myMap.overlay(canvas); //show map above background

}

function showPosition(position) {
  options.lat = position.latitude;
  options.lng = position.longitude;
}

function draw() {
  clear();

  //get the user's position
  var userPos = myMap.latLngToPixel(position.latitude, position.longitude);
  imageMode(CENTER);
  image(cherry, userPos.x, userPos.y, 120, 110);
}
