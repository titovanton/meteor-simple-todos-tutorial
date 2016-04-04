import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Tasks = new Mongo.Collection('tasks');

function checkId(id) {
  try {
    check(id, String);
  } catch (e) {
    if (e.message == "Match error: Expected string, got object") {
      check(id._str, String);
    } else {
      throw e;
    }
  }
}

Meteor.methods({
  'tasks.insert'(text) {
    check(text, String);

    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Tasks.insert({
      text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
  },
  'tasks.remove'(taskId) {
    checkId(taskId);

    Tasks.remove(taskId);
  },
  'tasks.setChecked'(taskId, setChecked) {
    checkId(taskId);
    check(setChecked, Boolean);

    Tasks.update(taskId, { $set: { checked: setChecked } });
  },
});
