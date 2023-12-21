
import React, { useState } from 'react';
import api from '../moveApi/MovieApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate()
  const [query, setQuery] = useState('');

  const handleBook = () => {
    navigate('/booktickets')
  }

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  const handleLogout = () => {
    navigate('/')
  }

  const filteredMovies = api.filter((movie) =>
    movie.Title.toLowerCase().includes(query.toLowerCase())
  );
  return (

    <div>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <h3>Movie Page</h3>
        <input type='search' class="ms-2" placeholder="Search" aria-label="Search" value={query}
          onChange={handleInputChange} />
        <button type="button" class="btn btn-danger ms-5" onClick={handleLogout}>Logout</button>
      </nav>

      <div className='row '>
        <div className="card mx-3" style={{ width: '18rem' }}>
          <img
            src={api[0].Images}
            className="card-img-top"
            alt="Movie Poster"
          />
          <div className="card-body">
            <h5 className="card-title">{api[0].Title}</h5>
            <p className="card-text">
              {api[0].Plot}
            </p>
            <button className="btn btn-primary" onClick={handleBook}>BookTickets</button>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img
            src={api[1].Images}
            className="card-img-top"
            alt="Movie Poster"
          />
          <div className="card-body">
            <h5 className="card-title">{api[1].Title}</h5>
            <p className="card-text">
              {api[1].Plot}
            </p>

            <button className="btn btn-primary" onClick={handleBook}>BookTickets</button>
          </div>
        </div>
          <div className="card mx-3" style={{ width: '21rem' }}>
            <img
              src={api[2].Images}
              className="card-img-top"
              alt="Movie Poster"
            />
            <div className="card-body">
              <h5 className="card-title">{api[2].Title}</h5>
              <p className="card-text">
                {api[2].Plot}
              </p>
              <button className="btn btn-primary" onClick={handleBook}>BookTickets</button>
            </div>
          </div>
          <div className="card" style={{ width: '18rem' }}>
            <img
              src={api[3].Images}
              className="card-img-top"
              alt="Movie Poster"
            />
            <div className="card-body">
              <h5 className="card-title">{api[3].Title}</h5>
              <p className="card-text">
                {api[3].Plot}
              </p>
              <button className="btn btn-primary" onClick={handleBook}>BookTickets</button>
            </div>
          </div>
       
      </div>



      {filteredMovies.map((movie) => (
        <li>{movie.Title}</li>
      ))}

    </div>

  );
};

export default Home;
