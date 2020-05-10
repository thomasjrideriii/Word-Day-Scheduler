$("#currentDay").text(moment().format("LLLL"));
$(".collapse").hide()
$(".hide-row").attr("style", "height: 0px")

function init() {
  for (var i = 0; i < 24; i++) {
    $("#txt" + i).val(localStorage.getItem(i));
  }
  setInterval(function () {
    $("#currentDay").text(moment().format("LLLL"));
    colorShift();
  }, 15000);
  colorShift();
}

function colorShift() {
  for (var i = 0; i < 24; i++) {
    if (i < moment().hour()) {
      $("#txt" + i).addClass("past");
    } else if (i === moment().hour()) {
      $("#txt" + i).addClass("present");
    } else {
      $("#txt" + i).addClass("future");
    }
  }
}

$("button").click(function (event) {
  event.preventDefault();
  var hourNum = this.id;
  localStorage.setItem(hourNum, $("#txt" + hourNum).val());
});

$("#btnShow").click(function(event) {
    event.preventDefault();
    $(".collapse").show();
    $(".hide-row").removeAttr("style")
});

$("#btnHide").click(function(event) {
    event.preventDefault();
    $(".collapse").hide();
    $(".hide-row").attr("style", "height: 0px")
})

init();