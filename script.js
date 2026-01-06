const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const piResult = document.getElementById('piResult');
const digitsInput = document.getElementById('digits');

// Valor de Pi con muchos dígitos
const piString = "3,141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648566923460348610454326648213393607260249141273724587006606315588174881520920962829254091715364367892590360011330530548820466521384146951941511609433057270365759591953092186117381932611793105118548074462379962749567351885752724891227938183011949129833673362440656643086021394946395224737190702179860943702770539217176293176752384674818467669405132000568127145263560827785771342757789609173637178721468440901224953430146549585371050792279689258923542019956112129021960864034418159813629774771309960518707211349999998372978049951059731732816096318595024459455346908302642522308253344685035261931";

// Colores para cada dígito según tu solicitud
const digitColors = {
  "0": "white",          // el cero
  "1": "yellow",         // 1
  "2": "blue",           // 2
  "3": "red",            // 3
  "4": "gold",           // 4 (amarillo suave)
  "5": "green",          // 5
  "6": "purple",         // 6
  "7": "#8B4513",        // 7 (café)
  "8": "orange",         // 8
  "9": "black"           // 9
};

startBtn.addEventListener('click', () => {
  const digits = parseInt(digitsInput.value);

  if (isNaN(digits) || digits < 1) {
    alert("Ingresa un número válido mayor a 0.");
    return;
  }

  // Limitar a los dígitos disponibles en piString
  const maxDigits = piString.length - 2; // descontando "3."
  const count = digits > maxDigits ? maxDigits : digits;

  // Construir el pi coloreado
  let coloredPi = "<span style='color:" + digitColors["3"] + "'>3</span>.";
  for (let i = 2; i < 2 + count; i++) {
    const digit = piString[i];
    coloredPi += `<span style="color:${digitColors[digit]}">${digit}</span>`;
  }

  piResult.innerHTML = "π = " + coloredPi;
});

resetBtn.addEventListener('click', () => {
  piResult.textContent = "π = ";
  digitsInput.value = 10;
});

