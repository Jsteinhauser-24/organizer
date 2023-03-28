

var saveBtn = $('#saveBtn')
var description = [
    {
      id: "0",
      hour: "09",
      time: "09",
      meridiem: "am",
      reminder: ""
  },
  {
      id: "1",
      hour: "10",
      time: "10",
      meridiem: "am",
      reminder: ""
  },
  {
      id: "2",
      hour: "11",
      time: "11",
      meridiem: "am",
      reminder: ""
  },
  {
      id: "3",
      hour: "12",
      time: "12",
      meridiem: "pm",
      reminder: ""
  },
  {
      id: "4",
      hour: "01",
      time: "13",
      meridiem: "pm",
      reminder: ""
  },
  {
      id: "5",
      hour: "02",
      time: "14",
      meridiem: "pm",
      reminder: ""
  },
  {
      id: "6",
      hour: "03",
      time: "15",
      meridiem: "pm",
      reminder: ""
  },
  {
      id: "7",
      hour: "04",
      time: "16",
      meridiem: "pm",
      reminder: ""
  },
  {
      id: "8",
      hour: "05",
      time: "17",
      meridiem: "pm",
      reminder: ""
  },
  
]
  
$(function() {
saveBtn.on('click', function() {
  localStorage.setItem("description", JSON.stringify(description))
})  
  });
function renderReminders(){
var reminders = JSON.parse(localStorage.getItem(reminders));
$('#hour-8 .description').val(localStorage.getItem('0'));
$('#hour-9 .description').val(localStorage.getItem('1'));
$('#hour-10 .description').val(localStorage.getItem('2'));
$('#hour-11 .description').val(localStorage.getItem('3'));
$('#hour-12 .description').val(localStorage.getItem('4'));
$('#hour-1 .description').val(localStorage.getItem('5'));
$('#hour-2 .description').val(localStorage.getItem('6'));
$('#hour-3 .description').val(localStorage.getItem('7'));
$('#hour-4 .description').val(localStorage.getItem('8'));
$('#hour-5 .description').val(localStorage.getItem('9'));
}
function init() {
  var storedDescription = JSON.parse(localStorage.getItem(description));
  renderReminders();
}


  var currentHour = $(this).data('hour')
  $(description).each(function () {
    var timeDiv = $(this).attr('id')
    if (currentHour == timeDiv) {
      $(this).removeClass("future")
      $(this).removeClass("past")
      $(this).addClass("present")

    } else if (currentHour < timeDiv) {
      $(this).removeClass("present")
      $(this).removeClass("past")
      $(this).addClass("future")

    } else if (currentHour > timeDiv) {
      $(this).removeClass("present")
      $(this).removeClass("future")
      $(this).addClass("past")
    }
  })
  $(".time-block").each(function () {
    let timeDiv = $(this).data('hour')
    if (currentHour == timeDiv) {
      $(this).removeClass("future")
      $(this).removeClass("past")
      $(this).addClass("present")

    } else if (currentHour < timeDiv) {
      $(this).removeClass("present")
      $(this).removeClass("past")
      $(this).addClass("future")

    } else if (currentHour > timeDiv) {
      $(this).removeClass("present")
      $(this).removeClass("future")
      $(this).addClass("past")
    }
  })

  var todayDate = dayjs().format("DD/MM/YYYY hh:mm:ss");
  $("#currentDay").html(todayDate);

