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
    message.userId = this.userId;

    var messageId = Messages.insert(message);
    Chats.update(message.chatId, { $set: { lastMessage: message } });

    return messageId;
  },
  updateName: function (name) {
    if (! this.userId) {
      throw new Meteor.Error('not-logged-in', 'Must be logged in to update your name.');
    }

    check(name, String);
    if (name.length === 0) {
      throw Meteor.Error('name-required', 'Must provide user name');
    }

    return Meteor.users.update(this.userId, { $set: {'profile.name': name } });
    },
    newChat: function (otherId) {
      if (! this.userId) {
        throw new Meteor.Error('not-logged-in, Must belogged in to create a chat.');
      }

      check(otherId, String);

      var otherUser = Meteor.users.findOne(otherId);
      if (! otherUser) {
        throw new meteor.Error('user-does-not-exist', 'Chat\s user does not exist');
      }

      var chat = {
        userIds: [this.userId, otherId],
        createAt: new Date()
      };

      var chatId = Chats.insert(chat);

      return chatId;

    }
});