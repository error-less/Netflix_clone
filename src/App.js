import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Nav from './Nav';
import Banner from './Banner';

function App() {

  return (
    <div className="App">
    <Nav/>
    <Banner/>
     <Row 
     title="NETFLIX ORIGINALS" 
     fetchUrl={requests.fetchNetflixOriginals}
     isLargeRows={true}
     />
     <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
     <Row title="Drama Movies" fetchUrl={requests.fetchDramaMovies}/>
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title="Documentries" fetchUrl={requests.fetchDocumentaries}/>
     {/* <Row title="Popular Movies" fetchUrl={requests.fetchPopularMovies}/> */}
    </div>
  );
}

export default App;
