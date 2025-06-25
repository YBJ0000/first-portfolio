const https = require('https');
const { schedule } = require('@netlify/functions');

const handler = async () => {
  return new Promise((resolve) => {
    https.get('https://www.ybj.au/api/ping', () => {
      resolve({
        statusCode: 200,
        body: 'Pinged successfully',
      });
    });
  });
};

exports.handler = schedule('*/9 * * * *', handler);