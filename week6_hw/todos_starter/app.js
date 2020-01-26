$(() => {
  const list = [];

  const handleCLick = () => {
    const inputBoxValue = $("#input-box").val();

    console.log(inputBoxValue);

    list.push(inputBoxValue);

    $(event.target).trigger("reset");
  };

  $("#submit").on("click", handleCLick);
});
