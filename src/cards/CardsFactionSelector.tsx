import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { cardTypes, SelectedCardType, SelectedFaction } from '../atoms/app.atoms.ts';
import factionsData from '../data/factions.json';
import { CardTypes } from '../types.ts';

function CardsFactionSelector() {
  const [selectedFaction, setSelectedFaction] = useRecoilState(SelectedFaction);
  const [selectedCardType, setSelectedCardType] = useRecoilState(SelectedCardType);
  const [factionsList, setFactionsList] = useState([]);

  useEffect(() => {
    setFactionsList(factionsData.factions);
  }, []);

  const handleFactionClick = (factionId) => {
    setSelectedFaction(factionId);
    setSelectedCardType(CardTypes.COMBAT);
  }


  return (
      <div className="grid grid-flow-row gap-4">
        <div className="grid grid-flow-col gap-4 auto-cols-max">
          {factionsList?.map((faction) => {
            return (
                <button
                    key={`faction-button-${faction.id}`}
                    onClick={() => handleFactionClick(faction.id)}
                    className={`${selectedFaction === faction.id ? 'bg-blue-700' : 'bg-blue-500'} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded font-Headliner-No-45`}
                >
                  {faction.name}
                </button>
            );
          })}
        </div>
        <div className="grid grid-flow-col gap-4 auto-cols-max">
          {cardTypes?.map((cardType) => {
            return (
                <button
                    key={`card-type-${cardType}`}
                    onClick={() => setSelectedCardType(cardType)}
                    className={`${selectedCardType === cardType ? 'bg-blue-700' : 'bg-blue-500'} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
                >
                  {cardType}
                </button>
            );
          })}
        </div>
      </div>
  );
}

export default CardsFactionSelector;
