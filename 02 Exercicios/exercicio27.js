let M =  [[13, 25, 18, 51, 43, 46],
          [14, 88, 23, 10, 12, 32],
          [13, 22, 11, 94, 38, 90],
          [13, 25, 20, 15, 30, 74],
          [15, 45, 20, 25, 12, 63],
          [25, 25, 10, 15, 20, 91]]

let A = 33;


function multVect(mat, mult){
    
    let V = new Array(36).fill(0);

    for (let i = 0; i < mat.length; i++) {
     
        for (let j = 0; j < mat[i].length; j++) {
            mat[i][j] = mat[i][j] * mult; 
            
        }
}
    V = mat;
    console.log(V);
}

multVect(M, A);


/*
Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
um vetor V(36). Escrever o vetor V no final.
*/