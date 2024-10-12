const numerosRomanos = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const numeroRomano = "LVIII"; 

let resultado = 0;

for (let i = 0; i < numeroRomano.length; i++) {
  const atual = numerosRomanos[numeroRomano[i]];
  const proximo =
    i + 1 < numeroRomano.length ? numerosRomanos[numeroRomano[i + 1]] : 0;

    if (proximo > atual) {
        resultado -= atual
    } else {
        resultado += atual
    }

}

console.log(resultado);
