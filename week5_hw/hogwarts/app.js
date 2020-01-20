// Hogwarts hw

// create a div with an id of container
const $container = $("#container");
console.log($container);
// Create an h1 element
const createH1 = () => {
  let $h1 = $("<h1>");
  $h1.text("Hogwarts");
  $($h1).appendTo("#container");
};
$(() => {
  createH1();
});
