import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function SingleCard({ id }) {
  return (
    <div className="card">
      <h5 className="card-title">{id}</h5>
    </div>
  );
}

SingleCard.propTypes = {
  id: PropTypes.string.isRequired,
};

function Launcher() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('https://isro.vercel.app/api/launchers')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data.launchers)) {
          setCards(data.launchers);
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
            id={card.id} 
          />
        ))}
      </div>
    </>
  );
}

export default Launcher;
