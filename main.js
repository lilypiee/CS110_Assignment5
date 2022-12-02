const utils = require('./utils.js');
const prompt = require('readline-sync');
 
 
console.log("Matrix Product");
utils.print(utils.matProduct
(
[[5,2,3],[7,3,6], [6,7,2], [9,5,7]],
[[7,4,23,14],[8,12,15,17],[5,3,15,11]]
));
 
 
console.log("\n\n\n\nMartix Sum");
utils.print(utils.matSum
(
[[3,5,7],[4,6,4], [6,8,9], [3,2,1]],
[[6,15,11],[8,18,11],[9,11,19], [1,5,12]]
));
 
 
console.log("\n\n\n\nMatrix Row Sum");
console.log(utils.matRowSum
(
   [[5,2,1],[8,3,5],[1,7,3]]
));
 
 
const sentence_1 = prompt.question("Type down your sentence\n");
console.log(`Sentence was \"${sentence_1}\".Number of words is: `, utils.count(sentence_1));
 
const sentence_2 = "      That is a sentence    ,    ";
console.log(`Sentence was \"${sentence_2}\"`);
console.log(`Trimmed sentence is\"${utils.trim(sentence_2)}\"`);
