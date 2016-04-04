# Meteor Todo Tutorial

(Link to "Todo app" tutorial)[https://www.meteor.com/tutorials/blaze/creating-an-app]

## Comment for chapter "9. Security with methods"

If you want to check access from a browser console to server collections,
before you will delete the insecure, since Meteor v1.3 you need to do:

  var Tasks = require('./imports/api/tasks.js').Tasks
  Tasks.find().fetch()
