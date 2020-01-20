// Hogwarts hw
// jQuery functions
$(() => {
  $hogwarts();
  $name();
  $house();
  $pet();
  $wand();
  $trunk();
  $items("Butter Beer");
  $secret("Invisibility Cloak");
  $secret("Magic Map");
  $secret("Time Turner");
  $leash();
  $items("Bertie Bott's Every Flavor [Jelly] Beans");
  $semester();
  $createTable();
  $createTr();
  $createTh("Day");
  $createTh("Classes");
  $createTr();
  $createTd("Monday", 2);
  $createTd("Charms, Herbology, Divination", 2);
  $createTr();
  $createTd("Tuesday", 3);
  $createTd("Transfiguration, Potions, Quidditch Practice", 3);
  $createTr();
  $createTd("Wednesday", 4);
  $createTd("Defense Against the Dark Arts, Herbology, History of Magic", 4);
  $createTr();
  $createTd("Thrusday", 5);
  $createTd("Transfiguration, Charms, Qudditch Practice", 5);
  $createTr();
  $createTd("Friday", 6);
  $createTd("Potions, Defense Against the Dark Arts, Charms", 6);
});

// create a div with an id of container
const $container = $("#container");
console.log($container);

// Create an h1 element
const $hogwarts = () => {
  let $h1 = $("<h1>");
  $h1.text("Hogwarts");
  $($h1).appendTo("#container");
};

// Create h2 with your name
const $name = () => {
  let $h2 = $("<h2>").text("Aarik Robles");
  $($h2).appendTo("#container");
};

// Create h3 with your house
const $house = () => {
  let $h3 = $("<h3>").text("Hufflepuff");
  $($h3).appendTo("#container");
};

// Create h4 with your pet
const $pet = () => {
  let $h4 = $("<h4>").text("Loki");
  $h4.addClass("owl");
  $($h4).appendTo("#container");
};

// Create h4 with your wand
const $wand = () => {
  let $h4 = $("<h4>").text("Laurel wood with a unicorn hair core");
  $($h4).appendTo("#container");
};

// Create ul with attr of storage and value of trunk
const $trunk = () => {
  let $ul = $("<ul>").attr("storage", "trunk");
  $($ul).appendTo("#container");
};

// Create list items
const $items = item => {
  let $li = $("<li>").text(item);
  $($li).appendTo("ul");
};

// Create items with secret class
const $secret = item => {
  let $li = $("<li>")
    .addClass("secret")
    .text(item);
  $($li).appendTo("ul");
};

// Create leash with class same as pet
const $leash = () => {
  let $li = $("<li>")
    .text("leash")
    .addClass("owl");
  $($li).appendTo("ul");
};

// Create h5 above table
const $semester = () => {
  let $h5 = $("<h5>").text("Spring 2020");
  $("#container").append($h5);
};

// Create a table
const $createTable = () => {
  let $table = $("<table>");
  $($table).appendTo("#container");
};

// Create tr elements
const $createTr = () => {
  let $tr = $("<tr>");
  $("table").append($tr);
};

// Create th element in tr
const $createTh = classes => {
  let $th = $("<th>").text(classes);
  $("tr").append($th);
};

// Create td elements in tr
const $createTd = (classes, position) => {
  let $td = $("<td>").text(classes);
  $(`table tr:nth-child(${position})`).append($td);
};
