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
  {/* Array data loaded process in dynamic */}
  const Person =['Tamim Iqbal', 'Shaheen Afridi'];
  return (
    <div className="App">
      {
        Person.map(person => person)
      }
      <Person name={Person[0]}></Person>
      <Person name={Person[1]}></Person>
      <Person></Person>
      <h1>Cricketer Information</h1>
      <Friend movie="Om Shnati Om"></Friend>
      <Friend movie="Shingam"></Friend>
      <Friend movie="Mouse 1"></Friend>
     {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
     */}
        {/*
        <div>
        <h1>Hi, Nabiha. How are you?</h1>
        </div>
        */}
       {/* <div className="music">
          <p>Number: {2222 + number}</p>
          <div className="singer">
          <p>Singer: {singer.name} {singer.job}</p></div>
          <p style={singerStyle}>Singer2: {singer2.name} {singer2.job}</p>
          <p style={{ color: 'red',
  backgroundColor: 'white'}}>Singer3: {singer3.name} {singer3.job}</p>
  </div> */}
        {/*
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
        
      </header>*/}
    </div>
  );
}

function Person(props) {
  console.log(props);
  {/* Ei simple r theke Return korar process */}
  return (
    <div className='person'>
    <h1>Tamim Iqbal</h1>
    <h4>Bangladesh Cricket</h4>
    <p className='profile'>When the world talks about the sub-continental openers, they talk about the aggression factor. Virender Sehwag, Sanath Jayasuriya and Sachin Tendulkar have ruthlessly destroyed the bowling over the years. However, an opener from Bangladesh soon joined that list and made the world take notice.

He scored his first century against Ireland, but it was his knock against Zimbabwe at Harare in 2009 which got him top billing. Charles Coventry remained unbeaten when he equalled Saeed Anwar's highest ODI score of 194. However, Tamim launched a brutal counterattack to smash the highest score by a Bangladeshi batsman. His 154 included seven fours and six sixes as Bangladesh went on to win the match.</p>
    <h1>Shaheen Afridi</h1>
    <h4>Pakistan Cricket</h4>
    <p className='profile'>There is no denying the fact that Shaheen Afridi's potential is scaringly infinite. Blessed with a tall gangling frame and the ability to bowl really fast, Afridi also like his famous namesake can strike the ball really hard with the bat in hand. Add to all this his variety as a left-arm bowler and you know why there is immense excitement around this man in Pakistan. Born in a family of seven, Shaheen is the youngest of the lot and arguably, the most skilled as well. Despite being extremely passionate about cricket from his childhood, he was mostly into tennis-ball cricket before being guided into the real deal by his eldest brother Riaz, a one-Test wonder for Pakistan, who has also been Shaheen's inspiration and mentor.</p>
  </div>
  )
}

function Friend(props){
  console.log(props);
  return(
    <div className='container'>
      <h3>Full Name: {props.movie}</h3>
      <p>BORN: Mar 20, 1989 (34 years)</p>
      <p>BATTING STYLE: Left hand Bat</p>
      <p>PLAYING ROLE: Opening Batter</p>
      <h3>Full Name: Shaheen Afridi</h3>
      <p>BORN: Apr 06, 2000 (23 years)</p>
      <p>BATTING STYLE: Left hand Bat</p>
      <p>PLAYING ROLE: Opening Batter</p>
    </div>
  )
}

export default App;
