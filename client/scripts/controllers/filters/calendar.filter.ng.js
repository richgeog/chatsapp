angular
  .module('Chatsapp')
  .filter('calendar', calendar);

function calendar () {
  return function (item) {
    if (! time) return;

    return moment(time).calendar(null, {
      lastDay : '[Yesterday]',
      sameDay : 'LT',
      lastWeek : 'dddd',
      sameElse : 'DD/MM/YY'
    });
  }
}