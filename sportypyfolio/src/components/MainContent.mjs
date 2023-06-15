import React from 'react';
import '../css/mainContent.css';
import moi from '../css/assets/moi.png';

class FirstPresentation extends React.Component {

  render() {
    return (
      <div className="FirstPresentation">
        <div className='imgPres'>
          <img className="Logo" src={moi} alt="logo"/>
        </div>
        <div className='PresFunc'>
          <div className='textPres'>
            <p>Étudiant</p>
            <h1>Alexandre CAROL-FORTIN</h1>
            <h4>Étudiant BUT Informatique 2e année</h4>
          </div>
          <div className='buttonFun'>
            <button className='Play'>Play</button>
            <button className='Follow'>Follow</button>
          </div>
        </div>
      </div>
    );
  }

}

class MainContent extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          date: new Date(),
          welcome : "Good morning"
      };
  }

  componentDidMount() {
    if (this.state.date.getHours() < 12) {
      this.setState({welcome: "Good morning"})
    } else if (this.state.date.getHours() < 18) {
      this.setState({welcome: "Good afternoon"})
    } else {
      this.setState({welcome: "Good evening"})
    }
  }

  render() {
      return (
          <div className="MainContent">
            <FirstPresentation />
            <h1 className='Welcome'>{this.state.welcome}</h1>
          </div>
        );
  }
}

export default MainContent;