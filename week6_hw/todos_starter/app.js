$(() => {
  const list = [];

  // Create the ul under both Things to do and completed
  const createList = (listId, ulClass) => {
    let $ul = $("<ul>").addClass(ulClass);
    $(listId).append($ul);
  };

  createList("#to-do-list", "todo");
  createList("#completed", "done");

  // Create the items that will go into the list
  const createListItems = () => {
    let $li = $("<li>");
    $(".todo").empty();
    list.forEach(item => {
      $(".todo").append("<li>" + item + "</li>");
    });
  };

  // Action that will hadle the add button
  const handleCLick = () => {
    const inputBoxValue = $("#input-box").val();

    console.log(inputBoxValue);

    list.push(inputBoxValue);

    event.preventDefault();

    $(event.currentTarget).trigger("reset");

    createListItems();
  };

  $("#submit").on("click", handleCLick);
});
