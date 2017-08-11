$(document).ready(function(){
  $(".survey").submit(function(event){
  var q1Input = parseInt($("input:radio[name=q1]:checked").val());
  var q2Input = parseInt($("input:radio[name=q2]:checked").val());
  var q3Input = parseInt($("input:radio[name=q3]:checked").val());
  var q4Input = parseInt($("input:radio[name=q4]:checked").val());
  var q5Input = parseInt($("input:radio[name=q5]:checked").val());

  var result = q1Input + q2Input + q3Input + q4Input + q5Input;

  if (result <= 5){
    $("#css").show();
    $("#csharp").hide();
    $("#php").hide();
    $("#java").hide();
    $("#rr").hide();
  } else if (result > 5 && result <= 10){
    $("#csharp").show();
    $("#css").hide();
    $("#php").hide();
    $("#java").hide();
    $("#rr").hide();
  }else if (result > 10 && result <= 15){
    $("#php").show();
    $("#csharp").hide();
    $("#css").hide();
    $("#java").hide();
    $("#rr").hide();
  }else if (result > 15 && result <= 20){
    $("#java").show();
    $("#csharp").hide();
    $("#php").hide();
    $("#css").hide();
    $("#rr").hide();
  }else if (result > 20){
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
