import React from 'react';
import Experiences from './Experiences.mjs';
import MainContent from './MainContent.mjs';
import Contacts from './Contacts.mjs';
import '../css/home.css';

class Home extends React.Component {
    render() {
        return (
            <div className="App">
              <Experiences />
              <MainContent />
              <Contacts />
            </div>
          );
    }
}

export default Home;