console.error('Esto es un ERROR');

const winston = require('winston');

function throwErrorAndLog() {
  try {
    throwError();
  } catch (error) {
    winston.log('error', error.message);
  }
}