const cardsMap = [
  {
    paymentSystem: 'МИР',
    regex: '^220([0-4])[0-9]{12}$',
    ln: 16,
    image: 'mir',
  },
  {
    paymentSystem: 'Visa',
    regex: '^4[0-9]{12}(?:[0-9]{3})(?:[0-9]{3})?$',
    ln: [13, 16, 19],
    image: 'visa',
  },
  {
    paymentSystem: 'MasterCard',
    regex:
      '^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$',
    ln: 16,
    image: 'mastercard',
  },
  {
    paymentSystem: 'American Express',
    regex: '^3[47][0-9]{13}',
    ln: 15,
    image: 'american-express',
  },
  {
    paymentSystem: 'Discover',
    regex:
      '^((62292[0-5])|(6229[0-1][0-9]{1})|(622[2-8][0-9]{2})|(6221[3-9][0-9]{1})|(62212[6-9])|(64[4-9])|(6011)|(65))\\d*',
    ln: [16, 19],
    image: 'discover',
  },
  {
    paymentSystem: 'JCB',
    regex: '^(?:2131|1800|35[0-9]{3})[0-9]{3,}$',
    ln: [16, 19],
    image: 'jcb',
  },
];

export default cardsMap;
