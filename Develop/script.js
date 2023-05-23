var currentHour = dayjs().format('H')

var today = dayjs()
$('#currentDay').text(today.format('MMM D, YYYY'))


function hourlyColor() {
  $('.time-block').each(function() {
    const blockHour = parseInt(this.id)
    $(this).toggleClass('past', blockHour < currentHour)
    $(this).toggleClass('present', blockHour === currentHour)
    $(this).toggleClass('future', blockHour > currentHour)
  })
}

function hourRefresh() {
  $('.time-block').each(function() {
    var blockHour = parseInt(this.id)
    if (blockHour == currentHour) {
      $(this).removeClass('past future').addClass('present')
    } else if (blockHour < currentHour) {
      $(this).removeClass('present future').addClass('past')
    } else {
      $(this).removeClass('past present').addClass('future')
    }
  })
}

function textEntry() {
  $('.saveBtn').on('click', function() {
    const key = $(this).parent().attr('id');
    const value = $(this).siblings('.description').val();
    localStorage.setItem(key, value);
  });
}

$('.time-block').each(function() {
  const key = $(this).attr('id');
  const value = localStorage.getItem(key);
  $(this).children('.description').val(value);
});


hourlyColor()
hourRefresh()
textEntry()