let req = require('request');

let root = ''
let getEmojis = function(method, callback){
    let options = {
        'method': method,
        'url': `https://api.github.com/emojis`,
        'headers': {
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'bla'
        },
        'time': true,
    };
    req(options, function (error, response) {
        if (error) throw new Error(error);
        callback(response);
        // console.log(response.body)
    });
};


module.exports = {
    getEmojis: getEmojis
}