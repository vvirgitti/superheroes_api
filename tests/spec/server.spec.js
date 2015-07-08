var should = require('should');
var app = require ('../../server.js');
var request = require('supertest').agent(app.listen());
var router = express.Router();

describe('GET /', function() {
  it('/index.html should respond with 200', function (done) {
    request.get('/index.html')
    .expect(200)
    .expect("Ok")
    .end(done);
  });
});
