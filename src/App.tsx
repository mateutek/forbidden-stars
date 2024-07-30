import './App.scss';
import CardsContainer from './cards/CardsContainer.tsx';
import CardsFactionSelector from './cards/CardsFactionSelector.tsx';

function App() {

  return (
    <div className="container w-full">
      <CardsFactionSelector />
      <CardsContainer />
      <div className="test-fonts text-white hidden">
        <div className="font-headliner">
          <p className="text-7xl">Headliner</p>
          <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          <p className="text-base">abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=</p>
        </div>
        <div className="font-Forbidden-Stars mt-3">
          <p className="text-7xl">ForbiddenStars</p>
          <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          <p className="text-base">abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=</p>
        </div>
        <div className="font-Friz-Quadrata mt-3">
          <p className="text-7xl">Friz</p>
          <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          <p className="text-base">Ö</p>
        </div>
      </div>
    </div>
  );
}

export default App;
