$(() => {
  // Refactor win condtions not DRY
  // win conditions
  const checkPlayerOneWin = () => {
    // if top row has 3 X's or 3 O's
    if (
      $("#1").text() === "X" &&
      $("#2").text() === "X" &&
      $("#3").text() === "X"
    ) {
      alert("Player One Wins!");
    }
    // if middle row has 3 X's or 3 O's
    else if (
      $("#4").text() === "X" &&
      $("#5").text() === "X" &&
      $("#6").text() === "X"
    ) {
      alert("Player One Wins!");
    }
    // if bottom row has 3 X's or 3 O's
    else if (
      $("#7").text() === "X" &&
      $("#8").text() === "X" &&
      $("#9").text() === "X"
    ) {
      alert("Player One Wins!");
    }
    // if left column has 3 X's or 3 O's
    else if (
      $("#1").text() === "X" &&
      $("#4").text() === "X" &&
      $("#7").text() === "X"
    ) {
      alert("Player One Wins!");
    }
    // if middle column has 3 X's or 3 O's
    else if (
      $("#2").text() === "X" &&
      $("#5").text() === "X" &&
      $("#8").text() === "X"
    ) {
      alert("Player One Wins!");
    }
    // if right column has 3 X's or 3 O's
    else if (
      $("#3").text() === "X" &&
      $("#6").text() === "X" &&
      $("#9").text() === "X"
    ) {
      alert("Player One Wins!");
    }
    // if left diagnal has 3 X's or 3 O's
    else if (
      $("#1").text() === "X" &&
      $("#5").text() === "X" &&
      $("#9").text() === "X"
    ) {
      alert("Player One Wins!");
    }
    // if right diagnal has 3 X's or 3 O's
    else if (
      $("#3").text() === "X" &&
      $("#5").text() === "X" &&
      $("#7").text() === "X"
    ) {
      alert("Player One Wins!");
    } else {
      false;
    }
  };

  const checkPlayerTwoWin = () => {
    // if top row has 3 X's or 3 O's
    if (
      $("#1").text() === "O" &&
      $("#2").text() === "O" &&
      $("#3").text() === "O"
    ) {
      alert("Player Two Wins!");
    }
    // if middle row has 3 X's or 3 O's
    else if (
      $("#4").text() === "O" &&
      $("#5").text() === "O" &&
      $("#6").text() === "O"
    ) {
      alert("Player Two Wins!");
    }
    // if bottom row has 3 X's or 3 O's
    else if (
      $("#7").text() === "O" &&
      $("#8").text() === "O" &&
      $("#9").text() === "O"
    ) {
      alert("Player Two Wins!");
    }
    // if left column has 3 X's or 3 O's
    else if (
      $("#1").text() === "O" &&
      $("#4").text() === "O" &&
      $("#7").text() === "O"
    ) {
      alert("Player Two Wins!");
    }
    // if middle column has 3 X's or 3 O's
    else if (
      $("#2").text() === "O" &&
      $("#5").text() === "O" &&
      $("#8").text() === "O"
    ) {
      alert("Player Two Wins!");
    }
    // if right column has 3 X's or 3 O's
    else if (
      $("#3").text() === "O" &&
      $("#6").text() === "O" &&
      $("#9").text() === "O"
    ) {
      alert("Player Two Wins!");
    }
    // if left diagnal has 3 X's or 3 O's
    else if (
      $("#1").text() === "O" &&
      $("#5").text() === "O" &&
      $("#9").text() === "O"
    ) {
      alert("Player Two Wins!");
    }
    // if right diagnal has 3 X's or 3 O's
    else if (
      $("#3").text() === "O" &&
      $("#5").text() === "O" &&
      $("#7").text() === "O"
    ) {
      alert("Player Two Wins!");
    } else {
      false;
    }
  };

  // Check for Draw
  const checkDraw = () => {
    if (
      $(".container")
        .children()
        .text().length === 9 &&
      !checkPlayerOneWin() &&
      !checkPlayerTwoWin()
    ) {
      alert("Draw");
    }
  };

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
    checkPlayerOneWin();
    checkPlayerTwoWin();
    checkDraw();
  };

  $(".square").on("click", handleClick);
});
