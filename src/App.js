// import logo from './logo.svg'; //For logo
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome</h1>
        <Area name={peoples[0]}></Area>
        <Area name={peoples[1]}></Area>
        <Area name={peoples[2]}></Area>
        <Area name={peoples[3]}></Area>
        <Area name={peoples[4]}></Area>
      </header>
    </div>
  );
}
// const persons = {name: 'Shahnewaz', age: 20};

// const {name, age} = persons;
//Array Destructuring
const peoples = ['Muhammad', 'Shahnewaz', 'Newaz', 'Khondokar', 'Shahriar'];

// const singlePeople = peoples.map(people => people);

function Area(props){
  const areaStyle = {
    backgroundColor: 'lightsalmon',
    boxShadow: '5px 5px 10px gray',
    width: '500px',
    margin: '10px'
  }
  return (
    <div style = {areaStyle}>
      <h1>Name: {props.name}</h1>
      <h4>Age: </h4>
    </div>
  )
}

export default App;
