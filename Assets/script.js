$("#currentDay").text(moment().format("LLLL"));

function init() {
  for (var i = 9; i < 18; i++) {
    $("#txt" + i).val(localStorage.getItem(i));
  }
  setInterval(function () {
    $("#currentDay").text(moment().format("LLLL"));
    colorShift();
  }, 15000);
  colorShift();
}

function colorShift() {
  for (var i = 9; i < 18; i++) {
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

init();