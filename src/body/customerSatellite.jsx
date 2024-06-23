import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function SingleCard({ country, launch_date, mass, launcher }) {
  return (
    <div className="card">
      <h5 className="card-title">{country}</h5>
      <p className="card-date">{launch_date}</p>
      <p className="card-mass">{mass}</p>
      <p className="card-launcher">{launcher}</p>
    </div>
  );
}

SingleCard.propTypes = {
  country: PropTypes.string.isRequired,
  launch_date: PropTypes.string.isRequired,
  mass: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  launcher: PropTypes.string.isRequired
};

function CustomerSatellite() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('https://isro.vercel.app/api/customer_satellites')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data.customer_satellites)) {
          setCards(data.customer_satellites);
        } else {
          throw new Error('Unexpected data format');
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <h1 className="card-listh1">Customer Satellites</h1>
      <div className="card-list container">
        {cards.map((card, index) => (
          <SingleCard 
            key={index} 
            country={card.country} 
            launch_date={card.launch_date} 
            mass={card.mass}
            launcher={card.launcher}
          />
        ))}
      </div>
    </>
  );
}

export default CustomerSatellite;
