//Business Logic:

let favoriteThings = [];
let firstFaves = [];
let pushArray = []; 

//UI Logic:
$(document).ready(function() {
  $("#persForm").submit(function(event) {
    event.preventDefault();

    favoriteThings = [$("#name").val(), $("#birthday").val(), $("#faveFoods").val(),$("input:radio[name=faveMusic]:checked").val(),document.getElementById("faveColor").value];
    console.log(favoriteThings);
    firstFaves = favoriteThings.slice(0,3);
    console.log(firstFaves);
    pushArray.push(firstFaves[0]);
    pushArray.push(firstFaves[1]);
    pushArray.push(firstFaves[2]);
    console.log(pushArray);

    const pushArrayOne = pushArray[0];
    console.log(pushArrayOne);
    const pushArrayTwo = pushArray[1];
    console.log(pushArrayTwo);
    const pushArrayThree = pushArray[2];
    console.log(pushArrayThree);

    $(".arrayDiv").show(function() {
      $(".arrayList").append("<li id='pAOne'></li>");
      $("#pAOne").text(pushArrayOne);
      $(".arrayList").append("<li id='pATwo'></li>");
      $("#pATwo").text(pushArrayTwo);
      $(".arrayList").append("<li id='pAThree'></li>");
      $("#pAThree").text(pushArrayThree);
    });

    let inputName = $("#name").val();
    let inputBD = $("#birthday").val();
    let inputFood = $("#faveFoods").val();
    let inputMusic = $("input:radio[name=faveMusic]:checked").val();
    // let inputColor = $("faveColor").val();
    let inputColor = document.getElementById("faveColor").value;
    // alert(inputColor);

    let nameLength = inputName.length;

    $("#userName").text(inputName);
    $("#userBirth").text(inputBD);
    $("#userFoods").text(inputFood);
    $("#userMusic").text(inputMusic);
    $(".resultsSumm").css("background-color", inputColor);
    $("h1").css("color", inputColor);
    $("#formButton").css("background-color", inputColor);

    $(".resultsSumm").show();

    if (nameLength === 0) {
      $("#labelName").css("background-color" , "red");
      console.log("name is 0");
    } 
  });

});