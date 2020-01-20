// Hogwarts hw
// jQuery functions
$(() => {
  hogwarts();
  name();
  house();
  pet();
  wand();
});

// create a div with an id of container
const $container = $("#container");
console.log($container);

// Create an h1 element
const hogwarts = () => {
  let $h1 = $("<h1>");
  $h1.text("Hogwarts");
  $($h1).appendTo("#container");
};

// Create h2 with your name
const name = () => {
  let $h2 = $("<h2>").text("Aarik Robles");
  $($h2).appendTo("#container");
};

// Create h3 with your house
const house = () => {
  let $h3 = $("<h3>").text("Hufflepuff");
  $($h3).appendTo("#container");
};

// Create h4 with your pet
const pet = () => {
  let $h4 = $("<h4>").text("Loki");
  $h4.addClass("owl");
  $($h4).appendTo("#container");
};

// Create h4 with your wand
const wand = () => {
  let $h4 = $("<h4>").text("Laurel wood with a unicorn hair core");
  $($h4).appendTo("#container");
};
