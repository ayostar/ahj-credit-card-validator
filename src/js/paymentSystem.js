export default class PaymentSystem {
  constructor(cardsMap) {
    this.cardsMap = cardsMap;
  }

  checkLength(allowedLength) {
    const multipleLength = typeof allowedLength === 'object';
    if (multipleLength) return allowedLength.includes(this.input.length);
    return this.input.length === allowedLength;
  }

  check(input) {
    this.input = input;
    const match = [];
    this.cardsMap.forEach((card) => {
      const re = new RegExp(card.regex);
      const allowedLength = card.ln;

      if (
        re.exec(input)
        && this.input.length > 12
        && this.checkLength(allowedLength)
      ) {
        match.push(card);
      }
    });
    return match;
  }
}
