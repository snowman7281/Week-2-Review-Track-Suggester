$(document).ready(function(){
  $(".survey").submit(function(event){
  var seasonInput = parseInt($("#season").val());
  var animalInput = parseInt($("#animal").val());
  var foodInput = parseInt($("#food").val());
  var colorInput = parseInt($("#color").val());

  var result = seasonInput + animalInput + foodInput + colorInput;

    if (result <= 4){
      $("#css").show();
      $("#csharp").hide();
      $("#php").hide();
      $("#java").hide();
      $("#rr").hide();
    } else if (result > 4 && result <= 8){
      $("#csharp").show();
      $("#css").hide();
      $("#php").hide();
      $("#java").hide();
      $("#rr").hide();
    }else if (result > 8 && result <= 12){
      $("#php").show();
      $("#csharp").hide();
      $("#css").hide();
      $("#java").hide();
      $("#rr").hide();
    }else if (result > 12){
      $("#java").show();
      $("#csharp").hide();
      $("#php").hide();
      $("#css").hide();
      $("#rr").hide();
    }else if (result > 12){
      $("#rr").show();
      $("#csharp").hide();
      $("#php").hide();
      $("#java").hide();
      $("#css").hide();
    }else{
      $("span").show();
    }

    event.preventDefault();
  });
});
