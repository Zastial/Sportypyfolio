import React from 'react';
import '../css/experiences.css';
import home from '../css/assets/home.png';
import search from '../css/assets/search.png';
import moi from '../css/assets/moi.png';

var experiences = [
  {
    "company": "Google",
    "title": "Software Engineer",
    "location": "Mountain View, CA",
    "dates": "2017 - Present",
    "description": "I work on the Google Photos team, building the next generation of photo sharing and storage products.",
    "src": "../css/perso.png"
  },
  {
    "company": "Facebook",
    "title": "Software Engineer",
    "location": "Menlo Park, CA",
    "dates": "2015 - 2017",
    "description": "I worked on the News Feed team, building the next generation of ranking and personalization products.",
    "src": "../css/moi.png"
  },
  {
    "company": "Microsoft",
    "title": "Software Engineer",
    "location": "Redmond, WA",
    "dates": "2013 - 2015",
    "description": "I worked on the Bing team, building the next generation of search and personalization products.",
    "src": "../css/google.png"
  },
  {
    "company": "Microsoft",
    "title": "Software Engineer",
    "location": "Redmond, WA",
    "dates": "2013 - 2015",
    "description": "I worked on the Bing team, building the next generation of search and personalization products.",
    "src": "../css/google.png"
  },
  {
    "company": "Microsoft",
    "title": "Software Engineer",
    "location": "Redmond, WA",
    "dates": "2013 - 2015",
    "description": "I worked on the Bing team, building the next generation of search and personalization products.",
    "src": "../css/google.png"
  },
  {
    "company": "Microsoft",
    "title": "Software Engineer",
    "location": "Redmond, WA",
    "dates": "2013 - 2015",
    "description": "I worked on the Bing team, building the next generation of search and personalization products.",
    "src": "../css/google.png"
  },
  {
    "company": "Microsoft",
    "title": "Software Engineer",
    "location": "Redmond, WA",
    "dates": "2013 - 2015",
    "description": "I worked on the Bing team, building the next generation of search and personalization products.",
    "src": "../css/google.png"
  },
  {
    "company": "Microsoft",
    "title": "Software Engineer",
    "location": "Redmond, WA",
    "dates": "2013 - 2015",
    "description": "I worked on the Bing team, building the next generation of search and personalization products.",
    "src": "../css/google.png"
  }];

class MainButtons extends React.Component {
    render() {
        return (
            <div className="MainButtons" key={this.props.key}>
              <div className="main-content">
                <div className="logo">
                  <img className="Logo" src={home} alt="logo"/>
                  <button className="HomeBut"> Home </button> 
                </div>
                <div className="search">
                  <img className="Logo" src={search} alt="logo"/>
                  <button className="SearchBut"> Search </button>
                </div>
              </div>
            </div>
          );
    }
}

class Jobs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };
    this.ExperienceModal = this.ExperienceModal.bind(this);
  }
    
  componentDidMount() {
    var jobs = []
    for (var i = 0; i < experiences.length; i++) {
      var job = <Experience
        key = {i}
        company={experiences[i].company}
        title={experiences[i].title}
        location={experiences[i].location}
        src={experiences[i].src}
      />
      jobs.push(job)
    }
    this.setState({jobs: jobs})
  }

  ExperienceModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  }
  
  render() {
        return (
            <div className="Jobs">
              <div className="exp-elm">
                <h2>My Experiences</h2>
                <p onClick={this.ExperienceModal}>+</p>
                <p>---{'>'}</p>
              </div>
              {this.state.jobs}
            </div>
          );
    }
}

class Experience extends React.Component {
    render() {
        return (
            <div className="Experience">
              <a href="https://www.google.com">
                <div className="image">
                  <img className="Logo" src={moi} alt="logo"/>
                </div>
                <div className="infos">
                  <h3> {this.props.company} </h3>
                  <p> {this.props.title} </p>
                </div>
              </a>
            </div>
          );
    }
}

class Experiences extends React.Component {
    render() {
        return (
            <div className="Experiences">
              <MainButtons />
              <Jobs />
            </div>
          );
    }
}

export default Experiences;