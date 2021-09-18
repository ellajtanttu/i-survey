//Business Logic:


//UI Logic:
$(document).ready(function() {

  $("#persForm").submit(function(event) {
    event.preventDefault();

    let inputName = $("#name").val();
    let inputBD = $("#birthday").val();
    let inputFood = $("#faveFoods").val();
    let inputMusic = $("input:radio[name=faveMusic]:checked").val();
    // let inputColor = $("faveColor").val();
    let inputColor = document.getElementById("faveColor").value;
    // alert(inputColor);

    $("#userName").text(inputName);
    $("#userBirth").text(inputBD);
    $("#userFoods").text(inputFood);
    $("#userMusic").text(inputMusic);
    $(".resultsSumm").css("background-color", inputColor);
    $("h1").css("color", inputColor);
    $("#formButton").css("background-color", inputColor);

    $(".resultsSumm").show();
  });

});