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
    $currentShape.text(shapes[0]);
    $currentShape.removeClass();
    $currentShape.addClass(shapes[0]);
    shapes.push(shapes[0]);
    shapes.shift([0]);
  };

  // win conditions
  const checkWin = () => {
    // if top row has 3 X's or 3 O's
    if (
      $("#1").text() === "X" &&
      $("#2").text() === "X" &&
      $("#3").text() === "X"
    ) {
      alert("X wins");
    } else {
      false;
    }
    // if middle row has 3 X's or 3 O's
    // if bottom row has 3 X's or 3 O's
    // if left column has 3 X's or 3 O's
    // if middle column has 3 X's or 3 O's
    // if right column has 3 X's or 3 O's
    // if left diagnal has 3 X's or 3 O's
    // if right diagnal has 3 X's or 3 O's
  };

  $(".square").on("click", handleClick);
});
