let expect = require('chai').expect;
let request = require('request');
let url = "http://localhost:3000/api/feedback";
let feedback = {
    fullname: 'Leo',
    email: 'leo@gmail.com',
    description: 'Great Website!'
}

describe("Insert: Feedback", function(){
    it('submitting feedback in database', function(done){
        request.post({url: url, form: feedback}, function(error, response, body){
            console.log(body);
            let responseBody = JSON.parse(body);
            expect(responseBody.statusCode).to.equal(200);
            done();
        });
    });
});