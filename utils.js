// Problem 1
/* In utils.js write a function
matrixProduct(mat1, mat2) that
returns a new matrix that is the product of mat1 and mat2 matrices. */
 
function print_matrix(mat)
{
   for (let row = 0; row < mat.length; row++)
   {
       console.log(mat[row]);
   }
   console.log();
}
function calc_dot_product(arr1, arr2)
{
   let sum = 0;
   for (let i = 0; i < arr1.length; i++)
   {
       sum += (arr1[i] * arr2[i]);
   }
   return sum;
}
function getting_column(mat2, n)
{
   let column = [];
   for (let i = 0; i < mat2.length; i++)
   {
       column.push(mat2[i][n]);
   }
   return column;
}
function empty_matrix(row, column)
{
   let new_matrix = [];
 
   for (let i = 0; i<row; i++)
   {
       new_matrix.push([])
       for(let k = 0; k<column; k++)
       {
           new_matrix[i].push([]);
       }
   }
   return new_matrix;
}
function matrixProduct(mat1, mat2)
{
   const dimensions_1 = [ mat1.length, mat1[0].length ];
   const dimensions_2 = [ mat2.length, mat2[0].length ];
  
   console.log("First matrix with dimensions: ", dimensions_1);
   print_matrix(mat1)
   console.log("Second matrix with dimensions: ", dimensions_2);
   print_matrix(mat2)
 
   let new_matrix = empty_matrix(dimensions_1[0], dimensions_2[1]);
  
   console.log("The product matrix is");
   for (let i = 0; i < dimensions_1[0]; i++)
   {
       for (let k = 0; k < dimensions_2[1]; k++)
       {       
           new_matrix[i][k] = calc_dot_product(mat1[i],getting_column(mat2, k));
       }
   }
  
 
   return new_matrix;
}
 
// Problem 2
/* In utils.js write a function
sumOfMatrices(mat1, mat2) that accepts
two matrices and returns the sum of those matrices in a new matrix.  */
 
function sumOfMatrices(mat1, mat2) {
 
   const dimensions_1 = [ mat1.length, mat1[0].length ];
   const dimensions_2 = [ mat2.length, mat2[0].length ];
 
   console.log("Mat 1");
   print_matrix(mat1);
   console.log("Mat 2");
   print_matrix(mat2);
 
   let new_matrix = empty_matrix(dimensions_1[0], dimensions_2[1]);
 
   for (let i = 0; i < dimensions_1[0]; i++)
   {
       for (let k = 0; k < dimensions_2[1]; k++)
       {
           new_matrix[i][k] = mat1[i][k]+mat2[i][k];
       }
   }
   return new_matrix;
}
 
// Problem 3
/* write a function sumOfEachRow(mat) that accepts a matrix and returns
an array that contains sum of every row of the matrix for its elements. */
 
function sumOfArray(arr){
   let sum = 0;
 
   for (let k = 0; k<arr.length; k++)
   {
       sum += arr[k];
   }
   return sum;
}
function sumOfEachRow(mat){
   let array = [];
 
   for (let i = 0; i<mat.length; i++)
   {
       array.push(sumOfArray(mat[i]));
   }
   return(array);
}
// Problem 4 - count words
function countWords(sentence)
{
   let word = 0;
   let found = false;
   for (let i = 0; i < sentence.length; i++)
   {
       if((sentence[i].charCodeAt(0) == 32 && found == false))
       {
           word+=1;
           found = true;
       }
       else
       {
           found = false;
       }
   }
   if (sentence[sentence.length-1].charCodeAt(0) != 32) word+=1;
   return word;
}
 
// Problem 5 - trim function
function trim(sentence)
{
   let start;
   let end;
   for (let i = 0; i < sentence.length; i++)
   {
       if(sentence[i].charCodeAt(0) != 32)
       {
           start = i;
           break;
       }
   }
   for (let i = sentence.length-1; i >= 0; i--)
   {
       if(sentence[i].charCodeAt(0) != 32)
       {
           end = i;
           break;
       }
   }
   let new_sentence = "";
   for (let i = start; i<=end; i++)
   {
       new_sentence+=sentence[i];
   }
   return new_sentence;
}
 
module.exports = {
   matProduct: matrixProduct,
   matSum: sumOfMatrices,
   matRowSum: sumOfEachRow,
   print: print_matrix,
   count: countWords,
   trim: trim
}
