Meteor.methods({
  newMessage: function (message) {
    if (! this.userId) {
      throw new Meteor.Error('not-logged-in', 'Must be logged in to send message.');
    }

    check(message, {
      text: String,
      chatId: String
    });

    message.timestamp = new Date();

    var messageId = Messages.insert(message);
    Chats.update(message.chatId, { $set: { lastMessage: message } });

    return messageId;
  },
  updateName: function (name) {
    if (! this.userId) {
      throw new Meteor.Error('not-logged-in', 'Must be logged in to update your name.');
    }

    return Meteor.users.update(this.userId, { $set: {'profile.name': name } });
  }
});