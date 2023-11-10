import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div>
      {/* Navigation Menu */}
      <nav>
        <h1>ONLINE LIBRARY MANAGEMENT SYSTEM</h1>
        <ul className={`navigation ${showMenu ? 'show' : ''}`}>
          <li><a className="nav-link" href="#home" onClick={closeMenu} style={{ color: 'white', fontSize: '30px'}}>Home</a></li>
          <li><a className="nav-link" href="#about" onClick={closeMenu} style={{ color: 'white', fontSize: '30px'}}>About</a></li>
          <li><a className="nav-link" href="#genres" onClick={closeMenu} style={{ color: 'white', fontSize: '30px'}}>Genres</a></li>
          <li><a className="nav-link" href="#featured" onClick={closeMenu} style={{ color: 'white', fontSize: '30px'}}>Featured</a></li>
          <li><a className="nav-link" href="#support" onClick={closeMenu} style={{ color: 'white', fontSize: '30px'}}>Support</a></li>
          <section className="auth-options">
            <button className="auth-button">Login</button>
            <button className="auth-button">Sign-Up</button>
          </section>
        </ul>
        <button className="burger-menu" id="burger-menu" onClick={toggleMenu}>&#9776;</button>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-section-slider">
          <h2>Unlock the Door to Knowledge</h2>
        </div>
      </section>

      <br/><br/>

      {/* About Section */}
      <section className="about" id="about">
        <h2 style={{ fontWeight: 'bold', color: 'black', fontSize: '24px' }}>About</h2>
        <br/>
        <br/>
        <div style={{ backgroundColor: 'lightblue', padding: '10px', borderRadius: '10px', textAlign: 'center' }}>
          <h2 style={{ fontWeight: 'bold', color: 'black', fontSize: '24px' }}>Welcome to the Book World !!!</h2>
        </div>
        <br/><br/><br/>
        <p>
          <div style={{ fontSize: '20px', color: 'black', textAlign: 'center', backgroundColor: 'pink', padding: '10px', borderRadius: '10px' }}>Dive into our Book World,<br/> where every click opens a world of books at your fingertips.<br/> Organize, explore, and expand your literary horizons <br/> with seamless accessibility and a universe of words <br/> waiting just for you!</div>
        </p>
      </section>
      <br/><br/>
      <hr style={{ border: 'none', height: '10px', backgroundColor: 'blue', margin: '20px 0' }}/>

      {/* Genre Section */}
      <section className="genres" id="genres">
        <h2 className="services-header" style={{ fontWeight: 'bold', color: 'black' }}>Genre Corner</h2>
        <div className="services-wraper">
          {/* Circle 1 */}
          <div className="genre-circle" style={{ backgroundImage: 'url("./images/Crime.jpg")' }}></div>
          {/* Circle 2 */}
          <div className="genre-circle" style={{ backgroundImage: 'url("./images/Horror.jpg")' }}></div>
          {/* Circle 3 */}
          <div className="genre-circle" style={{ backgroundImage: 'url("./images/Thriller.jpg")' }}></div>
          {/* Circle 4 */}
          <div className="genre-circle" style={{ backgroundImage: 'url("./images/Classic.jpg")' }}></div>
        </div>
        <div className="services-wraper">
          {/* Circle 5 */}
          <div className="genre-circle" style={{ backgroundImage: 'url("./images/Romance.jpg")' }}></div>
          {/* Circle 6 */}
          <div className="genre-circle" style={{ backgroundImage: 'url("./images/Sci-Fi.jpg")' }}></div>
          {/* Circle 7 */}
          <div className="genre-circle" style={{ backgroundImage: 'url("./images/Fantasy.jpg")' }}></div>
          {/* Circle 8 */}
          <div className="genre-circle" style={{ backgroundImage: 'url("./images/Fairytale.jpg")' }}></div>
        </div>
      </section>
      
      <hr style={{ border: 'none', height: '10px', backgroundColor: 'blue', margin: '20px 0' }}/>

      {/* Featured Section */}
      <section className="featured" id="featured">
        <h2 className="services-header" style={{ fontWeight: 'bold', color: 'black' }}>Featured Books</h2>
        <div className="book-container">
          <div className="book">
            <img src="./images/One-Indian-Girl.jpg" alt="Book 1"/>
            <p><b>One Indian Girl</b></p>
          </div>
          <div className="book">
            <img src="./images/The-Jungle-Book.jpg" alt="Book 2"/>
            <p><b>The Jungle Book</b></p>
          </div>
          <div className="book">
            <img src="./images/Gulliver's-Travels.jpg" alt="Book 3"/>
            <p><b>Gulliver's Travels</b></p>
          </div>
          <div className="book">
            <img src="./images/Poirot-Investigates.jpg" alt="Book 4"/>
            <p><b>Poirot Investigates</b></p>
          </div>
          <div className="book">
            <img src="./images/Cinderella.jpg" alt="Book 5"/>
            <p><b>Cinderella</b></p>
          </div>
          <div className="book">
            <img src="./images/Harry-Potter-and-The-Chamber-of-Secrets.jpg" alt="Book 6"/>
            <p><b>Harry Potter and the Chamber of Secrets</b></p>
          </div>
          <div className="book">
            <img src="./images/Sleeping-Beauty.jpg" alt="Book 7"/>
            <p><b>Sleeping Beauty</b></p>
          </div>
          <div className="book">
            <img src="./images/Half-Girlfriend.jpg" alt="Book 8"/>
            <p><b>Half Girlfriend</b></p>
          </div>
          <div className="book">
            <img src="./images/Vampire-Diaries.jpg" alt="Book 9"/>
            <p><b>Vampire Diaries</b></p>
          </div>
          <div className="book">
            <img src="./images/Black-Forest.jpg" alt="Book 10"/>
            <p><b>Black Forest</b></p>
          </div>
          <div className="book">
            <img src="./images/The-Witch.jpg" alt="Book 11"/>
            <p><b>The Witch</b></p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        {<section className="support" id="support">
          <h2 className="services-header" style={{ color: 'white' }}>Support</h2>
          <div className="services-wraper" style={{ color: 'white' }}>
            <p>Welcome to our Online Library Management System! We are here to assist you with any questions, concerns, or technical issues you may encounter. Our dedicated support team is ready to provide the help you need.</p>
            <h3>Contact Information :</h3>
            <ul>
              <li>Email: support@librarysystem.com</li>
              <li>Phone: +1 (123) 456-7890</li>
            </ul>
          </div>
        </section>}
      </footer>
    </div>
  );
};

export default HomePage;