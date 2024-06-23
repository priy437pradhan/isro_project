import { useEffect, useState } from 'react';
import SingleCard from './SingleCard';

function Center() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('https://isro.vercel.app/api/centres')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data.centres)) {
          setCards(data.centres);
        } else {
          throw new Error('Unexpected data format');
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <h1 className="card-listh1">Center</h1>
      <div className="card-list">
        {cards.map((card, index) => (
          <SingleCard 
            key={index} 
            name={card.name} 
            Place={card.Place} 
            State={card.State}
          />
        ))}
      </div>
    </>
  );
}

export default Center;
