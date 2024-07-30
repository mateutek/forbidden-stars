import { CardTypes } from '../types.ts';
import Card from './Card.tsx';

function CardsContainer() {
  return(
    <div className="grid gap-y-8 gap-x-4 lg:grid-cols-3 md:grid-cols-2 sm: grid-cols-1 mt-3">
      <Card type={CardTypes.COMBAT} id="DRIVEN_ONWARDS" />
      <Card type={CardTypes.EVENTS} id="UNDIVIDED_FAITH" />
      <Card type={CardTypes.ORDERS} id="FAITHFUL_ADVANCE" />
    </div>
  )

}

export default CardsContainer;
