'use strict';
const parse = require('./parse')

module.exports.hello = (event, context, callback) => {

  const prettyTransaction = parse(context);

  const response = {
    statusCode: 200,
    body: JSON.stringify({      
      input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
