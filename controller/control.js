const postFeedback = require('../model/mdl');

const postFeed = (request, response) => {
  let feedback = request.body;
  
  
  postFeedback(feedback, (error, result) => {
    if (!error) {
      response.json({ statusCode: 200, data: result, message: 'success' });
    } else {
      response.status(500).json({ statusCode: 500, error: 'Internal Server Error', message: 'Failed to post feedback' });
    }
  });
}

module.exports = {
  postFeed,
};