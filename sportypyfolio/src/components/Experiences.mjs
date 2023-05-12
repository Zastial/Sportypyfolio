import React from 'react';
import '../css/experiences.css';
import home from'../css/home.png';
import search from'../css/search.png';

var experiences = [
  {
    "company": "Google",
    "title": "Software Engineer",
    "location": "Mountain View, CA",
    "dates": "2017 - Present",
    "description": "I work on the Google Photos team, building the next generation of photo sharing and storage products."
  },
  {
    "company": "Facebook",
    "title": "Software Engineer",
    "location": "Menlo Park, CA",
    "dates": "2015 - 2017",
    "description": "I worked on the News Feed team, building the next generation of ranking and personalization products."
  },
  {
    "company": "Microsoft",
    "title": "Software Engineer",
    "location": "Redmond, WA",
    "dates": "2013 - 2015",
    "description": "I worked on the Bing team, building the next generation of search and personalization products."
  }];

class MainButtons extends React.Component {
    render() {
        return (
            <div className="MainButtons">
              <div className="Home">
                <img className="Logo" src={home} alt="logo"/>
                <button className="HomeBut"> Home </button> 
              </div>
              <div className="Search">
                <img className="Logo" src={search} alt="logo"/>
                <button className="SearchBut"> Search </button>
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
  }
    
  componentDidMount() {
    var jobs = []
    for (var i = 0; i < experiences.length; i++) {
      var job = <Experience
        company={experiences[i].company}
        title={experiences[i].title}
        location={experiences[i].location}
        dates={experiences[i].dates}
        description={experiences[i].description}
      />
      jobs.push(job)
    }
    this.setState({jobs: jobs})
  }
  
  render() {
        return (
            <div className="Jobs">
              <h2>My Experiences</h2>
              {this.state.jobs}
            </div>
          );
    }
}

class Experience extends React.Component {
    render() {
        return (
            <div className="Experience">
              <h3> {this.props.company} </h3>
              <h4> {this.props.title} </h4>
              <h4> {this.props.location} </h4>
              <h4> {this.props.dates} </h4>
              <p> {this.props.description} </p>
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