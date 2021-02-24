// import logo from './logo.svg'; //For logo
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MovieCounter></MovieCounter>
        <Area name={peoples[0]}></Area>
      </header>
    </div>
  );
}
// const persons = {name: 'Shahnewaz', age: 20};

// const {name, age} = persons;
//Array Destructuring
const peoples = ['Muhammad', 'Shahnewaz', 'Newaz', 'Khondokar', 'Shahriar'];

// const singlePeople = peoples.map(people => people);

function MovieCounter(){
  const movieStyle = {
    border: '2px solid salmon',
    width: '600px'
  }
  const [count, setCount] = useState(5);

  return (
    <div style={movieStyle}>
      <button onClick={() => {setCount(count + 1)}}>Add Movie</button>
      <button onClick={() => {setCount(count - 1)}}>Remove Movie</button>
      <h3>Number of movies: {count}</h3>
    </div>
  )
}

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
