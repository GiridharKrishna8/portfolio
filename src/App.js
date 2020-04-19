import React , { Component} from 'react';
import './css/App.css';
import './css/bootstrap.min.css';
import './css/layout.css';
import Hero from './herosection/Hero';
import About from './aboutsection/About';
import Skills from './skillssection/Skills';
import Project from './projectsection/Project';
 class App extends React.Component{

  render(){
  return (
    <React.Fragment>

<div className="App">
      <header  className="App-header">

        <Hero title="I &hearts; To <Code/>" subtitle="Giridhar Krishna"/> 
        <About id="about"/>
        <Skills />
        <Project/>
      </header>

    </div>
    </React.Fragment>

  );
   
}
}
export default App;
