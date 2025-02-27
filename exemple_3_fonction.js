// let nombre = 100;

// function calcDouble(nb) {
//   let double = nb * 2;
//   console.log(" Le double du nombre " + nb + " est " + double);
// }

// calcDouble(100);

// calcDouble(40);

// function perimetreRectangle(largeur, longueur) {
//   let perimetre = 2 * largeur + 2 * longueur;
//   return perimetre;
// console.log(" Le peremetre du rectangle est de " + perimetre + " cm2 ");
// }

// perimetreRectangle(4, 5);

// perimetreRectangle(2, 4);

// perimetreRectangle(1, 2);

// perimetreRectangle(18, 20);

// console.log(perimetreRectangle(4, 5));

// console.log(perimetreRectangle(8, 5));

// console.log(perimetreRectangle(4.4, 1.67));

// console.log(perimetreRectangle(64, 45));

function calcHypotenuse(a, b) {
  let hypotenuse = Math.sqrt(a ** 2 + b ** 2);
  return hypotenuse;
}

console.log("Hypotenuse : " + calcHypotenuse(10, 11));
