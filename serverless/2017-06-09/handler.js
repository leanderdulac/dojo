'use strict';
const parse = require('./parse')
const pagarme = require('pagarme')

module.exports.hello = (event, context, callback) => {

  const prettyTransaction = parse(event.body);

  pagarme.client.connect({ api_key: 'YOUR_API_KEY_GOES_HERE' })
    .then(client => client.transactions.create(prettyTransaction))
    .then(transaction => {
      const response = {
        statusCode: 200,
        body: JSON.stringify(transaction)
      };

      callback(null, response);
    })
    .catch(error => console.log(JSON.stringify(error)))

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
