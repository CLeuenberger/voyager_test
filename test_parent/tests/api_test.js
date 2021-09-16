//modules
const assert = require('chai').assert;
let chai = require('chai')
    , expect = chai.expect
    , should = chai.should();
const addContext = require('mochawesome/addContext');
let lodash = require('lodash');
//files
const request = require('../utils/request')


let response = '';
describe('Emojis API Test', function() {
    describe('Positive Tests', function () {
        this.timeout(10000)
        before(function (done) {
            request.getEmojis('GET',function (data) {
                response = data;
                done()
            })
        })
        after(function (done) {
            console.log('Positive Tests Complete')
            done()
        })

        it('Verify response code is 200', function (done) {
            let expected = 200;
            let actual = response.statusCode;
            addContext(this, {
                title: 'Values:',
                value: `EXPECTED Response Code: ${expected}   ACTUAL Response Code: ${actual}`
            });
            assert.equal(actual, expected, "Voyager Requirement - XXXX")
            done()
        })
        it('Verify response time is valid', function (done) {
            let expected = 2000;
            let actual = response.elapsedTime;
            addContext(this, {
                title: 'Values:',
                value: `EXPECTED Response Time to be less than: ${expected}ms   ACTUAL: ${actual}ms`
            });
            expect(actual).to.be.lessThan(expected);
            done()
        })
        it('Verify response body is an object', function (done) {
            let expected = 'object';
            let body = JSON.parse(response.body)
            addContext(this, {
                title: 'Values:',
                value: `EXPECTED response body type : ${expected} `
            });
            body.should.be.a(expected)
            done()
        })
        it('Verify specific Emoji exists in response', function (done) {
            let emojiSamples = lodash.sample(['zombie_man','wind_chime','teacher'])//etc
            let expected = emojiSamples;
            let body = JSON.parse(response.body);
            addContext(this, {
                title: 'Values:',
                value: `EXPECTED : ${expected}`
            });
            body.should.have.property(emojiSamples)
            done()
        })
    });


        describe('Negative Tests', function () {
            this.timeout(10000)
            before(function (done) {
                let wrongMethod = lodash.sample(['PUT', 'POST', 'DELETE', 'BLA'])
                // request.getEmojis(wrongMethod,'count', lodash.random(0,1000),function (data) {//This API did not support any parameters but this is how I could call the request with variations
                request.getEmojis(wrongMethod,function (data) {
                    response = data;
                    done()
                })
            })
            after(function (done) {
                console.log('Negative Tests Complete')
                done()
            })
            it('Verify response code is 405', function (done) { //Going to leave this as a failure for demo
                let expected = 405;
                let actual = response.statusCode;
                addContext(this, {
                    title: 'Values:',
                    value: `EXPECTED Response Code: ${expected}   ACTUAL Response Code: ${actual}`
                });
                assert.equal(actual, expected, "Voyager Requirement - XXXX")
                done()
            })
        })



})
