#!/usr/bin/env node

/* eslint-env node, es6 */
'use strict';

let program = require('commander');
let _ = require('lodash');
let proportional = require('./src/proportional');

program
  .version('0.0.1')
  .usage('<values ...>')
  .parse(process.argv);

let params = _.map(program.args, (value) => {
    if (value === 'x') return value;
    return parseInt(value);
});

let posX = _.indexOf(program.args, 'x');
let result;

switch (posX) {
    // x a b c
    case 0:
        result = proportional(params[1], params[2], params[3])
        break;
    // a x b c
    case 1:
        result = proportional(params[0], params[3], params[2])
        break;
    // a b x c
    case 2:
        result = proportional(params[0], params[3], params[1])
        break;
    // a b c x
    case 3:
        result = proportional(params[2], params[1], params[0])
        break;
    default:
        break;
}

console.log(result);
