angular
  .module('Chatsapp')
  .filter('chatPicture', chatPicture);

  function chatPicture () {
    return function (chat) {
      if (! chat) return;

      var otherId = _.without(chat.userIds, Meteor.userId())[0];
      var otherUser = Meteor.users.findOne(otherId);
      var hasPicture = otherUser && otherUser.profile && otherUser.profile.profile.picture;

      return hasPicture ? otherUser.profile.picture : chat.picture || '/user-default.svg';
    }
  }