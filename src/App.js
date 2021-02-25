// import logo from './logo.svg'; //For logo
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Users></Users>
        <MovieCounter></MovieCounter>
        <Area name={peoples[0]}></Area>
      </header>
    </div>
  );
}

//API
function Users(){
  const usersStyle = {
    border: '3px solid green',
    width: '500px'
  }
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setUsers(data);
    })
  }, [])
  return (
    <div>
      <h3 style={usersStyle}>Users Data: </h3>
      <ul>
        {
         users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
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
