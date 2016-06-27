import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

//Youtube Browser API Key
const API_KEY = 'AIzaSyCgi0XpvAVnPDyz_0ENjsSo76g2a9CI74Q';

// First Component
const App = () => {
  return <div>
    <SearchBar />
  </div>;
}

//Take this Component's generated HTML and put it on the page (into the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
