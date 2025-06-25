const fetch = require('node-fetch');
const { schedule } = require('@netlify/functions');

const handler = async () => {
  await fetch('https://www.ybj.au/api/ping');
  return {
    statusCode: 200,
    body: 'Pinged successfully',
  };
};

exports.handler = schedule('*/9 * * * *', handler);