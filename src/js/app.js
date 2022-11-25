import CardUi from './card.ui';
import cardsMap from './utils';
import CardController from './card.controller';

const cardUi = new CardUi(cardsMap);
cardUi.bindToDOM(document.querySelector('.card-container'));

const cardCtrl = new CardController(cardUi);
cardCtrl.init();
