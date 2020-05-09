$("#currentDay").text(moment().format("LLLL"))

function init(){
    for (var i = 15; i < 18; i++) {
        $("#txt"+i).val(localStorage.getItem(i))
    }
}

for (var i = 9; i < 18; i++) {
    if (i < moment().hour()) {
        $("#txt"+i).addClass("past")
    } else if (i === moment().hour()) {
        $("#txt"+i).addClass("present")
    } else {
        $("#txt"+i).addClass("future")
    }
}

$("button").click(function(event){
    event.preventDefault()
    var hourNum = this.id
    var slot = this.id
    localStorage.setItem(slot, $("#txt"+hourNum).val())
})

init()