import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function SingleCard({ name }) {
  return (
    <div className="card">
      <h5 className="card-title">{name}</h5>
    </div>
  );
}

SingleCard.propTypes = {
  name: PropTypes.string.isRequired,
};

function SpaceCraft() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('https://isro.vercel.app/api/spacecrafts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data.spacecrafts)) {
          setCards(data.spacecrafts);
        } else {
          throw new Error('Unexpected data format');
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <h1 className="card-listh1">Launchers</h1>
      <div className="card-list container">
        {cards.map((card, index) => (
          <SingleCard 
            key={index} 
            name={card.name} 
          />
        ))}
      </div>
    </>
  );
}

export default SpaceCraft;
