import './App.css';
import BoxCard from './components/BoxCard';
import Card from './components/Card';
import AbstractImg from './components/AbstractImg';
import data from './components/dataCards/data';

function App() {
  return (
    <> 
    <div className="App">
      <header className="App-header">
        <AbstractImg/>
        <p>
          Learn React
        </p>
      </header>
      <div className="App-body">
        <Card props={data[0]}/>
        <BoxCard props={data}/>
      </div>
    </div>
    </>
  );
}

export default App;
