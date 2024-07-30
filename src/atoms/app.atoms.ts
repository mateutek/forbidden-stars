import { atom } from 'recoil';
import factionsData from '../data/factions.json';
import { CardTypes } from '../types';

export const cardTypes: CardTypes[] = [CardTypes.COMBAT, CardTypes.ORDERS, CardTypes.EVENTS];

export const SelectedFaction = atom({
  key: 'selectedFaction',
  default: factionsData.factions[0].id,

});

export const SelectedCardType = atom<CardTypes>({
  key: 'SelectedCardType',
  default: CardTypes.COMBAT,
});
