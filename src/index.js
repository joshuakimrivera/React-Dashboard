import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css'
import { defaults } from 'react-chartjs-2';
import { ReactComponent as Logo } from '../src/assets/sprout.svg';
import { ReactComponent as Lettuce } from '../src/assets/lettuce.svg';
import { Line } from 'react-chartjs-2';
import Clock from '../src/clock';


defaults.global.elements.point.radius = 10;
defaults.global.elements.point.hoverRadius = 4;
defaults.global.defaultFontColor = 'white';
defaults.global.defaultFontSize = 14;
defaults.global.defaultColor = "#c6ff00";
defaults.global.elements.line.backgroundColor = "rgba(198, 255, 0, 1)";
defaults.global.legend.display = false;
defaults.global.animation = false;


const Nav = () => {
  return (
    <div className="navbar">
      <nav className="blue-grey darken-4 z-depth-0">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo hide-on-med-and-down left">&nbsp;<Logo style={{ width: '60px', paddingTop: '10px' }} /><span className=" hide-on-med-and-down right"
            style={{ marginBottom: '30px', paddingTop: '10px' }}>
            &nbsp;&nbsp;ACEPT Dashboard</span>
          </a>
          <a href="#" className="brand-logo hide-on-large-only center">&nbsp;<Logo style={{ width: '60px', paddingTop: '10px' }} /><span className="right"
            style={{ marginBottom: '30px', paddingTop: '10px' }}>
            &nbsp;&nbsp;ACEPT Dashboard</span>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="https://gitlab.com/re-thesis"><i className="material-icons" title="Contribute">add_circle_outline</i></a></li>
            <li><a href="https://gitlab.com/re-thesis"><i className="material-icons" title="Learn More">lightbulb_outline</i></a></li>
            <li><a href="https://gitlab.com/re-thesis"><i className="material-icons" title="Need Help?">help_outline</i></a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

function Plants(props) {
  return (
    <div className="col s12 m6 l3">
      <div className="card hoverable blue-grey rounded-card">
        <div className="card-content white-text">
          <span className="card-title">{props.name}<a href={props.wiki} target="blank"><Lettuce className="brand-logo right" style={{ width: '60px', paddingBottom: '10px'}} /></a></span>
          <div>
            
            <h6>Plant Name: <b>{props.plantName}</b></h6>
            <h6>Scientific Name: <b>{props.scientificName}</b></h6>
          </div>
          <span>
            <h6>Status: <b>{props.status}</b></h6>
          </span>
        </div>
      </div>
    </div>
  );
}


const SideNav = () => {
  return (
    <div className="col s4 m4 l2 hide-on-small-only">
      <div className="card hoverable light-blue darken-1 rounded-card">
        <div className="card-content white-text">
          <span className="card-title">ACEPT Dashboard</span>
          <hr style={{ color: 'grey' }} />
          <p><a href="#cpuChart" className="white-text">
            <h6>Enviroment Monitoring</h6>
          </a></p>
          <p><a href="#" className="white-text">
            <h6>URL Stats</h6>
          </a></p>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
      </div>
    </div>
  );
}

const PlantsMonitoring = () => {
  return (
    <div>
      <Plants name="Plant One" plantName="Lettuce" scientificName="Lactuca sativa"  wiki="https://en.wikipedia.org/wiki/Lettuce"  status="OK"/>
      <Plants name="Plant Two" plantName="Lettuce" scientificName="Lactuca sativa"  wiki="https://en.wikipedia.org/wiki/Lettuce"  status="OK"  />
      <Plants name="Plant Three" plantName="Lettuce" scientificName="Lactuca sativa" wiki="https://en.wikipedia.org/wiki/Lettuce"  status="OK"  />
      <Plants name="Plant Four" plantName="Lettuce" scientificName="Lactuca sativa"  wiki="https://en.wikipedia.org/wiki/Lettuce"  status="OK"/>
    </div>
  );
}

const Logs = () => {
  return (
    <div className="col s12 m12 l12">
      <div className="card blue-grey hoverable rounded-card">
        <div className="card-content white-text">
          <div className="row">
            <div className="col s12 m4 l4">
              <span className="card-title">Water PH Levels</span>
              <Clock/>
            </div>
            <HardwareGraphFull className="col s12 m12 l12" id="cpuChart" />

          </div>
        </div>
      </div>
    </div>
  );
}

function HardwareGraph(props) {
  return (
    <div className="col s12 m12 l6 row">
      <h6 className="center" style={{paddingBottom: '5px'}}>{props.name}</h6>
      <div className="col s12">
        <Line
          data={data}
          height={200}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    </div>
  );
}

function HardwareGraphFull(props) {
  return (
    <div className="col s12 m12 l12 row">
      <div className="col s12">
        <Line
          data={data}
          height={150}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    </div>
  );
}

function data() {
  return {
    labels: ['10:30', '10:40', '10:50', '11:00', '11:10', '11:20'],
    datasets: [{
      label: 'none',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  };
}

const HardwareMonitoring = () => {
  return (
    <div className="col s12 m12 l12">
      <div className="card blue-grey hoverable rounded-card">
        <div className="card-content white-text">
          <span className="card-title"><h5>Environment:<span className="right"><Clock/></span></h5></span>
          <div className="row">
            <HardwareGraph name="Temperature" id="cpuChart" />
            <HardwareGraph name="Humidity" id="ramChart" />
          </div>
        </div>
      </div>
    </div>
  );
}

const Monitoring = () => {
  return (
    <div className="col s12 m12 l12 row">
      <PlantsMonitoring />
      <HardwareMonitoring />
      <Logs />
    </div>
  );
}

const App = () => {
  return (
    <div className="row">
      <Nav /><br />
      <Monitoring />
    </div>);
}

ReactDOM.render(<App />, document.querySelector('#root'));