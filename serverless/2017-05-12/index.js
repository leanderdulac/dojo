const parse = require('./parse');

const createTransaction = function(event, context, callback) {
    callback(null, {message: 'Go Serverless v1.0! Your function executed successfully!', event});
}

module.exports = {
    createTransaction,
}
