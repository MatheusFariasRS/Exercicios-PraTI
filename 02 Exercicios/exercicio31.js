const prompt = require('prompt-sync')();
let V = [
    [13, 29, 22, 59, 90, 24, 26, 44, 22, 35, 39, 46, 61, 85, 70, 11, 25, 41, 28, 85, 92, 21, 49, 55, 67, 72, 4, 50, 35, 55],
    [98, 85, 41, 92, 18, 34, 50, 74, 63, 67, 98, 89, 56, 58, 69, 57, 98, 32, 71, 91, 19, 4, 97, 42, 94, 10, 34, 51, 98, 93],
    [64, 61, 81, 31, 88, 76, 58, 28, 24, 43, 28, 45, 9, 49, 94, 55, 12, 64, 53, 47, 63, 47, 93, 46, 47, 21, 81, 61, 93, 53],
    [5, 76, 93, 56, 92, 9, 78, 7, 81, 44, 32, 93, 16, 97, 56, 66, 53, 63, 66, 42, 37, 59, 21, 92, 31, 88, 46, 28, 91, 90],
    [21, 75, 14, 94, 6, 33, 0, 27, 85, 46, 22, 88, 45, 90, 24, 27, 27, 77, 85, 79, 94, 31, 45, 43, 41, 63, 67, 78, 83, 69],
    [33, 7, 26, 84, 29, 23, 48, 49, 76, 98, 54, 100, 35, 56, 19, 34, 80, 3, 88, 65, 74, 23, 58, 13, 44, 41, 8, 34, 42, 99],
    [52, 4, 62, 91, 21, 19, 67, 51, 9, 21, 93, 79, 90, 71, 10, 98, 4, 82, 44, 93, 38, 74, 13, 17, 76, 26, 38, 88, 30, 14],
    [75, 82, 16, 75, 74, 52, 97, 56, 63, 23, 96, 19, 1, 83, 18, 95, 90, 28, 21, 14, 81, 26, 82, 99, 20, 58, 75, 39, 41, 61],
    [9, 98, 10, 26, 63, 2, 58, 62, 32, 23, 96, 90, 26, 11, 99, 50, 92, 91, 34, 73, 46, 25, 49, 79, 71, 97, 5, 18, 84, 70 ],
    [63, 31, 53, 3, 82, 13, 68, 2, 45, 12, 36, 85, 90, 80, 77, 84, 2, 14, 97, 8, 55, 8, 96, 58, 97, 16, 15, 97, 6, 74],
    [1, 57, 12, 29, 59, 88, 51, 98, 72, 4, 58, 56, 91, 18, 45, 38, 71, 28, 83, 92, 74, 12, 12, 84, 37, 73, 44, 44, 59, 16],
    [67, 76, 79, 37, 47, 3, 24, 1, 70, 2, 20, 2, 26, 14, 42, 57, 24, 41, 51, 39, 98, 84, 38, 72, 16, 32, 27, 16, 20, 61],
    [66, 79, 66, 91, 84, 68, 34, 82, 19, 35, 94, 35, 78, 14, 38, 13, 65, 71, 21, 66, 81, 34, 18, 67, 10, 75, 52, 76, 94, 78],
    [74, 86, 44, 48, 71, 58, 59, 76, 36, 62, 99, 72, 80, 32, 56, 94, 9, 88, 73, 9, 80, 74, 20, 18, 100, 77, 94, 37, 66, 50],
    [8, 11, 5, 56, 21, 33, 69, 19, 90, 52, 65, 12, 31, 23, 36, 26, 70, 73, 34, 7, 90, 39, 18, 24, 36, 34, 77, 87, 21, 24],
    [92, 18, 59, 18, 49, 27, 100, 28, 44, 65, 98, 46, 82, 63, 53, 56, 24, 55, 57, 15, 100, 31, 14, 84, 65, 64, 67, 33, 66, 40],
    [99, 54, 55, 79, 25, 66, 71, 7, 98, 20, 65, 64, 11, 43, 38, 73, 72, 65, 99, 51, 45, 32, 54, 43, 63, 3, 8, 86, 89, 50],
    [48, 40, 83, 92, 67, 14, 8, 29, 1, 32, 15, 18, 79, 86, 95, 50, 78, 76, 49, 50, 3, 23, 91, 18, 47, 92, 94, 31, 32, 23],
    [48, 58, 82, 65, 75, 32, 2, 50, 75, 5, 36, 98, 7, 96, 70, 23, 56, 16, 67, 21, 47, 17, 0, 24, 60, 10, 21, 35, 89, 80],
    [25, 52, 75, 43, 87, 47, 18, 32, 82, 66, 9, 53, 73, 13, 70, 22, 0, 98, 44, 0, 61, 64, 46, 76, 75, 0, 98, 12, 26, 93],
    [20, 78, 66, 64, 33, 31, 65, 68, 85, 90, 26, 24, 13, 92, 2, 29, 81, 74, 18, 70, 89, 57, 22, 90, 49, 87, 68, 43, 94, 73],
    [13, 39, 75, 42, 41, 42, 39, 99, 24, 8, 14, 30, 87, 98, 3, 100, 75, 44, 67, 18, 61, 10, 11, 18, 35, 24, 17, 87, 48, 1],
    [10, 97, 70, 2, 80, 80, 54, 61, 51, 39, 36, 56, 10, 66, 17, 51, 52, 48, 23, 12, 51, 30, 84, 88, 73, 90, 6, 46, 91, 83],
    [93, 70, 42, 78, 67, 8, 92, 40, 7, 0, 94, 44, 8, 79, 91, 5, 51, 73, 98, 42, 0, 35, 62, 7, 2, 37, 26, 86, 2, 88],
    [42, 74, 84, 45, 51, 50, 61, 48, 65, 45, 76, 74, 19, 63, 73, 57, 96, 22, 4, 80, 74, 45, 77, 99, 65, 11, 67, 55, 46, 61],
    [18, 5, 4, 21, 98, 37, 40, 93, 42, 20, 45, 99, 94, 68, 76, 69, 69, 20, 64, 75, 54, 11, 6, 16, 77, 9, 87, 42, 81, 36],
    [82, 50, 67, 96, 6, 87, 89, 80, 63, 84, 90, 56, 87, 33, 84, 55, 60, 40, 4, 10, 29, 30, 89, 38, 78, 12, 57, 37, 90, 76],
    [14, 4, 27, 73, 30, 9, 54, 82, 65, 82, 60, 58, 82, 6, 8, 56, 80, 5, 64, 3, 8, 26, 21, 78, 33, 98, 61, 96, 59, 96],
    [29, 89, 48, 38, 75, 54, 90, 1, 4, 9, 71, 49, 68, 69, 66, 41, 0, 34, 88, 48, 8, 34, 25, 91, 50, 55, 29, 66, 5, 54],
    [96, 16, 54, 20, 55, 24, 5, 57, 49, 66, 16, 82, 84, 49, 60, 53, 61, 33, 28, 11, 47, 11, 32, 24, 30, 33, 72, 21, 8, 44]
]

let A = parseInt(prompt('Digite um número inteiro: '))

readValue(V, A)

function readValue(readMat, readValue) {
    let count = 0;
    let X = [];
    for (let i = 0; i < readMat.length; i++) {
  
        for (let j = 0; j < readMat[i].length; j++) {
            if(readValue == readMat[i][j]) count++;
            if(readMat[i][j] !== readValue) X.push(readMat[i][j]);
        }
}   

    console.log(X);
    console.log("A quantidade de valores na matriz X, e diferentes do digitado, é: " + X.length);
    console.log("A quantidade de valores iguais ao digitado na matriz é: " + count);
    
}

/*
1. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
todos os elementos de V diferentes de A. Mostre os resultados.
*/