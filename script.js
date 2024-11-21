// Validasi apakah string hanya terdiri dari 0 dan 1
function isBinary(str) {
  return /^[01]+$/.test(str);
}

// Proses dua inputan biner
function processBinary() {
  const binary1 = document.getElementById("binary1").value;
  const binary2 = document.getElementById("binary2").value;
  const output = document.getElementById("output");

  if (!isBinary(binary1) || !isBinary(binary2)) {
    output.textContent =
      "Please enter valid binary prefixes (only 0 and 1 allowed).";
    return;
  }

  const combinedBinary = binary1 + binary2;
  const combinedInteger = parseInt(combinedBinary, 2);

  output.innerHTML = `
        <p>Binary 1: ${binary1}</p>
        <p>Binary 2: ${binary2}</p>
        <p>Combined Binary: ${combinedBinary}</p>
        <p>Combined Integer: ${combinedInteger}</p>
    `;
}

// Konversi biner ke integer
function convertBinaryToInt() {
  const binary = document.getElementById("binaryToIntInput").value;
  const output = document.getElementById("output");

  if (!isBinary(binary)) {
    output.textContent = "Please enter a valid binary string.";
    return;
  }

  const integer = parseInt(binary, 2);
  output.textContent = `Binary: ${binary} → Integer: ${integer}`;
}

// Konversi integer ke biner
function convertIntToBinary() {
  const integer = document.getElementById("intToBinaryInput").value;
  const output = document.getElementById("output");

  if (!integer || isNaN(integer)) {
    output.textContent = "Please enter a valid integer.";
    return;
  }

  const binary = parseInt(integer).toString(2);
  output.textContent = `Integer: ${integer} → Binary: ${binary}`;
}
