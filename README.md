# Meteor Todo Tutorial

[Link to "Todo app" tutorial](https://www.meteor.com/tutorials/blaze/creating-an-app)

## Comments for chapter 9 and 10

Since Meteor v1.3, testing access from a browser to the server collections,
you will need require the module first:

```
var Tasks = require('./imports/api/tasks.js').Tasks

// works until autopublish is not removed
var objectList = Tasks.find().fetch()

// works until insecure is not removed
Tasks.update(objectList[0]._id, { $set: { checked: true } });
```

Сonsider the possibility of the existence of documents in collection with Mongo.ObjectID like IDs.
[Check this out](https://github.com/titovanton/meteor-simple-todos-tutorial/blob/master/project/imports/api/tasks.js#L39)

## Chapter 11

To run tests just invoke:

```
meteor test --driver-package practicalmeteor:mocha
```
