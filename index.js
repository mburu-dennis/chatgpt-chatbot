import openai from './config/open-ai.js';
import readlineSync from 'readline-sync';
import colors from 'colors';

async function main() {
    const userName = readlineSync.question('May I have your name?');
    console.log('Hello ${userName}');
}

main();