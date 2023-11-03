import logo from './logo.svg';
import './App.css';

const number = 5555;
const singer = {name: 'Atif Islam', job:', Singer'}
const singer2 = {name: 'Eva Rahman', job:', Singer'}
const singer3 = {name: 'Habib Wahid', job:', Singer'}
const singerStyle= {
  color: 'blue',
  backgroundColor: 'yellow'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        <h1>Hi, Nabiha. How are you?</h1>
        </div>
        <div className="music">
          <p>Number: {2222 + number}</p>
          <div className="singer">
          <p>Singer: {singer.name} {singer.job}</p></div>
          <p style={singerStyle}>Singer2: {singer2.name} {singer2.job}</p>
          <p style={{ color: 'red',
  backgroundColor: 'white'}}>Singer3: {singer3.name} {singer3.job}</p>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
