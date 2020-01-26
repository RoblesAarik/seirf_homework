$(() => {
  // create a container for the gameboard
  const $createContainer = () => {
    let $div = $("<div>").addClass("container");
    $("body").append($div);
  };

  $createContainer();

  // create the gameboard
  const $createGameBoard = () => {
    let $div = $("<div>")
      .addClass("square")
      .attr("id", i);
    $(".container").append($div);
  };

  // for loop that creates the gameboard
  for (i = 1; i <= 9; i++) {
    $createGameBoard();
  }

  // X and O function
  const shapes = ["X", "O"];

  const handleClick = event => {
    let $currentShape = $(event.currentTarget);
    $currentShape.text(`${shapes[i]}`);
    $currentShape.removeClass();
    $currentShape.addClass(shapes[0]);
    shapes.push(shapes[0]);
    shapes.shift([0]);
  };

  $(".square").on("click", handleClick);
});
