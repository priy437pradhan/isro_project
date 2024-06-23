import './App.css';
function footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section location">
          <h4>Our Location</h4>
        </div>
        <div className="footer-section social-media">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
        <div className="footer-section copy">
          <p>&copy; 2024 isro-india. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default footer;