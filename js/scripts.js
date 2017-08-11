$(document).ready(function(){
  $(".survey").submit(function(event){
  var q1Input = parseInt($("input:radio[name=q1]:checked").val());
  var q2Input = parseInt($("input:radio[name=q2]:checked").val());
  var q3Input = parseInt($("input:radio[name=q3]:checked").val());
  var q4Input = parseInt($("input:radio[name=q4]:checked").val());
  var q5Input = parseInt($("input:radio[name=q5]:checked").val());
  var firstName = $("#firstName").val();
  var lastName = $("#lastName").val();
  var $output = $(".output");
  var result = q1Input + q2Input + q3Input + q4Input + q5Input;


  if (result <= 5 && firstName !== "" && lastName !== ""){
    $(".form-group").fadeOut();
    $("#css").fadeIn().show();
    $output.text("Thank you " + firstName + " " + lastName + " for your taking the survey.  After a careful review we recommend you the course below");
    $("#csharp").hide();
    $("#php").hide();
    $("#java").hide();
    $("#rr").hide();
    $("span").fadeOut();
  } else if (result > 5 && result <= 10 && firstName !== "" && lastName !== ""){
    $(".form-group").fadeOut();
    $("#csharp").fadeIn().show();
    $output.text("Thank you " + firstName + " " + lastName + " for your taking the survey.  After a careful review we recommend you the course below");
    $("#css").hide();
    $("#php").hide();
    $("#java").hide();
    $("#rr").hide();
    $("span").fadeOut();
  }else if (result > 10 && result <= 15 && firstName !== "" && lastName !== ""){
    $(".form-group").fadeOut();
    $("#php").fadeIn().show();
    $output.text("Thank you " + firstName + " " + lastName + " for your taking the survey.  After a careful review we recommend you the course below");
    $("#csharp").hide();
    $("#css").hide();
    $("#java").hide();
    $("#rr").hide();
    $("span").fadeOut();
  }else if (result > 15 && result <= 20 && firstName !== "" && lastName !== ""){
    $(".form-group").fadeOut();
    $("#java").fadeIn().show();
    $output.text("Thank you " + firstName + " " + lastName + " for your taking the survey.  After a careful review we recommend you the course below");
    $("#csharp").hide();
    $("#php").hide();
    $("#css").hide();
    $("#rr").hide();
    $("span").fadeOut();
  }else if (result > 20 && firstName !== "" && lastName !== ""){
    $(".form-group").fadeOut();
    $("#rr").fadeIn().show();
    $output.text("Thank you " + firstName + " " + lastName + " for your taking the survey.  After a careful review we recommend you the course below");
    $("#csharp").hide();
    $("#php").hide();
    $("#java").hide();
    $("#css").hide();
    $("span").fadeOut();
  }else{
    $("span").fadeIn();
  }

    event.preventDefault();
  });
});
