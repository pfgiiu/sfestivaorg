// geradorCodigo.js

function gerarCodigo(tamanho) {
    const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let codigo = '';

    for (let i = 0; i < tamanho; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        codigo += caracteres[indiceAleatorio];
    }

    return codigo;
}

const codigoGerado = gerarCodigo(5);
console.log(`Código gerado: ${codigoGerado}`);
