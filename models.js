
"use strict"
var mongoose = require('mongoose')
mongoose.Promise = globa.Promise;
mongoose.connect(process.env.MONGODB_URI);

var User = mongoose.model('User', {
  slackId: {
    type: String,
    required: true
  },
  slackDmId: {
    type: String,
    required: true
  },
  google: {}
})

module.exports = {
  User
}
