import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { SelectedFaction } from '../atoms/app.atoms.ts';
import { CardData, CardTypes } from '../types.ts';
import './Card.scss';
import cardsData from '../data/cardsData.json';

interface CardProps {
  type: CardTypes;
  id: string;
}

function getImageUrl(name, type) {
  return new URL(`/src/assets/adepta_sororitas/combat/${name}.jpg`, import.meta.url).href;
}

function Card(props: CardProps) {
  const { type, id } = props;
  const [cardData, setCardData] = useState({} as CardData);
  const selectedFaction = useRecoilValue(SelectedFaction);
  const [img, setImg] = useState('');

  useEffect(() => {
    setCardData(cardsData[selectedFaction][type].filter((card) => card.id === id)[0]);
    setImg(getImageUrl('s1', type));
  }, [id, type, selectedFaction]);

  const cardStyles = {
    top: {
      backgroundImage: `url(${img})`,
    }
  }

  return (
    <div className={`card-body ${type}-card`}>
      <div className="card-top" style={cardStyles.top}>
        <div className="title">
          {cardData.title}
        </div>
      </div>
      <div className="card-content font-Friz-Quadrata">
        <div className="card-general">
          <div className="text">
            {cardData.general}
          </div>
        </div>
        {
          cardData.unit && (
            <div className="card-unit">
              <div className="text">
                {cardData.unit}
              </div>
            </div>
          )
        }
      </div>
      <div className="card-bottom" />
    </div>
  )
}

export default Card;
