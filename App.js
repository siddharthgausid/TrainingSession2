import logo from './logo.svg';
import './App.css';

function App() {
  const currentDate = new Date().toLocaleDateString();
  return (
    <div className="App">
      <h1>Name: Siddharth Srivastava</h1>
      <h2>Todays Date: {currentDate}</h2>
      <h3>College Name: BVDUCOE Pune <br></br>
        Mathematical Operation: 4 * 7 ={4*7}</h3>
    </div>
  );
}

export default App;
