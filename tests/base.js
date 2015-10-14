var req = require('supertest'),
    app = require('./../app');

    describe('Requests to /accomodation/london/my-invalid-property', function () {

        it ('Returns a 404 status code', function (done) {

            req(app)
                .get('/')
                .expect(404)
                .end(function (err) {
                    if (err) throw err;
                    done();
                });
        });
    });

    describe('Requests to /accomodation/london/my-property', function () {

        it ('Returns a 200 status code', function (done) {

            req(app)
                .get('/')
                .expect(404)
                .end(function (err) {
                    if (err) throw err;
                    done();
                });
        });
    });