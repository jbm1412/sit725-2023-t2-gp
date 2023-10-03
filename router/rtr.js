let client = require('../dbConnection');

let feedbackcollection;

feedbackcollection = client.db().collection('Feedback');

function postFeedback(feedback, callback) {
    feedbackcollection.insertOne(feedback, callback);
}

module.exports = postFeedback