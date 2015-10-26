if (Meteor.isServer) {
  if (Meteor.settings && Meteor.settings.ACCOUNTS_PHONE) {
    Accounts._options.adminPhoneNumbers = Meteor.settings.ACCOUNTS_PHONE.ADMIN_NUMBERS;
    Accounts._options.phoneVerificationMasterCode = Meteor.settings.ACCOUNTS_PHONE.MASTER_CODE;
  }
}

// {

//   "TWILIO": {

//     "FROM": "meteor-chatsapp",

//     "SID": "",

//     "TOKEN": ""

//   },

//   "ACCOUNTS_PHONE": {

//     "ADMIN_NUMBERS": ["123456789", "987654321"],

//     "MASTER_CODE": "1234",

//   }

// }