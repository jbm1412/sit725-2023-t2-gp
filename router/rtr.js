let express = require('express');
let router = express.Router();
let controller = require('../controller/control'); 

router.post('/', (request, response) => {
  controller.postFeed(request, response); 
});

module.exports = router;