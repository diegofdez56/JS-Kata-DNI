class DNI {
  constructor(number) {
    this.number = number;
  }

  static dniLetters = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
  ];

  calculateLetter() {
    if (!this.validateInput(this.number)) {
      throw new Error("The input data is incorrect");
    }
    const remainder = this.number % 23;
    return DNI.dniLetters[remainder];
  }

  validateInput(number) {
    return typeof number === "number" && number >= 0 && number <= 99999999;
  }
}

module.exports = DNI;
