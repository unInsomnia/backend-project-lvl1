#!/usr/bin/env node
import userName from '../src/cli.js';
import gameEven from '../src/gameEven.js';

console.log(`Hello, ${userName}!`);

console.log(gameEven());
